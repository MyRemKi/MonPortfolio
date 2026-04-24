<template>
  <main class="page">
    <section class="hero">
      <div class="logo-container">
        <img src="/images/logo.jpg" alt="Logo" class="logo" />
      </div>

      <h1 class="title">
        Recherche poste <span> Alternance </span> dans le domaine
        <span>Data & IA</span>
      </h1>

      <p class="subtitle">
        Durée alternance : <span>1 - 2 ans</span> || Pour quand : début
        <span>septembre 2026</span> || Mobilité : dans toute la
        <span>France</span>
      </p>

      <div class="actions">
        <router-link to="/projets" class="btn primary">
          Explorer les projets
        </router-link>
        <router-link to="/contact" class="btn secondary">
          Me contacter
        </router-link>
      </div>
    </section>

    <section class="section grid">
      <div>
        <h2>Qui suis-je ?</h2>
        <p>
          Etudiant en L3 Informatique (Sciences du Numérique), en spécialité
          Data à l'école du numérique (Institut Catholique de Lille).
        </p>
      </div>

      <div class="card highlight">
        <p class="small">Intérêt poste : tout ce qui est lié à la Data et IA</p>
        <ul>
          <li>Data Engineering</li>
          <li>Spécialiste IA</li>
          <li>Développeur IA</li>
          <li>Data Scientist</li>
          <li>Ingénieur Prompt</li>
          <li>Data Architect</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="center"><span>Projets en tendance</span></h2>

      <div class="cards">
        <router-link
          v-for="p in projets.slice(0, 3)"
          :key="p.id"
          :to="`/projet/${p.id}`"
          class="card"
        >
          <h3>{{ p.name }}</h3>
          <p>{{ p.desc }}</p>
        </router-link>
      </div>
    </section>

    <section class="section alt">
      <h2 class="center"><span>Expérience</span></h2>

      <div class="cards">
        <router-link
          v-for="e in experiences.slice(0, 4)"
          :key="e.id"
          :to="`/experience/${e.id}`"
          class="card link"
        >
          <h3>{{ e.job }}</h3>
          <p>{{ e.company }}</p>
        </router-link>
      </div>

      <div class="center" style="margin-top: 40px;">
        <router-link to="/experiences" class="btn primary">
          Voir toutes les expériences
        </router-link>
      </div>
    </section>

    <section class="section stats">
      <div>
        <h3>10+</h3>
        <p>Projets réalisés</p>
      </div>
      <div>
        <h3>99%</h3>
        <p>Uptime</p>
      </div>
      <div>
        <h3>1+</h3>
        <p>Ans XP (en entreprise)</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { projets } from '@/data/projets'
import { experiences } from '@/data/experiences'
</script>

<style scoped>
.page {
 background: linear-gradient(
  to bottom,
  rgba(248, 250, 252, 0.1),
  rgba(238, 242, 255, 0.1)
);
  color: #1e293b;
  font-family: Arial, sans-serif;
}

/* LOGO */
.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.logo {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid rgba(37, 99, 235, 0.3);
  box-shadow: 0 0 25px rgba(37, 99, 235, 0.15);
  transition: 0.3s;
}

.logo:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px rgba(37, 99, 235, 0.3);
}

/* HERO */
.hero {
  text-align: center;
  padding: 120px 20px;
}

.title {
  font-size: clamp(40px, 6vw, 70px);
  font-weight: 900;
  color: #0f172a;
}

.title span {
  background: linear-gradient(to right, #2563eb, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  max-width: 600px;
  margin: 20px auto;
  color: #64748b;
}

/* BUTTONS */
.actions {
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
}

.btn {
  padding: 12px 24px;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.3s;
}

.primary {
  background: #2563eb;
  color: white;
}

.primary:hover {
  background: #1d4ed8;
}

.secondary {
  border: 1px solid rgba(37, 99, 235, 0.3);
  color: #2563eb;
}

.secondary:hover {
  background: rgba(37, 99, 235, 0.05);
}

/* SECTIONS */
.section {
  padding: 80px 20px;
}

.section.alt {
  background: rgba(255, 255, 255, 0.249);
  backdrop-filter: blur(10px);
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

/* CARDS */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.card {
  padding: 20px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(37, 99, 235, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: block;
}

.card:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(37, 99, 235, 0.3);
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.15);
}

.card h3 {
  margin-bottom: 10px;
  font-size: 18px;
  color: #0f172a;
}

.card p {
  color: #64748b;
  font-size: 14px;
}

/* HIGHLIGHT */
.highlight {
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.1),
    rgba(56, 189, 248, 0.1)
  );
}

/* CENTER */
.center {
  text-align: center;
}

.center span {
  background: linear-gradient(to right, #2563eb, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* STATS */
.stats {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.stats h3 {
  font-size: 32px;
  color: #2563eb;
}

/* TEXT */
.small {
  font-size: 12px;
  color: #94a3b8;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>