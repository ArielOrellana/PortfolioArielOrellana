<template>
    <div v-for="skill in skills" :key="skill.img" class="skills">
        <img :src="skill.img" alt="" class="imgSkill">
        <h2>{{ skill.titulo }}</h2>
    </div>
</template>
<script>
    export default{
        props: ['skills']
    }
</script>
<style>
.skills{
position: relative;
text-align: center;
}
.imgSkill{
    width: 100px;
    height: 100px;
}
</style>