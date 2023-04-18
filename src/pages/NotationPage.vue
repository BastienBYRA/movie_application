<template>
    <div class="mt-16">

        <PreviousPageComponentVue :namePage="pageToRedirect" :textLink="textLink" :idParam="movieId" />

        <h1 class="mt-3">Noter le film {{ movie.title }}</h1>

        <div>
            <NotationComponent v-if="movieNotation != null" :movie="movie" :movieNotation="movieNotation" @noteMovie="noteMovie"/>
        </div>
    </div>

</template>

<script>
import { getCurrentInstance } from 'vue';
import NotationComponent from '../components/NotationComponent.vue'
import PreviousPageComponentVue from '@/components/PreviousPageComponent.vue';
import { store } from '../data/store.js'

export default {
    components: {
        NotationComponent,
        PreviousPageComponentVue
    },
    setup() {
        const instance = getCurrentInstance(); // Obtenir l'instance du composant
        const $route = instance.proxy.$route; // Accéder à $route depuis l'instance du composant
        const movieId = $route.params.id; // Déclarer movieId et lui attribuer la valeur de $route.params.id

        return {
            movieId // Retourner movieId depuis la fonction setup()
        };
    },
    data() {
        return {
            textLink: "Retour au details du film",
            pageToRedirect: "details",

            movie: {},
            listMovie: store.listMovie,
            movieNotation: null
        };
    },
    mounted() {
        this.movie = this.listMovie.find(x => x.id == this.movieId); // Utiliser this.movieId pour accéder à la valeur de movieId
        
        if(this.movie.notation != null && !isNaN(this.movie.notation))
            this.movieNotation = this.movie.notation
        else
            this.movieNotation = 1;
    },
    methods: {
        noteMovie(note) {
            if(!isNaN(note)) {
                store.notationMovie(this.movie.id, note);
                this.notationMovie = note;
            } 
            else
                this.movieNotation = 1;
        }
    }
}
</script>
<style scoped>

</style>