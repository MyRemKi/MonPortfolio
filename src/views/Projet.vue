```vue
<template>
  <div class="installer-page">
    <header class="header">
      <div class="header-content">
        <div class="brand">
          <div class="brand-mark">UCL</div>

          <div>
            <h1>Université Catholique de Lille</h1>
            <span>Service Informatique</span>
          </div>
        </div>
      </div>
    </header>

    <main class="main">
      <section class="hero">
        <div class="badge">
          <span class="status-dot"></span>
          Service Informatique
        </div>

        <h2>
          Installation
          <strong>du logiciel</strong>
        </h2>

        <p class="description">
          Téléchargez les fichiers nécessaires à l'installation
          du logiciel mis à disposition par le Service Informatique.
        </p>

        <div class="download-card">
          <div class="file-icon">
            ZIP
          </div>

          <div class="file-info">
            <h3>MonLogiciel</h3>
            <p>Archive d'installation · .zip</p>
          </div>

          <a
            class="download-button"
            href="/installer/Rendu_Projet_Stugo_CO2_Explorer.zip"
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
              <p>Contactez le Service Informatique.</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>
        © {{ new Date().getFullYear() }}
        Université Catholique de Lille
        · Service Informatique
      </p>
    </footer>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.installer-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(circle at 15% 20%, rgba(0, 72, 150, 0.08), transparent 30%),
    radial-gradient(circle at 85% 80%, rgba(230, 126, 34, 0.07), transparent 30%),
    #f7f9fc;
  color: #172033;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

.header {
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #e5e9f0;
}

.header-content {
  max-width: 1180px;
  margin: auto;
  padding: 22px 30px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 15px;
}

.brand-mark {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #004b93;
  color: white;

  font-size: 15px;
  font-weight: 800;
  letter-spacing: 1px;

  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 75, 147, 0.18);
}

.brand h1 {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: #17365d;
}

.brand span {
  display: block;
  margin-top: 3px;
  font-size: 13px;
  color: #687386;
}

.main {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 80px 25px;
}

.hero {
  width: 100%;
  max-width: 900px;
  text-align: center;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 8px 14px;

  background: #edf5ff;
  border: 1px solid #d6e7fa;
  border-radius: 50px;

  color: #00549e;
  font-size: 13px;
  font-weight: 600;
}

.status-dot {
  width: 7px;
  height: 7px;
  background: #28a745;
  border-radius: 50%;
}

h2 {
  margin: 25px 0 15px;

  font-size: clamp(38px, 6vw, 62px);
  line-height: 1.05;
  letter-spacing: -2px;
  font-weight: 400;
  color: #172033;
}

h2 strong {
  display: block;
  color: #004b93;
  font-weight: 750;
}

.description {
  max-width: 650px;
  margin: 0 auto 45px;

  color: #667085;
  font-size: 16px;
  line-height: 1.7;
}

.download-card {
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 22px;

  text-align: left;

  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #e1e6ee;
  border-radius: 18px;

  box-shadow:
    0 15px 45px rgba(24, 45, 75, 0.08);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.download-card:hover {
  transform: translateY(-3px);
  box-shadow:
    0 20px 55px rgba(24, 45, 75, 0.12);
}

.file-icon {
  width: 58px;
  height: 58px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  background: #eef5fc;
  color: #00549e;

  border-radius: 13px;

  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
}

.file-info {
  flex: 1;
}

.file-info h3 {
  margin: 0 0 5px;

  font-size: 16px;
  font-weight: 700;
  color: #172033;
}

.file-info p {
  margin: 0;

  font-size: 13px;
  color: #7a8495;
}

.download-button {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  padding: 13px 20px;

  background: #004b93;
  color: white;

  border-radius: 10px;

  text-decoration: none;

  font-size: 14px;
  font-weight: 650;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.download-button:hover {
  background: #003b75;
  transform: translateY(-1px);
  box-shadow: 0 7px 18px rgba(0, 75, 147, 0.22);
}

.download-button span {
  font-size: 19px;
  line-height: 1;
}

.information {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  margin-top: 25px;

  text-align: left;
}

.info-item {
  display: flex;
  gap: 12px;

  padding: 18px;

  background: rgba(255, 255, 255, 0.65);
  border: 1px solid #e6eaf0;
  border-radius: 13px;
}

.info-icon {
  width: 28px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 50%;

  background: #edf5ff;
  color: #00549e;

  font-size: 13px;
  font-weight: bold;
}

.info-item strong {
  display: block;
  margin-bottom: 4px;

  font-size: 13px;
  color: #26364d;
}

.info-item p {
  margin: 0;

  color: #788396;
  font-size: 12px;
  line-height: 1.5;
}

footer {
  padding: 25px;

  text-align: center;

  border-top: 1px solid #e5e9f0;
  background: white;

  color: #8a94a5;
  font-size: 12px;
}

@media (max-width: 700px) {
  .header-content {
    padding: 18px 20px;
  }

  .brand h1 {
    font-size: 15px;
  }

  .main {
    padding: 55px 18px;
  }

  h2 {
    font-size: 42px;
    letter-spacing: -1.5px;
  }

  .download-card {
    flex-wrap: wrap;
  }

  .file-info {
    min-width: calc(100% - 80px);
  }

  .download-button {
    width: 100%;
    justify-content: center;
  }

  .information {
    grid-template-columns: 1fr;
  }
}
</style>