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
                        descripccion:"sadsadasdasdasdasd sdasadasd asdasd asdasd asdasd sad \n ksajdksadmlkasjdlasdlkslaklsdmlaksmdlkasmdklasm \nlsakdla lkañk lakñ lka kañlk ñaslk ñlaksñ kaks askl klkaslk ñakslks ",
                        titulo:"PHP Orientado a objetos - Traits",
                    },
                    {
                        id: 2,
                        img: "/certificados/c13.png",
                        descripccion:"sadsadasdasdasdasd sdasadasd asdasd asdasd asdasd sad \n ksajdksadmlkasjdlasdlkslaklsdmlaksmdlkasmdklasm \nlsakdla lkañk lakñ lka kañlk ñaslk ñlaksñ kaks askl klkaslk ñakslks ",
                        titulo:"PHP Orientado a objetos - Herencia",
                    },
                    {
                        id: 3,
                        img: "/certificados/c12.png",
                        descripccion:"sadsadasdasdasdasd sdasadasd asdasd asdasd asdasd sad \n ksajdksadmlkasjdlasdlkslaklsdmlaksmdlkasmdklasm \nlsakdla lkañk lakñ lka kañlk ñaslk ñlaksñ kaks askl klkaslk ñakslks ",
                        titulo:"PHP Orientado a objetos",
                    },
                    {
                        id: 4,
                        img: "/certificados/c11.png",
                        descripccion:"sadsadasdasdasdasd sdasadasd asdasd asdasd asdasd sad \n ksajdksadmlkasjdlasdlkslaklsdmlaksmdlkasmdklasm \nlsakdla lkañk lakñ lka kañlk ñaslk ñlaksñ kaks askl klkaslk ñakslks ",
                        titulo:"PHP nuevas características",
                    },
                    {
                        id: 5,
                        img: "/certificados/c9-1.png",
                        descripccion:"sadsadasdasdasdasd sdasadasd asdasd asdasd asdasd sad \n ksajdksadmlkasjdlasdlkslaklsdmlaksmdlkasmdklasm \nlsakdla lkañk lakñ lka kañlk ñaslk ñlaksñ kaks askl klkaslk ñakslks ",
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
                        descripccion:"",
                        titulo:"bootcamp QA/QC",
                    },
                    {
                        id: 9,
                        img: "/certificados/c5-1.png",
                        descripccion:"",
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