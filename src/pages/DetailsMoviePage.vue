<template>
    <div class="mt-16 mx-16">

        <PreviousPageComponentVue :namePage="this.pageToRedirect" :textLink="this.textLink" />

        <br/>

        <div class="d-flex gap-poster-action">
            <img class="side-poster" :src="movie.posterURL"/>
            <div class="w-100">
                <h1 class="underline">{{ movie.title }}</h1>
                <div v-if="movie.creator" class="h-100 d-flex flex-column">
                    <div>
                        <p>Créé par {{ movie.creator.firstname }} {{ movie.creator.lastname }} ({{ movie.creator.nationality }}), en {{ movie.parution_date }}</p>
                        <p>Genres : {{ concat_genre }}</p>
                        <p>Langue : {{ movie.language }}</p>
                    </div>
                    <div class="mt-auto d-flex flex-column mb-12">
                        <p v-if="movie.notation != null">Votre note : {{ movie.notation }}</p>
                        <p v-else>Aucune note.</p>

                        <div class="d-flex">
                            <v-btn color="green" v-on:click="goToNotation">Noter</v-btn>
                            <v-btn color="primary" class="ml-2" v-on:click="goToEdit">Modifier</v-btn>
                            <v-btn color="red" class="ml-auto" v-on:click="goToDelete">Supprimer</v-btn>
                        </div>
                    </div>
                </div>
                
                <div v-else>
                    <p>Aucun créateur trouvé</p>
                </div>
                
            </div>
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
            textLink: "Retour à la liste des films",
            pageToRedirect: "home",

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
    computed: {
        concat_genre() {
            return this.movie.genres.join(', ')
        }
    },
    methods: {
        goToNotation() {
            this.$router.push({ name: 'notation', params: { id: this.movieId } })
        },
        goToDelete() {
            this.$router.push({ name: 'delete', params: { id: this.movieId } })
        },
        goToEdit() {
            this.$router.push({ name: 'edit', params: { id: this.movieId } })
        }
    }
}
</script>

<style scoped>
    .gap-poster-action {
        gap:16px;
    }
    .side-poster {
        aspect-ratio: 3/4;
        max-width: 160px;
    }
/* Votre style ici */
</style>
