<template>
<v-container class="containerUsertypes" fluid>
        
          <v-card class="my-4">
            <v-card-actions>
              <v-card-title>
                Client: {{ dataForFrontEndForSummaryInfo.clientName }}
              </v-card-title>

              <v-spacer></v-spacer>

              <v-btn outlined color="primary" class="mx-4" text @click="editE1(1)">
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
                        {{ dataForFrontEndForSummaryInfo.brands.join(", ") }}
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
                        {{ dataForFrontEndForSummaryInfo.departments.join(", ") }}
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
                          dataForFrontEndForSummaryInfo.markets
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
          <v-card class="my-4">
            <v-card-actions>
              <v-card-title> Module- and campaign preset </v-card-title>

              <v-spacer></v-spacer>

              <v-btn outlined color="primary" class="mx-4" text @click="editE1(2)">
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
                        :class="dataForFrontEndForSummaryInfo.preset.iconClass"
                      ></div>
                      <div class="modal-title-description my-auto">
                        <h4>{{ dataForFrontEndForSummaryInfo.preset.title }}</h4>
                        <p class="mb-0 grey--text">
                          {{ currentPresetInfoForSummaryInfo.subTitle }}
                        </p>
                      </div>
                    </v-row>
                    <v-spacer></v-spacer>
                  </v-row>
                </v-card>
              </div>
            </v-expand-transition>
          </v-card>
          <v-card class="my-4">
            <v-card-actions>
              <v-card-title> Preset options </v-card-title>

              <v-spacer></v-spacer>

              <v-btn outlined color="primary" class="mx-4" text @click="editE1(3)">
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
                        {{ dataForFrontEndForSummaryInfo.preset.modules.join(", ") }}
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
                        {{ dataForFrontEndForSummaryInfo.preset.channels.join(", ") }}
                      </p>
                    </div>

                    <v-spacer></v-spacer>
                  </v-row>
                </v-card>
              </div>
            </v-expand-transition>
          </v-card>
          <v-card class="my-4">
            <v-card-actions>
              <v-card-title> User types </v-card-title>

              <v-spacer></v-spacer>

              <v-btn outlined color="primary" class="mx-4" text @click="editE1(4)">
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
                  v-for="(user, key) in dataForFrontEndForSummaryInfo.userTypes"
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
</template>

<script>
export default {
name: 'SummaryInfo',
props: {
    dataForFrontEndForSummaryInfo: {
        type: Object
    },

    currentPresetInfoForSummaryInfo: {
        type: Object
    },

    e1ForSummaryInfo:{
        type: Object
    }
},
data: () => ({
    showSummaryClient: true,
}),

methods: {
     addBrandsTextfield() {
      this.showBrands = true;
      this.dataForBrands.brands.push("");
    },

    editE1(e1Value){
      console.log(e1Value);
      this.$emit('changeCurrentEOne', e1Value)
    
    }
}

}
</script>

<style scoped src="@/assets/styles/stepper.css">
</style>