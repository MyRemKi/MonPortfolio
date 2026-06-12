<template>
  <main class="experiences-page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg hero-bg-left"></div>
      <div class="hero-bg hero-bg-right"></div>

      <div class="hero-content">
        <span class="hero-subtitle">Mon parcours pro</span>

        <h1 class="hero-title">
          Expériences <span>Professionnelles</span>
        </h1>

        <p class="hero-text">
          Découvrez mon parcours en entreprise et mes expériences dans le développement et la data.
        </p>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="timeline-section">
      <div class="timeline">

        <div
          v-for="exp in experiences"
          :key="exp.id"
          class="timeline-item"
          @click="goTo(exp.id)"
        >
          <div class="timeline-dot"></div>

          <div class="experience-card">

            <div class="card-date">
              {{ exp.start }} • {{ exp.end }}
            </div>

            <h2 class="card-title">{{ exp.job }}</h2>

            <p class="card-subtitle">
              {{ exp.company }}
            </p>

            <p class="card-description">
              {{ exp.short }}
            </p>

            <router-link
              :to="`/experience/${exp.id}`"
              class="card-footer"
              @click.stop
            >
              <span>Voir l’expérience</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" stroke-width="2"/>
                <path d="M13 6L19 12L13 18" stroke="currentColor" stroke-width="2"/>
              </svg>
            </router-link>

          </div>

        </div>

      </div>
    </section>

  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { experiences } from '@/data/experiences'

const router = useRouter()

const goTo = (id) => {
  router.push(`/experience/${id}`)
}
</script>

<style scoped>

/* =========================
   GLOBAL (SYSTÈME FORMATIONS)
========================= */
.experiences-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #e5e7eb, #f1f5f9);
  padding-bottom: 5rem;
  color: #1a1a1a;
  font-family: "Segoe UI", Arial, sans-serif;
}

/* =========================
   HERO IDENTIQUE
========================= */
.hero {
  position: relative;
  padding: 8rem 2rem 5rem;
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #ffffff, #f8fafc);
}

.hero-content {
  max-width: 900px;
  text-align: center;
  z-index: 2;
}

.hero-subtitle {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: white;
  color: #555;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  border: 1px solid #e5e7eb;
}

.hero-title {
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 900;
  line-height: 1;
}

.hero-title span {
  background: linear-gradient(to right, #FFA233, #FFE433);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-text {
  max-width: 620px;
  margin: 0 auto;
  color: #555;
  font-size: 1.1rem;
  line-height: 1.8;
}

/* =========================
   BLOBS IDENTIQUES
========================= */
.hero-bg {
  position: absolute;
  border-radius: 999px;
  filter: blur(120px);
  opacity: 0.35;
}

.hero-bg-left {
  width: 300px;
  height: 300px;
  background: rgba(59, 130, 246, 0.15);
  left: 10%;
  top: 15%;
}

.hero-bg-right {
  width: 300px;
  height: 300px;
  background: rgba(255, 162, 51, 0.15);
  right: 10%;
  top: 10%;
}

/* =========================
   TIMELINE IDENTIQUE
========================= */
.timeline-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.timeline {
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-left: 1rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  width: 3px;
  height: 100%;
  border-radius: 999px;
  background: #e5e7eb;
}

.timeline-item {
  position: relative;
  padding-left: 3rem;
  cursor: pointer;
}

.timeline-dot {
  position: absolute;
  left: 12px;
  top: 2.3rem;
  width: 26px;
  height: 26px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: white;
  border: 4px solid #FFA233;
  box-shadow: 0 0 12px rgba(255, 162, 51, 0.4);
  transition: transform 0.3s ease;
}

.timeline-item:hover .timeline-dot {
  transform: translateX(-50%) scale(1.2);
}

/* =========================
   CARD IDENTIQUE FORMATIONS
========================= */
.experience-card {
  padding: 2rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid #e5e7eb;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.timeline-item:hover .experience-card {
  transform: translateY(-6px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.12);
}

/* TEXT */
.card-date {
  display: inline-flex;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: #fef3c7;
  color: #b45309;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.8rem;
  font-weight: 800;
}

.card-subtitle {
  color: #555;
  font-weight: 600;
  margin-bottom: 1rem;
}

.card-description {
  color: #666;
  line-height: 1.7;
}

/* FOOTER */
.card-footer {
  margin-top: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #f59e0b;
  font-weight: 600;
  text-decoration: none;
}

.card-footer svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.timeline-item:hover .card-footer svg {
  transform: translateX(6px);
}

/* MOBILE */
@media (max-width: 768px) {
  .hero { padding-top: 6rem; }
  .timeline-item { padding-left: 2.5rem; }
  .experience-card { padding: 1.5rem; }
  .card-title { font-size: 1.4rem; }
}

</style>