<template>
    <div class="size-per-movies py-3 px-8 center">
        <router-link :to="{ name: 'details', params: { id: movie.id } }">
            <div>
                <v-img class="poster" :src="movie.posterURL"></v-img>
            </div>
            <div>
                <p class="text-ellipsis">{{ movie.title }}</p>
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
        aspect-ratio: 3/4;
    }

    .text-ellipsis {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .size-per-movies {
        width: 220px;
    }

    .center {
        text-align: center;
    }
</style>