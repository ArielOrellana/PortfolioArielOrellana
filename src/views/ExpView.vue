<script setup lang="ts">
import TimelineItem from '../components/TimelineItem.vue'
import experiences from '../data/experiences.json'
</script>

<template>
  <section>
    <h2 class="section-title">Experiencia</h2>
    <div class="timeline">
      <TimelineItem v-for="(item, i) in experiences" :key="i" :item="item" />
    </div>
  </section>
</template>

<style scoped>
.timeline {
  margin-top: 1.5rem;
}
</style>
