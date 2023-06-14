<template>
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
                        :class="frontEndDataForPresetOptions.preset.iconClass"
                      ></div>
                      <div class="modal-title-description my-auto">
                        <h4>{{ frontEndDataForPresetOptions.preset.title }}</h4>
                        <p class="mb-0 grey--text">
                          {{ currentPresetForPresetOptions.subTitle }}
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
                  v-for="(item, key) in frontEndDataForPresetOptions.preset.modules"
                  :key="key"
                  v-model="frontEndDataForPresetOptions.preset.modules[key]"
                  :label="frontEndDataForPresetOptions.preset.modules[key]"
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
                      v-for="(channel, key) in frontEndDataForPresetOptions.preset.channels"
                      :key="key"
                    >
                      <td>{{ channel }}</td>
                      <td>
                        <v-checkbox
                          v-model="dataStep4ForPresetOptions.userTypes"
                          :value="userTypesDatForPresetOptions.admin"
                        ></v-checkbox>
                      </td>
                      <td>
                        <v-checkbox
                          v-model="dataStep4ForPresetOptions.userTypes"
                          :value="userTypesDatForPresetOptions.admin"
                        ></v-checkbox>
                      </td>
                      <td>
                        <v-checkbox
                          v-model="dataStep4ForPresetOptions.userTypes"
                          :value="userTypesDatForPresetOptions.admin"
                        ></v-checkbox>
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </div>
            </v-expand-transition>
          </v-card>
        </v-container>
</template>

<script>
export default {
name: 'presetOptions',

props: {
    currentPresetForPresetOptions: {
        type: Object
    },

    frontEndDataForPresetOptions: {
        type: Object
    },

    userTypesDatForPresetOptions: {
        type: Object
    },

    dataStep4ForPresetOptions: {
        type: Object
    }
},
data: () => ({
    showPreset: true,
    showModules: false,
    showCampaignChannels: false,
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