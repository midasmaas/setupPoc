<template>
  <v-app>
    <navbar>  
    </navbar>
    <v-main>
      <router-view />
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


