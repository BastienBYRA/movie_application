<template>
    <div class="mt-16 mx-16">

        <PreviousPageComponentVue :namePage="pageToRedirect" :textLink="textLink" :idParam="movieId" />

        <h1 class="mt-3">Modifier le film <span class="underline">{{ movie.title }}</span></h1>

        <div class="mt-4">
            <FormMovie v-if="movie != null && movie.creator != null" @editMovie="editMovie" :movie="movie" :action="'EDIT'" />
        </div>
    </div>

</template>

<script>
import { getCurrentInstance } from 'vue';
import { store } from '../data/store.js'
import PreviousPageComponentVue from '@/components/PreviousPageComponent.vue';
import FormMovie from '@/components/FormMovie.vue';

export default {
    components: {
        PreviousPageComponentVue,
        FormMovie
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
        editMovie(newMovie) {
            store.updateMovie(this.movie.id, newMovie)
            this.$router.push({ name: 'details', params: { id: this.movie.id } })
        }
    }
}
</script>

<style scoped>
</style>
