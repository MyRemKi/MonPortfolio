<template>
  <div class="installer-page">
    <header class="header">
      <div class="header-content">
        <div class="brand">
          <div class="brand-mark">RK</div>

          <div>
            <h1>Remi Kalkan</h1>
            <span>Distribution de projet</span>
          </div>
        </div>
      </div>
    </header>

    <main class="main">
      <section class="hero">
        <div class="badge">
          <span class="status-dot"></span>
          Téléchargement disponible
        </div>

        <h2>
          Rendu de projet
          <strong>Stugo CO2 Explorer</strong>
        </h2>

        <p class="description">
          Téléchargez l'archive du projet ci-dessous. Ce fichier vous a
          été partagé directement car il dépasse la limite de taille
          des pièces jointes email.
        </p>

        <div class="download-card">
          <div class="file-icon">
            ZIP
          </div>

          <div class="file-info">
            <h3>Stugo CO2 Explorer</h3>
            <p>Archive d'installation · .exe</p>
          </div>

          <a
            class="download-button"
            href="https://github.com/MyRemKi/MonPortfolio/releases/download/v1.0/Rendu_Projet_Stugo_CO2_Explorer.zip"
            download
          >
            <span>↓</span>
            Télécharger
          </a>
        </div>

        <div class="information">
          <div class="info-item">
            <span class="info-icon">✓</span>
            <div>
              <strong>Installation simple</strong>
              <p>Téléchargez puis décompressez l'archive.</p>
            </div>
          </div>

          <div class="info-item">
            <span class="info-icon">ⓘ</span>
            <div>
              <strong>Besoin d'aide ?</strong>
              <p>Contactez-moi via la page Contact du portfolio.</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>
        © {{ new Date().getFullYear() }}
        Remi Kalkan
      </p>
    </footer>
  </div>
</template>

<style scoped>
.installer-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0b0c10;
  color: #f4f4f5;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
}

.header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.header-content {
  max-width: 960px;
  margin: 0 auto;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-mark {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}

.brand h1 {
  font-size: 1rem;
  margin: 0;
}

.brand span {
  font-size: 0.8rem;
  color: #a1a1aa;
}

.main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
}

.hero {
  max-width: 560px;
  width: 100%;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.12);
  color: #4ade80;
  margin-bottom: 1.25rem;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4ade80;
}

.hero h2 {
  font-size: 1.9rem;
  line-height: 1.3;
  margin: 0 0 1rem;
  font-weight: 600;
}

.hero h2 strong {
  display: block;
  color: #4ade80;
}

.description {
  color: #a1a1aa;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.download-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #16171c;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 1.25rem;
  margin-bottom: 2rem;
}

.file-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(34, 197, 94, 0.12);
  color: #4ade80;
  font-weight: 700;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.file-info {
  flex: 1;
  min-width: 0;
}

.file-info h3 {
  margin: 0 0 0.15rem;
  font-size: 0.95rem;
}

.file-info p {
  margin: 0;
  font-size: 0.8rem;
  color: #a1a1aa;
}

.download-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #22c55e;
  color: #0b0c10;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.65rem 1.1rem;
  border-radius: 10px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.15s ease;
}

.download-button:hover {
  background: #4ade80;
}

.information {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.info-icon {
  color: #4ade80;
  font-size: 1rem;
  line-height: 1.4;
}

.info-item strong {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.15rem;
}

.info-item p {
  margin: 0;
  font-size: 0.8rem;
  color: #a1a1aa;
  line-height: 1.5;
}

footer {
  text-align: center;
  padding: 1.5rem;
  font-size: 0.75rem;
  color: #71717a;
}
</style>