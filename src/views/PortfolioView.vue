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
                        img: "/portfolio/portfolio1.png",
                        descripccion:"sadsadasdasdasdasd sdasadasd asdasd asdasd asdasd sad \n ksajdksadmlkasjdlasdlkslaklsdmlaksmdlkasmdklasm \nlsakdla lkañk lakñ lka kañlk ñaslk ñlaksñ kaks askl klkaslk ñakslks ",
                        titulo:"Ventas",
                    },
                    {
                        id: 2,
                        img: "/portfolio/portfolio 2.png",
                        descripccion:"",
                        titulo:"",
                    },
                    {
                        id: 3,
                        img: "/portfolio/portfolio 3.png",
                        descripccion:"",
                        titulo:"",
                    },
                    {
                        id: 4,
                        img:"/portfolio/portfolio4.png",
                        descripccion:"",
                        titulo:"",
                    },
                ]
            }
        }
    }
</script>