<template>
    <div class="mt-16">

        <router-link :to="{ name: 'home' }">
            <p class="previous-page">⟵ Retour a la liste des films</p>
        </router-link>

        <br/>

        <div class="d-flex gap-poster-action">
            <img class="side-poster" src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"/>
            <div class="w-100">
                <h1>{{ movie.title }}</h1>
                <div v-if="movie.creator" class="h-100 d-flex flex-column">
                    <div>
                        <p>Créé par {{ movie.creator.firstname }} {{ movie.creator.lastname }}, en {{ movie.parution_date }}</p>
                        <p>Genres : {{ concat_genre }}</p>
                    </div>
                    <div class="mt-auto d-flex flex-column mb-12">
                        <p v-if="movie.notation != null">Votre note : {{ movie.notation }}</p>
                        <p v-else>Aucune note.</p>

                        <div>
                            <v-select :items="['1', '2', '3', '4', '5']" v-model="movieNotation" label="Votre note">
                            </v-select>
                        </div>
                        <div class="d-flex">
                            <v-btn color="green" v-on:click="noteMovie">Noter</v-btn>
                            <v-btn color="primary" class="ml-2">Modifier</v-btn>
                            <v-btn color="red" class="ml-auto">Supprimer</v-btn>
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

export default {
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
        noteMovie() {
            console.log("test ! ;D")
            console.log(!isNaN(this.movieNotation))
            if(!isNaN(this.movieNotation))
                store.notationMovie(this.movie.id, this.movieNotation);
            else
                this.movieNotation = 0;
            // store.deleteMovie(this.movie.id);
            // this.$router.push("/")
        }
    }
}
</script>

<style scoped>
    .previous-page {
        opacity: 0.8;
        color: grey;
    }
    .gap-poster-action {
        gap:16px;
    }
    .side-poster {
        aspect-ratio: 3 / 4;
        max-width: 200px;
    }
/* Votre style ici */
</style>
