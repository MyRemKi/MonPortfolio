<template>
  <main class="detail-page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-div">
        <h1 class="hero-title">{{ formation.title }}</h1>
        <span class="hero-id">{{ formation.speciality }}</span>
        <p class="hero-subtitle">
          {{ formation.start }} — {{ formation.end }}
        </p>
      </div>
    </section>

    <section class="content">

      <div class="grid">

        <!-- ================= LIGNE 1 ================= -->

        <div class="card main line1">
          <h2>Description</h2>
          <p>{{ formation.description }}</p>
        </div>

        <div class="card side line1">
          <h2>Informations</h2>

          <div class="info-item">
            <span>Établissement</span>
            <p>{{ formation.school }}</p>
          </div>

          <div class="info-item">
            <span>Lieu</span>
            <p>{{ formation.location }}</p>
          </div>
        </div>

        <!-- ================= LIGNE 2 ================= -->

        <div class="line2">
          <div class="card wide">
            <h2>Hard Skills</h2>
            <ul>
              <li v-for="skill in formation.hardSkills" :key="skill">
                {{ skill }}
              </li>
            </ul>
          </div>

          <div class="card wide">
            <h2>Soft Skills</h2>
            <ul>
              <li v-for="skill in formation.softSkills" :key="skill">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>

        <!-- ================= LIGNE 3 ================= -->

        <div class="card tools-card line3">
          <h2>Outils</h2>
          <ul>
            <li v-for="tool in formation.tools" :key="tool">
              {{ tool }}
            </li>
          </ul>
        </div>

        <div class="card line3">
          <h2>Librairies</h2>
          <ul>
            <li v-for="lib in formation.libraries" :key="lib">
              {{ lib }}
            </li>
          </ul>
        </div>

        <div class="card line3">
          <h2>Langages</h2>
          <ul>
            <li v-for="lang in formation.languages" :key="lang">
              {{ lang }}
            </li>
          </ul>
        </div>

        <!-- ================= LIGNE 4 ================= -->

        <div class="card projects-card line4">
          <h2>Projets</h2>

          <div
            v-for="project in relatedProjects"
            :key="project.id"
            class="project"
          >
            <router-link :to="`/projet/${project.id}`" class="project-link">

              <h3>{{ project.name }}</h3>
              <p class="project-desc">{{ project.desc }}</p>

              <div class="stack">
                <span v-for="tech in project.stack" :key="tech">
                  {{ tech }}
                </span>
              </div>

              <small class="project-meta">
                {{ project.year }} • {{ project.status }}
              </small>

            </router-link>
          </div>

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
import { projets } from '@/data/projets'

const route = useRoute()
const id = parseInt(route.params.id)

const formation = formations.find(f => f.id === id) || {}

formation.hardSkills ||= []
formation.softSkills ||= []
formation.tools ||= []
formation.libraries ||= []
formation.languages ||= []
formation.projects ||= []

const relatedProjects = projets.filter(p =>
  formation.projects?.includes(p.id)
)
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

.hero-div{
  margin-top : 50px;
}
.hero-id {
  color: #f59e0b; /* orange */
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
  grid-template-columns: repeat(3, 1fr);
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

/* LIGNES */
.line1 { grid-row: 1; }
.line2 {
  grid-row: 2;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.line3 { grid-row: 3; }
.line4 { grid-row: 4; }

.main { grid-column: span 2; }
.side { grid-column: span 1; }

/* TITRES */
h2 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #2563eb; /* bleu principal */
}

h3 {
  margin-bottom: 1rem;
  color: #f59e0b; /* orange */
}

/* LISTES */
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
  color: #334155;
}

/* INFOS */
.info-item span {
  display: block;
  font-size: 0.8rem;
  color: #38bdf8; /* bleu ciel */
}

/* PROJETS */
.projects-card {
  grid-column: 1 / -1;
}

.project {
  margin-bottom: 1.5rem;
}

/* ⭐ HOVER PROJETS (couleurs adaptées) */
.project-link {
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 1rem;
  border-radius: 14px;

  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
  position: relative;
  overflow: hidden;
}

/* glow bleu/orange */
.project-link::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    transparent,
    rgba(59, 130, 246, 0.15),
    rgba(245, 158, 11, 0.15),
    transparent
  );
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.project-link:hover::before {
  transform: translateX(100%);
}

.project-link:hover {
  transform: translateY(-6px) scale(1.02);
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 12px 35px rgba(59, 130, 246, 0.2);
}

/* STACK */
.stack span {
  display: inline-block;
  margin-right: 6px;
  font-size: 0.8rem;
  color: #3b82f6;
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

/* RESPONSIVE */
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .line1,
  .line2,
  .line3,
  .line4 {
    grid-row: auto;
  }
}

.wide {
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: column;
}
</style>