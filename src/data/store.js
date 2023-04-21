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
   *
   * @param {Integer} id
   * @param {Movie} newElement
   */
  updateMovie(id, newElement) {
    this.listMovie.forEach((element, index) => {
      if (element.id === id) {
        this.listMovie[index] = newElement;
      }
    });
  },

  notationMovie(id, notation) {
    this.listMovie.forEach((element, index) => {
      if (element.id === id) {
        this.listMovie[index].notation = notation;
      }
    });
  },

  deleteMovie(id) {
    this.listMovie = this.listMovie.filter((x) => x.id != id);
  },

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

  createMovie(movie) {
    movie.id = (Math.random() + 1).toString(36).substring(2);
    this.listMovie.push(movie);
    return movie.id;
  },
});
