<script setup>
import Navbar from './components/NavBar.vue';
import Background3D from './components/Background3D.vue';

</script>

<template>
  <div class="stack-container">
    
    <Background3D />

    <div class="content-layer">
      <Navbar />
      
      <main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>

  </div>
</template>

<style>

main {
  margin-top: 50px;
}

.stack-container {
  display: grid;
  grid-template-areas: "stack";
  min-height: 100vh;
  width: 100%;
  position: relative;
  isolation: isolate;
}

.stack-container > * {
  position: relative;
}

.content-layer {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from { opacity: 0; transform: translateY(10px); }
.fade-leave-to { opacity: 0; transform: translateY(-10px); }
</style>