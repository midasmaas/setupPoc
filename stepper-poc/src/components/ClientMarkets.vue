<template>
  <v-card class="my-8">
    <v-card-actions>
      <v-card-title :class="formHasErrorsMarkets ? 'red--text pt-4'  : ''"> Markets</v-card-title>
      <h8 v-if="formHasErrorsMarkets" class="red--text"> Select at least one market!</h8>

      <v-spacer></v-spacer>
      <v-btn @click="addMarketsTextfield" class="ma-2" outlined color="blue">
        add
      </v-btn>

      <v-btn icon @click="showMarkets = !showMarkets">
        <v-icon>{{
          showMarkets && dataStep1ForClientMarkets.markets.length > 0
            ? "mdi-chevron-up"
            : "mdi-chevron-down"
        }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div class="pb-1" v-show="showMarkets && dataStep1ForClientMarkets.markets.length > 0">
        <v-divider></v-divider>

        <v-card
          class="ma-4"
          outlined
          v-for="(brand, key) in dataStep1ForClientMarkets.markets"
          :key="key"
        >
          <v-row align="center" justify="center">
            <v-autocomplete
              v-model="dataStep1ForClientMarkets.markets[key].marketCountry"
              :items="returnCountries()"
              class="shrink pt-8 mx-6"
              @change="
                dataForLanguages(dataStep1ForClientMarkets.markets[key].marketCountry, key),
                  returnCountries()
              "
            ></v-autocomplete>

            <v-spacer></v-spacer>

            <v-btn
              @click="dataStep1ForClientMarkets.markets.splice(key, 1)"
              class="ma-2"
              text
              color="grey"
            >
              <v-icon center> mdi-close</v-icon>
            </v-btn>
          </v-row>

          <h4
            class="mx-4 my-2"
            v-if="dataForMarketsForClientMarkets.marketLanguages[brand.marketCountry]"
          >
            Languages
          </h4>
          <v-row align="center">
            <v-autocomplete
              v-if="dataForMarketsForClientMarkets.marketLanguages[brand.marketCountry]"
              v-model="dataStep1ForClientMarkets.markets[key].marketLanguages"
              :items="dataForMarketsForClientMarkets.marketLanguages[brand.marketCountry]"
              chips
              full-width
              hide-details
              hide-no-data
              hide-selected
              multiple
              single-line
              class="shrink pb-8 mx-6"
            >
            </v-autocomplete>
          </v-row>
        </v-card>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "ClientMarkets",

  props: {
    dataStep1ForClientMarkets: {
      type: Object,
    },
    dataForMarketsForClientMarkets: {
      type: Object,
    },
    formHasErrorsMarkets: {
        type: Boolean
    },
  },
  data: () => ({
    showMarkets: true,
  }),

  methods: {
  addMarketsTextfield() {
      console.log(this.formHasErrorsMarkets)  
      this.showMarkets = true;
      this.dataStep1ForClientMarkets.markets.push({ marketCountry: "", marketLanguages: [] });
    },

    returnCountries() { 
      return this.dataForMarketsForClientMarkets.marketNames.map((market) => {
        const marketKey = Object.keys(market)[0];
        return market[marketKey];
      });
    },
    dataForLanguages(market, key) {
      let autoCompleteLanguages = this.dataForMarketsForClientMarkets.marketLanguages[market];
      this.dataStep1ForClientMarkets.markets[key].marketLanguages = autoCompleteLanguages;
    },
    
}
}
</script>

<style scoped src="@/assets/styles/stepper.css"></style>
