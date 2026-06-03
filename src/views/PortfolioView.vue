<script setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'

const projects = ref([
  { id: 1, img: "/portfolio/genube.png", descripccion:"Desarrollo y mantenimiento de sistema de gestión para instituciones educativas Genube.\n\nAnálisis de requerimientos, soporte contable, implementación de microservicios, desarrollo móvil con React Native.\n\nAptitudes: PHP, Laravel, JQuery, AngularJS, React Native, Bootstrap, MySQL, Git", titulo:"Genube", sitio:"https://genube.com/", apk:"https://play.google.com/store/apps/details?id=com.genube.genubePadres" },
  { id: 2, img: "/portfolio/ferriplast.png", descripccion:"Desarrollo y mantenimiento de web E-commerce Ferriplast.\n\nAptitudes: Laravel, HTML, Bootstrap, JavaScript, Sass, MySQL, PHP", titulo:"Ferriplast", sitio:"https://ferriplast.com.ar/h/public/" },
  { id: 3, img: "/portfolio/funalsrl.png", descripccion:"Desarrollo y mantenimiento de web E-commerce Funal S.R.L.\n\nAptitudes: Laravel, HTML, Bootstrap, JavaScript, Sass, MySQL, PHP", titulo:"Funal S.R.L" },
  { id: 4, img: "/portfolio/agenda.png", descripccion:"Sistema de agenda de gastos con sumatorias y CRUD.\n\nAptitudes: Laravel, HTML, CSS, JavaScript, MySQL, Bootstrap, PHP", titulo:"Agenda", repo:"https://github.com/ArielOrellana/agenda" },
  { id: 5, img: "/portfolio/portfolio1.png", descripccion:"E-commerce con carrito de compras y CRUD de categorías y productos.\n\nAptitudes: Laravel, HTML, CSS, JavaScript, Bootstrap, MySQL, PHP", titulo:"E-commerce", repo:"https://github.com/ArielOrellana/Pagina-web-ventas" },
  { id: 6, img: "/portfolio/api_movie.png", descripccion:"API Rest con CRUD de TV shows, películas y actores.\n\nAptitudes: Laravel, PHP, MySQL", titulo:"API Películas", repo:"https://github.com/ArielOrellana/api_movie" },
  { id: 7, img: "/portfolio/mazebook.png", descripccion:"Red social tipo Twitter desarrollada en Vue.js.\n\nAptitudes: HTML, CSS, Bootstrap, Vue.js, JavaScript", titulo:"Mazebook", sitio:"https://arielorellana.github.io/tutorialvue/", repo:"https://github.com/ArielOrellana/tutorialvue" },
  { id: 8, img: "/portfolio/rick_morty.png", descripccion:"Web CRUD con consumo de API de Rick & Morty.\n\nAptitudes: HTML, CSS, JavaScript, Vue.js, Vuex", titulo:"Rick & Morty App" },
  { id: 9, img: "/portfolio/portfolio.png", descripccion:"Portfolio personal desarrollado con Vue 3.\n\nAptitudes: HTML, CSS, JavaScript, Vue 3", titulo:"Este Portfolio", sitio:"https://arielorellana.github.io/PortfolioArielOrellana/", repo:"https://github.com/ArielOrellana/PortfolioArielOrellana" },
  { id: 10, img: "/portfolio/portfolio1.png", descripccion:"Migración de versión Laravel 5 a Laravel 8.", titulo:"E-commerce (Laravel upgrade)", repo:"https://github.com/ArielOrellana/ventas" },
  { id: 11, img: "/portfolio/portfolio 3.png", descripccion:"Ejercicios de estructuras de datos, diagramas de flujo y lógica con C++.\n\nAptitudes: C++, lógica de programación", titulo:"Ejercicios UTN", repo:"https://github.com/ArielOrellana/UTN-CPP-DFD" },
  { id: 12, img: "/portfolio/QA-test.png", descripccion:"Historias de usuario, tests manuales y pruebas de humo.\n\nAptitudes: QA/QC, Testing manual, Scrum", titulo:"QA Trello" },
])
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
