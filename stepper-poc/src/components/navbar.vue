<template>

    <v-navigation-drawer


        :mini-variant= true
        fixed
        app
      >
        <v-list
          dense
          nav
          class="py-0"
        >
        <img class="pt-4" src="../assets/navbarImgs/clientAvatar.svg">
           <v-list-item :to="'/homeView'"
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="'/StoryView'"
        >
          <v-list-item-icon>
            <v-icon>mdi-text-box-multiple-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Clients</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="'/'"
        >
          <v-list-item-icon>
            <v-icon>mdi-plus-circle</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Add new environment</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list>
      </v-navigation-drawer>
      

      
</template>

<script>
export default {
  name: 'navBar',
  data() {
    return {
      //drawer: true,
      //mini: true,
    };
  },
};
</script>