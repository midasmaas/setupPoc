<template>
    <v-container v-if="dataUserTypesForUserTypes" class="containerUsertypes" fluid>
          <!-- pagina vraag + omschrijving -->
          <v-row class="mx-6 my-0">
            <h1>What user types do you want to use?</h1>
            <p v-if="userTypeSelectedForUserTypes" class="red--text">Select at least one user type!</p>
            <p class="grey--text font-weight-medium">
              Users have unique rights, allowing the customer to collaborate in
              their own way.
            </p>
          </v-row>

          <v-card class="pa-4 ma-4">
            <v-row class="ma-2">
              <v-row>
                <v-checkbox
                  class="mt-5 ml-3"
                  v-model="dataStep4ForUserTypes.userTypes"
                  :value="dataUserTypesForUserTypes.admin"
                ></v-checkbox>
                <img
                  class="icon-user-type mt-3 mx-3"
                  src="../assets/userTypesIcons/admin.svg"
                />
                <div class="modal-title-description my-auto">
                  <h4>Admin</h4>
                  <p class="mb-0 grey--text">
                    All rights. Manages all teams, users, campaigns.
                  </p>
                </div>
              </v-row>
              <v-spacer></v-spacer>
            </v-row>
          </v-card>

          <v-card class="pa-4 ma-4">
            <v-row class="ma-2">
              <v-row>
                <v-checkbox
                  class="mt-5 ml-3"
                  v-model="dataStep4ForUserTypes.userTypes"
                  :value="dataUserTypesForUserTypes.manager"
                ></v-checkbox>
                <img
                  class="icon-user-type mt-3 mx-3"
                  src="../assets/userTypesIcons/manager.svg"
                />
                <div class="modal-title-description my-auto">
                  <h4>Manager</h4>
                  <p class="mb-0 grey--text">
                    Creating, managing and launching marketing campaigns with
                    the right contents.
                  </p>
                </div>
              </v-row>
              <v-spacer></v-spacer>
            </v-row>
          </v-card>

          <v-card class="pa-4 ma-4">
            <v-row class="ma-2">
              <v-row>
                <v-checkbox
                  class="mt-5 ml-3"
                  v-model="dataStep4ForUserTypes.userTypes"
                  :value="dataUserTypesForUserTypes.creative"
                ></v-checkbox>
                <img
                  class="icon-user-type mt-3 mx-3"
                  src="../assets/userTypesIcons/creative.svg"
                />
                <div class="modal-title-description my-auto">
                  <h4>Creative</h4>
                  <p class="mb-0 grey--text">
                    Providing the marketing campaigns with the right designs and
                    reviewing them before launch.
                  </p>
                </div>
              </v-row>
              <v-spacer></v-spacer>
            </v-row>
          </v-card>

          <v-btn class="ma-2" outlined color="primary">
            custom
            <v-icon right> mdi-account </v-icon>
          </v-btn>
        </v-container>
</template>

<script>
export default {
name: 'UsertypesSelection',

props: {
    currentPresetForPresetOptions: {
        type: Object
    },

    frontEndDataForPresetOptions: {
        type: Object
    },

    dataUserTypesForUserTypes: {
        type: Object
    },
    dataStep4ForUserTypes: {
        type: Object
    },

    userTypeSelectedForUserTypes: {
      type: Boolean
    }
},
data: () => ({
    showBrands: true
    
}),

methods: {
}

}
</script>

<style scoped src="@/assets/styles/stepper.css">
</style>