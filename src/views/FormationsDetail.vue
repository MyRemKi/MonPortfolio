<template>
  <main class="detail-page">

    <section class="hero">
      <span class="hero-id">{{ formation.speciality }}</span>
      <h1 class="hero-title">{{ formation.title }}</h1>
      <p class="hero-subtitle">
        {{ formation.start }} — {{ formation.end }}
      </p>
    </section>

    <section class="content">

      <div class="grid">

        <div class="card main">
          <h2>Description</h2>
          <p>{{ formation.description }}</p>
        </div>

        <div class="card side">
          <h3>Informations</h3>

          <div class="info-item">
            <span>Établissement</span>
            <p>{{ formation.school }}</p>
          </div>

          <div class="info-item">
            <span>Lieu</span>
            <p>{{ formation.location }}</p>
          </div>
        </div>

        <div class="card">
          <h2>Hard Skills</h2>
          <ul>
            <li v-for="skill in formation.hardSkills" :key="skill">
              {{ skill }}
            </li>
          </ul>
        </div>

        <div class="card">
          <h2>Soft Skills</h2>
          <ul>
            <li v-for="skill in formation.softSkills" :key="skill">
              {{ skill }}
            </li>
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
import { formations } from '@/data/formations'

const route = useRoute()
const id = parseInt(route.params.id)

const formation = formations.find(f => f.id === id)
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

h2 {
  font-size: 1.4rem;
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

.info-item {
  margin-bottom: 1rem;
}

.info-item span {
  display: block;
  font-size: 0.8rem;
  color: #a78bfa;
}

.info-item p {
  font-weight: 600;
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