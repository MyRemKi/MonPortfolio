<template>
  <main class="page">

    <div class="container">

      <!-- HERO -->
      <section class="hero">
        <img src="/images/logo.jpg" class="logo" />

        <h1>
          Étudiant <span>Data & IA</span>
        </h1>

        <p class="subtitle">
          Recherche alternance dès septembre 2026 — 1 à 2 ans — France
        </p>

      </section>
      <section class="search-block">
        <h2>Recherche d’alternance</h2>

        <div class="search-grid">
          <div>
            <h4>Contrat</h4>
            <p>Alternance (1 à 2 ans)</p>
          </div>

          <div>
            <h4>Début</h4>
            <p>Septembre 2026</p>
          </div>

          <div>
            <h4>Mobilité</h4>
            <p>France entière (préférence Lille / Paris)</p>
          </div>

          <div>
            <h4>Poursuite d’étude</h4>
            <p>Data Science / IA / Data Engineering</p>
          </div>
        </div>
      </section>
      <!-- ABOUT -->
      <section class="section">
        <h2>À propos</h2>

        <p>
          Étudiant en L3 Informatique (Sciences du Numérique) à l’Institut Catholique de Lille,
          spécialisé en Data.
        </p>

        <p>
          Je recherche une alternance dans la data et l’intelligence artificielle.
        </p>
      </section>

      <!-- ROLES -->
      <section class="section alt">
        <h2>Postes recherchés</h2>

        <div class="roles">
          <span>Data Engineer</span>
          <span>Data Scientist</span>
          <span>Développeur IA</span>
          <span>Prompt Engineer</span>
          <span>Data Architect</span>
        </div>
      </section>

      <!-- PROJECTS -->
      <section class="section">
        <div class="header">
          <h2>Projets</h2>
          <router-link to="/projets">Voir tout →</router-link>
        </div>

        <div class="cards">
          <router-link
            v-for="p in projets.slice(0,3)"
            :key="p.id"
            :to="`/projet/${p.id}`"
            class="card"
          >
            <h3>{{ p.name }}</h3>
            <p>{{ p.desc }}</p>
          </router-link>
        </div>
      </section>

      <!-- EXPERIENCE -->
      <section class="section alt">
        <div class="header">
          <h2>Expériences</h2>
          <router-link to="/experiences">Voir tout →</router-link>
        </div>

        <div class="cards">
          <router-link
            v-for="e in experiences.slice(0,4)"
            :key="e.id"
            :to="`/experience/${e.id}`"
            class="card"
          >
            <h3>{{ e.job }}</h3>
            <p>{{ e.company }}</p>
          </router-link>
        </div>
      </section>

      <!-- STATS -->
      <section class="stats">
        <div>
          <h3>10+</h3>
          <p>Projets</p>
        </div>
        <div>
          <h3>1+</h3>
          <p>XP entreprise</p>
        </div>
        <div>
          <h3>100%</h3>
          <p>Motivation</p>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta">
        <h2>Intéressé par mon profil ?</h2>
        <router-link to="/contact" class="btn primary">
          Me contacter
        </router-link>
      </section>

    </div>
  </main>
</template>

<script setup>
import { projets } from '@/data/projets'
import { experiences } from '@/data/experiences'
import { formations } from '@/data/formations'
</script>

<style scoped>
.cta h2 {
  margin-bottom: 20px;
}

.cta .btn {
  display: inline-block;
  margin-top: 10px;
}
/* GLOBAL */
.page {
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(5, 0, 53, 0.461), rgba(51, 0, 66, 0.494));
  padding: 40px 20px;
  font-family: "Segoe UI", Arial, sans-serif;
  color: #1a1a1a;
}

/* SUPPRESSION SOULIGNEMENT LIENS */
a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
}

/* CONTAINER */
.container {
  max-width: 1100px;
  margin: auto;
  background: rgba(255, 255, 255, 0.952);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.12);
}

/* 🔥 SEARCH BLOCK */
.search-block {
  background: #fffffff1;
  border: 1px solid #e5e7eb;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 30px;
  text-align: center;
}

.search-block h2 {
  margin-bottom: 20px;
}

.search-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
}

.search-grid div {
  background: #f8fafc;
  padding: 15px;
  border-radius: 12px;
}

.search-grid h4 {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.search-grid p {
  font-weight: 600;
}

/* HERO */
.hero {
  text-align: center;
  padding: 60px 20px;
}

.logo {
  width: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.hero h1 {
  font-size: 50px;
  font-weight: 900;
}

.hero span {
  background: linear-gradient(to right, #FFA233, #FFE433);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  color: #555;
  margin: 20px 0;
}

/* FORMATION */
.formation-block {
  display: block;
  margin: 30px auto 0;
  max-width: 420px;
  padding: 18px 22px;
  border-radius: 15px;
  background: white;
  border: 1px solid #e5e7eb;
  text-align: center;
  transition: 0.3s;
}

.formation-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.formation-block .school {
  font-size: 12px;
  color: #777;
}

.formation-block .title {
  font-size: 16px;
  font-weight: 700;
  margin: 5px 0;
}

.formation-block .link {
  font-size: 13px;
  color: #f59e0b;
  font-weight: 600;
}

/* SECTIONS */
.section {
  padding: 60px 10px;
}

.section.alt {
  background: #f8fafc;
  border-radius: 15px;
  padding: 60px 20px;
}

/* HEADER */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ROLES */
.roles {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.roles span {
  background: white;
  border: 1px solid #ddd;
  padding: 8px 14px;
  border-radius: 20px;
}

/* CARDS */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  gap: 20px;
  margin-top: 30px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid #e5e7eb;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

/* STATS */
.stats {
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 60px 0;
}

.stats h3 {
  font-size: 32px;
  background: linear-gradient(to right, #FFA233, #FFE433);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* CTA */
.cta {
  text-align: center;
  padding: 60px 20px;
}

.btn {
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: bold;
}

.primary {
  background: linear-gradient(to right, #FFA233, #FFE433);
  color: #1a1a1a;
}

</style>