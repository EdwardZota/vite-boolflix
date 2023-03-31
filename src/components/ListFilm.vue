<script>
    import {store} from '../store.js';
    import SingleItem from './SingleItem.vue';

    export default {
        name:'ListFilm',
        components:{
            SingleItem
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <h3 v-if="store.allFilm.length>0">Lista Film</h3>
    <div class="box" v-for="(film,i) in store.allFilm" :key="i">
        <SingleItem 
            :title="film.title"
            :originalTitle="film.original_title"
            :language="film.original_language"
            :vote="Math.floor(film.vote_average / 2)"
            :image="film.poster_path"

        />
    </div>
</template>

<style lang="scss" scoped>

</style>