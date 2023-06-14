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

          <clientdetails :dataForDetails="dataStep1"></clientdetails>

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
          <!-- Markets block EINDE -->
        </v-container>
      </v-stepper-content>

      <!-- STEP 2: preset -->
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
          <v-row justify="center">
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

                  <v-tab v-for="(item, key) in items" :key="key">
                    {{ item }}
                  </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                  <v-tab-item>
                    <v-card flat>
                      <v-card-title> Modules </v-card-title>
                      <v-card-text>
                        <li
                          v-for="(moduleItem, key) in currentPresetInfo.modules"
                          :key="key"
                        >
                          {{ moduleItem }}
                        </li>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>

                  <v-tab-item>
                    <v-card flat>
                      <v-card-title> About </v-card-title>
                      <v-card-text>{{ currentPresetInfo.about }}</v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>
            </v-dialog>
          </v-row>
          <!--Info dialog EINDE-->
          <!-- preset radio buttons -->
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
                    @click="chosenPreset(dataForPresets.preset1Data.presetInfo)"
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
                    @click="chosenPreset(dataForPresets.preset2Data.presetInfo)"
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
        <v-container class="containerClient" fluid>
          <!-- pagina vraag + omschrijving -->
          <v-row class="mx-6 my-0">
            <h1>Do you want to edit the preset options?</h1>
            <p class="grey--text font-weight-medium">
              Edit the options in the preset or leave it as it is.
            </p>
          </v-row>

          <!-- preset choice block -->
          <v-card class="my-8">
            <v-card-actions>
              <v-card-title> Chosen preset </v-card-title>

              <v-spacer></v-spacer>
                
              <v-btn icon @click="showPreset = !showPreset">
                <v-icon>{{
                  !showPreset ? "mdi-chevron-down" : "mdi-chevron-up"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div class="pb-1" v-show="showPreset">
                <v-divider></v-divider>

                <v-card class="ma-4" outlined>
                  <v-row class="ma-6">
                    <v-row>
                      <div
                        class="icon ma-2"
                        :class="dataForFrontEnd.preset.iconClass"
                      ></div>
                      <div class="modal-title-description my-auto">
                        <h4>{{ dataForFrontEnd.preset.title }}</h4>
                        <p class="mb-0 grey--text">
                          {{ currentPresetInfo.subTitle }}
                        </p>
                      </div>
                    </v-row>
                    <v-spacer></v-spacer>
                  </v-row>
                </v-card>
              </div>
            </v-expand-transition>
          </v-card>

          <!-- system modules block-->
          <v-card class="my-8">
            <v-card-actions>
              <v-card-title> System modules </v-card-title>

              <v-spacer></v-spacer>

              <v-btn icon @click="showModules = !showModules">
                <v-icon>{{
                  !showModules ?  "mdi-chevron-down" : "mdi-chevron-up"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div class="pb-1" v-show="showModules">
                <v-divider></v-divider>

                <v-checkbox
                  v-for="(item, key) in dataForFrontEnd.preset.modules"
                  :key="key"
                  v-model="dataForFrontEnd.preset.modules[key]"
                  :label="dataForFrontEnd.preset.modules[key]"
                >
                </v-checkbox>
                <v-btn class="ma-2" outlined color="primary"
                  >more options</v-btn
                >
              </div>
            </v-expand-transition>
          </v-card>

          <!-- channels block-->
          <v-card class="my-8">
            <v-card-actions>
              <v-card-title> Campaign channels </v-card-title>

              <v-spacer></v-spacer>

              <v-btn icon @click="showCampaignChannels = !showCampaignChannels">
                <v-icon>{{
                  !showCampaignChannels ? "mdi-chevron-down" : "mdi-chevron-up"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div class="pb-1" v-show="showCampaignChannels">
                <v-divider></v-divider>
                <v-simple-table>
                  <thead>
                    <tr>
                      <th class="text-left">Channel</th>
                      <th class="text-left">Create</th>
                      <th class="text-left">Publish</th>
                      <th class="text-left">Analytics</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr
                      v-for="(channel, key) in dataForFrontEnd.preset.channels"
                      :key="key"
                    >
                      <td>{{ channel }}</td>
                      <td>
                        <v-checkbox
                          v-model="dataStep4.userTypes"
                          :value="dataForUserTypes.admin"
                        ></v-checkbox>
                      </td>
                      <td>
                        <v-checkbox
                          v-model="dataStep4.userTypes"
                          :value="dataForUserTypes.admin"
                        ></v-checkbox>
                      </td>
                      <td>
                        <v-checkbox
                          v-model="dataStep4.userTypes"
                          :value="dataForUserTypes.admin"
                        ></v-checkbox>
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </div>
            </v-expand-transition>
          </v-card>
        </v-container>
      </v-stepper-content>

      <!-- STEP 4: user types -->
      <v-stepper-content step="4" class="step">
        <v-container class="containerUsertypes" fluid>
          <!-- pagina vraag + omschrijving -->
          <v-row class="mx-6 my-0">
            <h1>What user types do you want to use?</h1>
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
                  v-model="dataStep4.userTypes"
                  :value="dataForUserTypes.admin"
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
                  v-model="dataStep4.userTypes"
                  :value="dataForUserTypes.manager"
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
                  v-model="dataStep4.userTypes"
                  :value="dataForUserTypes.creative"
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
      </v-stepper-content>

      <!-- STEP 5: summary -->
      <v-stepper-content step="5" class="step">
        <v-container class="containerUsertypes" fluid>
          <!-- content -->

          <!-- client summary block -->
          <v-card class="my-4">
            <v-card-actions>
              <v-card-title>
                Client: {{ dataForFrontEnd.clientName }}
              </v-card-title>

              <v-spacer></v-spacer>

              <v-btn outlined color="primary" class="mx-4" text @click="e1 = 1">
                edit
              </v-btn>
              <v-btn icon @click="showSummaryClient = !showSummaryClient">
                <v-icon>{{
                  showSummaryClient ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div class="pb-1" v-show="showSummaryClient">
                <v-divider></v-divider>
                <v-card class="ma-4" outlined>
                  <v-row align="center" justify="center">
                    <div class="modal-title-description ma-6">
                      <h4>Brands</h4>
                      <p class="mb-0 grey--text">
                        {{ dataForFrontEnd.brands.join(", ") }}
                      </p>
                    </div>

                    <v-spacer></v-spacer>
                  </v-row>
                </v-card>

                <v-card class="ma-4" outlined>
                  <v-row align="center" justify="center">
                    <div class="modal-title-description ma-6">
                      <h4>Departments</h4>
                      <p class="mb-0 grey--text">
                        {{ dataForFrontEnd.departments.join(", ") }}
                      </p>
                    </div>

                    <v-spacer></v-spacer>
                  </v-row>
                </v-card>

                <v-card class="ma-4" outlined>
                  <v-row align="center" justify="center">
                    <div class="modal-title-description ma-6">
                      <h4>Markets</h4>
                      <p class="mb-0 grey--text">
                        {{
                          dataForFrontEnd.markets
                            .map((entry) => entry.marketCountry)
                            .join(", ")
                        }}
                      </p>
                    </div>

                    <v-spacer></v-spacer>
                  </v-row>
                </v-card>
              </div>
            </v-expand-transition>
          </v-card>

          <!-- chosen preset block-->
          <v-card class="my-4">
            <v-card-actions>
              <v-card-title> Module- and campaign preset </v-card-title>

              <v-spacer></v-spacer>

              <v-btn outlined color="primary" class="mx-4" text @click="e1 = 2">
                edit
              </v-btn>
              <v-btn icon @click="showSummaryClient = !showSummaryClient">
                <v-icon>{{
                  showSummaryClient ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div class="pb-1" v-show="showSummaryClient">
                <v-divider></v-divider>

                <v-card class="ma-4" outlined>
                  <v-row class="ma-6">
                    <v-row>
                      <div
                        class="icon ma-2"
                        :class="dataForFrontEnd.preset.iconClass"
                      ></div>
                      <div class="modal-title-description my-auto">
                        <h4>{{ dataForFrontEnd.preset.title }}</h4>
                        <p class="mb-0 grey--text">
                          {{ currentPresetInfo.subTitle }}
                        </p>
                      </div>
                    </v-row>
                    <v-spacer></v-spacer>
                  </v-row>
                </v-card>
              </div>
            </v-expand-transition>
          </v-card>

          <!-- preset options block-->
          <v-card class="my-4">
            <v-card-actions>
              <v-card-title> Preset options </v-card-title>

              <v-spacer></v-spacer>

              <v-btn outlined color="primary" class="mx-4" text @click="e1 = 3">
                edit
              </v-btn>
              <v-btn icon @click="showSummaryClient = !showSummaryClient">
                <v-icon>{{
                  showSummaryClient ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div class="pb-1" v-show="showSummaryClient">
                <v-divider></v-divider>

                <v-card class="ma-4" outlined>
                  <v-row align="center" justify="center">
                    <div class="modal-title-description ma-6">
                      <h4>Modules</h4>
                      <p class="mb-0 grey--text">
                        {{ dataForFrontEnd.preset.modules.join(", ") }}
                      </p>
                    </div>

                    <v-spacer></v-spacer>
                  </v-row>
                </v-card>
                <v-card class="ma-4" outlined>
                  <v-row align="center" justify="center">
                    <div class="modal-title-description ma-6">
                      <h4>Channels</h4>
                      <p class="mb-0 grey--text">
                        {{ dataForFrontEnd.preset.channels.join(", ") }}
                      </p>
                    </div>

                    <v-spacer></v-spacer>
                  </v-row>
                </v-card>
              </div>
            </v-expand-transition>
          </v-card>

          <!-- user types block -->
          <v-card class="my-4">
            <v-card-actions>
              <v-card-title> User types </v-card-title>

              <v-spacer></v-spacer>

              <v-btn outlined color="primary" class="mx-4" text @click="e1 = 4">
                edit
              </v-btn>
              <v-btn icon @click="showSummaryClient = !showSummaryClient">
                <v-icon>{{
                  showSummaryClient ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div class="pb-1" v-show="showSummaryClient">
                <v-divider></v-divider>
                <v-card
                  v-for="(user, key) in dataForFrontEnd.userTypes"
                  :key="key"
                  class="ma-4"
                  outlined
                >
                  <v-row align="center" justify="center">
                    <div class="modal-title-description ma-6">
                      <h4>{{ user.title }}</h4>
                      <p class="mb-0 grey--text">
                        {{ user.rights.join(", ") }}
                      </p>
                    </div>

                    <v-spacer></v-spacer>
                  </v-row>
                </v-card>
              </div>
            </v-expand-transition>
          </v-card>
        </v-container>
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
import Clientdetails from "../components/Clientdetails.vue"

//library voor het maken van ZIP-mapjes. Zie: JSZIP
import JSZip from "jszip";

//libray voor het opslaan van bestanden
import FileSaver from "file-saver";

// import van vaste data: presets, user types
import presetDataFromJSFile from '../data/presetDataFile.js'
import marketDataFromJSFile from '../data/marketsDataFile'
import userTypeDataFromJSFile from '../data/userTypesDataFile'

export default {
  
  components: { Clientdetails },
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
    currentPresetInfo: {},
   

    // data voor markets
    dataForMarkets: marketDataFromJSFile,

    //data voor user types (checkboxes)
    dataForUserTypes: userTypeDataFromJSFile

    
  }),
  methods: {
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

    presetInfo(CurrentPresetInfoParam) {
      this.dialog = true;
      this.currentPresetInfo = CurrentPresetInfoParam;
    },
    chosenPreset(CurrentPresetInfoParam) {
      this.currentPresetInfo = CurrentPresetInfoParam;
    },

    addDataStep4() {
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
