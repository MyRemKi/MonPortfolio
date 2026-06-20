<template>
  <main v-if="projet" class="page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-bg" :style="heroStyle"></div>

      <div class="hero-content">
        <span class="badge">{{ projet.status }}</span>
        <h1>{{ projet.name }}</h1>
        <p class="subtitle glass">{{ projet.subtitle }}</p>
        <div class="meta glass">
          <span>{{ projet.year }}</span>
          <span>•</span>
          <span>{{ projet.role }}</span>
        </div>
      </div>
    </section>

    <!-- LIENS -->
    <div class="link">
      <section class="links">
        <button class="back-btn" @click="$router.back()">← Retour</button>
        <a v-if="projet.github" :href="projet.github" target="_blank">GitHub</a>
        <a v-if="projet.demo" :href="projet.demo" target="_blank">Démo</a>
      </section>
    </div>

    <!-- INTRO -->
    <section v-if="projet.desc" class="intro">
      <p>{{ projet.desc }}</p>
    </section>

    <!-- GRID -->
    <section class="grid">

      <div v-if="projet.description" class="card big">
        <h2>Le projet</h2>
        <p>{{ projet.description }}</p>
      </div>

      <div v-if="projet.objective" class="card">
        <h2>Objectif</h2>
        <p>{{ projet.objective }}</p>
      </div>

      <div v-if="projet.progress !== undefined && projet.progress !== null" class="card">
        <h2>Progression</h2>
        <div class="bar">
          <div class="fill" :style="{ width: projet.progress + '%' }"></div>
        </div>
        <span class="percent">{{ projet.progress }}%</span>
      </div>

    </section>

    <!-- STACK -->
    <section
      v-if="(projet.languages && projet.languages.length) || (projet.libraries && projet.libraries.length) || (projet.tools && projet.tools.length)"
      class="stack"
    >
      <h2>Technologies utilisées</h2>

      <div class="chips">
        <span v-for="l in projet.languages || []" :key="l" class="chip lang">{{ l }}</span>
        <span v-for="l in projet.libraries || []" :key="l" class="chip lib">{{ l }}</span>
        <span v-for="t in projet.tools || []" :key="t" class="chip tool">{{ t }}</span>
      </div>
    </section>

    <!-- FONCTIONNALITÉS -->
    <section v-if="projet.features && projet.features.length" class="section">
      <h2>Fonctionnalités</h2>
      <ul>
        <li v-for="f in projet.features" :key="f">{{ f }}</li>
      </ul>
    </section>

    <!-- CHALLENGES -->
    <section v-if="projet.challenges && projet.challenges.length" class="section alt">
      <h2>Challenges</h2>
      <ul>
        <li v-for="c in projet.challenges" :key="c">{{ c }}</li>
      </ul>
    </section>

    <!-- RETOUR D'EXPÉRIENCE -->
    <section v-if="projet.feeling" class="story">
      <h2>Retour d'expérience</h2>
      <p>{{ projet.feeling }}</p>
    </section>

  </main>

  <div v-else class="error">
    Projet introuvable
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import { computed } from "vue"
import { projets } from "@/data/projets"

const route = useRoute()

const projet = computed(() =>
  projets.find(p => p.id === Number(route.params.id))
)

const heroStyle = computed(() => {
  const img =
    projet.value?.image ||
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"

  return { backgroundImage: `url(${img})` }
})
</script>

<style scoped>
.glass {
  opacity: 0.8;
}
.meta {
  opacity: 0.7;
}

.back-btn {
  margin-right: 10px;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  background: #111827;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.back-btn:hover {
  background: #374151;
}

.page {
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: system-ui;
  color: #0f172a;
}

.glass {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 0.5rem;
  padding: 10px 12px;
  border-radius: 12px;
  background-color: rgba(46, 44, 44, 0.616);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: white;
  white-space: nowrap;
}

/* HERO */
.hero {
  position: relative;
  height: 450px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  filter: brightness(0.7);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.629), transparent);
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  color: white;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 900;
}

.meta {
  margin-top: 1rem;
}

.badge {
  background: #f59e0b;
  padding: 6px 12px;
  border-radius: 999px;
  font-weight: bold;
  width: fit-content;
}

/* INTRO */
.intro {
  text-align: center;
  max-width: 700px;
  margin: 3rem auto;
  font-size: 1.2rem;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  max-width: 1100px;
  margin: auto;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.big {
  grid-column: span 1;
}

/* STACK */
.stack {
  text-align: center;
  margin: 4rem 0;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
}

.chip {
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
}

.lang  { background: #dbeafe; color: #1d4ed8; }
.lib   { background: #dcfce7; color: #166534; }
.tool  { background: #fef3c7; color: #92400e; }

/* SECTIONS */
.section {
  max-width: 800px;
  margin: 3rem auto;
}

.section.alt {
  background: #eef2ff;
  padding: 2rem;
  border-radius: 20px;
}

/* STORY */
.story {
  max-width: 800px;
  margin: 4rem auto;
  padding: 2rem;
  border-left: 5px solid #3b82f6;
  background: white;
}

/* PROGRESS */
.bar {
  height: 10px;
  background: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
  margin-top: 1rem;
}

.fill {
  height: 100%;
  background: linear-gradient(90deg, #2563eb, #f59e0b);
}

.percent {
  display: block;
  margin-top: 0.5rem;
}

/* LIENS */
.links {
  text-align: center;
  margin: 4rem;
}

.links a {
  margin: 10px;
  padding: 10px 20px;
  border-radius: 12px;
  background: #2563eb;
  color: white;
  text-decoration: none;
}

.links a:hover {
  background: #f59e0b;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 2rem;
  }
}
</style>
