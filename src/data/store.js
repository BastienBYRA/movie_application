// https://vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api
import { reactive } from "vue";

export const store = reactive({
  listMovie: [
    {
      id: 1,
      title: "Super Mario Bros. le film",
      parution_date: 2023,
      language: "Français",
      genres: ["Aventure", "Comedie"],
      creator: {
        firstname: "Matthew",
        lastname: "Fogel",
        nationality: "Indéfini",
      },
      notation: null,
      posterURL:
        "https://assets-prd.ignimgs.com/2023/02/03/foevbcsayamvqpf-1675462826997.jpg",
    },
    {
      id: 2,
      title: "Les Animaux fantastiques : Les Secrets de Dumbledore",
      parution_date: 2022,
      language: "Français",
      genres: ["Aventure", "Fantasy"],
      creator: {
        firstname: "David",
        lastname: "Yates",
        nationality: "Britannique",
      },
      notation: null,
      posterURL:
        "https://www.les400coups.org/affiches/bigger/animauxfantastiques3.jpg",
    },
  ],

  /**
   * Mets a jour l'objet movie
   * @param {Number} id
   * @param {Movie} newElement
   */
  updateMovie(id, newElement) {
    this.listMovie.forEach((element, index) => {
      if (element.id === id) {
        this.listMovie[index] = newElement;
      }
    });
  },

  /**
   * Ajoute / Modifie la note du film
   * @param {Number} id
   * @param {Movie} notation
   */
  notationMovie(id, notation) {
    this.listMovie.forEach((element, index) => {
      if (element.id === id) {
        this.listMovie[index].notation = notation;
      }
    });
  },

  /**
   * Supprime le film de la liste des films
   * @param {Number} id
   */
  deleteMovie(id) {
    this.listMovie = this.listMovie.filter((x) => x.id != id);
  },

  /**
   * Génère un objet Movie vide
   * @returns Movie
   */
  generateEmptyMovie() {
    let newMovie = {
      id: null,
      title: "",
      parution_date: 0,
      language: "",
      genres: [],
      creator: {
        firstname: "",
        lastname: "",
        nationality: "",
      },
      notation: null,
      posterURL: "",
    };

    return newMovie;
  },

  /**
   * Créer un objet Movie
   * @param {Number} movie
   * @returns
   */
  createMovie(movie) {
    movie.id = (Math.random() + 1).toString(36).substring(2); //Génère un ID 'aléatoire'
    this.listMovie.push(movie);
    return movie.id;
  },
});
