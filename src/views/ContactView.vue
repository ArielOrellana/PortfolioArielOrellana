<template>
    <div class="center">
        <div class="contact">
            <h1><a href="https://www.linkedin.com/in/orellanaariel1998/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></h1>
            <h1><a href="https://github.com/ArielOrellana" target="_blank"><i class="fa-brands fa-github"></i></a></h1>
            <h1><a href="https://gitlab.com/OrellanaAriel1998" target="_blank"><i class="fa-brands fa-gitlab"></i></a></h1>
            <h1><router-link :to="{name: 'home'}"><i class="fa-solid fa-globe"></i></router-link></h1>
            <h1><a href="mailto:orellanaariel1998@gmail.com"><i class="fa-solid fa-envelope"></i></a></h1>
            <h1><a href="https://www.instagram.com/patu.hard/" target="_blank"><i class="fa-brands fa-instagram"></i></a></h1>       
            <h2>orellanaariel1998@gmail.com</h2>
        </div>
    </div>
</template>
<style>
.contact{
    display: flex;
    flex-direction: column;
    align-items: center;
}
/*junio 18360 examen 14300*/
@media (min-width: 1024px) {
    .contact{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50px, 0.1fr));
        gap: 5px;
        padding: 2px;
        max-width: 60%;
    }
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
}
</style>