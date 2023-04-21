<template>
    <div class="mt-16 mx-16">

        <PreviousPageComponentVue :namePage="pageToRedirect" :textLink="textLink" :idParam="movieId" />

        <h1 class="mt-3">Supprimer le film <span class="underline">{{ movie.title }}</span></h1>

        <div class="mt-4">
            <v-btn color="red" v-on:click="deleteMovie()">Supprimer</v-btn>
        </div>
    </div>

</template>

<script>
import { getCurrentInstance } from 'vue';
import { store } from '../data/store.js'
import PreviousPageComponentVue from '@/components/PreviousPageComponent.vue';

export default {
    components: {
        PreviousPageComponentVue
    },
    setup() {
        //Pour récupérer l'id du movie dans le javascript
        const instance = getCurrentInstance();
        const $route = instance.proxy.$route;
        const movieId = $route.params.id;

        return {
            movieId
        };
    },
    data() {
        return {
            textLink: "Retour au details du film",
            pageToRedirect: "details",
            movie: {},
            listMovie: store.listMovie,
        };
    },
    mounted() {
        this.movie = this.listMovie.find(x => x.id == this.movieId);
    },
    methods: {
        deleteMovie() {
            store.deleteMovie(this.movie.id)
            this.$router.push({ name: 'home' })
        }
    }
}
</script>

<style scoped>
</style>
