<script>
import {store} from '../store.js';

export default {
    name: 'SingleItem',
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        image: String,
        overview:String,
        genres:Array
    },
    data() {
        return {
            flag: '',
            imageApi: '',
            star: '',
            store,
            visible:false,
            itemGenres:[],
        }
    },
    methods: {
        getFlag() {

            if (this.language == 'en') {
                this.flag = '<img src="/flag-en.png" alt="en">';

            } else if (this.language == 'it') {
                this.flag = '<img src="/flag-it.png" alt="it">';

            } else if (this.language == 'de') {
                this.flag = '<img src="/flag-de.png" alt="de">';

            } else {
                this.flag = this.language;
            }
        },
        getImage() {
            let baseImageApi = 'https://image.tmdb.org/t/p/w342';
            this.imageApi = baseImageApi + this.image;
        },
        valutation() {
            let none = 5;
            for (let i = 0; i < this.vote; i++) {
                none--
                this.star += '<i class="fa-solid fa-star"></i>';
            }
            for (let i = 0; i < none; i++) {
                this.star += '<i class="fa-regular fa-star"></i>';
            }
        },
        isVisible(){
            if(this.visible==false){
                this.visible=true;
            }else{
                this.visible=false;
            }
        },
        convertGenres(){
            if(this.itemGenres.length>0){
                this.itemGenres=[];
            }
            for(let i=0;i<this.genres.length;i++){
                let codeGenre=this.genres[i];
                
                for(let i=0;i<this.store.allGenres.length;i++){
                    if(codeGenre==this.store.allGenres[i].id){
                        this.itemGenres.push(this.store.allGenres[i].name);
                    }
                }
            }
        }
    },
    created() {
        this.getFlag();
        this.getImage();
        this.valutation();
    }
}
</script>

<template>
    <div class="SingleFilm" @click="convertGenres(),isVisible()">
        <img class="cover" :src="imageApi">
        <div class="info">
            <h1 v-if="title.length>0" class="title">{{ title }}</h1>
            <h2 v-else class="originalTitle">{{ originalTitle }}</h2>
            <span class="flag" v-html="flag"></span>
            <h6 class="stars" v-html="star"></h6>
            <p>{{ overview }}</p>
            
        </div>
        <div class="castingAndGenres" v-if="visible">
            <div class="box">
                <h3>Genere</h3>
                <ul class="genresList">
                    <li v-for="(genre,i) in itemGenres" :key="i">{{i+1}}- {{ genre }}</li>
                </ul>
                <h3>Attori</h3>
                <ul class="castingList">
                    <li v-for="(people,i) in store.allCast.slice(0,5)" :key="i">{{i+1}}-{{ people.name }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.SingleFilm {
    width: 100%;
    height: 92%;
    text-align: center;
    overflow: hidden;
    background-color: black;
    color: white;
    .cover {
        width: 100%;
        height: 100%;
        transition: all 1s;
    }
    & .info{
        transition: all 1s;
        padding: 30px;
        height: 100%;
    }
    .stars{
        font-size: 30px;
        color: #ff0;
    }
    &:hover .cover,&:hover .info{
        transform: translate(-0%,-100%);
    }
}
.castingAndGenres{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: black, $alpha: 0.7);
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    .box{
        width: 50%;
        height: 50%;
        background-color: black;
        color: white;
        border-radius: 30px;
        border: 3px solid white;
        box-shadow: 0 0 20px 20px white;
        text-align: left;
        padding: 50px 30px;
        position: relative;
        overflow-y: hidden;
        ul li{
            list-style: none;
            font-size: 20px;
        }
    }
}

</style>