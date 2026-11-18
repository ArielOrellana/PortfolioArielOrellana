<script setup lang="ts">
import TimelineItem from '../components/TimelineItem.vue'
import experiences from '../data/experiences.json'
</script>

<template>
  <section>
    <h1 class="section-title">Experiencia</h1>
    <div class="timeline">
      <TimelineItem v-for="item in experiences" :key="item.id" :item="item" />
    </div>
  </section>
</template>

<style scoped>
.timeline {
  margin-top: 1.5rem;
}
</style>
