<script>
    import {store} from '../store.js';
    import SingleItem from './SingleItem.vue';

    export default {
        name:'ListSeries',
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
    <h3 v-if="store.allSeries.length>0">Lista Serie TV</h3>
    <div class="box" v-for="(serie,i) in store.allSeries" :key="i">
        <SingleItem
            :title="serie.name"
            :originalTitle="serie.original_name"
            :language="serie.original_language"
            :vote="Math.floor(serie.vote_average / 2)"
            :image="seriebackdrop_path"
        />
    </div>
</template>

<style lang="scss" scoped>

</style>