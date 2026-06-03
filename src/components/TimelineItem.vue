<script setup lang="ts">
defineProps({
  item: { type: Object, required: true },
})
</script>

<template>
  <div class="timeline-item">
    <div class="timeline-dot" />
    <div class="timeline-content">
      <div class="timeline-meta">
        <span class="timeline-date">{{ item.inicio }} — {{ item.fin }}</span>
        <span v-if="item.empresa" class="timeline-company">{{ item.empresa }}</span>
      </div>
      <h3 class="timeline-title">{{ item.titulo }}</h3>
      <p v-if="item.descripcion" class="timeline-desc">{{ item.descripcion }}</p>
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
.timeline-company {
  font-size: 0.75rem;
  color: var(--text-muted);
  background: var(--bg-mute);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
}
.timeline-title {
  font-size: 1rem;
  color: var(--text-heading);
  font-weight: 600;
  margin-bottom: 0.3rem;
}
.timeline-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  white-space: pre-line;
  line-height: 1.6;
}
</style>
