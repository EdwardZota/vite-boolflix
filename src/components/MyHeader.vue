<script>


    import {store} from '../store.js';

    export default {
        name:'MyHeader',
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
  <div class="searchbar">
    <input type="text" placeholder="Che film vuoi cercare?" v-model="store.searchText">
    <button @click="$emit('SearchItem')">Cerca</button>
  </div>
</template>

<style lang="scss" scoped>

</style>