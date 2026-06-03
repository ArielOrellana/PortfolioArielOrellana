<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <AppHeader :menuOpen="menuOpen" @toggle-menu="toggleMenu" />
  <main class="main">
    <router-view v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </main>
  <div class="bg-shapes" aria-hidden="true">
    <div class="shape square"></div>
    <div class="shape square"></div>
    <div class="shape square"></div>
    <div class="shape circle"></div>
    <div class="shape circle"></div>
    <div class="shape circle"></div>
    <div class="shape triangle"></div>
    <div class="shape triangle"></div>
    <div class="shape triangle"></div>
  </div>
</template>

<style scoped>
.main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  min-height: calc(100vh - 140px);
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .main { padding: 2rem; }
}

.bg-shapes { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
.shape {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  opacity: 0.15;
}
.square { background: var(--primary); }
.circle { background: #1cd99d; border-radius: 50%; }
.triangle {
  background: #8855ee;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
