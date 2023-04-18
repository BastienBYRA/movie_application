<template>
  <v-app>
    <v-app-bar app class="app-bar-component">
      <v-toolbar-items>
        <v-img
          :width="100"
          aspect-ratio="1/2"
          cover
          src="https://png.pngtree.com/png-vector/20190816/ourmid/pngtree-film-logo-design-template-vector-isolated-illustration-png-image_1693431.jpg"
        >
        </v-img>
      </v-toolbar-items>
      <v-toolbar-title>~ Movie-Vue ~</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <router-view class="mx-8"></router-view>


  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

  .v-application__wrap {
    margin-left: 60px;
    margin-right: 60px;
  }

  #app {
    margin-top: 20px;
  }

  .app-bar-component {
    display: flex; 
    position: sticky; 
    top: 0; 
    z-index: 50; 
  }

  .previous-page {
    opacity: 0.8;
    color: grey;
  }

</style>
