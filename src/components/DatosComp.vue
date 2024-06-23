<template>
    <div v-for="dato in datos" :key="dato.titulo"  class="Datos">
        <h2 class="Titulo">
            <span>{{ dato.titulo }}</span> - {{ dato.empresa }}
        </h2>
        <p class="Fechas">
            {{ dato.inicio }} - {{ dato.fin }}
        </p>
        <h4 class="Descripccion">
            {{ dato.descripccion }}
        </h4>
        <br>
    </div>
</template>
<script>
export default{
    props:['datos'],
}
</script>
<style>
    .Datos{
        display: grid;
        justify-content: left;
        align-items: center;
    }
    .Titulo{
        color: rgb(68, 68, 192);
        text-shadow:
        1px 1px 0 #000,
        -1px 1px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000;
    }
    .Titulo span{
        color: rgb(248, 248, 248)
    }
    .Fechas{
        color: #ffffff;
        text-shadow:
        1px 1px 0 #000,
        -1px 1px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000;    
    }

    .Descripccion{
        color: #797979;
        white-space: pre-line;
        text-shadow:
        1px 1px 0 #000,
        -1px 1px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000;
    }
    @media (min-width: 1024px) {
        
    }
</style>