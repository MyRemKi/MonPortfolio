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

let scene, camera, renderer, composer;
let neuronMesh, lineMesh, bloomPass;
let animationId;

// =========================
// STRUCTURE CNN
// =========================
const layers = [
  { x: -12, count: 2 },
  { x: -6, count: 18 },
  { x: 0, count: 16 },
  { x: 6, count: 12 },
  { x: 12, count: 8 }
];

let neurons = [];
let connections = [];

// =========================
// TIMING
// =========================
let phase = "waiting";
let timer = 0;
let currentLayer = 0;

const WAIT_TIME = 1500;
const BASE_FLOW_TIME = 400;

let glowIntensity = 0;

// =========================
// TEXTURE
// =========================
const createTexture = () => {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;

  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);

  g.addColorStop(0, 'rgba(80,200,255,1)');
  g.addColorStop(0.3, 'rgba(0,150,255,0.7)');
  g.addColorStop(1, 'rgba(0,0,0,0)');

  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);

  return new THREE.CanvasTexture(c);
};

// =========================
// INIT
// =========================
onMounted(() => {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 26);

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.8,
    0.6,
    0.2
  );
  composer.addPass(bloomPass);

  const texture = createTexture();

  // =========================
  // NEURONS
  // =========================
  layers.forEach((layer, lIndex) => {
    for (let i = 0; i < layer.count; i++) {
      const y = (i - layer.count / 2) * 0.9;

      neurons.push({
        position: new THREE.Vector3(layer.x, y, 0),
        activation: 0,
        layer: lIndex
      });
    }
  });

  // =========================
  // CONNECTIONS (semi async)
  // =========================
  const getIndex = (layerIndex, i) => {
    let offset = 0;
    for (let l = 0; l < layerIndex; l++) {
      offset += layers[l].count;
    }
    return offset + i;
  };

  for (let l = 0; l < layers.length - 1; l++) {
    for (let i = 0; i < layers[l].count; i++) {
      for (let j = 0; j < layers[l + 1].count; j++) {
        connections.push({
          from: getIndex(l, i),
          to: getIndex(l + 1, j),
          layer: l,
          progress: 0,
          delay: 0,
          duration: BASE_FLOW_TIME + Math.random() * 300
        });
      }
    }
  }

  // =========================
  // GEOMETRY
  // =========================
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(neurons.length * 3);
  const sizes = new Float32Array(neurons.length);

  neurons.forEach((n, i) => {
    positions[i * 3] = n.position.x;
    positions[i * 3 + 1] = n.position.y;
    positions[i * 3 + 2] = n.position.z;
    sizes[i] = 0.2;
  });

  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  neuronMesh = new THREE.Points(
    geo,
    new THREE.PointsMaterial({
      size: 0.3,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0x4cc3ff
    })
  );

  scene.add(neuronMesh);

  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(connections.length * 6), 3));
  lineGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(connections.length * 6), 3));

  lineMesh = new THREE.LineSegments(
    lineGeo,
    new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    })
  );

  scene.add(lineMesh);

  // =========================
  // ANIMATION
  // =========================
  let lastTime = performance.now();

  const animate = () => {
    const now = performance.now();
    const delta = now - lastTime;
    lastTime = now;

    timer += delta;

    const pos = neuronMesh.geometry.attributes.position.array;
    const sizes = neuronMesh.geometry.attributes.size.array;

    const lp = lineMesh.geometry.attributes.position.array;
    const lc = lineMesh.geometry.attributes.color.array;

    let lIdx = 0;
    let cIdx = 0;

    // =========================
    // STATE MACHINE
    // =========================
    if (phase === "waiting") {

      glowIntensity *= 0.95;

      if (timer > WAIT_TIME) {
        timer = 0;
        phase = "flow";
        currentLayer = 0;

        glowIntensity = 2.5;

        neurons.forEach(n => {
          if (n.layer === 0) n.activation = 1;
        });

        // delays aléatoires MAIS dans une même couche
        connections.forEach(conn => {
          conn.progress = 0;
          conn.delay = Math.random() * 300; // décalage léger
        });
      }
    }

    else if (phase === "flow") {

      let layerFinished = true;

      connections.forEach(conn => {
        if (conn.layer !== currentLayer) return;

        if (conn.delay > 0) {
          conn.delay -= delta;
          layerFinished = false;
          return;
        }

        conn.progress += delta / conn.duration;

        if (conn.progress >= 1) {
          conn.progress = 1;
          neurons[conn.to].activation = 1;
        } else {
          layerFinished = false;
        }
      });

      if (layerFinished) {
        currentLayer++;

        if (currentLayer >= layers.length - 1) {
          phase = "waiting";
          timer = 0;
        }
      }
    }

    // =========================
    // DRAW
    // =========================
    connections.forEach(conn => {
      const from = neurons[conn.from].position;
      const to = neurons[conn.to].position;

      lp[lIdx++] = from.x;
      lp[lIdx++] = from.y;
      lp[lIdx++] = from.z;

      lp[lIdx++] = to.x;
      lp[lIdx++] = to.y;
      lp[lIdx++] = to.z;

      const pulse = Math.pow(Math.sin(conn.progress * Math.PI), 2);

      lc[cIdx++] = 0.1;
      lc[cIdx++] = 0.7 * pulse;
      lc[cIdx++] = 1.8 * pulse;

      lc[cIdx++] = 0.1;
      lc[cIdx++] = 0.7 * pulse;
      lc[cIdx++] = 1.8 * pulse;
    });

    neurons.forEach((n, i) => {
      n.activation *= 0.88;
      sizes[i] = 0.2 + n.activation * 0.9;
      pos[i * 3 + 1] += Math.sin(now * 0.001 + i) * 0.001;
    });

    neuronMesh.geometry.attributes.size.needsUpdate = true;
    neuronMesh.geometry.attributes.position.needsUpdate = true;

    lineMesh.geometry.attributes.position.needsUpdate = true;
    lineMesh.geometry.attributes.color.needsUpdate = true;

    bloomPass.strength = glowIntensity;

    composer.render();
    animationId = requestAnimationFrame(animate);
  };

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
  });
});

onBeforeUnmount(() => {
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