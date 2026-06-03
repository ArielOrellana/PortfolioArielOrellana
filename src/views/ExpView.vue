<script setup>
import { ref } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'

const experiences = ref([
  { titulo: 'Desarrollador Web Full Stack', empresa: 'Genube', inicio: 'Junio 2022', fin: 'Actualidad', descripccion:'• Desarrollo y mantenimiento de sistema de gestión educativa\n• Análisis de requerimientos y soporte de sistema contable\n• Implementación de microservicios\n• Desarrollo y mantenimiento de app móvil con React Native' },
  { titulo: 'Desarrollador Web Full Stack', empresa: 'AF Soluciones Informáticas', inicio: 'Mayo 2022', fin: 'Julio 2022', descripccion:'• Desarrollo web E-commerce\n• Mantenimiento de aplicaciones web' },
  { titulo: 'Técnico de electrodomésticos y computadoras', empresa: 'Independiente (PatuHard)', inicio: '2017', fin: 'Actualidad', descripccion:'• Mantenimiento de PC y PlayStation\n• Reparación de electrodomésticos' },
  { titulo: 'Ayudante Técnico', empresa: 'Técnico en refrigeración Luis Páez', inicio: '2014', fin: '2014', descripccion:'• Instalación de aires acondicionados\n• Mantenimiento de equipos de refrigeración' },
])
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
.timeline { margin-top: 1.5rem; }
</style>
