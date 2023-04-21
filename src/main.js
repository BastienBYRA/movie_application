import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router"; // Importez createRouter et createWebHistory depuis vue-router
import HomePage from "./pages/HomePage.vue";
import DetailsPage from "./pages/DetailsMoviePage.vue";
import NotationPage from "./pages/NotationMoviePage.vue";
import DeletePage from "./pages/DeleteMoviePage.vue";
import EditPage from "./pages/EditMoviePage.vue";
import CreatePage from "./pages/CreateMoviePage.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/create",
      name: "create",
      component: CreatePage,
    },
    {
      path: "/movie/:id",
      name: "details",
      component: DetailsPage,
      props: true,
    },
    {
      path: "/movie/:id/note",
      name: "notation",
      component: NotationPage,
      props: true,
    },
    {
      path: "/movie/:id/delete",
      name: "delete",
      component: DeletePage,
      props: true,
    },
    {
      path: "/movie/:id/edit",
      name: "edit",
      component: EditPage,
      props: true,
    },
  ],
});

createApp(App).use(vuetify).use(router).mount("#app");
