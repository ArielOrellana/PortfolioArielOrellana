<script setup lang="ts">
import SocialLinks from '../components/SocialLinks.vue'
import { getAssetUrl } from '../utils/assets'

const cvUrl = getAssetUrl('pdf/Curriculum-Ariel-Orellana-2026.pdf')
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <p class="hero-location">
          <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
          San Miguel de Tucumán, Argentina
        </p>
        <h1 class="hero-name">Ariel E. Orellana</h1>
        <p class="hero-role">Full Stack Developer</p>
        <p class="hero-desc">
          Más de <strong>4 años</strong> creando y manteniendo sistemas web
          <strong>en producción</strong>: plataformas de gestión, e-commerce y apps móviles. Migro
          sistemas legacy a stacks modernos con <strong>PHP, Laravel, React y Docker</strong>,
          integro <strong>APIs REST</strong>, trabajo con microservicios y
          <strong>lidero equipos</strong> de desarrollo.
        </p>
        <div class="hero-actions">
          <a :href="cvUrl" target="_blank" rel="noopener" class="boton">
            <i class="fa-solid fa-download" aria-hidden="true"></i>
            Descargar CV
            <span class="sr-only">(se abre en nueva ventana)</span>
          </a>
          <a href="mailto:orellanaariel1998@gmail.com" class="boton ghost">
            <i class="fa-solid fa-envelope" aria-hidden="true"></i>
            Escribime
          </a>
        </div>
        <div class="hero-social">
          <SocialLinks compact />
        </div>
        <dl class="hero-stats">
          <div class="hero-stat">
            <dt>4+</dt>
            <dd>años de experiencia</dd>
          </div>
          <div class="hero-stat">
            <dt>3</dt>
            <dd>sectores: educación, e-commerce y movilidad</dd>
          </div>
          <div class="hero-stat">
            <dt>10+</dt>
            <dd>tecnologías en stack principal</dd>
          </div>
        </dl>
      </div>

      <div class="hero-image">
        <div class="profile-frame">
          <img
            src="@/assets/yo.png"
            alt="Retrato de Ariel E. Orellana, Full Stack Developer"
            class="profile-img"
            width="260"
            height="260"
            fetchpriority="high"
          />
        </div>
        <p class="hero-status">
          <span class="status-dot" aria-hidden="true"></span>
          Trabajando en sistemas web en producción
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: 1rem 0;
}
.hero-content {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2rem;
  text-align: center;
  max-width: 950px;
}
.hero-text {
  flex: 1;
}

.hero-location,
.hero-name,
.hero-role,
.hero-desc,
.hero-actions,
.hero-social,
.hero-stats,
.hero-image {
  animation: hero-in 0.55s cubic-bezier(0.2, 0.7, 0.3, 1) both;
}
.hero-location {
  animation-delay: 0.05s;
}
.hero-name {
  animation-delay: 0.12s;
}
.hero-role {
  animation-delay: 0.18s;
}
.hero-desc {
  animation-delay: 0.24s;
}
.hero-actions {
  animation-delay: 0.3s;
}
.hero-social {
  animation-delay: 0.36s;
}
.hero-stats {
  animation-delay: 0.42s;
}
.hero-image {
  animation-delay: 0.1s;
}
@keyframes hero-in {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-location {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}
.hero-location i {
  color: var(--primary);
}
.hero-name {
  font-size: clamp(2.3rem, 5.5vw, 3.4rem);
  font-weight: 800;
  color: var(--text-heading);
  line-height: 1.1;
  margin-bottom: 0.4rem;
}
.hero-role {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.9rem;
}
.hero-desc {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 560px;
  margin: 0 auto 1.4rem;
}
.hero-desc strong {
  color: var(--text);
}
.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 0.35rem;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border);
}
.hero-stat {
  padding: 0 1.4rem;
}
.hero-stat + .hero-stat {
  border-left: 1px solid var(--border);
}
.hero-stat:first-child {
  padding-left: 0;
}
.hero-stat:last-child {
  padding-right: 0;
}
.hero-stat dt {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--text-heading);
  line-height: 1.2;
}
.hero-stat dd {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 0.15rem;
  max-width: 8.5rem;
  line-height: 1.35;
}

.hero-image {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-frame {
  padding: 5px;
  border-radius: 50%;
  background: conic-gradient(from 200deg, var(--primary), #1cd99d, var(--primary));
  box-shadow: 0 0 45px var(--primary-glow);
}
.profile-img {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--bg);
  display: block;
}
.hero-status {
  position: absolute;
  bottom: -10px;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-size: 0.78rem;
  color: var(--text);
  white-space: nowrap;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
}
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  animation: status-pulse 2.2s ease-out infinite;
}
@keyframes status-pulse {
  70% {
    box-shadow: 0 0 0 8px rgba(28, 217, 157, 0);
  }
  from {
    box-shadow: 0 0 0 0 rgba(28, 217, 157, 0.45);
  }
  to {
    box-shadow: 0 0 0 0 rgba(28, 217, 157, 0);
  }
}

@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    text-align: left;
  }
  .hero-actions {
    justify-content: flex-start;
  }
  .hero-stats {
    justify-content: flex-start;
  }
  .hero-desc {
    margin: 0 0 1.4rem;
  }
  .hero-image {
    padding-left: 1rem;
  }
  .profile-img {
    width: 250px;
    height: 250px;
  }
}
</style>
