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
            <div v-if="store.searchText!=''" class="typingcontainer">
                <div  class="typing">
                    <div class="ring"></div>
                    <div class="ring"></div>
                    <div class="ring"></div>
                    <div class="ring"></div>
                </div>
                <p>Typing...</p>
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
        width: 900px;
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

    .typing{
        position: absolute;
        top: 0;
        right: 0;
        height: 90px;
        width: 90px;
        margin: 5px;
        color: white;
        animation: rotateTotal 5s linear infinite;
        
        .ring{
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 0px solid black;
            border-bottom-width: 5px;
            
            &:nth-child(1){
                border-color: red;
                animation: rotate1 2.5s linear infinite;
            }
            &:nth-child(2){
                border-color: white;
                animation: rotate2 2s linear infinite;
            }
            &:nth-child(3){
                border-color: green;
                animation: rotate3 3s linear infinite;
            }
            &:nth-child(4){
                border-color: yellow;
                animation: rotate4 3.5s linear infinite;
            }

        }
    }
    .typingcontainer{
        p{
            color: white;
            transform: translate(75px,15px);
            font-size: 14px;
        }
    }

    @keyframes rotate1 {
        from {transform:rotateX(60deg) rotateY(135deg) rotateZ(0deg);}
        to {transform:rotateX(60deg) rotateY(135deg) rotateZ(360deg);} 
    }
    @keyframes rotate2 {
        from {transform:rotateX(40deg) rotateY(45deg) rotateZ(0deg);}
        to {transform:rotateX(40deg) rotateY(45deg) rotateZ(360deg);}
    }
    @keyframes rotate3 {
        from {transform: rotateX(-45deg) rotateZ(0deg);}
        to {transform: rotateX(-45deg) rotateZ(360deg);} 
    }
    @keyframes rotate4 {
        from {transform:rotateX(-60deg) rotateY(180deg) rotateZ(0deg);}
        to {transform:rotateX(-60deg) rotateY(180deg) rotateZ(360deg);}
    }
    @keyframes rotateTotal {
        from {transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);}
        to {transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);}
    }
    

</style>