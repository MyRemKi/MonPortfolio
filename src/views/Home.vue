<template>
  <main class="page">

    <!-- ======================== HERO ======================== -->
    <section class="hero">
      <div class="hero-bg hero-bg-left"></div>
      <div class="hero-bg hero-bg-right"></div>

      <div class="hero-content">
        <img src="/images/logo.jpg" class="logo" />

        <h1>
          Étudiant <span>Data & IA</span>
        </h1>

        <p class="subtitle">
          Recherche alternance dès septembre 2026 — 1 à 2 ans — France
        </p>

        <div class="roles">
          <span>Data Engineer</span>
          <span>Data Scientist</span>
          <span>Développeur IA</span>
          <span>Prompt Engineer</span>
          <span>Data Architect</span>
        </div>

        <div class="hero-cta">
          <router-link to="/projets" class="btn primary">Voir mes projets</router-link>
          <router-link to="/contact" class="btn secondary">Me contacter</router-link>
        </div>
      </div>
    </section>

    <!-- ======================== STATS ======================== -->
    <section class="stats-band">
      <div class="stats-inner">
        <div class="stat">
          <h3>10+</h3>
          <p>Projets</p>
        </div>
        <div class="stat-sep"></div>
        <div class="stat">
          <h3>1+</h3>
          <p>XP entreprise</p>
        </div>
        <div class="stat-sep"></div>
        <div class="stat">
          <h3>100%</h3>
          <p>Motivation</p>
        </div>
      </div>
    </section>

    <!-- ======================== À PROPOS + ALTERNANCE ======================== -->
    <section class="two-col-section">

      <!-- À PROPOS -->
      <div class="info-card">
        <span class="section-badge">Qui suis-je ?</span>
        <h2>À propos</h2>

        <p>
          Étudiant en L3 Informatique (Sciences du Numérique) à l'Institut Catholique de Lille,
          spécialisé en Data.
        </p>

        <p>
          Je recherche une alternance dans la data et l'intelligence artificielle.
        </p>
      </div>

      <!-- RECHERCHE D'ALTERNANCE -->
      <div class="info-card">
        <span class="section-badge">Disponibilité</span>
        <h2>Recherche d'alternance</h2>

        <div class="search-grid">
          <div class="search-item">
            <h4>Contrat</h4>
            <p>Alternance (1 à 2 ans)</p>
          </div>

          <div class="search-item">
            <h4>Début</h4>
            <p>Septembre 2026</p>
          </div>

          <div class="search-item">
            <h4>Mobilité</h4>
            <p>France entière (préférence Lille / Paris)</p>
          </div>

          <div class="search-item">
            <h4>Poursuite d'études</h4>
            <p>Data Science / IA / Data Engineering</p>
          </div>
        </div>
      </div>

    </section>

    <!-- ======================== PROJETS ======================== -->
    <section class="content-section">
      <div class="section-header">
        <div>
          <span class="section-badge">Réalisations</span>
          <h2>Projets</h2>
        </div>
        <router-link to="/projets" class="see-all">Voir tout →</router-link>
      </div>

      <div class="cards">
        <router-link
          v-for="p in projets.slice(0, 3)"
          :key="p.id"
          :to="`/projet/${p.id}`"
          class="card"
        >
          <div class="card-tag">{{ p.year }}</div>
          <h3>{{ p.name }}</h3>
          <p>{{ p.desc }}</p>
        </router-link>
      </div>
    </section>

    <!-- ======================== EXPÉRIENCES ======================== -->
    <section class="content-section alt">
      <div class="section-header">
        <div>
          <span class="section-badge">Parcours pro</span>
          <h2>Expériences</h2>
        </div>
        <router-link to="/experiences" class="see-all">Voir tout →</router-link>
      </div>

      <div class="cards">
        <router-link
          v-for="e in experiences.slice(0, 4)"
          :key="e.id"
          :to="`/experience/${e.id}`"
          class="card"
        >
          <h3>{{ e.job }}</h3>
          <p>{{ e.company }}</p>
        </router-link>
      </div>
    </section>

    <!-- ======================== CTA ======================== -->
    <section class="cta">
      <h2>Intéressé par mon profil ?</h2>
      <router-link to="/contact" class="btn primary">
        Me contacter
      </router-link>
    </section>

  </main>
</template>

<script setup>
import { projets } from '@/data/projets'
import { experiences } from '@/data/experiences'
import { formations } from '@/data/formations'
</script>

<style scoped>
/* ========================
   GLOBAL
======================== */
.page {
  min-height: 100vh;
  background: linear-gradient(135deg, #e5e7eb, #f1f5f9);
  color: #1a1a1a;
  font-family: "Segoe UI", Arial, sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

/* ========================
   HERO
======================== */
.hero {
  position: relative;
  padding: 8rem 2rem 5rem;
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  border-radius: 999px;
  filter: blur(120px);
  opacity: 0.35;
  pointer-events: none;
}

.hero-bg-left {
  width: 350px;
  height: 350px;
  background: rgba(59, 130, 246, 0.15);
  left: 5%;
  top: 10%;
}

.hero-bg-right {
  width: 350px;
  height: 350px;
  background: rgba(255, 162, 51, 0.15);
  right: 5%;
  top: 10%;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.logo {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.hero-content h1 {
  font-size: clamp(2.8rem, 7vw, 4.5rem);
  font-weight: 900;
  line-height: 1.05;
  margin: 0;
}

.hero-content h1 span {
  background: linear-gradient(to right, #FFA233, #FFE433);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  color: #666;
  font-size: 1.05rem;
  margin: 0;
}

.roles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
}

.roles span {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 600;
  color: #444;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
}

/* ========================
   BOUTONS
======================== */
.btn {
  padding: 0.85rem 1.8rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn.primary {
  background: linear-gradient(to right, #FFA233, #FFE433);
  color: #1a1a1a;
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 162, 51, 0.4);
}

.btn.secondary {
  background: white;
  border: 1.5px solid #e5e7eb;
  color: #1a1a1a;
}

.btn.secondary:hover {
  border-color: #FFA233;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

/* ========================
   STATS BAND
======================== */
.stats-band {
  background: linear-gradient(to right, #FFA233, #FFE433);
  padding: 2rem;
}

.stats-inner {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.stat {
  text-align: center;
}

.stat h3 {
  font-size: 2.2rem;
  font-weight: 900;
  color: #1a1a1a;
  margin: 0;
}

.stat p {
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(26, 26, 26, 0.65);
  margin: 0;
}

.stat-sep {
  width: 1px;
  height: 40px;
  background: rgba(26, 26, 26, 0.2);
}

/* ========================
   2 COLONNES (À propos + Alternance)
======================== */
.two-col-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.info-card {
  padding: 2rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.07);
}

.info-card h2 {
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0.4rem 0 1rem;
}

.info-card p {
  color: #555;
  line-height: 1.7;
  margin-bottom: 0.75rem;
}

/* BADGE */
.section-badge {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  background: #fef3c7;
  color: #b45309;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.3rem;
}

/* SEARCH GRID */
.search-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.search-item {
  background: #f8fafc;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.search-item h4 {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #999;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.search-item p {
  font-weight: 600;
  color: #1a1a1a;
  font-size: 0.88rem;
  margin: 0;
}

/* ========================
   SECTIONS PROJETS / EXPÉRIENCES
======================== */
.content-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 2rem 3rem;
}

.content-section.alt {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  margin: 0 auto 2rem;
  max-width: 1100px;
  padding: 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1.5rem;
}

.section-header h2 {
  font-size: 1.7rem;
  font-weight: 800;
  margin: 0.3rem 0 0;
}

.see-all {
  font-size: 0.9rem;
  font-weight: 600;
  color: #f59e0b;
  transition: 0.2s;
}

.see-all:hover {
  color: #FFA233;
}

/* CARDS */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.card {
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 18px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  border-color: #FFA233;
}

.card-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #b45309;
  background: #fef3c7;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  margin-bottom: 0.6rem;
}

.card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.card p {
  color: #666;
  font-size: 0.88rem;
  line-height: 1.6;
  margin: 0;
}

/* ========================
   CTA
======================== */
.cta {
  text-align: center;
  padding: 4rem 2rem 5rem;
}

.cta h2 {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
}

/* ========================
   RESPONSIVE
======================== */
@media (max-width: 768px) {
  .hero { padding-top: 6rem; }

  .two-col-section {
    grid-template-columns: 1fr;
    padding: 2rem 1.25rem;
  }

  .stats-inner {
    gap: 1.2rem;
  }

  .search-grid {
    grid-template-columns: 1fr;
  }

  .content-section,
  .content-section.alt {
    padding: 1.5rem 1.25rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }
}
</style>
