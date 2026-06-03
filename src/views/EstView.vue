<script setup>
import { ref } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'

const studies = ref([
  { titulo: 'Tecnicatura Superior en Traductorado de Inglés', empresa: 'Instituto ANGLO', inicio: '2023', fin: 'Actualidad' },
  { titulo: 'PHP Labs', empresa: 'Código Facilito', inicio: '2024', fin: '2024' },
  { titulo: 'PHP Course', empresa: 'SoloLearn', inicio: '2022', fin: '2022' },
  { titulo: 'Curso de React Native', empresa: 'Código Facilito', inicio: '2022', fin: '2022' },
  { titulo: 'Curso de introducción a Flutter', empresa: 'Código Facilito', inicio: '2022', fin: '2022' },
  { titulo: 'Curso profesional de Dart', empresa: 'Código Facilito', inicio: '2022', fin: '2022' },
  { titulo: 'Argentina Programa · #SeProgramar', empresa: 'Ministerio de Desarrollo Productivo', inicio: '2022', fin: '2022' },
  { titulo: 'QA/QC Tester', empresa: 'Proyecto T.Tec · UTN', inicio: '2021', fin: '2022' },
  { titulo: 'Futuros Programadores', empresa: 'Sigmma.net · Fundación León', inicio: '2018', fin: '2019' },
  { titulo: 'Introducción al Control Numérico por Computadora', empresa: 'Tenaris University', inicio: '2017', fin: '2018' },
  { titulo: 'Técnico Electromecánico', empresa: 'Escuela Técnica Nº3 Dr. Juan B. Terán', inicio: '2011', fin: '2017' },
])
</script>

<template>
  <section>
    <h2 class="section-title">Estudios</h2>
    <div class="timeline">
      <TimelineItem v-for="(item, i) in studies" :key="i" :item="item" />
    </div>
  </section>
</template>

<style scoped>
.timeline { margin-top: 1.5rem; }
</style>
