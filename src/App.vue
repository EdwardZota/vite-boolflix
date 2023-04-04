<script>
  import axios from 'axios';

  import {store} from './store.js';

  import MyHeader from './components/MyHeader.vue';
  import ListFilm from './components/ListFilm.vue';


  export default {
    components:{
      MyHeader,
      ListFilm
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getListFilmAndSeries(){

        if(this.store.allFilm.length>0 || this.store.allSeries.length>0){
          this.store.allFilm=[];
          this.store.allSeries=[];
        }
        let generalApi='https://api.themoviedb.org/3/search';
        
        let filmApi = generalApi + '/movie?api_key=16e130c582a04e3f9d34867e76eb82b1&language=it-IT';

        let seriesApi = generalApi +'/tv?api_key=16e130c582a04e3f9d34867e76eb82b1&language=it-IT';

        if(store.searchText.length>0){
          filmApi +=`&query=${store.searchText}`;
          seriesApi +=`&query=${store.searchText}`;

          axios.get(filmApi)
          .then(response => {
            this.store.allFilm=response.data.results;
          })
          axios.get(seriesApi)
          .then(response => {
            this.store.allSeries=response.data.results;
          })
        }
      },
      filterToGenres(){
        this.store.filmFiltered=[];
        this.store.serieFiltered=[];
        if(this.store.selectorGenere != ""){

          for(let i =0;i < this.store.allGenres.length;i++){
            if(this.store.selectorGenere==this.store.allGenres[i].name){
              let selectorAsNumber=this.store.allGenres[i].id;
  
              for(let i=0;i<this.store.allFilm.length;i++){
                if(this.store.allFilm[i].genre_ids.includes(selectorAsNumber)){
                  this.store.filmFiltered.push(this.store.allFilm[i]);
                }
              }
              for(let i=0;i<this.store.allSeries.length;i++){
                if(this.store.allSeries[i].genre_ids.includes(selectorAsNumber)){
                  this.store.serieFiltered.push(this.store.allSeries[i]);
                }else if((selectorAsNumber == 28 || selectorAsNumber == 12) && this.store.allSeries[i].genre_ids.includes(10759)){
                  this.store.serieFiltered.push(this.store.allSeries[i]);
                }
              }
            }
          }
        }
      }
      },
      created(){
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=16e130c582a04e3f9d34867e76eb82b1')
          .then(response => {
            this.store.allGenres=response.data.genres;
          })
      }
  }
</script>

<template>
  <MyHeader @SearchItem="getListFilmAndSeries" @change="filterToGenres"/>

  <main>
    <h3 v-if="store.allFilm.length==0 && store.allSeries.length==0">Per visualizzare i film scrivi nella barra di ricerca</h3>
    <ListFilm/>

  </main>
  
</template>

<style lang="scss">
@use './styles/general.scss';

</style>
