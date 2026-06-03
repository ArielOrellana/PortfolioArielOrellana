<script setup lang="ts">
import TimelineItem from '../components/TimelineItem.vue'
import studies from '../data/studies.json'
</script>

<template>
  <section>
    <h2 class="section-title">Estudios</h2>
    <div class="timeline">
      <TimelineItem v-for="item in studies" :key="item.id" :item="item" />
    </div>
  </section>
</template>

<style scoped>
.timeline {
  margin-top: 1.5rem;
}
</style>
