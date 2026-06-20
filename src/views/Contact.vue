<template>
  <main class="contact-page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg hero-bg-left"></div>
      <div class="hero-bg hero-bg-right"></div>

      <div class="hero-content">
        <span class="hero-subtitle">Restons en contact</span>

        <h1 class="hero-title">
          Me <span>Contacter</span>
        </h1>

        <p class="hero-text">
          Disponible pour une alternance, une collaboration ou simplement échanger sur vos projets data & IA.
        </p>
      </div>
    </section>

    <!-- MAIN LAYOUT -->
    <section class="layout">

      <!-- LEFT — INFOS -->
      <aside class="left-panel">

        <!-- STATUS -->
        <div class="status-card">
          <span class="status-dot"></span>
          <div>
            <p class="status-title">Disponible dès sept. 2026</p>
            <p class="status-sub">Alternance · 1 à 2 ans · France</p>
          </div>
        </div>

        <!-- CONTACT LINKS -->
        <div class="info-stack">

          <a href="tel:+33753461118" class="info-row">
            <div class="info-icon">📞</div>
            <div>
              <p class="info-label">Téléphone</p>
              <p class="info-value">+33 7 53 46 11 18</p>
            </div>
          </a>

          <a href="mailto:remi.kalkan@hotmail.com" class="info-row">
            <div class="info-icon">✉️</div>
            <div>
              <p class="info-label">Email</p>
              <p class="info-value">remi.kalkan@hotmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/remi-kalkan-6b7a06224?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BXGjEkv%2FReK0Tb4ZZWOMKg%3D%3D"
            target="_blank"
            class="info-row"
          >
            <div class="info-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" class="linkedin-icon" />
            </div>
            <div>
              <p class="info-label">LinkedIn</p>
              <p class="info-value link-value">Voir mon profil →</p>
            </div>
          </a>

          <div class="info-row static">
            <div class="info-icon">📍</div>
            <div>
              <p class="info-label">Localisation</p>
              <p class="info-value">Lille / Paris · France</p>
            </div>
          </div>

        </div>

        <!-- RESPONSE TIME -->
        <div class="response-tag">
          ⚡ Réponse sous 24h
        </div>

      </aside>

      <!-- RIGHT — FORM -->
      <div class="form-card">

        <div class="form-header">
          <span class="badge">Message direct</span>
          <h2 class="form-title">Envoyer un <span>message</span></h2>
          <p class="form-subtitle">Décrivez votre projet ou votre offre, je vous réponds rapidement.</p>
        </div>

        <form @submit.prevent="sendEmail" class="form-body">

          <div class="form-row">
            <div class="field">
              <label>Prénom</label>
              <input v-model="form.firstname" type="text" placeholder="Votre prénom" required />
            </div>
            <div class="field">
              <label>Nom</label>
              <input v-model="form.lastname" type="text" placeholder="Votre nom" required />
            </div>
          </div>

          <div class="field">
            <label>Email</label>
            <input v-model="form.email" type="email" placeholder="votre@email.com" required />
          </div>

          <div class="field">
            <label>Objet</label>
            <input v-model="form.subject" type="text" placeholder="Alternance, collaboration, question..." required />
          </div>

          <div class="field">
            <label>Message</label>
            <textarea v-model="form.message" rows="5" placeholder="Décrivez votre besoin..." required></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="loading">
            {{ loading ? "Envoi en cours..." : "Envoyer le message" }}
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19" stroke="currentColor" stroke-width="2"/>
              <path d="M13 6L19 12L13 18" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>

        </form>

      </div>

    </section>

  </main>
</template>

<script setup>
import { ref } from "vue"
import emailjs from "@emailjs/browser"

const form = ref({
  firstname: "",
  lastname: "",
  email: "",
  subject: "",
  message: ""
})

const loading = ref(false)

const sendEmail = async () => {
  loading.value = true

  try {
    await emailjs.send(
      "service_mcik5wj",
      "template_lcv2at8",
      {
        firstname: form.value.firstname,
        lastname: form.value.lastname,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message
      },
      "oFrKYXlBuqXM8ZzAH"
    )

    alert("Message envoyé avec succès !")

    form.value = {
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: ""
    }

  } catch (error) {
    console.error(error)
    alert("Erreur lors de l'envoi.")
  }

  loading.value = false
}
</script>

<style scoped>
/* GLOBAL */
.contact-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #e5e7eb, #f1f5f9);
  padding-bottom: 5rem;
  color: #1a1a1a;
  font-family: "Segoe UI", Arial, sans-serif;
}

/* =====================
   HERO
===================== */
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
  margin-bottom: 1.5rem;
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

/* =====================
   LAYOUT 2 COLONNES
===================== */
.layout {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 2rem;
  align-items: start;
}

/* =====================
   PANNEAU GAUCHE
===================== */
.left-panel {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: sticky;
  top: 6rem;
}

/* STATUS */
.status-card {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 1.2rem 1.4rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #bbf7d0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #22c55e;
  flex-shrink: 0;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2); }
  50%       { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0.08); }
}

.status-title {
  font-weight: 700;
  font-size: 0.95rem;
  color: #166534;
}

.status-sub {
  font-size: 0.8rem;
  color: #4ade80;
  margin-top: 0.1rem;
}

/* INFO STACK */
.info-stack {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  text-decoration: none;
  color: inherit;
  transition: all 0.25s ease;
}

.info-row:not(.static):hover {
  transform: translateX(6px);
  border-color: #FFA233;
  box-shadow: 0 8px 24px rgba(255, 162, 51, 0.15);
}

.info-icon {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: #fef3c7;
  border-radius: 10px;
  flex-shrink: 0;
}

.linkedin-icon {
  width: 24px;
  height: 24px;
}

.info-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #999;
  font-weight: 700;
  margin-bottom: 0.15rem;
}

.info-value {
  font-weight: 600;
  font-size: 0.88rem;
  color: #1a1a1a;
}

.link-value {
  color: #f59e0b;
}

/* RESPONSE TAG */
.response-tag {
  text-align: center;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  background: white;
  border: 1px solid #e5e7eb;
  font-size: 0.8rem;
  font-weight: 600;
  color: #555;
}

/* =====================
   FORMULAIRE (droite)
===================== */
.form-card {
  padding: 2.5rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid #e5e7eb;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.form-header {
  margin-bottom: 2rem;
}

.badge {
  display: inline-block;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  background: #fef3c7;
  color: #b45309;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 0.9rem;
}

.form-title {
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.form-title span {
  background: linear-gradient(to right, #FFA233, #FFE433);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.form-subtitle {
  color: #777;
  font-size: 0.92rem;
  line-height: 1.6;
}

.form-body {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.field label {
  font-size: 0.82rem;
  font-weight: 700;
  color: #444;
  letter-spacing: 0.02em;
}

input,
textarea {
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  background: #f8fafc;
  border: 1px solid #e5e7eb;
  color: #1a1a1a;
  outline: none;
  font-family: inherit;
  font-size: 0.95rem;
  transition: all 0.25s ease;
  box-sizing: border-box;
}

input:focus,
textarea:focus {
  border-color: #FFA233;
  box-shadow: 0 0 0 3px rgba(255, 162, 51, 0.15);
  background: white;
}

input::placeholder,
textarea::placeholder {
  color: #bbb;
}

textarea {
  resize: none;
  min-height: 140px;
}

/* BOUTON */
.submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  border-radius: 999px;
  background: linear-gradient(to right, #FFA233, #FFE433);
  color: #1a1a1a;
  font-weight: 800;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: 0.4rem;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(255, 162, 51, 0.4);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.submit-btn svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.submit-btn:hover svg {
  transform: translateX(4px);
}

/* =====================
   RESPONSIVE
===================== */
@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
  }
  .left-panel {
    position: static;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .status-card {
    grid-column: 1 / -1;
  }
  .info-stack {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .response-tag {
    grid-column: 1 / -1;
  }
}

@media (max-width: 600px) {
  .hero { padding-top: 6rem; }
  .form-row { grid-template-columns: 1fr; }
  .form-card { padding: 1.5rem; }
  .left-panel { grid-template-columns: 1fr; }
  .info-stack { grid-template-columns: 1fr; }
}
</style>
