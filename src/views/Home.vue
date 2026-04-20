<template>
  <main class="page">
    <section class="hero">
      <div class="badge">• SYSTÈME DATA OPÉRATIONNEL</div>

      <h1 class="title">
        Recherche poste <span> Alternance </span> dans le domaine <span>Data & IA</span>
      </h1>

      <p class="subtitle">
        Durée alternance : <span>1 - 2 ans</span> || Pour quand : début <span>septembre 2026</span> || Mobilité : dans toute la <span>France</span>
      </p>

      <div class="actions">
        <router-link to="/projets" class="btn primary">Explorer les projets</router-link>
        <router-link to="/contact" class="btn secondary">Me contacter</router-link>
      </div>
    </section>

    <section class="section grid">
      <div>
        <h2>Qui suis-je ?</h2>
        <p>
          Etudiant en L3 Informatique (Sciences du Numérique), en spécialié Data à l'école du numérique (Institut Catholique de Lille).
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
          :to="`/projets/${p.id}`"
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
  z-index: -1;
  background: linear-gradient(to bottom, rgba(11, 15, 26, 0.55), rgba(15, 23, 42, 0.55));
  color: white;
  font-family: Arial, sans-serif;
}

.hero {
  text-align: center;
  padding: 120px 20px;
}

.badge {
  display: inline-block;
  padding: 6px 12px;
  border: 1px solid rgba(59,130,246,0.3);
  background: rgba(59,130,246,0.1);
  color: #93c5fd;
  border-radius: 999px;
  margin-bottom: 20px;
}

.title {
  font-size: 80px;
  font-weight: 900;
}

.title span {
  background: linear-gradient(to right, #60a5fa, #22d3ee, #fb923c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  max-width: 600px;
  margin: 20px auto;
  color: #cbd5f5;
}

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
  background: #3b82f6;
}

.primary:hover {
  background: #60a5fa;
}

.secondary {
  border: 1px solid rgba(255,255,255,0.2);
}

.section {
  padding: 80px 20px;
}

.section.alt {
  background: rgba(255, 255, 255, 0.05);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.card {
  padding: 20px;
  border-radius: 15px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: block;
}

.card:visited {
  color: inherit;
}

.card:hover {
  transform: translateY(-6px) scale(1.01);
  background: rgba(255,255,255,0.08);
  border-color: rgba(59,130,246,0.4);
  box-shadow: 0 10px 30px rgba(59,130,246,0.2);
}

.card h3 {
  margin-bottom: 10px;
  font-size: 18px;
}

.card p {
  color: #94a3b8;
  font-size: 14px;
}

.highlight {
  background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(244,114,182,0.1));
}

.center {
  text-align: center;
}

.center span {
  background: linear-gradient(to right, #60a5fa, #22d3ee, #fb923c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stats {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.stats h3 {
  font-size: 32px;
}

.small {
  font-size: 12px;
  color: #94a3b8;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>