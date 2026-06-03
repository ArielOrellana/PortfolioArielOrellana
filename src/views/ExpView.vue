<script setup>
import { ref } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'

const experiences = ref([
  { titulo: 'Full Stack Developer', empresa: 'Seeker Parking', inicio: 'Junio 2025', fin: 'Actualidad', descripccion:'• Migración de plataforma legacy a stack moderno (PHP + Laravel + React + Docker)\n• Desarrollo y mantenimiento de web app, dashboard administrativo y APIs REST\n• Trabajo con stack legacy: CodeIgniter 3, Backbone.js, Bootstrap, jQuery\n• Contenerización con Docker para entornos de desarrollo y producción' },
  { titulo: 'Líder Técnico / Full Stack Developer', empresa: 'Genube', inicio: 'Junio 2022', fin: 'Actualidad', descripccion:'• Liderazgo técnico del equipo de desarrollo (1-2 desarrolladores)\n• Dashboard principal: PHP 5.6, jQuery, CSS/JS vanilla\n• Sistema contable (admin): Laravel, AdminLTE, Bootstrap, jQuery\n• App padres (web + mobile): Laravel, AngularJS 1.2, Bootstrap, React Native\n• Implementación de arquitectura de microservicios\n• Optimización de rendimiento general del sistema' },
  { titulo: 'Full Stack Developer', empresa: 'AF Soluciones Informáticas', inicio: 'Mayo 2022', fin: 'Julio 2022', descripccion:'• Desarrollo web E-commerce\n• Mantenimiento de aplicaciones web' },
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
