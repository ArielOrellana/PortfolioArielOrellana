<script setup lang="ts">
import { ref } from 'vue'
import type { Certificate } from '../types'
import certificates from '../data/certificates.json'

const selected = ref<Certificate | null>(null)

function openCert(cert: Certificate) {
  selected.value = cert
  document.body.style.overflow = 'hidden'
}
function closeCert() {
  selected.value = null
  document.body.style.overflow = ''
}
</script>

<template>
  <section>
    <h2 class="section-title">Certificados</h2>
    <p class="section-sub">Mis certificaciones y cursos realizados</p>
    <div class="grid">
      <button
        v-for="cert in certificates"
        :key="cert.id"
        class="cert"
        :aria-label="'Ver certificado: ' + cert.titulo"
        @click="openCert(cert)"
      >
        <img :src="'/PortfolioArielOrellana' + cert.img" :alt="cert.titulo" loading="lazy" />
        <div class="cert-overlay">
          <span>{{ cert.titulo }}</span>
        </div>
      </button>
    </div>

    <Teleport to="body">
      <div
        v-if="selected"
        class="modal-overlay"
        @click.self="closeCert"
        @keydown.escape="closeCert"
      >
        <div class="modal-box">
          <button class="modal-close" aria-label="Cerrar" @click="closeCert">&times;</button>
          <img
            :src="'/PortfolioArielOrellana' + selected.img"
            :alt="selected.titulo"
            class="modal-img"
          />
          <p class="modal-label">{{ selected.titulo }}</p>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.section-sub {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  margin-top: -0.5rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.cert {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  background: none;
  padding: 0;
  cursor: pointer;
  aspect-ratio: 4/3;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.cert:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}
.cert:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.cert img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.cert-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  padding: 0.75rem;
}
.cert-overlay span {
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  animation: fadeIn 0.2s ease;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.modal-box {
  position: relative;
  max-width: 700px;
  max-height: 90vh;
  width: 100%;
  background: var(--surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  animation: scaleIn 0.25s ease;
}
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.modal-close {
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  font-size: 2rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  z-index: 2;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}
.modal-img {
  width: 100%;
  display: block;
}
.modal-label {
  padding: 1rem;
  text-align: center;
  color: var(--text-heading);
  font-weight: 500;
}
</style>
