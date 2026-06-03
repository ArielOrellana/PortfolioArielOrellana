<script setup lang="ts">
defineProps({
  skill: { type: Object, required: true },
})
</script>

<template>
  <div class="skill">
    <div class="skill-icon">
      <img :src="skill.img" :alt="skill.titulo" loading="lazy" />
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
  padding: 1.2rem 0.8rem;
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
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.skill-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(1.2);
}
.skill-name {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-align: center;
  font-weight: 500;
}
</style>
