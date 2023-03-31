<script>
export default {
    name:'SingleSeries',
    props:{
        title:String,
        originalTitle:String,
        language:String,
        vote:Number

    }
}
</script>

<template>
    <div class="SingleSerie">
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