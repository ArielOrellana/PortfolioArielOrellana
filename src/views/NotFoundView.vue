<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Página no encontrada</h2>
    <p>La página que buscas no existe.</p>
    <router-link to="/" class="boton">Volver al inicio</router-link>
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
  color: var(--primary);
  margin: 0;
}
.not-found h2 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: var(--text-heading);
}
.not-found p {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}
</style>
