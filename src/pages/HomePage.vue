<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="mt-16 mx-auto w-50">
        <label>Chercher un film</label>
        <v-text-field label="Nom du film, auteur, date de parution..." v-model="search" type="text"/>
        <br><br>
    </div>
  
    <div class="d-flex movie-spacing">
        <div v-for="movie in listMovie" v-bind:key="movie"> 
            <MovieItem :movie="movie"/>
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
        // listMovie: [
        //   {
        //     id: 1,
        //     title: "Name mov",
        //     parution_date: 1998,
        //     language: "English",
        //     genres: ["Science", "Drama"],
        //     creator: {
        //       firstname: "Jack",
        //       lastname: "DUPOND"
        //     }
        //   },
        //   {
        //     id: 2,
        //     title: "Un nom bien plus long que le précédent",
        //     parution_date: 1998,
        //     language: "English",
        //     genres: ["Science", "Drama"],
        //     creator: {
        //       firstname: "Jack",
        //       lastname: "DUPOND"
        //     }
        //   }
        // ],
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
  }
  </script>
  
  <style>
  /* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */

  .movie-spacing {
    gap: 50px;
  }
  </style>
  