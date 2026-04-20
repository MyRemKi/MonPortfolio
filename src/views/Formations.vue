<template>
  <main class="formations-page">
    <section class="hero">
      <div class="hero-bg hero-bg-left"></div>
      <div class="hero-bg hero-bg-right"></div>

      <div class="hero-content">
        <span class="hero-subtitle">Mon parcours</span>
        <h1 class="hero-title">
          Parcours <span>Académique</span>
        </h1>
        <p class="hero-text">
          Découvrez mes formations et spécialités à travers une timeline moderne.
        </p>
      </div>
    </section>

    <section class="timeline-section">
      <div class="timeline">
        <div
          v-for="f in formations"
          :key="f.id"
          class="timeline-item"
          @click="goTo(f.id)"
        >
          <div class="timeline-dot"></div>

          <div class="formation-card">
            <div class="card-date">{{ f.date }}</div>

            <h2 class="card-title">{{ f.title }}</h2>

            <p class="card-school">{{ f.school }}</p>

            <p class="card-description">
              {{ f.details }}
            </p>

            <div class="card-footer">
              <span>Voir la formation</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" stroke-width="2"/>
                <path d="M13 6L19 12L13 18" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { formations } from '@/data/formations'

const router = useRouter()

const goTo = (id) => {
  router.push(`/formation/${id}`)
}
</script>

<style scoped>
.formations-page {
  min-height: 100vh;
  background: radial-gradient(circle at top left, rgba(59,130,246,0.12), transparent 40%),
              radial-gradient(circle at bottom right, rgba(168,85,247,0.12), transparent 40%),
              linear-gradient(135deg, #0b0f1a 0%, #0f172a 50%, #020617 100%);
  padding-bottom: 5rem;
  color: #e2e8f0;
}

.hero {
  position: relative;
  padding: 8rem 2rem 5rem;
  display: flex;
  justify-content: center;
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
  margin-bottom: 1rem;
}

.hero-title span {
  background: linear-gradient(to right, #60a5fa, #22d3ee, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-text {
  max-width: 620px;
  margin: 0 auto;
  color: #94a3b8;
  font-size: 1.1rem;
  line-height: 1.8;
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
  top: 15%;
}

.hero-bg-right {
  width: 300px;
  height: 300px;
  background: rgba(168,85,247,0.25);
  right: 10%;
  top: 10%;
}

.timeline-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
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
  left: 13px;
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

.formation-card {
  position: relative;
  padding: 2rem;
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  transition: all 0.3s ease;
}

.timeline-item:hover .formation-card {
  transform: translateY(-6px);
  border-color: rgba(59,130,246,0.5);
  box-shadow: 0 15px 40px rgba(59,130,246,0.25);
}

.card-date {
  display: inline-flex;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: rgba(59,130,246,0.15);
  color: #60a5fa;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.card-school {
  color: #22d3ee;
  font-weight: 600;
  margin-bottom: 1rem;
}

.card-description {
  color: #94a3b8;
  line-height: 1.7;
}

.card-footer {
  margin-top: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #60a5fa;
  font-weight: 600;
}

.card-footer svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.timeline-item:hover .card-footer svg {
  transform: translateX(6px);
}

@media (max-width: 768px) {
  .hero {
    padding-top: 6rem;
  }

  .timeline-item {
    padding-left: 2.8rem;
  }

  .formation-card {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.4rem;
  }
}
</style>