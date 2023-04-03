import { reactive } from 'vue';

export const store = reactive({
    allFilm:[],
    allSeries:[],
    allGenres:[],
    allCast:[],
    searchText:'',
})