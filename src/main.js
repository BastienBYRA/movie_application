import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router' // Importez createRouter et createWebHistory depuis vue-router
import HomePage from './pages/Home.vue' // Importez votre composant HomePage
// import AboutPage from './components/AboutPage.vue' // Importez votre composant AboutPage

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
  ],
})


createApp(App).use(vuetify).use(router).mount('#app')
