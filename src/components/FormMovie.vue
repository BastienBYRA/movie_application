<template>
    <div>
        <h1 v-if="errorMessage != ''" class="error-message">{{ this.errorMessage }}</h1>

        <!-- Textfields concernant le FILM -->
        <p>Film</p>
        <v-text-field label="Titre :" v-model="newMovie.title" type="text"/>
        <v-text-field label="Date de parution :" v-model="newMovie.parution_date" type="number"/>
        <v-text-field label="Langage :" v-model="newMovie.language" type="text"/>
        <v-text-field label="URL du poster" v-model="newMovie.posterURL" type="text"/>

        <div v-if="newMovie.genres">
            <v-select :items="['Aventure', 'Comedie', 'Drame', 'Science fiction', 'Documentaire', 'Policier', 'Horreur', 'Romance', 'Fantasy']" chips multiple v-model="newMovie.genres" label="Les genres du film :">
            </v-select>
        </div>
        
        <!-- Textfields concernant le CREATEUR du film -->
        <div v-if="newMovie.creator">
            <p>Createur</p>
            <v-text-field label="Nom :" v-model="newMovie.creator.firstname" type="text"/>
            <v-text-field label="Prenom :" v-model="newMovie.creator.lastname" type="text"/>
            <v-text-field label="Nationalité :" v-model="newMovie.creator.nationality" type="text"/>
        </div>

        <!-- Bouton pour confirmer la validation des champs -->
        <div v-if="action == 'CREATE'">
            <v-btn color="green" @click="checkFieldsNotEmpty">Ajouter</v-btn>
        </div>
        <div v-else-if="action == 'EDIT'">
            <v-btn color="primary" @click="checkFieldsNotEmpty">Mettre à jour</v-btn>
        </div>
        <div v-else>
            <h1>Vous ne pouvez pas sauvegarder vos modifications.</h1>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        movie: {},
        action: String,
    },
    data: function() {
      return {
        newMovie: {},
        errorMessage: "",
      }
    },
    mounted() {
        this.newMovie = JSON.parse(JSON.stringify(this.movie));
    },
    methods: {
        /**
         * Verifie que tout les champs sont remplis, si non, empeche l'event et affiche un message d'erreur.
         */
        checkFieldsNotEmpty() {
            this.errorMessage = ""

            let movieVerif = this.newMovie;
            if(!movieVerif.title)
                this.errorMessage += " Le titre,"
            if(!movieVerif.parution_date)
                this.errorMessage += " La date de parution,"
            if(!movieVerif.language)
                this.errorMessage += " La langue du film,"
            if(!movieVerif.genres || movieVerif.genres.length == 0)
                this.errorMessage += " Le(s) genre(s),"
            if(!movieVerif.creator.firstname)
                this.errorMessage += " Le prenom du createur du film,"
            if(!movieVerif.creator.lastname)
                this.errorMessage += " Le nom de famille du createur du film,"
            if(!movieVerif.creator.lastname)
                this.errorMessage += " La nationalité du createur du film,"

            if(this.errorMessage != "") {
                this.errorMessage = "Veuillez remplir tout les champs ! Sont manquants ;" + this.errorMessage
                this.errorMessage = this.errorMessage.substring(0, this.errorMessage.length-1);
            }
            else {
                if(this.action == "CREATE") {
                    this.$emit('saveMovie', this.newMovie)
                }else if(this.action == "EDIT"){
                    this.$emit('editMovie', this.newMovie)
                }
            }
        }
    }

}
</script>

<style scoped>
    .error-message {
        color: red;
    }
</style>