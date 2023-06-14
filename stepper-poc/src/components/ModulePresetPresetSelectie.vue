<template>
<div v-if="presetDataForModule && currentPresetForModule &&dataStep2ForModule">
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
                      currentPresetForModule.title
                    }}</v-toolbar-title>

                    <p class="grey--text font-weight-medium pa-0 ma-0">
                      {{ currentPresetForModule.subTitle }}
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
                          v-for="(moduleItem, key) in currentPresetForModule.modules"
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
                      <v-card-text>{{ currentPresetForModule.about }}</v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>
            </v-dialog>
          </v-row>
          <!--Info dialog EINDE-->
          <!-- preset radio buttons -->
          <v-radio-group class="ma-0" v-model="dataStep2ForModule.preset" column>
            <v-card
              class="ma-4"
              :class="{
                'active-preset':
                  dataStep2ForModule.preset === presetDataForModule.preset1Data,
              }"
            >
              <v-row class="ma-6">
                <v-row>
                  <v-radio
                    @click="chosenPreset(presetDataForModule.preset1Data.presetInfo)"
                    color="primary"
                    :value="presetDataForModule.preset1Data"
                    class="mb-0"
                  >
                  </v-radio>
                  <div
                    class="icon icon-build-creatives ma-2"
                    :class="{
                      'icon-build-creatives-focus':
                        dataStep2ForModule.preset === presetDataForModule.preset1Data,
                      'icon-build-creatives':
                        dataStep2ForModule.preset !== presetDataForModule.preset1Data,
                    }"
                  ></div>
                  <div class="modal-title-description my-auto">
                    <h4>{{ presetDataForModule.preset1Data.title }}</h4>
                    <p class="mb-0 grey--text">
                      {{ presetDataForModule.preset1Data.presetInfo.subTitle }}
                    </p>
                  </div>
                </v-row>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  class="mx-4"
                  text
                  @click="presetInfo(presetDataForModule.preset1Data.presetInfo)"
                >
                  info
                </v-btn>
              </v-row>
            </v-card>
            <v-card
              class="ma-4"
              :class="{
                'active-preset':
                  dataStep2ForModule.preset === presetDataForModule.preset2Data,
              }"
            >
              <v-row class="ma-6">
                <v-row>
                  <v-radio
                    color="primary"
                    :value="presetDataForModule.preset2Data"
                    class="mb-0"
                    @click="chosenPreset(presetDataForModule.preset2Data.presetInfo)"
                  ></v-radio>

                  <div
                    class="icon icon-build-creatives ma-2"
                    :class="{
                      'icon-publish-campaigns-focus':
                        dataStep2ForModule.preset === presetDataForModule.preset2Data,
                      'icon-publish-campaigns':
                        dataStep2ForModule.preset !== presetDataForModule.preset2Data,
                    }"
                  ></div>
                  <div class="modal-title-description my-auto">
                    <h4>{{ presetDataForModule.preset2Data.title }}</h4>
                    <p class="mb-0 grey--text">
                      {{ presetDataForModule.preset2Data.presetInfo.subTitle }}
                    </p>
                  </div>
                </v-row>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  class="mx-4"
                  text
                  @click="presetInfo(presetDataForModule.preset2Data.presetInfo)"
                >
                  info
                </v-btn>
              </v-row>
            </v-card>
          </v-radio-group>
</div>
</template>

<script>
export default {
name: 'ModulePresetPresetSelectie',

props: {
    presetDataForModule: {
        type: Object
    },

    currentPresetForModule: {
        type: Object
    },

    dataStep2ForModule: {
        type: Object
    },
},
computed: {

},
data: () => ({
    //data voor info modal
    tab: null,
    items: ["content", "info"],
    dialog: false,
}),

methods: {
    presetInfo(CurrentPresetInfoParam) {
      this.dialog = true;
      this.currentPresetForModule = CurrentPresetInfoParam;
    },
    chosenPreset(CurrentPresetInfoParam) {
      //this.currentPresetForModule = CurrentPresetInfoParam;

      this.$emit('changeCurrentPresetInModdule', CurrentPresetInfoParam)
    },
}

}
</script>

<style scoped src="@/assets/styles/stepper.css">
</style>