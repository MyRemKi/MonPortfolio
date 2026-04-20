<template>
  <main class="projets-page">

    <section class="hero">
      <div class="hero-bg hero-bg-left"></div>
      <div class="hero-bg hero-bg-right"></div>

      <div class="hero-content">
        <span class="hero-subtitle">Mes réalisations</span>

        <h1 class="hero-title">
          Projets <span>IT</span>
        </h1>

        <p class="hero-text">
          Exploration de mes projets techniques en développement et systèmes intelligents.
        </p>
      </div>
    </section>

    <section class="timeline-section">
      <div class="timeline">

        <div
          v-for="projet in projets"
          :key="projet.id"
          class="timeline-item"
          @click="goTo(projet.id)"
        >
          <div class="timeline-dot"></div>

          <div class="project-card">

            <div class="card-date">
              {{ projet.year }} • {{ projet.status }}
            </div>

            <h2 class="card-title">{{ projet.name }}</h2>

            <p class="card-subtitle">
              {{ projet.subtitle }}
            </p>

            <p class="card-description">
              {{ projet.desc }}
            </p>

            <div class="stack">
              <span v-for="tech in projet.stack" :key="tech" class="chip">
                {{ tech }}
              </span>
            </div>

            <router-link
              :to="{ name: 'projet-detail', params: { id: projet.id } }"
              class="card-footer"
              @click.stop
            >
              <span>Voir le projet</span>
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
import { projets } from '@/data/projets'

const router = useRouter()
const goTo = (id) => {
  router.push(`/projet/${id}`)
}
</script>

<style scoped>
.projets-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(59,130,246,0.12), transparent 40%),
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
  left: 10px;
  top: 0;
  width: 3px;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(to bottom, #3b82f6, #a855f7);
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
  width: 28px;
  height: 28px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #a855f7);
  border: 4px solid #0b0f1a;
  box-shadow: 0 0 12px rgba(59,130,246,0.7), 0 0 20px rgba(168,85,247,0.5);
  transition: transform 0.3s ease;
}

.timeline-item:hover .timeline-dot {
  transform: translateX(-50%) scale(1.2);
}

.project-card {
  padding: 2rem;
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  transition: all 0.3s ease;
}

.timeline-item:hover .project-card {
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
}

.card-subtitle {
  color: #22d3ee;
  font-weight: 600;
  margin-bottom: 1rem;
}

.card-description {
  color: #94a3b8;
  line-height: 1.7;
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.chip {
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: rgba(168,85,247,0.15);
  color: #c4b5fd;
  font-size: 0.75rem;
  font-weight: 600;
}

.card-footer {
  margin-top: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #60a5fa;
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

@media (max-width: 768px) {
  .hero {
    padding-top: 6rem;
  }

  .timeline-item {
    padding-left: 2.5rem;
  }

  .project-card {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.4rem;
  }
}
</style>