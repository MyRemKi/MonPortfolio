<template>
  <canvas 
    ref="canvas" 
    class="fixed inset-0 w-full h-full pointer-events-none"
    style="z-index: -1;"
  ></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as THREE from 'three';

const canvas = ref(null);
let renderer, scene, camera;
let networkParticles, starField, linesMesh, grid;
let mouse = new THREE.Vector2(-100, -100);

const ARGS = {
  networkCount: 180,
  starCount: 1500,
  dist: 2,
};

const createCircleTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(0,255,255,1)');
  gradient.addColorStop(0.2, 'rgba(34,0,238,0.8)');
  gradient.addColorStop(0.5, 'rgba(59,130,246,0.2)');
  gradient.addColorStop(1, 'rgba(0,0,0,0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  return new THREE.CanvasTexture(canvas);
};

onMounted(() => {
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0FF617, 0.08);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 10;

  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const texture = createCircleTexture();

  grid = new THREE.GridHelper(30, 40, 0x1e3a8a, 0x1e3a8a);
  grid.position.y = -6;
  scene.add(grid);

  const starGeo = new THREE.BufferGeometry();
  const starPos = new Float32Array(ARGS.starCount * 3);

  for (let i = 0; i < starPos.length; i++) {
    starPos[i] = (Math.random() - 0.5) * 40;
  }

  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));

  const starMat = new THREE.PointsMaterial({
    size: 0.03,
    map: texture,
    transparent: true,
    opacity: 0.3,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  starField = new THREE.Points(starGeo, starMat);
  scene.add(starField);

  const netGeo = new THREE.BufferGeometry();
  const netPos = new Float32Array(ARGS.networkCount * 3);
  const netVel = new Float32Array(ARGS.networkCount * 3);

  const CORTEX_LAYERS = 4;

  for (let i = 0; i < ARGS.networkCount; i++) {
    const i3 = i * 3;

    const layer = Math.random() ** 2;

    const angle = Math.random() * Math.PI * 2;
    const radius = (0.5 + layer * 6) + Math.random() * 1.5;

    netPos[i3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.5;
    netPos[i3 + 1] = (Math.random() - 0.5) * 6;
    netPos[i3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.5;

    netVel[i3] = (Math.random() - 0.5) * 0.008;
    netVel[i3 + 1] = (Math.random() - 0.5) * 0.008;
    netVel[i3 + 2] = (Math.random() - 0.5) * 0.008;
  }

  netGeo.setAttribute('position', new THREE.BufferAttribute(netPos, 3));

  const netMat = new THREE.PointsMaterial({
    size: 0.15,
    map: texture,
    transparent: true,
    color: 0x22d300,
    blending: THREE.AdditiveBlending
  });

  networkParticles = new THREE.Points(netGeo, netMat);
  scene.add(networkParticles);

  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ARGS.networkCount * 50 * 3), 3));
  lineGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(ARGS.networkCount * 50 * 3), 3));

  const lineMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending
  });

  linesMesh = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(linesMesh);

  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  const animate = () => {
    const time = Date.now() * 0.001;

    const pos = networkParticles.geometry.attributes.position.array;
    let lp = linesMesh.geometry.attributes.position.array;
    let lc = linesMesh.geometry.attributes.color.array;

    let lIdx = 0, cIdx = 0;

    for (let i = 0; i < ARGS.networkCount; i++) {
      const i3 = i * 3;

      pos[i3] += netVel[i3] + Math.sin(time + i) * 0.002;
      pos[i3 + 1] += netVel[i3 + 1] + Math.cos(time + i) * 0.002;

      const dxM = pos[i3] - mouse.x * 8;
      const dyM = pos[i3 + 1] - mouse.y * 8;
      const dM = Math.sqrt(dxM * dxM + dyM * dyM);

      if (dM < 2) {
        pos[i3] += dxM * 0.03;
        pos[i3 + 1] += dyM * 0.03;
      }
      
      for (let j = i + 1; j < ARGS.networkCount; j++) {
        const j3 = j * 3;

        const dx = pos[i3] - pos[j3];
        const dy = pos[i3 + 1] - pos[j3 + 1];
        const dz = pos[i3 + 2] - pos[j3 + 2];

        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (d < ARGS.dist) {
          lp[lIdx++] = pos[i3];
          lp[lIdx++] = pos[i3 + 1];
          lp[lIdx++] = pos[i3 + 2];

          lp[lIdx++] = pos[j3];
          lp[lIdx++] = pos[j3 + 1];
          lp[lIdx++] = pos[j3 + 2];

          const pulse = (Math.sin(time * 4 + i) + 1.5) * (1 - d / ARGS.dist);

          lc[cIdx++] = 0.2 * pulse;
          lc[cIdx++] = 0.6 * pulse;
          lc[cIdx++] = 1 * pulse;

          lc[cIdx++] = 0.2 * pulse;
          lc[cIdx++] = 0.6 * pulse;
          lc[cIdx++] = 1 * pulse;
        }
      }
    }

    networkParticles.geometry.attributes.position.needsUpdate = true;
    linesMesh.geometry.attributes.position.needsUpdate = true;
    linesMesh.geometry.attributes.color.needsUpdate = true;
    linesMesh.geometry.setDrawRange(0, lIdx / 3);

    starField.rotation.y += 0.0002;
    grid.rotation.y += 0.0005;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
</script>

<style scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
</style>