<template>
  <Background3D />

  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Background3D from "@/components/Background3D.vue"
import Navbar from "@/components/Navbar.vue"
</script>