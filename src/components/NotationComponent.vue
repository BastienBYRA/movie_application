<template>
    <div class="mt-auto d-flex flex-column mb-12">
        <p v-if="movie.notation != null">Votre note : {{ movie.notation }}</p>
        <p v-else>Aucune note.</p>

        <div v-if="this.movieNotationChoose != null">
            <v-select :items="['1', '2', '3', '4', '5']" v-model="movieNotationChoose" label="Votre note">
            </v-select>
        </div>

        <v-btn color="green" @click="$emit('noteMovie', movieNotationChoose)">Noter</v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            movieNotationChoose: null,
        };
    },
    props: {
        movie: {},
        movieNotation: Number,
    },
    mounted() {
        this.movieNotationChoose = this.movieNotation
    },
}
</script>

<style scoped>
</style>