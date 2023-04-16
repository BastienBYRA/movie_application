// https://vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api
import { reactive } from "vue";

export const store = reactive({
  listMovie: [
    {
      id: 1,
      title: "Name mov",
      parution_date: 1998,
      language: "English",
      genres: ["Science", "Drama"],
      creator: {
        firstname: "Jack",
        lastname: "DUPOND",
      },
      notation: null,
    },
    {
      id: 2,
      title: "Un nom bien plus long que le précédent",
      parution_date: 1998,
      language: "English",
      genres: ["Science", "Drama"],
      creator: {
        firstname: "Jack",
        lastname: "DUPOND",
      },
      notation: null,
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
});
