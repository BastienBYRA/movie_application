<template>
    <div class="mt-16">
        <p>Détails</p>
        <br/><br/>

        <div class="d-flex gap-poster-action">
            <img class="side-poster" src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"/>
            <div>
                <h1>{{ movie.title }}</h1>
                <!--  -->
                <div v-if="movie.creator" class="h-100">
                    <div>
                        <p>Créé par {{ movie.creator.firstname }} {{ movie.creator.lastname }}, en {{ movie.parution_date }}</p>
                        <p>Genres : {{ concat_genre }}</p>
                    </div>
                    <div class="mt-auto">
                        <v-btn class="red-darken-1">Modifier</v-btn>
                        <v-btn class="red-darken-1">Noter</v-btn>
                        <v-btn class="red-darken-1">Supprimer</v-btn>
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
    created () {
    },
    data() {
        return {
            movie: {},
            genre: "",
            listMovie: store.listMovie
        };
    },
    mounted() {
        this.movie = this.listMovie.find(x => x.id == this.movieId); // Utiliser this.movieId pour accéder à la valeur de movieId
    },
    computed: {
        concat_genre() {
            return this.movie.genres.join(', ')
        }
    }
}
</script>

<style scoped>

    .gap-poster-action {
        gap:16px;
    }
    .side-poster {
        aspect-ratio: 3 / 4;
        max-width: 200px;
    }
/* Votre style ici */
</style>
