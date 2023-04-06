<template>
    <div class="size-per-movies">
        <div class="center">
            <img class="poster" src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"/>
        </div>
        <div>
            <h1>{{ movie.title }}</h1>
            <p>{{ movie.creator.lastname }} {{ movie.creator.firstname }}</p>
            <p>{{ movie.parution_date }}, {{ movie.language }}</p>
            <!-- <p>Genres : {{ concat_genre(movie.genres) }}</p> -->
            <a>Lien de detail</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        listMovie: [],
        movie: {}
    },
    data: function() {
      return {
      
      }
    },
    computed: {
        concat_genre(array_genres) {
            console.log(array_genres[0])
            // return "truc"
            return array_genres.join(', ')
        }
    }
}
</script>

<style scoped>
    .poster {
        max-height: 200px;
        max-width: 140px;
    }

    .size-per-movies {
        width: 300px;
    }

    .center {
        text-align: center;
    }
</style>