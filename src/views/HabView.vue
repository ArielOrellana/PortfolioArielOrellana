<script setup lang="ts">
import { computed } from 'vue'
import SkillCard from '../components/SkillCard.vue'
import skills from '../data/skills.json'

const groupLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
  tools: 'Herramientas',
  other: 'Otros',
}

const groups = computed(() =>
  Object.keys(groupLabels)
    .map((cat) => ({
      cat,
      label: groupLabels[cat],
      items: skills.filter((skill) => skill.cat === cat),
    }))
    .filter((group) => group.items.length > 0),
)
</script>

<template>
  <section>
    <h1 class="section-title">Habilidades</h1>
    <p class="section-sub">Tecnologías y herramientas con las que trabajo</p>

    <div v-for="group in groups" :key="group.cat" class="skill-group">
      <h2 class="group-title">{{ group.label }}</h2>
      <div class="grid">
        <SkillCard v-for="skill in group.items" :key="skill.id" :skill="skill" />
      </div>
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
.skill-group + .skill-group {
  margin-top: 1.75rem;
}
.group-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
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
