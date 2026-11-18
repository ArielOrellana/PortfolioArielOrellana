<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SocialLinks from './SocialLinks.vue'
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <p class="footer-name">Ariel E. Orellana</p>
        <p class="footer-role">Full Stack Developer · PHP, Laravel, React, Vue</p>
      </div>

      <nav class="footer-nav" aria-label="Enlaces del pie de página">
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/experiencia">Experiencia</RouterLink>
        <RouterLink to="/habilidades">Habilidades</RouterLink>
        <RouterLink to="/certificados">Certificados</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>
      </nav>

      <div class="footer-contact">
        <a href="mailto:orellanaariel1998@gmail.com" class="footer-email"
          >orellanaariel1998@gmail.com</a
        >
        <SocialLinks compact />
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 Ariel E. Orellana · San Miguel de Tucumán, Argentina</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  z-index: 1;
  margin-top: 3.5rem;
  border-top: 1px solid var(--border);
  background: color-mix(in srgb, var(--bg-soft) 75%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem 1.25rem;
  display: grid;
  gap: 1.5rem;
}
.footer-name {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--text-heading);
}
.footer-role {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}
.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.25rem;
}
.footer-nav a {
  color: var(--text);
  font-size: 0.9rem;
}
.footer-nav a:hover {
  color: var(--primary);
}
.footer-contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.35rem;
}
.footer-email {
  font-size: 0.9rem;
  color: var(--primary);
  word-break: break-all;
}
.footer-bottom {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem;
  border-top: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.8rem;
}

@media (min-width: 768px) {
  .footer-inner {
    grid-template-columns: 1.2fr 1fr 1.1fr;
    align-items: start;
    padding: 2.5rem 2rem 1.5rem;
  }
  .footer-bottom {
    padding: 1rem 2rem 1.75rem;
  }
}
</style>
