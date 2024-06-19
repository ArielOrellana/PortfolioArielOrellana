<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

  
  AOS.init();
export default{
  components:{
    HelloWorld,
    RouterLink,
    RouterView
  },
  methods: {
    descargarPDF: function(){
        // Si es una computadora, abre el PDF en una nueva pestaña
        window.open("../PortfolioArielOrellana/pdf/Curriculum-Ariel-Edgardo-Orellana-2024.pdf", "_blank");
    },
    closeModal(){
      this.modalIndex= null
    }
  },
  data(){
    return{
      url:'/PortfolioArielOrellana',
      modalIndex: 1,
    }
  }

}
</script>

<template>

  <div v-if="modalIndex" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop >
        <span class="close" @click="closeModal">&times;</span>
        <div class="modal-body">
          <h1>PORTFOLIO EN DESARROLLO</h1>
        </div>
      </div>
  </div>
  <header data-aos="zoom-out-right">
    <div class="wrappa">

      <nav>
        <RouterLink to="/">Sobre Mi</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/experiencia">Experiencia</RouterLink>
        <RouterLink to="/estudios">Estudios</RouterLink>
        <RouterLink to="/habilidades">Habilidades</RouterLink>
        <RouterLink to="/certificados">Certificados</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>
      </nav>
    </div>

    <img alt="logo" class="logo" src="@/assets/yo.png" width="190" height="190" style="border-radius:50%; filter: drop-shadow(0 0px 10px #4444dd);" />

    <div class="wrapper">
      <HelloWorld msg="Ariel E. Orellana" text="Desarrollador Web Full Stack" />
      <nav>
        <a href="https://github.com/ArielOrellana" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://gitlab.com/OrellanaAriel1998" target="_blank"><i class="fa-brands fa-gitlab"></i></a>
        <a href="https://www.linkedin.com/in/orellanaariel1998/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <router-link :to="{name: 'home'}"><i class="fa-solid fa-globe"></i></router-link>
        <a href="mailto:orellanaariel1998@gmail.com"><i class="fa-solid fa-envelope"></i></a>
        <button @click="descargarPDF" class="boton-azul"><i class="fa-solid fa-download"></i> Descargar CV</button>
      </nav>
    </div>
  </header>
  <div class="rutas">
    <RouterView data-aos="fade-up"/>
  </div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>


  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>


  <div class="triangle"></div>
  <div class="triangle"></div>
  <div class="triangle"></div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  z-index: 1;
}

.logo {
  display: block;
  margin: 0 auto;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 0.5rem;
  border-left: 1px solid var(--color-border);
  margin-top: 1rem;

}

nav a:first-of-type {
  border: 0;
}
.rutas{
  margin-top: 20px;
}
.boton-azul {
    margin-top: 10px;
    background-color: #01264e; /* Color azul */
    color: rgb(202, 201, 201); /* Color del texto */
    border: none; /* Sin borde */
    padding: 10px 20px; /* Relleno (padding) */
    font-size: 16px; /* Tamaño del texto */
    border-radius: 5px; /* Bordes redondeados */
    cursor: pointer; /* Cambia el cursor al pasar por encima */
    transition: background-color 0.3s; /* Transición para el efecto hover */
}

.boton-azul:hover {
    background-color: #011b36; /* Color azul más oscuro al pasar el cursor */
}

.boton-azul:active {
    background-color: #011b36; /* Color azul más oscuro al pasar el cursor */
    box-shadow:  2px 2px 2px 2px #344961a2 ;
    color: rgb(116, 116, 116); /* Color del texto */

}

@media (min-width: 1024px) {
  header {
    display: flex;
    position: relative;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  header .wrappa {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  nav {
    text-align: left;
    margin-left: -2rem;
    font-size: 1rem;
    margin-right: -1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
  .rutas{
    margin-top: 20px;
    height: 500px;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    box-sizing: border-box;
  }
  /* Estilos del scroll */
  ::-webkit-scrollbar {
    width: 12px; /* Ancho del scroll */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* Color de fondo del scroll */
    border-radius: 10px; /* Borde redondeado */
  }

  ::-webkit-scrollbar-thumb {
    background: #888; /* Color del scroll */
    border-radius: 10px; /* Borde redondeado */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color del scroll al pasar el mouse */
  }

}
</style>
