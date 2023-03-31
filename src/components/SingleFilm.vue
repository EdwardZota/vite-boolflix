<script>
export default {
    name:'SingleFilm',
    props:{
        title:String,
        originalTitle:String,
        language:String,
        vote:Number
    },
    data(){
        return{
            flagIta:'flag-it.png'
        }
    },
    methods:{
        getFlag:function(img){
            return new URL(`../assets/${img}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="SingleFilm">
        <h1>{{ title }}</h1>
        <h2>{{ originalTitle }}</h2>
        <span>
            {{ language }}
        </span>
        <h6>{{ vote }}</h6>
    </div>
  
</template>

<style lang="scss" scoped>

</style>