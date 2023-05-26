<template>
  <v-stepper v-model="e1" class="stepper grey lighten-4">
    <!-- stepper balk BEGIN-->
    <v-stepper-header class="sticky-top">
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
      <v-stepper-content step="1" class="step">
        <v-container class="container" fluid>
          <!-- step title -->
          <v-row class="ma-2">
            <h1>Which company is it and how is it organised?</h1>
            <p class="grey--text font-weight-medium">
              A company can use brands, departments, and markets to manage
              content and people.
            </p>
          </v-row>

          <!-- details block BEGIN -->
          <v-card class="mt-3 mb-4">
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

          <!-- step sub title-->
          <h3 class="mx-1 my-6">Organisational structure</h3>

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
                  showBrands && dataStep1.brands.length > 0
                    ? "mdi-chevron-up"
                    : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div
                class="pb-1"
                v-show="showBrands && dataStep1.brands.length > 0"
              >
                <v-divider></v-divider>

                <v-card
                  class="ma-4"
                  outlined
                  v-for="(brand, key) in dataStep1.brands"
                  :key="key"
                >
                  <v-row align="center" justify="center">
                    <v-text-field
                      label="New brand"
                      placeholder="Client"
                      outlined
                      v-model="dataStep1.brands[key]"
                      class="shrink pt-8 mx-6"
                    >
                    </v-text-field>

                    <v-spacer></v-spacer>

                    <v-btn
                      @click="dataStep1.brands.splice(key, 1)"
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

          <!-- Departments block BEGIN -->
          <v-card class="my-8">
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
              <div
                class="pb-1"
                v-show="showDeparments && dataStep1.departments.length > 0"
              >
                <v-divider></v-divider>
                <v-card
                  class="ma-4"
                  outlined
                  v-for="(brand, key) in dataStep1.departments"
                  :key="key"
                >
                  <v-row align="center" justify="center">
                    <v-text-field
                      label="New department"
                      placeholder="Department"
                      outlined
                      v-model="dataStep1.departments[key]"
                      class="shrink pt-8 mx-6"
                    >
                    </v-text-field>

                    <v-spacer></v-spacer>

                    <v-btn
                      @click="dataStep1.departments.splice(key, 1)"
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
          <!-- Departments block EINDE -->

          <!-- Markets block BEGIN -->
          <v-card class="my-8">
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
              <div
                class="pb-1"
                v-show="showMarkets && dataStep1.markets.length > 0"
              >
                <v-divider></v-divider>

                <v-card
                  class="ma-4"
                  outlined
                  v-for="(brand, key) in dataStep1.markets"
                  :key="key"
                >
                  <v-row align="center" justify="center">
                    <v-autocomplete
                      v-model="dataStep1.markets[key].marketCountry"
                      :items="dataForMarkets.marketNames"
                      class="shrink pt-8 mx-6"
                      @change="
                        dataForLanguages(
                          dataStep1.markets[key].marketCountry,
                          key
                        )
                      "
                    ></v-autocomplete>

                    <v-spacer></v-spacer>

                    <v-btn
                      @click="dataStep1.markets.splice(key, 1)"
                      class="ma-2"
                      text
                      color="grey"
                    >
                      <v-icon center> mdi-close</v-icon>
                    </v-btn>
                  </v-row>

                  <h4
                    class="mx-4 my-2"
                    v-if="dataForMarkets.marketLanguages[brand.marketCountry]"
                  >
                    Languages
                  </h4>
                  <v-row align="center">
                    <v-autocomplete
                      v-if="dataForMarkets.marketLanguages[brand.marketCountry]"
                      v-model="dataStep1.markets[key].marketLanguages"
                      :items="
                        dataForMarkets.marketLanguages[brand.marketCountry]
                      "
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
          <!-- Markets block EINDE -->
        </v-container>
      </v-stepper-content>

      <!-- STEP 2: client -->
      <v-stepper-content step="2" class="step">
        <v-container class="containerClient" fluid>
          <!-- pagina vraag + omschrijving -->
          <v-row class="mx-6 my-0">
            <h1>What’s the main goal of the client?</h1>
            <p class="grey--text font-weight-medium">
              Start off with a predefined, goal based setup, campaign channels
              and a campaign format.
            </p>
          </v-row>

          <!--Info dialog BEGIN-->
          <v-row justify="flex-end">
            <v-dialog
              v-model="dialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <v-card>
                <v-toolbar class="height-modal-toolbar">
                  <div class="modal-title-description">
                    <v-toolbar-title>{{
                      currentPresetInfo.title
                    }}</v-toolbar-title>

                    <p class="grey--text font-weight-medium pa-0 ma-0">
                      {{ currentPresetInfo.subTitle }}
                    </p>
                  </div>

                  <v-spacer></v-spacer>
                  <v-btn icon @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-toolbar>

                <v-tabs class="pt-1" v-model="tab">
                  <v-tabs-slider color="primary"></v-tabs-slider>

                  <v-tab v-for="item in items" :key="item">
                    {{ item }}
                  </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                  <v-tab-item>
                    <v-card flat>
                      <v-card-title>
                        Modules
                      </v-card-title>
                      <v-card-text>
                        <li v-for="moduleItem in currentPresetInfo.modules" :key="moduleItem">{{ moduleItem }}</li>
                        </v-card-text>
                    </v-card>
                  </v-tab-item>

                  <v-tab-item>
                    <v-card flat>
                      <v-card-title>
                        About
                      </v-card-title>
                      <v-card-text>{{ currentPresetInfo.about }}</v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>
            </v-dialog>
          </v-row>
          <!--Info dialog EINDE-->
          <v-radio-group class="ma-0" v-model="dataStep2.preset" column>
            <v-card
              class="ma-4"
              :class="{
                'active-preset':
                  dataStep2.preset === dataForPresets.preset1Data,
              }"
            >
              <v-row class="ma-6">
                <v-row>
                  <v-radio
                    color="primary"
                    :value="dataForPresets.preset1Data"
                    class="mb-0"
                  >
                  </v-radio>
                  <div
                    class="icon icon-build-creatives ma-2"
                    :class="{
                      'icon-build-creatives-focus':
                        dataStep2.preset === dataForPresets.preset1Data,
                      'icon-build-creatives':
                        dataStep2.preset !== dataForPresets.preset1Data,
                    }"
                  ></div>
                  <div class="modal-title-description my-auto">
                    <h4>{{ dataForPresets.preset1Data.title }}</h4>
                    <p class="mb-0 grey--text">
                      {{ dataForPresets.preset1Data.presetInfo.subTitle }}
                    </p>
                  </div>
                </v-row>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  class="mx-4"
                  text
                  @click="presetInfo(dataForPresets.preset1Data.presetInfo)"
                >
                  info
                </v-btn>
              </v-row>
            </v-card>
            <v-card
              class="ma-4"
              :class="{
                'active-preset':
                  dataStep2.preset === dataForPresets.preset2Data,
              }"
            >
              <v-row class="ma-6">
                <v-row>
                  <v-radio
                    color="primary"
                    :value="dataForPresets.preset2Data"
                    class="mb-0"
                  ></v-radio>

                  <div
                    class="icon icon-build-creatives ma-2"
                    :class="{
                      'icon-publish-campaigns-focus':
                        dataStep2.preset === dataForPresets.preset2Data,
                      'icon-publish-campaigns':
                        dataStep2.preset !== dataForPresets.preset2Data,
                    }"
                  ></div>
                  <div class="modal-title-description my-auto">
                    <h4>{{ dataForPresets.preset2Data.title }}</h4>
                    <p class="mb-0 grey--text">
                      {{ dataForPresets.preset2Data.presetInfo.subTitle }}
                    </p>
                  </div>
                </v-row>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  class="mx-4"
                  text
                  @click="presetInfo(dataForPresets.preset2Data.presetInfo)"
                >
                  info
                </v-btn>
              </v-row>
            </v-card>
          </v-radio-group>
        </v-container>
      </v-stepper-content>

      <!-- STEP 3: presetoptions -->
      <v-stepper-content step="3" class="step">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
      </v-stepper-content>

      <!-- STEP 4: user types -->
      <v-stepper-content step="4" class="step">
        <v-card class="mb-12" color="grey lighten-1">
          <v-card max-width="50%" class="mx-auto">
            <v-checkbox
              v-model="dataStep4.userTypes"
              label="Admin"
              :value="dataForUserTypes.admin"
            ></v-checkbox>
            <v-checkbox
              v-model="dataStep4.userTypes"
              label="Creative"
              :value="dataForUserTypes.creative"
            ></v-checkbox>
          </v-card>
        </v-card>
      </v-stepper-content>

      <!-- STEP 5: summary -->
      <v-stepper-content step="5" class="step">
        <!-- content -->
        <v-card color="grey lighten-4" class="content stepper">
          <!-- client summary block BEGIN -->
          <v-card max-width="50%" class="mx-auto">
            <v-card-actions>
              <v-card-title>
                Client: {{ dataForJson.clientName }}
              </v-card-title>

              <v-spacer></v-spacer>

              <v-btn icon @click="showSummaryClient = !showSummaryClient">
                <v-icon>{{
                  showSummaryClient ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="showSummaryClient">
                <v-divider></v-divider>

                <v-card>
                  <v-card-title>Brands</v-card-title>
                  <v-card-subtitle>{{
                    dataForJson.brands.join(", ")
                  }}</v-card-subtitle>
                </v-card>

                <v-card>
                  <v-card-title>Departments</v-card-title>
                  <v-card-subtitle>{{
                    dataForJson.departments.join(", ")
                  }}</v-card-subtitle>
                </v-card>

                <v-card>
                  <v-card-title>Markets</v-card-title>
                  <v-card-subtitle>{{
                    dataForJson.markets.join(", ")
                  }}</v-card-subtitle>
                </v-card>
              </div>
            </v-expand-transition>
          </v-card>
          <!-- client summary block EINDE -->
        </v-card>
      </v-stepper-content>
    </v-stepper-items>

    <!--Buttons BEGIN-->

    <v-card color="white" v-show="e1 === 1" class="py-8 sticky-bottom">
      <v-row class="align-center">
        <v-btn color="primary" class="mx-4" text>
          <v-icon left> mdi-arrow-left </v-icon>
          Back
        </v-btn>

        <v-spacer></v-spacer>

        <h3
          class="grey--text font-weight-medium"
          v-show="dataForJson.clientName"
        >
          New Client: {{ dataForJson.clientName }}
        </h3>

        <v-spacer></v-spacer>
        <v-btn class="mx-6" color="primary" @click="addDataStep1">
          Continue
        </v-btn>
      </v-row>
    </v-card>

    <v-card color="white" v-show="e1 === 2" class="py-8 sticky-bottom">
      <v-row class="align-center">
        <v-btn color="primary" class="mx-4" text @click="e1 = 1">
          <v-icon left> mdi-arrow-left </v-icon>
          Back
        </v-btn>
        <v-spacer></v-spacer>
        <h3
          class="grey--text font-weight-medium"
          v-show="dataForJson.clientName"
        >
          New Client: {{ dataForJson.clientName }}
        </h3>

        <v-spacer></v-spacer>
        <v-btn class="mx-6" color="primary" @click="addDataStep2">
          Continue
        </v-btn>
      </v-row>
    </v-card>

    <v-card color="white" v-show="e1 === 3" class="py-8 sticky-bottom">
      <v-row class="align-center">
        <v-btn color="primary" class="mx-4" text @click="e1 = 2">
          <v-icon left> mdi-arrow-left </v-icon>
          Back
        </v-btn>
        <v-spacer></v-spacer>
        <h3
          class="grey--text font-weight-medium"
          v-show="dataForJson.clientName"
        >
          New Client: {{ dataForJson.clientName }}
        </h3>

        <v-spacer></v-spacer>
        <v-btn class="mx-6" color="primary" @click="e1 = 4"> Continue </v-btn>
      </v-row>
    </v-card>

    <v-card color="white" v-show="e1 === 4" class="py-8 sticky-bottom">
      <v-row class="align-center">
        <v-btn color="primary" class="mx-4" text @click="e1 = 3">
          <v-icon left> mdi-arrow-left </v-icon>
          Back
        </v-btn>
        <v-spacer></v-spacer>
        <h3
          class="grey--text font-weight-medium"
          v-show="dataForJson.clientName"
        >
          New Client: {{ dataForJson.clientName }}
        </h3>

        <v-spacer></v-spacer>

        <v-btn color="primary" @click="addDataStep4" class="mx-6">
          Continue
        </v-btn>
      </v-row>
    </v-card>

    <v-card color="white" v-show="e1 === 5" class="py-8 sticky-bottom">
      <v-row class="align-center">
        <v-btn color="primary" class="mx-4" text @click="e1 = 4">
          <v-icon left> mdi-arrow-left </v-icon>
          Back
        </v-btn>
        <a id="invissibleButtonJSONDownload"></a>
        <v-spacer></v-spacer>
        <h3
          class="grey--text font-weight-medium"
          v-show="dataForJson.clientName"
        >
          New Client: {{ dataForJson.clientName }}
        </h3>

        <v-spacer></v-spacer>

        <v-btn class="mx-6" color="primary" @click="downloadJSON">
          Launch environment
        </v-btn>
      </v-row>
    </v-card>

    <!--Buttons EINDE-->
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
    test: [],
    showSummaryClient: false,
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
    dataStep4: {
      userTypes: [],
    },

    //data voor presets (radio buttons)
    dataForPresets: {
      preset1Data: {
        title: "Build Creatives",
        modules: ["multiMarket", "templateDesigner"],
        channels: ["social", "email"],
        campaignformatTitle: "BuildCreatives",
        presetInfo: {
          title: "Build Creatives",
          subTitle:
            "Create template based creatives in Cape and download them locally.",
          modules: ["multiMarket", "templateDesigner", "Accounts analytics", "publish Manager", "Campaign Concepts", "Multi Department", "Multi Market", "Dashboard Notifications","Campaign Planning"],
          about: "Now they can manage all campaign types, budgets, and creatives in one place. This includes validation checks and the ability to publish campaigns to the right audience at the platform of choice, and all the necessary campaign build-up, targeting and naming conventions. Expedia needs a way to orchestrate their retail media services by collecting information from their advertisers."  
        },
      },

      preset2Data: {
        title: "Publish campaigns",
        modules: ["multiMarket", "templateDesigner"],
        channels: ["landingspage", "radio"],
        campaignformatTitle: "Publish campaigns",
        presetInfo: {
          title: "Publish campaigns",
          subTitle:
            "Create template based creatives and publish to ad platforms.",
          modules: ["multiMarket", "templateDesigner", "Accounts analytics", "publish Manager", "Campaign Concepts", "Multi Department", "Multi Market", "Dashboard Notifications","Campaign Planning"],
          about: "Now they can manage all campaign types, budgets, and creatives in one place. This includes validation checks and the ability to publish campaigns to the right audience at the platform of choice, and all the necessary campaign build-up, targeting and naming conventions. Expedia needs a way to orchestrate their retail media services by collecting information from their advertisers."  
        },
      },
    },

    //data voor info presets
    infoClickedPreset: {
      title: "",
      modules: [],
      channels: [],
      campaignformatTitle: "",
    },

    //dat voor info presets TABS
    tab: null,
    items: ["content", "info"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    // data voor markets
    chosenMarkets: null,
    dataForMarkets: {
      marketNames: ["Belgie", "Nederland", "Duitsland"],
      marketLanguages: {
        Belgie: ["DU", "GE", "FR"],
        Nederland: ["PL", "DU"],
        Duitsland: ["GE"],
      },
    },

    //data voor info modal presets
    dialog: false,
    currentPresetInfo: {},
    notifications: false,
    sound: true,
    widgets: false,

    //data voor user types (checkboxes)
    dataForUserTypes: {
      admin: {
        userTypename: "admin",
        rights: ["full acces", "collaborate"],
      },
      creative: {
        userTypename: "creative",
        rights: ["full acces", "collaborate"],
      },
    },
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
      this.dataStep1.markets.push({ marketCountry: "", marketLanguages: [] });
      console.log(this.dataStep1);
    },
    dataForLanguages(market, key) {
      let autoCompleteLanguages = this.dataForMarkets.marketLanguages[market];
      this.dataStep1.markets[key].marketLanguages = autoCompleteLanguages;
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

    presetInfo(CurrentPresetInfoParam) {
      this.dialog = true;
      this.currentPresetInfo = CurrentPresetInfoParam;
    },

    addDataStep4() {
      this.e1 = 5;
      this.dataForJson = {
        ...this.dataForJson,
        ...this.dataStep4,
      };
      console.log(this.dataForJson);
    },

    downloadJSON() {
      let objectToJSON = JSON.stringify(this.dataForJson, null, 2);
      let JSONForDownload =
        "data:text/json;charset=utf-8," + encodeURIComponent(objectToJSON);

      let invissibleButton = document.getElementById(
        "invissibleButtonJSONDownload"
      );
      invissibleButton.setAttribute("href", JSONForDownload);
      invissibleButton.setAttribute(
        "download",
        this.dataForJson.clientName + ".json"
      );
      invissibleButton.click();
    },
    consoleBrand(toLog) {
      console.log(toLog);
    },
  },
};
</script>

<style scoped>
.sticky-top {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 1;
}

.sticky-bottom {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  bottom: 0;
  background-color: #ffffff;
  z-index: 1;
}

.stepper {
  overflow: visible;
  z-index: 0;
  min-height: 98vh;
  position: relative;
}

.step {
  min-height: 98vh;
}

.container {
  width: 40%;
}

.containerClient {
  width: 50%;
}

.active {
  border: 2px solid #2b81d6;
}

.active-preset {
  border: 2px solid #2b81d6;
  background-color: #f6f9fe !important;
}

.active-preset .svg {
  fill: #2b81d6;
}

.modal-title-description {
  display: flex;
  flex-direction: column;
}

.height-modal-toolbar {
  height: fit-content;
}

.svg {
  color: #2b81d6;
}

/*svg aanpassen wanneer preset geselecteerd*/
.icon {
  display: inline-block;
  width: 48px;
  height: 48px;
  background-size: cover;
}

.icon-build-creatives {
  background-image: url(../assets/presetIcons/buildCreatives.svg);
}

.icon-build-creatives-focus {
  background-image: url(../assets/presetIcons/buildCreativesFocus.svg);
}

.icon-publish-campaigns {
  background-image: url(../assets/presetIcons/publishCampaigns.svg);
}

.icon-publish-campaigns-focus {
  background-image: url(../assets/presetIcons/publishCampaignsFocus.svg);
}

.v-dialog:not(.v-dialog--fullscreen) {
    bottom: 0 !important;
    right: 0 !important;
    position: absolute !important;
}
</style>
