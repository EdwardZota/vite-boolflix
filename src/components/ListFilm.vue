<script >
    import axios from 'axios';
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
        },
        methods:{
            getCastItem(id){
                if(this.store.allCast.length>0){
                    this.store.allCast=[];
                }
                
                axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=16e130c582a04e3f9d34867e76eb82b1`)
                .then(response =>{
                    this.store.allCast=response.data.cast;
            })
            },
            selectorArrayFilm(){
                if(this.store.filmFiltered==""){
                    return this.store.allFilm;
                }else{
                    return this.store.filmFiltered;
                }
            },
            selectorArraySeries(){
                if(this.store.filmFiltered==""){
                    return this.store.allSeries;
                }else{
                    return this.store.serieFiltered;
                }
            }
        }
    }
</script>

<template>
    <div>
        <h3 v-if="store.allFilm.length>0">Lista Film</h3>
        <div class="container">
            <div class="box" v-for="(film,i) in selectorArrayFilm()" :key="i" @click="getCastItem(film.id)" >
                <SingleItem 
                    :title="film.title"
                    :originalTitle="film.original_title"
                    :language="film.original_language"
                    :vote="Math.floor(film.vote_average / 2)"
                    :image="film.poster_path"
                    :overview="film.overview"
                    :genres="film.genre_ids"
                />
            </div>
        </div>
        <h3 v-if="store.allSeries.length>0">Lista Serie TV</h3>
        <div class="container">
            <div class="box series" v-for="(serie,i) in selectorArraySeries()" :key="i" @click="getCastItem(serie.id)">
                <SingleItem
                    :title="serie.name"
                    :originalTitle="serie.original_name"
                    :language="serie.original_language"
                    :vote="Math.floor(serie.vote_average / 2)"
                    :image="serie.backdrop_path"
                    :overview="serie.overview"
                    :genres="serie.genre_ids"
                />
            </div>
        </div>

    </div>
    
</template>

<style lang="scss" scoped>
.container .box.series{
    width: calc(100% / 4 - 20px);
    height: 250px;
    
}

</style>