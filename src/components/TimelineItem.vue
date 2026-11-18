<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  item: { type: Object, required: true },
})

const bullets = computed(() => {
  const desc: string = props.item.descripcion ?? ''
  return desc
    .split('\n')
    .map((line) => line.replace(/^•\s*/, '').trim())
    .filter(Boolean)
})

const isCurrent = computed(() => props.item.fin === 'Actualidad')
</script>

<template>
  <div class="timeline-item" :class="{ 'is-current': isCurrent }">
    <div class="timeline-dot" aria-hidden="true" />
    <div class="timeline-content">
      <div class="timeline-meta">
        <span class="timeline-date">{{ item.inicio }} — {{ item.fin }}</span>
        <span v-if="item.empresa" class="timeline-company">{{ item.empresa }}</span>
        <span v-if="isCurrent" class="timeline-now">Actual</span>
      </div>
      <h2 class="timeline-title">{{ item.titulo }}</h2>
      <ul v-if="bullets.length" class="timeline-list">
        <li v-for="(point, index) in bullets" :key="index">{{ point }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  display: flex;
  gap: 1rem;
  padding-bottom: 1.5rem;
  position: relative;
}
.timeline-item:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 20px;
  bottom: 0;
  width: 2px;
  background: var(--border);
}
.timeline-dot {
  width: 16px;
  height: 16px;
  min-width: 16px;
  border-radius: 50%;
  background: var(--primary);
  border: 3px solid var(--bg);
  box-shadow: 0 0 0 2px var(--primary);
  margin-top: 4px;
}
.is-current .timeline-dot {
  background: var(--accent);
  box-shadow: 0 0 0 2px var(--accent);
}
.timeline-content {
  flex: 1;
}
.timeline-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.25rem;
}
.timeline-date {
  font-size: 0.8rem;
  color: var(--primary);
  font-weight: 500;
}
.is-current .timeline-date {
  color: var(--accent);
}
.timeline-company {
  font-size: 0.75rem;
  color: var(--text-muted);
  background: var(--bg-mute);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
}
.timeline-now {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 14%, transparent);
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
}
.timeline-title {
  font-size: 1rem;
  color: var(--text-heading);
  font-weight: 600;
  margin-bottom: 0.3rem;
}
.timeline-list {
  list-style: disc;
  padding-left: 1.15rem;
  display: grid;
  gap: 0.25rem;
}
.timeline-list li {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
}
.timeline-list li::marker {
  color: var(--primary);
}
.is-current .timeline-list li::marker {
  color: var(--accent);
}
</style>
