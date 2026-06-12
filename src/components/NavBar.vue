<template>
  <nav class="navbar-container">
    <div class="navbar">
      <router-link to="/" class="navbar-brand">
        <div class="logo-icon"></div>
        <span class="brand-text">Portfolio : Remi Kalkan</span>
      </router-link>

      <ul class="navbar-nav">
        <li class="nav-item" v-for="item in links" :key="item.name">
          <router-link 
            :to="item.to" 
            class="nav-link"
            active-class="active"
            :exact-active-class="item.exact ? 'active' : undefined"
          >
            <span>{{ item.name }}</span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/contact" class="cta-button">
            Je prends contact
          </router-link>
        </li>
      </ul>

      <button class="mobile-toggle" @click="toggleMenu" :class="{ active: isOpen }">
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  </nav>

  <div 
    class="mobile-menu-overlay" 
    :class="{ active: isOpen }"
    @click="closeMenu"
  ></div>

  <div class="mobile-menu" :class="{ active: isOpen }">
    <ul class="mobile-menu-nav">
      <li class="mobile-menu-item" v-for="item in links" :key="item.name">
        <router-link 
          :to="item.to" 
          class="mobile-menu-link"
          active-class="active"
          @click="closeMenu"
        >
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>

    <div class="mobile-cta">
      <router-link to="/contact" class="mobile-cta-button" @click="closeMenu">
        Prendre contact
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const links = [
  { name: 'Accueil', to: '/', exact: true },
  { name: 'Experiences', to: '/experiences', exact: true },
  { name: 'Formations', to: '/formations' },
  { name: 'Projets', to: '/projets' },
]
</script>

<style scoped>
.navbar-container {
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999;
  width: calc(100% - 60px);
  max-width: 1100px;
}

.navbar {
  background: rgba(10, 10, 15, 0.75);
  backdrop-filter: blur(12px);
  border-radius: 50px;
  padding: 14px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255,255,255,0.05);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

/* LOGO */

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #6EC1FF;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}

.navbar-brand:hover {
  color: white;
}

.logo-icon {
  width: 35px;
  height: 35px;
  background: linear-gradient(135deg, #6EC1FF, #A084FF);
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(110,193,255,0.5);
}

/* NAV */

.navbar-nav {
  display: flex;
  gap: 18px;
  list-style: none;
}

/* LIENS */

.nav-link {
  position: relative;
  color: #6EC1FF;
  padding: 6px 4px;
  text-decoration: none;
  transition: color 0.25s ease;
}

/* underline animée */

.nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: #6EC1FF;
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

/* hover */

.nav-link:hover {
  color: white;
  text-shadow: 0 0 6px rgba(110,193,255,0.4);
}

.nav-link:hover::after {
  width: 100%;
}

/* active */

.nav-link.active {
  color: white;
}

.nav-link.active::after {
  width: 100%;
}

/* CTA */

.cta-button {
  background: linear-gradient(135deg, #6EC1FF, #A084FF);
  padding: 8px 18px;
  border-radius: 20px;
  color: white;
  font-weight: 500;
  transition: 0.3s;
  box-shadow: 0 5px 15px rgba(110,193,255,0.4);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(110,193,255,0.6);
}

/* HAMBURGER */

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #6EC1FF;
  margin: 5px 0;
  transition: 0.3s;
}

/* MENU MOBILE */

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #0a0a0f;
  transform: translateY(-100%);
  transition: 0.4s ease;
  z-index: 99997;
}

.mobile-menu.active {
  transform: translateY(0);
}

.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  opacity: 0;
  visibility: hidden;
  z-index: 99996;
  transition: 0.3s;
}

.mobile-menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-menu-nav {
  padding-top: 120px;
  list-style: none;
  text-align: center;
}

.mobile-menu-link {
  display: block;
  padding: 15px;
  color: #6EC1FF;
  font-size: 1.2rem;
  transition: 0.3s;
}

.mobile-menu-link:hover {
  color: white;
}

/* CTA MOBILE */

.mobile-cta {
  padding: 20px;
}

.mobile-cta-button {
  display: block;
  background: linear-gradient(135deg, #6EC1FF, #A084FF);
  padding: 14px;
  text-align: center;
  border-radius: 12px;
  color: white;
}

/* RESPONSIVE */

@media (max-width: 992px) {
  .navbar-nav {
    display: none;
  }

  .mobile-toggle {
    display: block;
  }
}
</style>