<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="d-flex"> 
    <MovieItem :listMovie="listMovie"/>
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
      listMovie: ["Truc 1", "Truc 2"],
      search: ""
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
