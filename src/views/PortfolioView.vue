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
                        img: "/portfolio/genube.png",
                        descripccion:"• Desarrollo y mantenimiento de sistema de gestión para instituciones educativas Genube. \n• Análisis de requerimientos y soporte de un sistema contable integrado al sistema de gestión educativa Genube. \n• Soporte en los distintos módulos del sistema. \n• Implementacion de microservicios. \n• Desarrollo y mantenimiento de aplicación móvil con React Native.\n\nAptitudes: PHP - Laravel - JQuery - AngularJS 1.2 - ReactNative - Bootstrap - JS -MySQL - GIT - Redmine - HTML - CSS",
                        titulo:"Genube",
                        sitio:"https://genube.com/",
                        repo:"",
                        apk:"https://play.google.com/store/apps/details?id=com.genube.genubePadres&pcampaignid=web_share"
                    },
                    {
                        id: 2,
                        img: "/portfolio/ferriplast.png",
                        descripccion:"• Desarrollo y mantenimiento de web E-commerce Ferriplast.\n• App desarrollado en AF Soluciones Informatica.\n• Web no concluida.\n\nAptitudes: Laravel, HTML, Bootstrap, JavaScript, Sass, CSS, MySQL, PHP",
                        titulo:"Ferriplast",
                        sitio:"https://ferriplast.com.ar/h/public/",
                        repo:""
                    },
                    {
                        id: 3,
                        img: "/portfolio/funalsrl.png",
                        descripccion:"• Desarrollo y mantenimiento de web E-commerce Funal S.R.L.\n• App desarrollado en AF Soluciones Informatica.\n• Web no concluida.\n\nAptitudes: Laravel, HTML, Bootstrap, JavaScript, Sass, CSS, MySQL, PHP",
                        titulo:"Funal S.R.L",
                        sitio:"",
                        repo:""
                    },
                    {
                        id: 4,
                        img: "/portfolio/agenda.png",
                        descripccion:"• Desarrollo sitema de agenda de gastos.\n• Sumatoria de gastos.\n• CRUD.\n\nAptitudes: Laravel, HTML, CSS, JavaScript, MySQL, Bootstrap, PHP",
                        titulo:"Agenda",
                        sitio:"",
                        repo:"https://github.com/ArielOrellana/agenda"
                    },
                    {
                        id: 5,
                        img: "/portfolio/portfolio1.png",
                        descripccion:"• Desarrollo E-commerce.\n• Sistema de Carrito.\n• CRUD de Categoria y productos.\n\nAptitudes: Laravel, HTML, CSS, JavaScript, Bootstrap, MySQL, PHP",
                        titulo:"Proyecto E-commerce",
                        sitio:"",
                        repo:"https://github.com/ArielOrellana/Pagina-web-ventas"
                    },
                    {
                        id: 6,
                        img: "/portfolio/api_movie.png",
                        descripccion:"• API Rest.\n• CRUD Tv show, movies, actor.  \n\nAptitudes: Laravel, PHP, MySQL",
                        titulo:"Api Peliculas",
                        sitio:"",
                        repo:"https://github.com/ArielOrellana/api_movie"
                    },
                    {
                        id: 7,
                        img: "/portfolio/mazebook.png",
                        descripccion:"• Desarrollo Frontend Red social.\n\nAptitudes: HTML, CSS, Bootstrap, VueJS, JavaScript",
                        titulo:"Mazebook Tutorial Vue",
                        sitio:"https://arielorellana.github.io/tutorialvue/",
                        repo:"https://github.com/ArielOrellana/tutorialvue"
                    },
                    {
                        id: 8,
                        img: "/portfolio/rick_morty.png",
                        descripccion:"• Desarrollo web CRUD.\n• Consumo de API.\n\nAptitudes: HTML, CSS, JavaScript, Vuejs, Vuex",
                        titulo:"Tutorial Vue Rick & Morty",
                        sitio:"",
                        repo:""
                    },
                    {
                        id: 9,
                        img: "/portfolio/portfolio.png",
                        descripccion:"• Desarrollor portfolio personal.\n\nAptitudes: HTML, CSS, JavaScript, Vuejs",
                        titulo:"Portfolio",
                        sitio:"https://arielorellana.github.io/PortfolioArielOrellana/",
                        repo:"https://github.com/ArielOrellana/PortfolioArielOrellana"
                    },
                    {
                        id: 9,
                        img: "/portfolio/portfolio1.png",
                        descripccion:"• Cambio de version Laravel 5 a laravel 8.\n\nAptitudes: Laravel",
                        titulo:"Cambio de version laravel de app Proyecto E-commerce",
                        sitio:"",
                        repo:"https://github.com/ArielOrellana/ventas"
                    },
                    {
                        id: 10,
                        img: "/portfolio/portfolio 3.png",
                        descripccion:"• Estructuras de datos.\n• Diagramas de flujos.\n• Ejercicios logicos con C++.\n\nAptitudes: C++, logica, diagramas de flujos",
                        titulo:"Ejercicios UTN",
                        sitio:"",
                        repo:"https://github.com/ArielOrellana/UTN-CPP-DFD"
                    },
                    {
                        id: 11,
                        img: "/portfolio/QA-test.png",
                        descripccion:"• Historia de usuario.\n• Test Manual.\n• Pruebas de humo.\n\nAptitudes: QA/QC, Testing manual, Metodologia Scrum",
                        titulo:"QA trello",
                        sitio:"",
                        repo:""
                    },
                ]
            }
        }
    }
</script>