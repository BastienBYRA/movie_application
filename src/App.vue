<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="ml-8 w-25">
  <label>Chercher un film</label>
  <v-text-field label="Nom du film, auteur, date de parution..." v-model="search" type="text"/>
  <br><br>
  </div>


  <div class="d-flex"> 
    <MovieItem :listMovie="movieSearched"/>
  </div>

</template>

<script>
import MovieItem from './components/MovieItem.vue';

export default {
  name: 'App',
  components: {
    MovieItem
  },
  data: function() {
    return {
      listMovie: [
        {
          title: "Name mov",
          parution_date: 1998,
          language: "English",
          genres: ["Science", "Drama"],
          creator: {
            firstname: "Jack",
            lastname: "DUPOND"
          }
        }
      ],
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
#app {
  margin-top: 20px;
}
</style>
