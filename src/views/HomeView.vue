<script setup>
import SocialLinks from '../components/SocialLinks.vue'

const cvUrl = new URL('/pdf/Curriculum-Ariel-Edgardo-Orellana-2024.pdf', import.meta.url).href
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <span class="hero-badge">Desarrollador Full Stack</span>
        <h1 class="hero-name">Ariel E. Orellana</h1>
        <p class="hero-desc">
          Soy desarrollador web Full Stack con <strong>más de 4 años de experiencia</strong> creando y manteniendo sistemas web escalables. Actualmente soy <strong>Líder Técnico en Genube</strong> y <strong>Full Stack Developer en Seeker Parking</strong>, especializado en <strong>PHP, Laravel, React y React Native</strong>. He liderado equipos de desarrollo, implementado microservicios, desarrollado apps móviles y migrado plataformas legacy a tecnologías modernas con Docker.
        </p>
        <div class="hero-actions">
          <a :href="cvUrl" target="_blank" class="boton">
            <i class="fa-solid fa-download"></i> Descargar CV
          </a>
          <SocialLinks compact />
        </div>
      </div>
      <div class="hero-image">
        <img src="@/assets/yo.png" alt="Ariel Orellana" class="profile-img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 160px);
  padding: 1rem 0;
}
.hero-content {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2rem;
  text-align: center;
  max-width: 900px;
}
.hero-text { flex: 1; }
.hero-badge {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary);
  background: rgba(85, 85, 238, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.hero-name {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text-heading);
  line-height: 1.15;
  margin-bottom: 1rem;
}
.hero-desc {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 550px;
  margin: 0 auto 1.5rem;
}
.hero-desc strong { color: var(--text); }
.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.profile-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--primary);
  box-shadow: 0 0 30px var(--primary-glow);
}

@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    text-align: left;
  }
  .hero-actions { justify-content: flex-start; }
  .hero-desc { margin: 0 0 1.5rem; }
  .hero-name { font-size: 2.8rem; }
  .profile-img { width: 260px; height: 260px; }
}
</style>
