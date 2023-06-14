<template>
    <!-- details block BEGIN -->
          <v-card v-if="dataForDetails" class="mt-3 mb-4">
            <v-card-actions>
              <v-card-title> Details </v-card-title>

              <v-spacer></v-spacer>

              <v-btn icon @click="showDetails = !showDetails">
                <v-icon>{{
                  showDetails ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="showDetails">
                <v-divider></v-divider>
                <v-row class="px-8">
                  <v-col cols="3">
                    <img src="../assets/logoPlaceholder.svg" />
                  </v-col>

                  <v-col cols="9" class="py-8">
                    <v-text-field
                      label="Client name"
                      placeholder="Client name"
                      outlined
                      v-model="dataForDetails.clientName"
                    >
                    </v-text-field>

                    <v-text-field
                      label="Environment link"
                      placeholder="Link will appear when name is set"
                      outlined
                      v-model="dataForDetails.environmentLink"
                    >
                    </v-text-field>

                    <v-text-field
                      label="Main company contact"
                      placeholder="example@company.com"
                      outlined
                      v-model="dataForDetails.contactCompany"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </div>
            </v-expand-transition>
          </v-card>
          <!-- details block EINDE -->
</template>

<script>
export default {
name: 'Clientdetails',

props: {
    dataForDetails: {
        type: Object
    }
},
data: () => ({
    showDetails: true
}),

methods: {

}

}
</script>

<style scoped src="@/assets/styles/stepper.css">
</style>