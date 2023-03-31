<script>
export default {
    name:'SingleFilm',
    props:{
        title:String,
        originalTitle:String,
        language:String,
        vote:Number
    },
    data(){
        return{
            flag:''
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
        }
    },
    created(){
        this.getFlag();
    }
}
</script>

<template>
    <div class="SingleFilm">
        <h1>{{ title }}</h1>
        <h2>{{ originalTitle }}</h2>
        <span v-html="flag"></span>
        <h6>{{ vote }}</h6>
    </div>
  
</template>

<style lang="scss" scoped>

</style>