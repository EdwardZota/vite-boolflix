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
    <div id="header">
        <div class="logo">
            <span>BOOLFLIX</span>
        </div>
        <div id="rightNav">
            <div class="genere">
                <label for="generi">Scegli un genere:</label>
                <select name="generi" v-model="store.selectorGenere">
                    <option value="">All</option>
                    <option v-for="(genere ,i) in store.allGenres" :key="i" :value="genere.name">{{ genere.name }}</option>
                </select>
            </div>
            <div class="searchbar">
                <input type="text" placeholder="Che film vuoi cercare?" @keyup.enter="$emit('SearchItem')" v-model="store.searchText">
                <button @click="$emit('SearchItem')">Cerca</button>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

    #header{
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        padding: 0 50px;

    }
    .logo{
        color: red;
        font-size: 50px;
        font-weight: bolder;
        transform: skew(-30deg);
    }
    .searchbar,.genere{
        width: 400px;
        transform: skew(-20deg);

        input{
            width: 70%;
            background: linear-gradient(90deg, red 25%, black 100%);
            font-size: 25px;
            font-weight: bolder;
            border: none;
            padding: 10px;
            
            &::placeholder {
                font-weight: bolder;
                font-size: 15px;
                color: black;
            }
            &:focus {
                outline: none;
            }
        }
        button,option,label{
            width: 30%;
            border: none;
            background-color: black;
            font-weight: bolder;
            color: red;
            font-size: 25px;
        }

    }
    #rightNav{
        width: 800px;
        display: flex;
    }
    select{
        outline: none;
        border: none;
        background-color: red;
        font-size: 25px;
        font-weight: bolder;
        height: 48px;
        text-align: center;
        
    }

</style>