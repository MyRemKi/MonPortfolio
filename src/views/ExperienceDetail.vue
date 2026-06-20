<template>
  <main class="detail-page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-div">
        <h1 class="hero-title">{{ exp.job }}</h1>
        <span class="hero-id">{{ exp.contract }}</span>
        <p class="hero-subtitle">
          {{ exp.start }} — {{ exp.end }} • {{ exp.company }}<span v-if="exp.location"> — {{ exp.location }}</span>
        </p>
      </div>
    </section>

    <section class="content">

      <div class="grid">

        <!-- DESCRIPTION -->
        <div v-if="exp.description" class="card">
          <h2>Description</h2>
          <p>{{ exp.description }}</p>
        </div>

        <!-- INFORMATIONS -->
        <div class="card">
          <h2>Informations</h2>

          <div class="info-item">
            <span>Entreprise</span>
            <p>{{ exp.company }}<template v-if="exp.location"> — {{ exp.location }}</template></p>
          </div>

          <div class="info-item">
            <span>Type de contrat</span>
            <p>{{ exp.contract }}</p>
          </div>

          <div class="info-item">
            <span>Période</span>
            <p>{{ exp.start }} → {{ exp.end }}</p>
          </div>
        </div>

        <!-- TÂCHES -->
        <div v-if="exp.tasks && exp.tasks.length" class="card">
          <h2>Tâches réalisées</h2>
          <ul>
            <li v-for="(task, index) in exp.tasks" :key="index">{{ task }}</li>
          </ul>
        </div>

        <!-- OUTILS -->
        <div v-if="exp.outils && exp.outils.length" class="card">
          <h2>Outils utilisés</h2>
          <ul>
            <li v-for="(tool, index) in exp.outils" :key="index">{{ tool }}</li>
          </ul>
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
import { experiences } from '@/data/experiences'

const route = useRoute()
const id = parseInt(route.params.id)

const exp = experiences.find(e => e.id === id) || {}

exp.tasks  ||= []
exp.outils ||= []
</script>

<style scoped>
.detail-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff, #f1f5f9, #dbeafe);
  color: #0f172a;
}

/* HERO */
.hero {
  text-align: center;
  padding: 6rem 2rem 4rem;
}

.hero-div {
  margin-top: 50px;
}

.hero-id {
  color: #f59e0b;
  font-weight: 600;
}

.hero-title {
  font-size: 3rem;
  font-weight: 900;
  margin: 1rem 0;
  background: linear-gradient(90deg, #2563eb, #38bdf8, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  color: #64748b;
  font-weight: 600;
}

/* CONTENT */
.content {
  max-width: 1100px;
  margin: auto;
  padding: 2rem;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

/* CARD */
.card {
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(59, 130, 246, 0.12);
  transition: 0.3s;
  min-height: 180px;
}

.card:hover {
  transform: translateY(-5px);
}

h2 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #2563eb;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
  color: #334155;
}

.info-item span {
  display: block;
  font-size: 0.8rem;
  color: #38bdf8;
}

/* BACK */
.back {
  margin-top: 3rem;
  text-align: center;
}

.back button {
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(90deg, #2563eb, #38bdf8);
  color: white;
  font-weight: 700;
  cursor: pointer;
}

.back button:hover {
  background: linear-gradient(90deg, #f59e0b, #facc15);
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
