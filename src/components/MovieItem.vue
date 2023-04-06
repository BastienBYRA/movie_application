<template>
    <div class="size-per-movies py-3 px-8 center">
        <router-link :to="{ name: 'details', params: { id: movie.title } }">
            <div>
                <img class="poster" src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"/>
            </div>
            <div>
                <p class="text-ellipsis">{{ movie.title }}</p>
                <!-- <p>{{ movie.creator.lastname }} {{ movie.creator.firstname }}</p>
                <p>{{ movie.parution_date }}, {{ movie.language }}</p>
                <p>Genres : {{ concat_genre }}</p>
                <a>Lien de detail</a> -->
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        movie: {}
    },
    data: function() {
      return {
      
      }
    },
    computed: {
        concat_genre() {
            return this.movie.genres.join(', ')
        }
    }
}
</script>

<style scoped>
    .poster {
        max-height: 200px;
        aspect-ratio: 4/3;
        object-fit: cover;
    }

    .text-ellipsis {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .size-per-movies {
        width: 250px;
    }

    .center {
        text-align: center;
    }
</style>