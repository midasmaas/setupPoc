<template>
  <v-app>
    <navbar>
      
    </navbar>
    <v-main>
      <v-container fluid>
      <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
  },
};
</script>

<style scoped>

</style>
