<template>
  <main class="detail-page">

    <section class="hero">
      <span class="hero-id">Projet #{{ projet.id }}</span>
      <h1 class="hero-title">{{ projet.name }}</h1>
      <p class="hero-subtitle">Architecture & Système</p>
    </section>

    <section class="content">

      <div class="grid">

        <div class="card main">
          <h2>Description</h2>
          <p>{{ projet.desc }}</p>
        </div>

        <div class="card side">
          <h3>Technologies</h3>
          <ul>
            <li v-for="tech in projet.tech" :key="tech">
              {{ tech }}
            </li>
          </ul>
        </div>

        <div class="card full">
          <h2>Objectif du projet</h2>
          <p>{{ projet.objective }}</p>
        </div>

      </div>

      <div class="back">
        <button @click="$router.back()">← Retour</button>
      </div>

    </section>

  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = parseInt(route.params.id)

const projets = [
  {
    id: 1,
    name: "Neural Vision 3D",
    desc: "Analyse de flux data en temps réel avec rendu volumétrique.",
    tech: ["Vue.js", "Three.js", "WebGL"],
    objective: "Créer une visualisation avancée de données en 3D en temps réel."
  },
  {
    id: 2,
    name: "Cloud Core Architecture",
    desc: "Infrastructure distribuée auto-scalable pour Big Data.",
    tech: ["Docker", "Kubernetes", "AWS"],
    objective: "Déployer une architecture scalable et résiliente."
  },
  {
    id: 3,
    name: "Cyber Armor",
    desc: "Système de détection d'anomalies basé sur l'IA.",
    tech: ["Python", "TensorFlow", "FastAPI"],
    objective: "Détecter les menaces en temps réel avec IA."
  }
]

const projet = projets.find(p => p.id === id)
</script>

<style scoped>
.detail-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #1e1b4b, #312e81);
  color: white;
}

.hero {
  text-align: center;
  padding: 6rem 2rem 4rem;
}

.hero-id {
  color: #a78bfa;
  font-weight: 600;
}

.hero-title {
  font-size: 3rem;
  font-weight: 900;
  margin: 1rem 0;
}

.hero-subtitle {
  color: #f472b6;
  font-weight: 600;
}

.content {
  max-width: 1100px;
  margin: auto;
  padding: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.card {
  background: rgba(255,255,255,0.05);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.main {
  grid-column: 1;
}

.side {
  grid-column: 2;
}

.full {
  grid-column: 1 / -1;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #c4b5fd;
}

h3 {
  margin-bottom: 1rem;
  color: #f472b6;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
  color: #e0e7ff;
}

.back {
  margin-top: 3rem;
  text-align: center;
}

.back button {
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  background: #a78bfa;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
}

.back button:hover {
  background: #f472b6;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>