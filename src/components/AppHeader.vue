<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SocialLinks from './SocialLinks.vue'
import { useTheme } from '../composables/useTheme.js'

defineProps({ menuOpen: Boolean })
const emit = defineEmits(['toggle-menu'])
const { theme, toggle } = useTheme()

const navItems = [
  { path: '/', label: 'Inicio' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/experiencia', label: 'Experiencia' },
  { path: '/estudios', label: 'Estudios' },
  { path: '/habilidades', label: 'Habilidades' },
  { path: '/certificados', label: 'Certificados' },
  { path: '/contacto', label: 'Contacto' },
]
</script>

<template>
  <header class="header" :class="{ 'menu-visible': menuOpen }">
    <div class="header-inner">
      <RouterLink to="/" class="brand">
        <img src="/logo.png" alt="Ariel Orellana" class="avatar" width="36" height="36" />
        <span class="brand-name">Ariel Orellana</span>
      </RouterLink>

      <div class="header-actions">
        <button
          class="hamburger"
          :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
          :aria-expanded="menuOpen"
          @click="emit('toggle-menu')"
        >
          <span v-for="i in 3" :key="i" class="hamburger-line" :class="{ open: menuOpen }" />
        </button>
      </div>

      <nav class="nav-desktop" aria-label="Navegación">
        <RouterLink v-for="item in navItems" :key="item.path" :to="item.path" class="nav-link">{{
          item.label
        }}</RouterLink>
        <button
          class="theme-btn"
          :aria-label="theme === 'dark' ? 'Modo claro' : 'Modo oscuro'"
          :title="theme === 'dark' ? 'Modo claro' : 'Modo oscuro'"
          @click="toggle"
        >
          <i v-if="theme === 'dark'" class="fa-solid fa-sun" aria-hidden="true"></i>
          <i v-else class="fa-solid fa-moon" aria-hidden="true"></i>
        </button>
      </nav>
    </div>

    <nav class="nav-mobile" :class="{ visible: menuOpen }" aria-label="Navegación móvil">
      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="nav-link"
        @click="emit('toggle-menu')"
        >{{ item.label }}</RouterLink
      >
      <SocialLinks />
      <button
        class="theme-btn mobile-theme"
        :aria-label="theme === 'dark' ? 'Modo claro' : 'Modo oscuro'"
        :title="theme === 'dark' ? 'Modo claro' : 'Modo oscuro'"
        @click="toggle"
      >
        <i v-if="theme === 'dark'" class="fa-solid fa-sun" aria-hidden="true"></i>
        <i v-else class="fa-solid fa-moon" aria-hidden="true"></i>
        <span>{{ theme === 'dark' ? 'Modo claro' : 'Modo oscuro' }}</span>
      </button>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: color-mix(in srgb, var(--bg) 85%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
}
.brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text-heading);
  font-weight: 600;
  font-size: 1rem;
}
.brand:hover {
  color: var(--text-heading);
}
.avatar {
  border-radius: 50%;
  object-fit: cover;
}
.brand-name {
  display: none;
}

@media (min-width: 500px) {
  .brand-name {
    display: inline;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.theme-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: var(--text);
  padding: 6px 8px;
  border-radius: 8px;
  transition:
    background 0.2s,
    color 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.theme-btn:hover {
  background: rgba(85, 85, 238, 0.1);
  color: var(--primary);
}
.mobile-theme {
  padding: 0.6rem 0.8rem;
  font-size: 0.95rem;
}
.mobile-theme span {
  font-size: 0.95rem;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.hamburger-line {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition:
    transform 0.3s,
    opacity 0.3s;
}
.hamburger-line.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger-line.open:nth-child(2) {
  opacity: 0;
}
.hamburger-line.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.nav-desktop {
  display: none;
}
.nav-mobile {
  display: flex;
  flex-direction: column;
  gap: 0;
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.35s ease,
    padding 0.35s ease;
  padding: 0 1rem;
}
.nav-mobile.visible {
  max-height: 500px;
  padding: 0.5rem 1rem 1rem;
}
.nav-link {
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  color: var(--text);
  font-size: 0.95rem;
  transition:
    background 0.2s,
    color 0.2s;
}
.nav-link:hover,
.nav-link.router-link-exact-active {
  background: rgba(85, 85, 238, 0.12);
  color: var(--primary);
}

@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
  .nav-desktop {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  .nav-desktop .nav-link {
    padding: 0.4rem 0.7rem;
    font-size: 0.85rem;
  }
  .nav-mobile {
    display: none;
  }
}
</style>
