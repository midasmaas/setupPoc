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
          <clientdetails :dataForDetails="dataStep1" :hasErrorsClientDetails="formHasErrors" v-on:nameCheck="updateFormHasErrors($event)"></clientdetails>
          <!-- details block EINDE -->

          <!-- step sub title-->
          <h3 class="mx-1 my-6">Organisational structure</h3>

          <!-- Brands block BEGIN -->
          <client-brands :dataForBrands="dataStep1"> </client-brands>
          <!-- Brands block EINDE -->
          
          <!-- Departments block BEGIN -->
          <client-departments :dataForDepartments="dataStep1"></client-departments>
          <!-- Departments block EINDE -->

          <!--
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
                      :items="returnCountries()"
                      class="shrink pt-8 mx-6"
                      @change="
                        dataForLanguages(
                          dataStep1.markets[key].marketCountry,
                          key
                        ),
                          returnCountries()
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
           -->
        <client-markets :dataStep1ForClientMarkets="dataStep1" :dataForMarketsForClientMarkets="dataForMarkets" :formHasErrorsMarkets="marketsIsEmpty"></client-markets>
        </v-container>

        
      </v-stepper-content>

      <!-- STEP 2: preset -->
      <v-stepper-content step="2" class="step">
        <v-container class="containerClient" fluid>
          <!-- pagina vraag + omschrijving -->
          <v-row class="mx-6 my-0">
            <h1>What’s the main goal of the client?</h1>
            <p v-show="presetSelected" class="red--text pt-4"> Select a preset!</p>
            <p class="grey--text font-weight-medium">
              Start off with a predefined, goal based setup, campaign channels
              and a campaign format.
            </p>
          </v-row>
          <module-preset-preset-selectie v-on:changeCurrentPresetInModdule="updataCurrentPreset($event)" :currentPresetForModule="currentPresetInfo" :presetDataForModule="dataForPresets" :dataStep2ForModule="dataStep2"> </module-preset-preset-selectie>
        </v-container>
      </v-stepper-content>

      <!-- STEP 3: presetoptions -->
      <v-stepper-content step="3" class="step">
      <preset-options :currentPresetForPresetOptions="currentPresetInfo" :frontEndDataForPresetOptions="dataForFrontEnd" :userTypesDatForPresetOptions="dataForUserTypes" :dataStep4ForPresetOptions="dataStep4"> </preset-options>
      </v-stepper-content>

      <!-- STEP 4: user types -->
      <v-stepper-content step="4" class="step">
        <usertypes-selection :dataStep4ForUserTypes="dataStep4" :dataUserTypesForUserTypes="dataForUserTypes" :userTypeSelectedForUserTypes="userTypeNotSelected"></usertypes-selection>
      </v-stepper-content>

      <!-- STEP 5: summary -->
      <v-stepper-content step="5" class="step">
        

        <summary-info :dataForFrontEndForSummaryInfo="dataForFrontEnd" :currentPresetInfoForSummaryInfo="currentPresetInfo" v-on:changeCurrentEOne="updateCurrentE1($event)"> </summary-info>
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
          v-show="dataForFrontEnd.clientName"
        >
          New Client: {{ dataForFrontEnd.clientName }}
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
          v-show="dataForFrontEnd.clientName"
        >
          New Client: {{ dataForFrontEnd.clientName }}
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
          v-show="dataForFrontEnd.clientName"
        >
          New Client: {{ dataForFrontEnd.clientName }}
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
          v-show="dataForFrontEnd.clientName"
        >
          New Client: {{ dataForFrontEnd.clientName }}
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
          v-show="dataForFrontEnd.clientName"
        >
          New Client: {{ dataForFrontEnd.clientName }}
        </h3>

        <v-spacer></v-spacer>

        <v-btn class="mx-6" color="primary" @click="downloadZIPTEST">
          Launch environment
        </v-btn>
      </v-row>
    </v-card>

    <!--Buttons EINDE-->
  </v-stepper>
</template>

<script>

//componenten
//step1
import Clientdetails from "../components/Clientdetails.vue"
import ClientDepartments from "../components/ClientDepartments.vue"
import ClientBrands from "../components/ClientBrands.vue"
import ClientMarkets from "../components/ClientMarkets.vue"

//step2
import ModulePresetPresetSelectie from "../components/ModulePresetPresetSelectie.vue"

//step3
import PresetOptions from '../components/presetOptions.vue'

//step4
import UsertypesSelection from "../components/UsertypesSelection.vue"

//step5
import SummaryInfo from "../components/SummaryInfo.vue"

//library voor het maken van ZIP-mapjes. Zie: JSZIP
import JSZip from "jszip";

//libray voor het opslaan van bestanden
import FileSaver from "file-saver";

// import van vaste data: presets, user types
import presetDataFromJSFile from '../data/presetDataFile.js'
import marketDataFromJSFile from '../data/marketsDataFile'
import userTypeDataFromJSFile from '../data/userTypesDataFile'




export default {
  
  components: { Clientdetails, ClientDepartments, ClientBrands, ModulePresetPresetSelectie, PresetOptions, UsertypesSelection, SummaryInfo, ClientMarkets },
  name: "HelloWorld",

  data: () => ({
    //waarde Vuetify voor tonen van stap in stepper-component
    e1: 1,

    //waarde voor openen/sluiten v-card componenten Veutify
    showDetails: true,
    showBrands: false,
    showDeparments: false,
    showMarkets: false,
    showSummaryClient: true,
    showPreset: true,
    showModules: false,
    showCampaignChannels: false,
    currentPresetInfo: {},
    formHasErrors: false,
    marketsIsEmpty: false,
    presetSelected: false,
    userTypeNotSelected: false,

    // waarde voor tonen dialogscherm
    dialog: false,

    //data voor JSON-bestanden
    dataForSetup: {},
    dataForCampaignFormat: {},
    dataForPublishProfiles: {},


    //data voor weergave front-end
    dataForFrontEnd: {
      //step1
      clientName: "",
      environmentLink: "",
      contactCompany: "",
      brands: [],
      departments: [],
      markets: [],

      //step2
      preset: {
        modules: [],
        channels: [],
      },

      //step3
      userTypes: [{ title: "", rights: [] }],
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

    //dataForPresets
    dataForPresets: presetDataFromJSFile,

    //data voor info modal
    tab: null,
    items: ["content", "info"],
    
   

    // data voor markets
    dataForMarkets: marketDataFromJSFile,

    //data voor user types (checkboxes)
    dataForUserTypes: userTypeDataFromJSFile

    
  }),
  methods: {
    updataCurrentPreset:function(updateCurrentPresetInfo){
      this.currentPresetInfo = updateCurrentPresetInfo
    },

    updateCurrentE1:function(updateCurrentE1Param){
      this.e1 = updateCurrentE1Param

      console.log(updateCurrentE1Param)
    },

    updateFormHasErrors:function(trueOrFalse){
      this.formHasErrors = trueOrFalse
    },

    // add methodes pushen lege strings naar data voor front-end, zodat in de HTML lege text-boxes verschijnen
    addBrandsTextfield() {
      this.showBrands = true;
      this.dataStep1.brands.push("");
    },

    addDepartmentsTextfield() {
      this.showDeparments = true;
      this.dataStep1.departments.push("");
    },

    
    // pusht lege string en array naar 
    addMarketsTextfield() {
      this.showMarkets = true;
      this.dataStep1.markets.push({ marketCountry: "", marketLanguages: [] });
    },

    returnCountries() { 
      return this.dataForMarkets.marketNames.map((market) => {
        const marketKey = Object.keys(market)[0];
        return market[marketKey];
      });
    },
    dataForLanguages(market, key) {
      let autoCompleteLanguages = this.dataForMarkets.marketLanguages[market];
      this.dataStep1.markets[key].marketLanguages = autoCompleteLanguages;
    },

    addDataStep1() {
      if (this.dataStep1.contactCompany === "" || this.dataStep1.clientName === "" || (this.dataStep1.markets).length === 0){
        this.formHasErrors = true
        this.marketsIsEmpty = true
        console.log(this.formHasErrors)
      } else
      this.e1 = 2;
      this.dataForFrontEnd = {
        ...this.dataForFrontEnd,
        ...this.dataStep1,
      };

      const marketData = this.dataStep1.markets.map((element) => {
        return this.dataForMarkets.marketNames.find((marketName) => {
          const marketKey = Object.keys(marketName)[0];
          const name = marketName[marketKey];
          return element.marketCountry === name;
        });
      });

      const brandData = this.dataStep1.brands.reduce((all, element) => {
        all[element] = element;
        return all;
      }, {});

      const departmentData = this.dataStep1.departments.reduce(
        (all, element) => {
          all[element] = element;
          return all;
        },
        {}
      );

      this.dataForSetup = {
        ...this.dataForSetup,
        language: "en",
        email: {
          logo: "https://templates.campaigndesigner.io/cape/general/logo-dark.png",
          buttonColor: "#f80",
        },
        helpdesk: { hideSupportButton: true },
        markets: marketData,
        languages: marketData,
        departments: departmentData,
        brands: brandData
      };
    },

    addDataStep2() {
      if(Object.keys(this.currentPresetInfo).length === 0){
        this.presetSelected = true
      } else
      
      this.e1 = 3;
      this.dataForFrontEnd = {
        ...this.dataForFrontEnd,
        ...this.dataStep2,
      };

      this.dataForCampaignFormat = {
        ...this.dataForCampaignFormat,
        ...this.dataStep2,
      };

      this.dataForSetup = {
        ...this.dataForSetup,
        modules: this.dataStep2.preset.modules,
      };

      this.dataForPublishProfiles = {
        ...this.dataForPublishProfiles,
        ...this.dataStep2.preset.publishProfiles,
      };
    },
    addDataStep4() {
      if(this.dataStep4.userTypes.length === 0){
        this.userTypeNotSelected = true
      } else
      this.e1 = 5;
      this.dataForFrontEnd = {
        ...this.dataForFrontEnd,
        ...this.dataStep4,
      };
      this.dataForSetup = {
        ...this.dataForSetup,
        ...this.dataStep4,
      };
    },
    downloadZIPTEST() {
      let zip = new JSZip();

      this.dataStep1.markets.forEach((element, i) => {
        let marketObject = {
          languages: element.marketLanguages,
        };
        let singleJSON = JSON.stringify(marketObject, null, 2);
        let name = element.marketCountry + ".json";
        zip.file(name, singleJSON);
      });
      zip.file("setupFile.json", JSON.stringify(this.dataForSetup, null, 2));
      zip.file(
        "campaignSetup.json",
        JSON.stringify(this.dataForCampaignFormat, null, 2)
      );
      zip.file(
        "publishProfiles.json",
        JSON.stringify(this.dataForPublishProfiles, null, 2)
      );

      zip
        .generateAsync({
          type: "blob",
        })
        .then(function (blob) {
          // zie FileSaver.js
          saveAs(blob, "setup.zip");
        });
    },
  },
};
</script>
<style scoped src="@/assets/styles/stepper.css">
</style>
