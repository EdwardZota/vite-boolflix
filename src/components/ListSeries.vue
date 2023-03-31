<script>
    import {store} from '../store.js';
    import SingleSeries from './SingleSeries.vue';

    export default {
        name:'ListSeries',
        components:{
            SingleSeries
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <h3 v-if="store.allSeries.length>0">Lista Serie TV</h3>
    <div class="box" v-for="(serie,i) in store.allSeries" :key="i">
        <SingleSeries
            :title="serie.name"
            :originalTitle="serie.original_name"
            :language="serie.original_language"
            :vote="serie.vote_average"
        />
    </div>
</template>

<style lang="scss" scoped>

</style>