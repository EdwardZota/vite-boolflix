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
        let generalApi='https://api.themoviedb.org/3/search';
        
        let filmApi = generalApi + '/movie?api_key=16e130c582a04e3f9d34867e76eb82b1';

        let seriesApi = generalApi +'/tv?api_key=16e130c582a04e3f9d34867e76eb82b1';

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
    }
  }
</script>

<template>
  <MyHeader @SearchItem="getListFilmAndSeries"/>

  <main>
    <ListFilm/>

    <ListSeries/>
  </main>
  
</template>

<style lang="scss">
@use './styles/general.scss';

</style>
