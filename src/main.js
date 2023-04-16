import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router"; // Importez createRouter et createWebHistory depuis vue-router
import HomePage from "./pages/HomePage.vue";
import DetailsPage from "./pages/DetailsPage.vue";

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
      // history: createWebHistory(),
      path: "/movie/:id",
      name: "details",
      component: DetailsPage,
      // props: true,
      // props: { movie: Object },
      props: (route) => ({
        movie: Object,
        ...route.params,
      }),
    },
  ],
});

createApp(App).use(vuetify).use(router).mount("#app");
