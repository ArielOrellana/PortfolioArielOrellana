<template>
    <div class="grid">
        <SkillsComp :skills="ArraySkills"/>
    </div>
</template>
<script>
    import SkillsComp from '../components/SkillsComp.vue'
    export default{
        components: {
            SkillsComp,
        },
        data(){
            return{
                ArraySkills:[
                    {
                        img:'https://img.icons8.com/?size=100&id=YrKoPXb4jv9l&format=png&color=000000',
                        titulo:'PHP',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=lRjcvhvtR81o&format=png&color=000000',
                        titulo:'Laravel',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000',
                        titulo:'MySQL',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=BUnExfsRs3CW&format=png&color=000000',
                        titulo:'VueJs',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000',
                        titulo:'React Native',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=9Um0Q4sZ0QCC&format=png&color=000000',
                        titulo:'JQuery',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=71257&format=png&color=000000',
                        titulo:'AngularJS 1.2',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=20906&format=png&color=000000',
                        titulo:'Git',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000',
                        titulo:'GitHub',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=34886&format=png&color=000000',
                        titulo:'GitLab',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=RlIXjuTUrwoX&format=png&color=000000',
                        titulo:'API',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=i19Ns28h30P4&format=png&color=000000',
                        titulo:'VSCode',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
                        titulo:'HTML',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=21278&format=png&color=000000',
                        titulo:'CSS',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=108784&format=png&color=000000',
                        titulo:'JavaScript',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=g9mmSxx3SwAI&format=png&color=000000',
                        titulo:'Bootstrap',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=QBqFNfPPB2Kx&format=png&color=000000',
                        titulo:'Sass',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000',
                        titulo:'C++',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000',
                        titulo:'Dart',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000',
                        titulo:'Flutter',
                    },
                    {
                        img:'https://img.icons8.com/?size=100&id=21049&format=png&color=000000',
                        titulo:'Trello'
                    },
                    {
                        img:'https://www.redmine.org/favicon.ico?1679302129',
                        titulo:'Redmine'
                    }
                ]
            }
        }
    }
</script>
<style>
.grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 0.2fr));
    gap: 20px;
    padding: 20px;
}
</style>