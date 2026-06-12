<template>
  <div class="three-bg">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const canvas = ref(null);

// =========================
// GLOBALS
// =========================
let scene, camera, renderer, composer;
let networkParticles, starField, linesMesh, gridGroup;

let netVel;

let mouse = new THREE.Vector2(-100, -100);

const ARGS = {
  networkCount: 240,
  starCount: 1200,
  linkDist: 1.7
};

let resetTimeout;
let animationId;

// =========================
// TEXTURE
// =========================
const createCircleTexture = () => {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;

  const ctx = c.getContext('2d');

  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(80,200,255,1)');
  g.addColorStop(0.2, 'rgba(0,180,255,0.8)');
  g.addColorStop(1, 'rgba(0,0,0,0)');

  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);

  return new THREE.CanvasTexture(c);
};

// =========================
// RESET SYSTEM
// =========================
const resetSystem = () => {
  const pos = networkParticles.geometry.attributes.position.array;

  // reset network
  for (let i = 0; i < ARGS.networkCount; i++) {
    const i3 = i * 3;

    const r = Math.random();
    const radius = r < 0.7 ? 2 + Math.random() * 3 : 5 + Math.random() * 5;

    const angle = Math.random() * Math.PI * 2;

    pos[i3] = Math.cos(angle) * radius;
    pos[i3 + 1] = (Math.random() - 0.5) * 5;
    pos[i3 + 2] = Math.sin(angle) * radius;

    netVel[i3] = (Math.random() - 0.5) * 0.0025;
    netVel[i3 + 1] = (Math.random() - 0.5) * 0.0025;
    netVel[i3 + 2] = (Math.random() - 0.5) * 0.0025;
  }

  networkParticles.geometry.attributes.position.needsUpdate = true;

  // reset lines
  linesMesh.geometry.attributes.position.array.fill(0);
  linesMesh.geometry.attributes.color.array.fill(0);
  linesMesh.geometry.setDrawRange(0, 0);

  // reset stars
  const starPos = starField.geometry.attributes.position.array;

  for (let i = 0; i < starPos.length; i += 3) {
    starPos[i] = (Math.random() - 0.5) * 25;
    starPos[i + 1] = (Math.random() - 0.5) * 25;
    starPos[i + 2] = (Math.random() - 0.5) * 25;
  }

  starField.geometry.attributes.position.needsUpdate = true;

  // reset grid
  gridGroup.rotation.set(0, 0, 0);
};

// =========================
// LOOP RESET (∞)
// =========================
const scheduleReset = () => {
  resetTimeout = setTimeout(() => {
    resetSystem();
    scheduleReset(); // boucle infinie
  }, 60000);
};

// =========================
// INIT
// =========================
onMounted(() => {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  scene.fog = new THREE.FogExp2(0x000814, 0.03);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.z = 8;

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.6,
    0.6,
    0.18
  );
  composer.addPass(bloom);

  const texture = createCircleTexture();

  // =========================
  // GRID
  // =========================
  gridGroup = new THREE.Group();

  const gridXY = new THREE.GridHelper(40, 40, 0x0a3a7a, 0x061a3a);
  const gridXZ = new THREE.GridHelper(40, 40, 0x0a3a7a, 0x061a3a);
  const gridYZ = new THREE.GridHelper(40, 40, 0x0a3a7a, 0x061a3a);

  gridXZ.rotation.x = Math.PI / 2;
  gridYZ.rotation.z = Math.PI / 2;

  [gridXY, gridXZ, gridYZ].forEach(g => {
    g.material.transparent = true;
    g.material.opacity = 0.12;
  });

  gridGroup.add(gridXY, gridXZ, gridYZ);
  scene.add(gridGroup);

  // =========================
  // STARS
  // =========================
  const starGeo = new THREE.BufferGeometry();
  const starPos = new Float32Array(ARGS.starCount * 3);

  for (let i = 0; i < starPos.length; i += 3) {
    starPos[i] = (Math.random() - 0.5) * 25;
    starPos[i + 1] = (Math.random() - 0.5) * 25;
    starPos[i + 2] = (Math.random() - 0.5) * 25;
  }

  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));

  starField = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({
      size: 0.02,
      map: texture,
      transparent: true,
      opacity: 0.3,
      color: 0x66ccff,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );

  scene.add(starField);

  // =========================
  // NETWORK
  // =========================
  const netGeo = new THREE.BufferGeometry();
  const netPos = new Float32Array(ARGS.networkCount * 3);
  netVel = new Float32Array(ARGS.networkCount * 3);

  for (let i = 0; i < ARGS.networkCount; i++) {
    const i3 = i * 3;

    const r = Math.random();
    const radius = r < 0.7 ? 2 + Math.random() * 3 : 5 + Math.random() * 5;

    const angle = Math.random() * Math.PI * 2;

    netPos[i3] = Math.cos(angle) * radius;
    netPos[i3 + 1] = (Math.random() - 0.5) * 5;
    netPos[i3 + 2] = Math.sin(angle) * radius;

    netVel[i3] = (Math.random() - 0.5) * 0.0025;
    netVel[i3 + 1] = (Math.random() - 0.5) * 0.0025;
    netVel[i3 + 2] = (Math.random() - 0.5) * 0.0025;
  }

  netGeo.setAttribute('position', new THREE.BufferAttribute(netPos, 3));

  networkParticles = new THREE.Points(
    netGeo,
    new THREE.PointsMaterial({
      size: 0.13,
      map: texture,
      transparent: true,
      color: 0x4cc3ff,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );

  scene.add(networkParticles);

  // =========================
  // LINES
  // =========================
  const MAX_LINES = ARGS.networkCount * 70;

  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(MAX_LINES * 3), 3));
  lineGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(MAX_LINES * 3), 3));

  linesMesh = new THREE.LineSegments(
    lineGeo,
    new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    })
  );

  scene.add(linesMesh);

  // =========================
  // MOUSE
  // =========================
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // =========================
  // ANIMATE
  // =========================
  const animate = () => {
    const pos = networkParticles.geometry.attributes.position.array;
    const lp = linesMesh.geometry.attributes.position.array;
    const lc = linesMesh.geometry.attributes.color.array;

    let lIdx = 0;
    let cIdx = 0;

    const connectionCount = new Array(ARGS.networkCount).fill(0);

    for (let i = 0; i < ARGS.networkCount; i++) {
      const i3 = i * 3;

      pos[i3] += netVel[i3];
      pos[i3 + 1] += netVel[i3 + 1];
      pos[i3 + 2] += netVel[i3 + 2];

      for (let j = i + 1; j < ARGS.networkCount; j++) {
        const j3 = j * 3;

        const dx = pos[i3] - pos[j3];
        const dy = pos[i3 + 1] - pos[j3 + 1];
        const dz = pos[i3 + 2] - pos[j3 + 2];

        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (d < 1.7) {
          connectionCount[i]++;

          lp[lIdx++] = pos[i3];
          lp[lIdx++] = pos[i3 + 1];
          lp[lIdx++] = pos[i3 + 2];

          lp[lIdx++] = pos[j3];
          lp[lIdx++] = pos[j3 + 1];
          lp[lIdx++] = pos[j3 + 2];

          const pulse = 1 - d / 1.7;

          lc[cIdx++] = 0.1;
          lc[cIdx++] = 0.6 * pulse;
          lc[cIdx++] = 1.2 * pulse;

          lc[cIdx++] = 0.1;
          lc[cIdx++] = 0.6 * pulse;
          lc[cIdx++] = 1.2 * pulse;
        }
      }
    }

    networkParticles.geometry.attributes.position.needsUpdate = true;
    linesMesh.geometry.attributes.position.needsUpdate = true;
    linesMesh.geometry.attributes.color.needsUpdate = true;

    linesMesh.geometry.setDrawRange(0, lIdx / 3);

    gridGroup.rotation.y += 0.001;
    gridGroup.rotation.x += 0.0004;

    starField.rotation.y += 0.0001;

    composer.render();
    animationId = requestAnimationFrame(animate);
  };

  animate();
  scheduleReset();

  // =========================
  // RESIZE
  // =========================
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
  });
});

// =========================
// CLEANUP
// =========================
onBeforeUnmount(() => {
  clearTimeout(resetTimeout);
  cancelAnimationFrame(animationId);
});
</script>

<style scoped>
.three-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>