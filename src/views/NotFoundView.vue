<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Página no encontrada</h2>
    <p>La página que buscas no existe.</p>
    <router-link to="/" class="boton-azul">Volver al inicio</router-link>
  </div>
</template>
<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
}
.not-found h1 {
  font-size: 5rem;
  color: #4444dd;
  margin: 0;
}
.not-found h2 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}
.not-found p {
  color: #888;
  margin-bottom: 1.5rem;
}
</style>
