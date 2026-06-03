<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import projects from '../data/projects.json'
</script>

<template>
  <section>
    <h2 class="section-title">Portfolio</h2>
    <p class="section-sub">Proyectos en los que he trabajado</p>
    <div class="grid">
      <ProjectCard v-for="project in projects" :key="project.id" :card="project" />
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
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}
</style>
