<template>
  <v-stepper v-model="e1" height="100%">
    <!-- stepper balk BEGIN-->
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> Client </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Module- and campaign preset
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">
        Preset options
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4"> User types </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 5" step="5"> Summary </v-stepper-step>
    </v-stepper-header>
    <!-- stepper balk EINDE -->

    <!-- content per stap -->
    <v-stepper-items>
      <!-- STEP 1: client -->
      <v-stepper-content step="1" class="pa-0">
        <v-card color="grey lighten-4" class="content stepper">
          <!-- details block BEGIN -->
          <v-card max-width="50%" class="mx-auto">
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
                      v-model="dataStep1.clientName"
                    >
                    </v-text-field>

                    <v-text-field
                      label="Environment link"
                      placeholder="Link will appear when name is set"
                      outlined
                      v-model="dataStep1.environmentLink"
                    >
                    </v-text-field>

                    <v-text-field
                      label="Main company contact"
                      placeholder="example@company.com"
                      outlined
                      v-model="dataStep1.contactCompany"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </div>
            </v-expand-transition>
          </v-card>
          <!-- details block EINDE -->

          <!-- Brands block BEGIN -->
          <v-card max-width="50%" class="mx-auto">
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
                  showBrands && dataStep1.brands.length > 0
                    ? "mdi-chevron-up"
                    : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="showBrands && dataStep1.brands.length > 0">
                <v-divider></v-divider>

                <v-row
                  class="py-8"
                  v-for="(brand, key) in dataStep1.brands"
                  :key="key"
                >
                  <v-col cols="8">
                    <v-text-field
                      label="New brand"
                      placeholder="Client"
                      outlined
                      v-model="dataStep1.brands[key]"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="4">
                    <v-btn
                      @click="dataStep1.brands.splice(key, 1)"
                      class="ma-2"
                      outlined
                      color="red"
                    >
                      remove
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-expand-transition>
          </v-card>
          <!-- Brands block EINDE -->

          <!-- Departments block BEGIN -->
          <v-card max-width="50%" class="mx-auto">
            <v-card-actions>
              <v-card-title> Departments </v-card-title>

              <v-spacer></v-spacer>
              <v-btn
                @click="addDepartmentsTextfield"
                class="ma-2"
                outlined
                color="blue"
              >
                add
              </v-btn>

              <v-btn icon @click="showDeparments = !showDeparments">
                <v-icon>{{
                  showDeparments && dataStep1.departments.length > 0
                    ? "mdi-chevron-up"
                    : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="showDeparments && dataStep1.departments.length > 0">
                <v-divider></v-divider>

                <v-row
                  class="py-8"
                  v-for="(brand, key) in dataStep1.departments"
                  :key="key"
                >
                  <v-col cols="8">
                    <v-text-field
                      label="New department"
                      placeholder="Client"
                      outlined
                      v-model="dataStep1.departments[key]"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="4">
                    <v-btn
                      @click="dataStep1.departments.splice(key, 1)"
                      class="ma-2"
                      outlined
                      color="red"
                    >
                      remove
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-expand-transition>
          </v-card>
          <!-- Departments block EINDE -->

          <!-- Markets block BEGIN -->
          <v-card max-width="50%" class="mx-auto">
            <v-card-actions>
              <v-card-title> Markets </v-card-title>

              <v-spacer></v-spacer>
              <v-btn
                @click="addMarketsTextfield"
                class="ma-2"
                outlined
                color="blue"
              >
                add
              </v-btn>

              <v-btn icon @click="showMarkets = !showMarkets">
                <v-icon>{{
                  showMarkets && dataStep1.markets.length > 0
                    ? "mdi-chevron-up"
                    : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="showMarkets && dataStep1.markets.length > 0">
                <v-divider></v-divider>

                <v-row
                  class="py-8"
                  v-for="(brand, key) in dataStep1.markets"
                  :key="key"
                >
                  <v-col cols="8">
                    <v-text-field
                      label="New department"
                      placeholder="Client"
                      outlined
                      v-model="dataStep1.markets[key]"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="4">
                    <v-btn
                      @click="dataStep1.markets.splice(key, 1)"
                      class="ma-2"
                      outlined
                      color="red"
                    >
                      remove
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-expand-transition>
          </v-card>
          <!-- Markets block EINDE -->
        </v-card>

        <!--Buttons BEGIN-->
        <v-row class="py-8">
          <v-btn text> Back </v-btn>

          <v-btn color="primary" @click="addDataStep1"> Continue </v-btn>
        </v-row>
        <!--Buttons EINDE-->
      </v-stepper-content>

      <!-- STEP 2: client -->
      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-4">
          <v-card flat>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-radio-group v-model="chosenPreset" column>
                  <v-radio
                    label="Build Creatives"
                    color="red"
                    :value="dataForPresets.preset1Data"
                    @click="addPreset(dataForPresets.preset1Data)"
                  ></v-radio>
                  <v-radio
                    label="Publish campaigns"
                    color="red darken-3"
                    :value="dataForPresets.preset2Data"
                    @click="addPreset(dataForPresets.preset2Data)"
                  ></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-card>
        </v-card>

        <!--Buttons BEGIN-->
        <v-row class="py-8">
          <v-btn text @click="e1 = 1"> Back </v-btn>

          <v-btn color="primary" @click="addDataStep2"> Continue </v-btn>
        </v-row>
        <!--Buttons EINDE-->
      </v-stepper-content>

      <!-- STEP 3: presetoptions -->
      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn text> Back </v-btn>

        <v-btn color="primary" @click="e1 = 4"> Continue </v-btn>
      </v-stepper-content>

      <!-- STEP 4: user types -->
      <v-stepper-content step="4">
        <v-card class="mb-12" color="grey lighten-1">
          <v-card max-width="50%" class="mx-auto">
          <v-checkbox v-model="dataStep3.userTypes" 
          label="Admin" 
          :value="dataForUserTypes.admin"
          @click="addUserTypeChoice"
          ></v-checkbox>
          <v-checkbox
            v-model="dataStep3.userTypes"
            label="Creative"
            :value="dataForUserTypes.creative"
            @click="addUserTypeChoice"
          ></v-checkbox>
          </v-card>
        </v-card>

        <v-btn text @click="e1 = 3"> Back </v-btn>

        <v-btn color="primary" @click="e1 = 5"> Continue </v-btn>
      </v-stepper-content>

      <!-- STEP 5: summary -->
      <v-stepper-content step="5">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn text> Back </v-btn>

        <v-btn color="primary"> Launch environment </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    e1: 1,
    showDetails: true,
    showBrands: false,
    showDeparments: false,
    showMarkets: false,
    dataForJson: {
      //step1
      clientName: "",
      environmentLink: "",
      contactCompany: "",
      brands: [],
      departments: [],
      markets: [],

      //step2
      preset: {},

      //step3
      userTypes: [],
    },

    //per stap data bijhouden
    dataStep1: {
      clientName: "",
      environmentLink: "proximus.campaigndesigner.io",
      contactCompany: "",
      brands: [],
      departments: [],
      markets: [],
    },
    dataStep2: {
      preset: {},
    },
    dataStep3: {
      userTypes: [],
    },

    //data voor presets (radio buttons)
    dataForPresets: {
      preset1Data: {
        title: "Build Creatives",
        modules: ["multiMarket", "templateDesigner"],
        channels: ["social", "email"],
        campaignformatTitle: "BuildCreatives",
      },

      preset2Data: {
        title: "Publish campaigns",
        modules: ["multiMarket", "templateDesigner"],
        channels: ["landingspage", "radio"],
        campaignformatTitle: "Publish campaigns",
      },
    },

    //gekozen preset afvangen
    chosenPreset: {},

    //gekozen usertype
    chosenUsertype: {},

    //data voor user types (checkboxes)
    dataForUserTypes:{
      admin: {
        userTypename: "admin",
        rights:[
          "full acces",
          "collaborate"
        ]
      },
      creative: {
        userTypename: "creative",
        rights:[
          "full acces",
          "collaborate"
        ]
      }
    },
    //gekozen preset afvangen
    chosenUsertypes: {},
  }),
  methods: {
    addBrandsTextfield() {
      this.showBrands = true;
      this.dataStep1.brands.push("");
    },

    addDepartmentsTextfield() {
      this.showDeparments = true;
      this.dataStep1.departments.push("");
    },

    addMarketsTextfield() {
      this.showMarkets = true;
      this.dataStep1.markets.push("");
      console.log(this.dataStep1);
    },

    addPreset(presetChoice) {
      this.dataStep2.preset = presetChoice;
    },

    addUserTypeChoice() {
      console.log(this.dataStep3.userTypes)
    },

    addDataStep1() {
      this.e1 = 2;
      this.dataForJson = {
        ...this.dataForJson,
        ...this.dataStep1,
      };
      console.log(this.dataForJson);
    },

    addDataStep2() {
      this.e1 = 3;
      this.dataForJson = {
        ...this.dataForJson,
        ...this.dataStep2,
      };
      console.log(this.dataForJson);
    },
  },
};
</script>

<style scoped>
.content {
  position: relative;
}

.sticky {
  position: sticky;
  bottom: 0;
}

.backgroundColor {
  background-color: #b05454;
}
.stepper {
  overflow: scroll;
}
</style>
