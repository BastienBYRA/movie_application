<template>
    <!-- <v-col cols="12" sm="3" v-for="movie in listMovie" v-bind:key="movie">
            <div>
                <img class="poster" src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"/>
            </div>
            <div>
                <h1>Title</h1>
                <p>Date de parution</p>
                <p>Réalisateur</p>
                <a>Lien de detail</a>
                <h2>{{ movie }}</h2>
            </div>
        </v-col> -->
        <div class="px-6" v-for="movie in listMovie" v-bind:key="movie">
            <div>
                <img class="poster" src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"/>
            </div>
            <div>
                <h1>Title</h1>
                <p>Date de parution</p>
                <p>Réalisateur</p>
                <a>Lien de detail</a>
                <h2>{{ movie }}</h2>
            </div>
        </div>

</template>

<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {
        
//     },
//     props: {
//         listMovie: []
//     }
// })

export default {
    props: {
        listMovie: []
    },
    data: function() {
      return {
      
      }
    },
}
</script>

<style scoped>
    .poster {
        max-height: 200px;
        max-width: 140px;
    }
</style>