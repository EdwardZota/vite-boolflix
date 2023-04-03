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
        <div class="flip-card" tabIndex="0">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img class="cover" :src="imageApi">
                </div>
                <div class="flip-card-back">
                    <h1 v-if="title.length>0" class="title">{{ title }}</h1>
                    <h2 v-else class="originalTitle">{{ originalTitle }}</h2>
                    <span class="flag" v-html="flag"></span>
                    <h6 class="stars" v-html="star"></h6>
                    <p>{{ overview }}</p>
                </div>
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
    .cover {
        width: 100%;
    }
    .stars{
        font-size: 30px;
        color: #ff0;
    }
    p{
        color: white;
    }
}


.flip-card {
    background-color: black;
    width: 100%;
    height: 100%;
    perspective: 1000px;
}

.flip-card-inner {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
}

.flip-card:focus {
    outline: 0;
}

.flip-card:hover .flip-card-inner,.flip-card:focus .flip-card-inner{
    transform: rotateY(180deg);
}

.flip-card-front,.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
}

.flip-card-front {
    z-index: 2;
}

.flip-card-back {
    background-color: black;
    color: white;
    transform: rotateY(180deg);
    z-index: 1;
    padding: 20px;
}
</style>