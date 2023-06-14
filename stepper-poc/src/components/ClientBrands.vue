<template>
    <!-- Brands block BEGIN -->
          <v-card class="my-8">
            <v-card-actions>
              <v-card-title> Brands </v-card-title>

              <v-spacer></v-spacer>
              <v-btn
                @click="addBrandsTextfield"
                class="ma-2"
                outlined
                color="blue"
              >
                add
              </v-btn>

              <v-btn icon @click="showBrands = !showBrands">
                <v-icon>{{
                  showBrands && dataForBrands.brands.length > 0
                    ? "mdi-chevron-up"
                    : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div
                class="pb-1"
                v-show="showBrands && dataForBrands.brands.length > 0"
              >
                <v-divider></v-divider>

                <v-card
                  class="ma-4"
                  outlined
                  v-for="(brand, key) in dataForBrands.brands"
                  :key="key"
                >
                  <v-row align="center" justify="center">
                    <v-text-field
                      label="New brand"
                      placeholder="Client"
                      outlined
                      v-model="dataForBrands.brands[key]"
                      class="shrink pt-8 mx-6"
                    >
                    </v-text-field>

                    <v-spacer></v-spacer>

                    <v-btn
                      @click="dataForBrands.brands.splice(key, 1)"
                      class="ma-2"
                      text
                      color="grey"
                    >
                      <v-icon center> mdi-close</v-icon>
                    </v-btn>
                  </v-row>
                </v-card>
              </div>
            </v-expand-transition>
          </v-card>
          <!-- Brands block EINDE -->
</template>

<script>
export default {
name: 'ClientBrands',

props: {
    dataForBrands: {
        type: Object
    }
},
data: () => ({
    showBrands: true
}),

methods: {
     addBrandsTextfield() {
      this.showBrands = true;
      this.dataForBrands.brands.push("");
    },
}

}
</script>

<style scoped src="@/assets/styles/stepper.css">
</style>