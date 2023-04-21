<template>
    <div class="mt-16">

        <PreviousPageComponentVue :namePage="pageToRedirect" :textLink="textLink" />

        <h1 class="mt-3">Ajouter un film</h1>

        <div class="mt-4">
            <FormMovie v-if="movie != null && movie.creator != null" @saveMovie="saveMovie" :movie="movie" :action="'CREATE'" />
        </div>
    </div>

</template>

<script>
import { store } from '../data/store.js'
import PreviousPageComponentVue from '@/components/PreviousPageComponent.vue';
import FormMovie from '@/components/FormMovie.vue';

export default {
    components: {
        PreviousPageComponentVue,
        FormMovie
    },
    // setup() {
    //     //Pour récupérer l'id du movie dans le javascript
    //     const instance = getCurrentInstance();
    //     const $route = instance.proxy.$route;
    //     const movieId = $route.params.id;

    //     return {
    //         movieId
    //     };
    // },
    data() {
        return {
            textLink: "Retour à la liste des films",
            pageToRedirect: "home",
            movie: null,
            listMovie: store.listMovie,
        };
    },
    mounted() {
        this.movie = store.generateEmptyMovie();
        console.log(this.movie)
    },
    methods: {
        saveMovie(newMovie) {
            console
            let newIdMovie = store.createMovie(newMovie)
            this.$router.push({ name: 'details', params: { id: newIdMovie } })
        }
    }
}
</script>

<style scoped>
</style>
