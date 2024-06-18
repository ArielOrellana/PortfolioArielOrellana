<template>
  <div>
    <DatosComp :datos="datosArray" />
  </div>
</template>

<style>

</style>
<script>
  import DatosComp from '../components/DatosComp.vue'
  export default{
    components:{
      DatosComp
    },
    data(){
      return{
        datosArray:[
          {
            titulo: 'Desarrollador Web Full Stack',
            empresa:'Genube',
            inicio: 'Junio de 2022',
            fin: 'Actualidad',
            descripccion:'• Desarrollo y mantenimiento de sistema de gestión para instituciones educativas Genube. \n• Análisis de requerimientos y soporte de un sistema contable integrado al sistema de gestión educativa Genube. \n• Soporte en los distintos módulos del sistema. \n• Implementacion de microservicios. \n• Desarrollo y mantenimiento de aplicación móvil.\n\nAptitudes: PHP - Laravel - JQuery - AngularJS 1.2 - ReactNative - Bootstrap - JS -MySQL - GIT - Redmine - HTML - CSS',
          },
          {
            titulo: 'Desarrollador Web Full Stack',
            empresa:'AF Soluciones Informáticas',
            inicio: 'Mayo de 2022',
            fin: 'Julio de 2022',
            descripccion:'• Desarrollo web E-commerce.\n• Soporte y mantenimiento.\n\nAptitudes: PHP - Laravel - Bootstrap - JQuery - JS -MySQL - GIT - HTML - CSS',
          },
          {
            titulo: 'Técnico de electrodomésticos y Técnico de computadoras',
            empresa:'Independiente (PatuHard)',
            inicio: '2017',
            fin: 'Actualidad',
            descripccion:'• Mantenimientos de pc y PlayStation.\n• Reparación de electrodomésticos (licuadora, batidora, estereos, etc).\n• Formateos de pc.\n• Reparación de celulares.\n• Instalaciones de aplicaciones.\n• Cambios de componentes (electrónicos y de pc).\n\nAptitudes: Soldadura de estaño - Manejo de herramientas - Organizado - Conocimiento en manejo de pc y varias aplicaciones.',
          },
          {
            titulo: 'Ayudante Técnico',
            empresa:'Técnico en refrigeración Luis Páez',
            inicio: '2014',
            fin: '2014',
            descripccion:'• Instalación de aires acondicionados.\n• Reparación de heladeras, freezer y aire acondicionados.\n• Mantenimientos de maquinaria frigorífica.\n\nAptitudes: Manejo de herramienta pesada - Soldadura de cobre - Trabajar en situaciones de alto riesgo.',
          },
        ]
      }
    }
  }
</script>