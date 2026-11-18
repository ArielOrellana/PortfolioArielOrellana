<script setup lang="ts">
import { computed, ref } from 'vue'
import { getAssetUrl } from '../utils/assets'

const props = defineProps({
  card: { type: Object, required: true },
})

const imgFailed = ref(false)

const shortDesc = computed(() => {
  const desc: string = props.card.descripcion ?? ''
  return desc.split('\n')[0]
})

const tags = computed(() => {
  const desc: string = props.card.descripcion ?? ''
  const found = desc.match(/Aptitudes:\s*(.+)$/m)?.[1]
  return found
    ? found
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)
    : []
})
</script>

<template>
  <article class="card">
    <img
      v-if="!imgFailed"
      :src="getAssetUrl(card.img)"
      :alt="`Vista previa del proyecto ${card.titulo}`"
      class="card-img"
      loading="lazy"
      width="560"
      height="350"
      @error="imgFailed = true"
    />
    <div
      v-else
      class="card-img card-img-fallback"
      role="img"
      :aria-label="`Vista previa no disponible del proyecto ${card.titulo}`"
    >
      <i class="fa-solid fa-code" aria-hidden="true"></i>
    </div>
    <div class="card-body">
      <h2 class="card-title">{{ card.titulo }}</h2>
      <p class="card-desc">{{ shortDesc }}</p>
      <ul v-if="tags.length" class="card-tags">
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
      <div v-if="card.repo || card.sitio || card.apk" class="card-actions">
        <a
          v-if="card.repo"
          :href="card.repo"
          target="_blank"
          rel="noopener noreferrer"
          class="boton small"
          >Repo <i class="fa-solid fa-code-branch" aria-hidden="true"></i
          ><span class="sr-only">(se abre en nueva ventana)</span></a
        >
        <a
          v-if="card.sitio"
          :href="card.sitio"
          target="_blank"
          rel="noopener noreferrer"
          class="boton small"
          >Sitio <i class="fa-solid fa-link" aria-hidden="true"></i
          ><span class="sr-only">(se abre en nueva ventana)</span></a
        >
        <a
          v-if="card.apk"
          :href="card.apk"
          target="_blank"
          rel="noopener noreferrer"
          class="boton small"
          >APK <i class="fa-brands fa-android" aria-hidden="true"></i
          ><span class="sr-only">(se abre en nueva ventana)</span></a
        >
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  background: var(--surface);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
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
.card-img-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-soft), var(--bg-mute));
  color: var(--text-muted);
  font-size: 2rem;
}
.card-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
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
  margin-bottom: 0.65rem;
}
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  list-style: none;
  padding: 0;
  margin: 0 0 0.9rem;
}
.card-tags li {
  font-size: 0.7rem;
  color: var(--text-muted);
  background: var(--bg-mute);
  border: 1px solid var(--border);
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
}
.card-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: auto;
}
.small {
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
}
</style>
