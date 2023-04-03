<script>
  import axios from 'axios';

  import {store} from './store.js';

  import MyHeader from './components/MyHeader.vue';
  import ListFilm from './components/ListFilm.vue';
  import ListSeries from './components/ListSeries.vue';


  export default {
    components:{
      MyHeader,
      ListFilm,
      ListSeries
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
  <MyHeader @SearchItem="getListFilmAndSeries"/>

  <main>
    <h3 v-if="store.allFilm.length==0">Per visualizzare i film scrivi nella barra di ricerca</h3>
    <ListFilm/>

    <ListSeries/>
  </main>
  
</template>

<style lang="scss">
@use './styles/general.scss';

</style>
