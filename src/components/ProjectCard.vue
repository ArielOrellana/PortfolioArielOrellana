<script setup lang="ts">
import { getAssetUrl } from '../utils/assets'

defineProps({
  card: { type: Object, required: true },
})
</script>

<template>
  <div class="card">
    <img :src="getAssetUrl(card.img)" :alt="card.titulo" class="card-img" loading="lazy" />
    <div class="card-body">
      <h3 class="card-title">{{ card.titulo }}</h3>
      <p class="card-desc">{{ card.descripcion?.split('\n')[0] }}</p>
      <div v-if="card.repo || card.sitio || card.apk" class="card-actions">
        <a
          v-if="card.repo"
          :href="card.repo"
          target="_blank"
          rel="noopener noreferrer"
          class="boton small"
          >Repo <i class="fa-solid fa-code-branch" aria-hidden="true"></i
        ></a>
        <a
          v-if="card.sitio"
          :href="card.sitio"
          target="_blank"
          rel="noopener noreferrer"
          class="boton small"
          >Sitio <i class="fa-solid fa-link" aria-hidden="true"></i
        ></a>
        <a
          v-if="card.apk"
          :href="card.apk"
          target="_blank"
          rel="noopener noreferrer"
          class="boton small"
          >APK <i class="fa-brands fa-android" aria-hidden="true"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: var(--surface);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}
.card-img {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
  display: block;
}
.card-body {
  padding: 1rem;
}
.card-title {
  font-size: 1rem;
  color: var(--text-heading);
  margin-bottom: 0.4rem;
}
.card-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 0.75rem;
}
.card-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.small {
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
}
</style>
