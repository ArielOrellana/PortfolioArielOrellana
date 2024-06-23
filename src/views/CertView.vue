<template>
    <div class="grid-container">
        <CardComp :cards="portfolioArray" />
    </div>
</template>
<script>
    import CardComp from '../components/CardComp.vue'
    export default {
        components:{
            CardComp
        },
        data(){
            return{
                portfolioArray:[
                    {
                        id: 1,
                        img: "/certificados/c14.png",
                        titulo:"PHP Orientado a objetos - Traits",
                    },
                    {
                        id: 2,
                        img: "/certificados/c13.png",
                        titulo:"PHP Orientado a objetos - Herencia",
                    },
                    {
                        id: 3,
                        img: "/certificados/c12.png",
                        titulo:"PHP Orientado a objetos",
                    },
                    {
                        id: 4,
                        img: "/certificados/c11.png",
                        titulo:"PHP nuevas características",
                    },
                    {
                        id: 5,
                        img: "/certificados/c9-1.png",
                        descripccion:'• Programación Orientada a Objetos.\n• Modelo Vista Controlador.\n• Maquetación HTML, CSS.\n• JavaScript Básico.\n• Framework Laravel.\n• PHP Intermedio.\n• Desarrollo web E-commerce.\n\nAptitudes: PHP vanilla - POO - MVC - MySQL -Laravel - HTML - JS - CSS - Bootstrap',
                        titulo:"Futuros Programadores",
                    },
                    {
                        id: 6,
                        img: "/certificados/c8-1.png",
                        descripccion:"",
                        titulo:"Curso de React Native",
                    },
                    {
                        id: 7,
                        img: "/certificados/c7.jpg",
                        descripccion:"",
                        titulo:"Course PHP",
                    },
                    {
                        id: 8,
                        img: "/certificados/c6.jfif",
                        descripccion:'• Fundamentos de las pruebas.\n• Técnicas de prueba.\n• Test Management.\n• Introducción al testing Ágil.\n• Las pruebas en ciclo de vida del software.\n\nAptitudes: Trabajo en equipo - QA/QC - Resolución de problemas - Investigación - Liderazgo de equipos - Aseguramiento de la calidad - Capacidad de análisis.',
                        titulo:"bootcamp QA/QC",
                    },
                    {
                        id: 9,
                        img: "/certificados/c5-1.png",
                        descripccion:'• Estructuras de datos.\n• JavaScript básico.\n• Programación Orientada a Objetos con Ruby.\n\nAptitudes: Ruby · JavaScript · Goobstone',
                        titulo:"#Se Programar",
                    },
                    {
                        id: 10,
                        img: "/certificados/c4.jpg",
                        descripccion:"",
                        titulo:"Course HTML",
                    },
                    {
                        id: 11,
                        img: "/certificados/c3-1.png",
                        descripccion:"",
                        titulo:"Curso de introduccion a Flutter",
                    },
                    {
                        id: 12,
                        img: "/certificados/c2-1.png",
                        descripccion:"",
                        titulo:"Curso profesional de Dart",
                    },
                    {
                        id: 13,
                        img: "/certificados/c10.png",
                        descripccion:"",
                        titulo:"Introducción a la Programación",
                    },
                    {
                        id: 14,
                        img: "/certificados/c1-1.png",
                        descripccion:"",
                        titulo:"Introducción a CNC",
                    },
                ]
            }
        }
    }
</script>