<template>
  <main class="experiences-page">

    <section class="hero">
      <div class="hero-content">
        <span class="hero-subtitle">Mon parcours pro</span>
        <h1 class="hero-title">
          Expériences <span>Professionnelles</span>
        </h1>
      </div>
    </section>

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
              {{ exp.start }} → {{ exp.end }}
            </div>

            <h2 class="card-title">{{ exp.job }}</h2>

            <p class="card-company">{{ exp.company }}</p>

            <p class="card-contract">{{ exp.contract }}</p>

            <p class="card-description">
              {{ exp.short }}
            </p>

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
/* ===== GLOBAL ===== */
.experiences-page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #111827, #0b1220);
  color: #e5e7eb;
  font-family: system-ui, -apple-system, sans-serif;
}

/* ===== HERO ===== */
.hero {
  padding: 6rem 2rem 3rem;
  text-align: center;
}

.hero-subtitle {
  display: inline-block;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background: rgba(59,130,246,0.1);
  color: #93c5fd;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
}

.hero-title {
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1px;
}

.hero-title span {
  color: #3b82f6;
}

/* ===== TIMELINE ===== */
.timeline-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
}

.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-left: 1rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  width: 2px;
  height: 100%;
  background: rgba(255,255,255,0.15);
}

/* ===== ITEM ===== */
.timeline-item {
  position: relative;
  padding-left: 3rem;
  cursor: pointer;
}

/* DOT */
.timeline-dot {
  position: absolute;
  left: 0;
  top: 1.8rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #3b82f6;
  border: 3px solid #111827;
  box-shadow: 0 0 0 4px rgba(59,130,246,0.15);
}

/* ===== CARD ===== */
.experience-card {
  background: #1f2937;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 1.6rem;
  box-shadow: 0 8px 25px rgba(0,0,0,0.25);
  transition: all 0.2s ease;
}

/* HOVER */
.timeline-item:hover .experience-card {
  transform: translateY(-4px);
  border-color: #3b82f6;
  box-shadow: 0 12px 30px rgba(59,130,246,0.15);
}

/* ===== TEXT ===== */
.card-date {
  display: inline-block;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  color: #9ca3af;
  font-weight: 600;
  font-size: 0.75rem;
  margin-bottom: 0.8rem;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #f3f4f6;
}

.card-company {
  color: #3b82f6;
  font-weight: 600;
  margin-top: 0.4rem;
}

.card-contract {
  color: #9ca3af;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
}

.card-description {
  color: #d1d5db;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {
  .timeline-item {
    padding-left: 2.2rem;
  }

  .experience-card {
    padding: 1.3rem;
  }
}
</style>