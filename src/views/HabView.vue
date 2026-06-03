<script setup lang="ts">
import SkillCard from '../components/SkillCard.vue'
import skills from '../data/skills.json'
</script>

<template>
  <section>
    <h2 class="section-title">Habilidades</h2>
    <p class="section-sub">Tecnologías y herramientas con las que trabajo</p>
    <div class="grid">
      <SkillCard v-for="skill in skills" :key="skill.id" :skill="skill" />
    </div>
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
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 0.75rem;
}
@media (min-width: 600px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
  }
}
</style>
