<template>
  <main class="contact-page pt-32 pb-20 px-6 max-w-4xl mx-auto">
    <div class="contact-hub mb-12">
      <div class="hub-card">
        <div class="hub-header">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            class="hub-icon"
          />

          <div>
            <p class="hub-title">Contact & Réseaux</p>
            <p class="hub-subtitle">Disponible pour collaboration & projets</p>
          </div>
        </div>

        <div class="hub-content">
          <div class="hub-block">
            <p class="label">Infos Contact</p>

            <div class="info">
              <span>📞 +33 7 53 46 11 18</span>
              <span>✉️ remi.kalkan@hotmail.com</span>
            </div>
          </div>

          <a href="https://www.linkedin.com/in/remi-kalkan-6b7a06224?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BXGjEkv%2FReK0Tb4ZZWOMKg%3D%3D" target="_blank" class="hub-block link">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              class="mini-icon"
            />

            <div>
              <p class="label">LinkedIn</p>
              <p class="link-text">Voir mon profil →</p>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="form-container bg-white/5 border border-white/10 rounded-[3rem] p-12 backdrop-blur-xl">
      <h2 class="text-5xl font-black mb-10 tracking-tighter">
        Contact
        <span class="text-blue-500">spontané</span>
      </h2>

      <form class="space-y-6" @submit.prevent="sendEmail">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input v-model="form.firstname" type="text" placeholder="PRÉNOM"
            class="bg-slate-950 border border-white/10 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all">

          <input v-model="form.lastname" type="text" placeholder="NOM"
            class="bg-slate-950 border border-white/10 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all">
        </div>

        <input v-model="form.email" type="email" placeholder="EMAIL"
          class="bg-slate-950 border border-white/10 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all w-full">

        <input v-model="form.subject" type="text" placeholder="OBJET"
          class="bg-slate-950 border border-white/10 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all w-full">

        <textarea v-model="form.message" rows="5" placeholder="VOTRE MESSAGE"
          class="w-full bg-slate-950 border border-white/10 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all"></textarea>

        <button type="submit"
          class="w-full bg-orange-600 hover:bg-blue-600 text-white font-black py-5 rounded-2xl transition-all uppercase tracking-widest shadow-lg shadow-orange-500/20">
          {{ loading ? "ENVOI..." : "Envoyer la requête" }}
        </button>
      </form>
    </div>
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

    alert("Message envoyé avec succès 🚀")

    form.value = {
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: ""
    }

  } catch (error) {
    console.error(error)
    alert("Erreur lors de l'envoi ❌")
  }

  loading.value = false
}
</script>

<style scoped>
.contact-hub,
.form-container {
  width: 100%;
  max-width: 900px;
}

.contact-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  padding-top: 120px;
  padding-bottom: 120px;
  position: relative;
  isolation: isolate;
}

.contact-page::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top, rgba(59,130,246,0.12), transparent 60%),
              radial-gradient(circle at bottom, rgba(34,211,238,0.06), transparent 60%);
  pointer-events: none;
  z-index: 0;
}

.form-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  padding: 60px;
  border-radius: 40px;
  background: rgba(2, 6, 23, 0.65);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  box-shadow: 0 30px 100px rgba(0,0,0,0.6), 0 0 80px rgba(59,130,246,0.08);
  transition: all 0.4s ease;
}

.form-container:hover {
  transform: translateY(-4px);
  box-shadow: 0 40px 120px rgba(0,0,0,0.65), 0 0 120px rgba(34,211,238,0.12);
}

h2 {
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 20px;
  letter-spacing: -0.05em;
  color: white;
}

input, textarea {
  width: 100%;
  padding: 16px 18px;
  border-radius: 16px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255,255,255,0.08);
  color: white;
  outline: none;
  transition: all 0.25s ease;
}

input:focus, textarea:focus {
  border-color: rgba(34,211,238,0.6);
  box-shadow: 0 0 0 4px rgba(34,211,238,0.12);
  transform: translateY(-1px);
}

input::placeholder,
textarea::placeholder {
  color: rgba(255,255,255,0.35);
}

textarea {
  min-height: 160px;
  resize: none;
}

button {
  position: relative;
  overflow: hidden;
  padding: 18px 22px;
  border-radius: 18px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: linear-gradient(90deg, #2563eb, #22d3ee);
  color: white;
  box-shadow: 0 10px 40px rgba(34,211,238,0.15);
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 60px rgba(34,211,238,0.25);
}

.contact-hub {
  display: flex;
  justify-content: center;
}

.hub-card {
  width: 100%;
  max-width: 900px;
  padding: 30px;
  border-radius: 30px;
  background: rgba(2, 6, 23, 0.65);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(25px);
  box-shadow: 0 30px 100px rgba(0,0,0,0.5), 0 0 60px rgba(59,130,246,0.08);
  transition: 0.3s;
}

.hub-card:hover {
  transform: translateY(-3px);
}

.hub-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.hub-icon {
  width: 42px;
  height: 42px;
}

.hub-title {
  color: white;
  font-weight: 800;
  font-size: 1.3rem;
}

.hub-subtitle {
  color: rgba(255,255,255,0.5);
  font-size: 0.9rem;
}

.hub-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hub-block {
  padding: 18px;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  gap: 15px;
  transition: 0.3s;
}

.hub-block:hover {
  border-color: rgba(59,130,246,0.4);
  transform: translateY(-2px);
}

.label {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  letter-spacing: 0.1em;
  margin-bottom: 5px;
}

.info span {
  display: block;
  color: white;
  font-weight: 600;
}

.link {
  text-decoration: none;
}

.mini-icon {
  width: 38px;
  height: 38px;
}

.link-text {
  color: #3b82f6;
  font-weight: 600;
}

@media (max-width: 768px) {
  .hub-content {
    grid-template-columns: 1fr;
  }
}
</style>