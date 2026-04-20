<template>
  <main class="experiences-page">

    <section class="hero">
      <div class="hero-bg hero-bg-left"></div>
      <div class="hero-bg hero-bg-right"></div>

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
.experiences-page {
  min-height: 100vh;
  background: radial-gradient(circle at top left, rgba(59,130,246,0.12), transparent 40%),
              radial-gradient(circle at bottom right, rgba(168,85,247,0.12), transparent 40%),
              linear-gradient(135deg, #0b0f1a 0%, #0f172a 50%, #020617 100%);
  color: #e2e8f0;
}

.hero {
  position: relative;
  padding: 8rem 2rem 5rem;
  text-align: center;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-subtitle {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: rgba(59,130,246,0.15);
  color: #60a5fa;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  line-height: 1;
}

.hero-title span {
  background: linear-gradient(to right, #60a5fa, #22d3ee, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-bg {
  position: absolute;
  border-radius: 999px;
  filter: blur(100px);
  opacity: 0.5;
}

.hero-bg-left {
  width: 300px;
  height: 300px;
  background: rgba(59,130,246,0.25);
  left: 10%;
  top: 10%;
}

.hero-bg-right {
  width: 300px;
  height: 300px;
  background: rgba(168,85,247,0.25);
  right: 10%;
  top: 5%;
}

.timeline-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem 5rem;
}

.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-left: 1rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 12px;
  top: 0;
  width: 3px;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(to bottom, #3b82f6, #a855f7);
}

.timeline-item {
  position: relative;
  padding-left: 3.5rem;
  cursor: pointer;
}

.timeline-dot {
  position: absolute;
  left: 0;
  top: 2.3rem;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #a855f7);
  border: 4px solid #0b0f1a;
  box-shadow: 0 0 15px rgba(59,130,246,0.6), 0 0 25px rgba(168,85,247,0.4);
  transition: transform 0.3s ease;
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.2);
}

.experience-card {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  transition: all 0.3s ease;
}

.timeline-item:hover .experience-card {
  transform: translateY(-6px);
  border-color: rgba(59,130,246,0.5);
  box-shadow: 0 15px 40px rgba(59,130,246,0.25);
}

.card-date {
  display: inline-block;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background: rgba(59,130,246,0.15);
  color: #60a5fa;
  font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.8rem;
  font-weight: 800;
}

.card-company {
  color: #22d3ee;
  font-weight: 600;
  margin-top: 0.5rem;
}

.card-contract {
  color: #a855f7;
  font-weight: 600;
  margin-bottom: 1rem;
}

.card-description {
  color: #94a3b8;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .timeline-item {
    padding-left: 2.5rem;
  }

  .experience-card {
    padding: 1.5rem;
  }
}
</style>