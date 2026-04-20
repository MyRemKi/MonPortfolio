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
  max-width: 1000px;
}

.navbar {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 50px;
  padding: 12px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.logo-icon {
  width: 35px;
  height: 35px;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  border-radius: 50%;
}

.navbar-nav {
  display: flex;
  gap: 10px;
  list-style: none;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 20px;
}

.nav-link.active {
  background: rgba(255,255,255,0.2);
}

.cta-button {
  background: #ff6b6b;
  padding: 8px 16px;
  border-radius: 20px;
  color: white;
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
}

.hamburger span {
  display: block;
  width: 20px;
  height: 2px;
  background: white;
  margin: 4px 0;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #333;
  transform: translateY(-100%);
  transition: 0.3s;
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
}

.mobile-menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: white;
}

.mobile-menu-nav {
  padding-top: 100px;
  padding: auto;
  list-style: none;
}

.mobile-menu-link {
  display: block;
  padding: 12px;
  color: white;
}

.mobile-cta {
  padding: 20px;
}

.mobile-cta-button {
  display: block;
  background: #ff6b6b;
  padding: 12px;
  text-align: center;
  border-radius: 10px;
  color: white;
}

@media (max-width: 992px) {
  .navbar-nav {
    display: none;
  }

  .mobile-toggle {
    display: block;
  }
}
</style>