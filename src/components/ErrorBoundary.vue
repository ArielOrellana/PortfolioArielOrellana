<script setup lang="ts">
import { useErrorCapture } from '../composables/useErrorHandler'

const { error, clear } = useErrorCapture()
</script>

<template>
  <div v-if="error" class="error-boundary">
    <p class="error-text">Algo salió mal al cargar esta sección.</p>
    <button class="error-btn" @click="clear">Reintentar</button>
  </div>
  <slot v-else />
</template>

<style scoped>
.error-boundary {
  padding: 2rem;
  text-align: center;
  background: var(--surface);
  border: 1px solid #e74c3c;
  border-radius: var(--radius);
}
.error-text {
  color: #e74c3c;
  margin-bottom: 1rem;
}
.error-btn {
  background: var(--primary);
  color: #fff;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: var(--radius);
  cursor: pointer;
}
</style>
