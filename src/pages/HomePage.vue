<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="mt-16 mx-auto w-50">
        <label>Chercher un film</label>
        <v-text-field label="Nom du film, auteur, date de parution..." v-model="search" type="text"/>
        <br><br>
    </div>
  
    <div v-if="movieSearched.length > 0" class="d-flex movie-spacing">
        <div v-for="movie in movieSearched" v-bind:key="movie"> 
            <MovieItem :movie="movie"/>
        </div>
    </div>
    <div v-else>
      <h1 class="danger-text text-center">Pas de film disponible !</h1>
    </div>

    <br/><br/>
    <hr/>
    <v-btn color="green w-200px mt-6" v-on:click="goToCreate">Ajouter un film</v-btn>

  </template>
  
  <script>
  import MovieItem from '../components/MovieItem.vue'
  import { store } from '../data/store.js'
  
  export default {
    name: 'App',
    components: {
      MovieItem
    },
    data: function() {
      return {
        listMovie: store.listMovie,
        search: ""
      }
    },
    computed: {
      movieSearched() {
          return this.listMovie.filter(movie => movie.title.toLowerCase().includes(this.search.toLowerCase()) ||
          movie.parution_date.toString().includes(this.search) ||
          movie.creator.firstname.toLowerCase().includes(this.search.toLowerCase()) ||
          movie.creator.lastname.toLowerCase().includes(this.search.toLowerCase()))
      }
    },
    methods: {
        goToCreate() {
            this.$router.push({ name: 'create' })
        },
    }
  }
  </script>
  
  <style scoped>

  .w-200px {
    width: 200px
  }
  .danger-text {
    color: red;
  }
  .movie-spacing {
    gap: 50px;
  }
  </style>
  