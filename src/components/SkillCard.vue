<script setup lang="ts">
defineProps({
  skill: { type: Object, required: true },
})
</script>

<template>
  <div class="skill">
    <div class="skill-icon">
      <img :src="skill.img" :alt="skill.titulo" loading="lazy" width="48" height="48" />
    </div>
    <span class="skill-name">{{ skill.titulo }}</span>
  </div>
</template>

<style scoped>
.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0.6rem;
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  transition:
    transform 0.25s ease,
    border-color 0.25s,
    box-shadow 0.25s;
}
.skill:hover {
  transform: translateY(-3px);
  border-color: var(--primary);
  box-shadow: 0 6px 20px var(--primary-glow);
}
.skill-icon {
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, var(--text) 6%, transparent);
  border-radius: 12px;
}
.skill-icon img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}
/* GitHub se pide en blanco (para fondo oscuro): en tema claro se invierte */
[data-theme='light'] .skill-icon img[src*='github'] {
  filter: invert(1);
}
.skill-name {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-align: center;
  font-weight: 500;
}
</style>
