<template>
    <!-- Search bar -->
    <div class="margin-header bg-search">
      <div class="mt-16 mx-auto w-50 sub-element-bg-search">
        <h1 class="title">Chercher un film</h1>
        <v-text-field label="Nom du film, auteur, date de parution..." v-model="search" type="text" variant="solo"/>
        <br><br>
      </div>
    </div>

    <!-- Liste des films -->
    <div class="mx-8">
      <div class="mt-8">
      <div v-if="movieSearched.length > 0" class="d-flex movie-spacing">
          <div v-for="movie in movieSearched" v-bind:key="movie"> 
              <MovieItem :movie="movie"/>
          </div>
      </div>
      <div v-else>
        <h1 class="danger-text text-center">Pas de film disponible !</h1>
      </div>
    </div>

    <!-- Bouton ajouter -->
    <br/><br/>
    <div class="d-flex justify-center">
      <v-btn color="green mt-6" v-on:click="goToCreate">Ajouter un film</v-btn>
    </div>
    </div>


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
  .bg-search {
    background-image: url(https://cdn.shopify.com/s/files/1/0830/9575/articles/dune-bella-grace-movie-poster-header_e707fdce-6e5f-4337-8c13-24ad22655693_2048x.jpg?v=1681287597);
    background-size: cover;
  }

  .title {
    color: #efefef;
    font-weight: bolder;
    text-shadow: 0 0 8px #000;
  }
  .margin-header {
    margin-top: 35px;
  }
  
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
  