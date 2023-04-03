<script>
export default {
    name: 'SingleItem',
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        image: String,
        overview:String
    },
    data() {
        return {
            flag: '',
            imageApi: '',
            star: '',
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
    <div class="SingleFilm">
        <img class="cover" :src="imageApi">
        <h1 v-if="title.length>0" class="title">{{ title }}</h1>
        <h2 v-else class="originalTitle">{{ originalTitle }}</h2>
        <span class="flag" v-html="flag"></span>
        <h6 class="stars" v-html="star"></h6>
        <p>{{ overview }}</p>
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
        transition: transform 1s, height 2.5s;
    }
    .stars{
        font-size: 30px;
        color: #ff0;
    }
    &:hover{
        & .cover{
            transform: translate(-0%,-100%);
            height: 0;
        }
    }
}

</style>