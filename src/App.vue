<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <a href="#main-content" class="skip-link">Ir al contenido principal</a>
  <AppHeader :menu-open="menuOpen" @toggle-menu="toggleMenu" />
  <main id="main-content" class="main">
    <router-view v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </main>
  <div class="bg-noise" aria-hidden="true"></div>
  <div class="bg-shapes" aria-hidden="true">
    <i class="fa-solid fa-laptop-code dev-icon type-1"></i>
    <i class="fa-solid fa-terminal dev-icon type-1"></i>
    <i class="fa-solid fa-code dev-icon type-1"></i>
    <i class="fa-solid fa-database dev-icon type-2"></i>
    <i class="fa-solid fa-server dev-icon type-2"></i>
    <i class="fa-solid fa-microchip dev-icon type-2"></i>
    <i class="fa-solid fa-bug dev-icon type-3"></i>
    <i class="fa-solid fa-code-branch dev-icon type-3"></i>
    <i class="fa-solid fa-cloud dev-icon type-3"></i>
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
  .main {
    padding: 2rem;
  }
}

.bg-shapes {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.dev-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 36px;
  opacity: 0.15;
}
.type-1 {
  color: var(--primary);
}
.type-2 {
  color: #1cd99d;
}
.type-3 {
  color: #8855ee;
}
</style>
