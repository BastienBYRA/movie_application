<template>

    <!-- Link pour une page n'ayant aucun paramètre (home, create) -->
    <div v-if="namePage != null && textLink != null && idParam == null">
        <router-link :to="{ name: namePage }">
            <p class="previous-page">⟵ {{ textLink }}</p>
        </router-link>
    </div>

    <!-- Link pour une page ayant un paramètre "id" (details, edit, notation) -->
    <div v-else-if="namePage != null && textLink != null && idParam != null">
        <router-link :to="{ name: namePage, params: { id: idParam } }">
            <p class="previous-page">⟵ {{ textLink }}</p>
        </router-link>
    </div>

    <!-- Retour à la page principale -->
    <div v-else>
        <router-link :to="{ name: 'home' }">
            <p class="previous-page">⟵ Retour a la page principale</p>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        namePage: String,
        idParam: Number,
        textLink: String,
    },
}
</script>

<style scoped>

</style>