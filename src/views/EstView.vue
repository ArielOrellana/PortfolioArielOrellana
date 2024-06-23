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
              titulo: 'Tecnicatura Sup. de Traductorado de inglés',
              empresa:'Instituto ANGLO',
              inicio: '2023',
              fin: 'Actualidad',
              descripccion:'• Express I Cursado - Nivel A1.\n• Express II Cursando - Nivel A2.\n\nAptitudes: Idioma inglés',
            },
            {
              titulo: 'PHP Labs',
              empresa:'Código Facilito',
              inicio: '2024',
              fin: '2024',
              descripccion:'• Certificacion de PHP Orientado a objetos.\n• Certificacion de PHP Orientado a objetos - Herencia.\n• Certificacion de PHP Orientado a objetos - Traits.\n• Certificacion de PHP nuevas características.\n\nAptitudes: PHP vanilla - POO - MVC',
            },
            {
              titulo: 'PHP Course',
              empresa:'SoloLearn',
              inicio: '2022',
              fin: '2022',
              descripccion:'• Sintaxis del Lenguaje PHP.\n• Introducción a la Programación.\n• Programación Orientada a Objetos.\n• Conexión a las bases de datos MySQL.\n\nAptitudes: PHP vanilla - POO - MVC - MySQL',
            },
            {
              titulo: 'Curso de React Native',
              empresa:'Código Facilito',
              inicio: '2022',
              fin: '2022',
              descripccion:'',
            },
            {
              titulo: 'Curso de introducción a Flutter',
              empresa:'Código Facilito',
              inicio: '2022',
              fin: '2022',
              descripccion:'',
            },
            {
              titulo: 'Curso profesional de Dart',
              empresa:'Código Facilito',
              inicio: '2022',
              fin: '2022',
              descripccion:'',
            },
            {
              titulo: 'Argentina Programa "Sé Programar"',
              empresa:'Ministerio de Desarrollo Productivo',
              inicio: '2022',
              fin: '2022',
              descripccion:'• Estructuras de datos.\n• JavaScript básico.\n• Programación Orientada a Objetos con Ruby.\n\nAptitudes: Ruby · JavaScript · Goobstone',
            },
            {
              titulo: 'QA/QC Tester',
              empresa:'Proyecto T.Tec - Ministerio de trabajo, empleo y seguridad - UTN',
              inicio: '2021',
              fin: '2022',
              descripccion:'• Niveles de conocimiento cognitivo.\n• Fundamentos de las pruebas.\n• Introducción al testing Ágil.\n• Las pruebas en ciclo de vida del software.\n• Técnicas de prueba.\n• Test Management.\n\nAptitudes: Trabajo en equipo - QA/QC - Resolución de problemas - Investigación - Liderazgo de equipos - Aseguramiento de la calidad - Capacidad de análisis.',
            },
            {
              titulo: 'Futuros Programadores',
              empresa:'Sigmma.net(Asociados con Fundacion Leon)',
              inicio: '2018',
              fin: '2019',
              descripccion:'• Programación Orientada a Objetos.\n• Modelo Vista Controlador.\n• Maquetación HTML, CSS.\n• JavaScript Básico.\n• Framework Laravel.\n• PHP Intermedio.\n• Desarrollo web E-commerce.\n\nAptitudes: PHP vanilla - POO - MVC - MySQL -Laravel - HTML - JS - CSS - Bootstrap',
            },
            {
              titulo:'Introducción al Control Numérico por Computadora',
              empresa:'Tenaris University',
              inicio:'2017',
              fin:'2018',
              descripccion:'• Lectura de planos.\n• Programación de CNC.',
            },
            {
              titulo:'Técnico Electromecánico',
              empresa:'Escuela Técnica Nº3 Dr. Juan B. Terán ',
              inicio:'2011',
              fin:'2017',
              descripccion:'• Secundaria.\n• Proyecto final de 200 hs de trabajo - Termotanque solar.\n• Talleres de Electricidad - Hojalateria - CNC - Carpintería - Soldadura - Tornería.',
            },
          ]
        }
      }
    }
  </script>