<script>
export default {
    name:'SingleItem',
    props:{
        title:String,
        originalTitle:String,
        language:String,
        vote:Number,
        image:String
    },
    data(){
        return{
            flag:'',
            imageApi:'',
            star:'',
        }
    },
    methods:{
        getFlag(){

            if(this.language=='en'){
                this.flag='<img src="/flag-en.png" alt="en">';

            }else if(this.language=='it'){
                this.flag='<img src="/flag-it.png" alt="it">';

            }else if(this.language=='de'){
                this.flag='<img src="/flag-de.png" alt="de">';

            }else{
                this.flag=this.language;
            }
        },
        getImage(){
            let baseImageApi='https://image.tmdb.org/t/p/w342';
            this.imageApi=baseImageApi+this.image;
        },
        valutation(){
            let none = 5;
            for(let i =0; i < this.vote ;i++){
                none--
                this.star+='<i class="fa-solid fa-star"></i>';
            }
            for(let i=0;i<none;i++){
                this.star+='<i class="fa-regular fa-star"></i>';
            }
        }
    },
    created(){
        this.getFlag();
        this.getImage();
        this.valutation();
    }
}
</script>

<template>
    <div class="SingleFilm">
        <div><img :src="imageApi">
        </div>
        <h1>{{ title }}</h1>
        <h2>{{ originalTitle }}</h2>
        <span v-html="flag"></span>
        <h6 v-html="star"></h6>
    </div>
  
</template>

<style lang="scss" scoped>

</style>