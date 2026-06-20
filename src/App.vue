<template>
  <Background3D />

  <div id="app">
    <Navbar />

    <router-view v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import Background3D from "@/components/Background3D.vue"
import Navbar from "@/components/NavBar.vue"
</script>

<style>
/* ===== PAGE TRANSITION PREMIUM ===== */

.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

/* entrée */
.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
  filter: blur(8px);
}

.page-enter-to {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* sortie */
.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  filter: blur(8px);
}
</style>