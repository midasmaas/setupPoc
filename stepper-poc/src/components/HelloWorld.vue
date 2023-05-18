<template>
   <v-stepper v-model="e1"
   height="95%"
   >
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        Client
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Module- and campaign preset
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Preset options
      </v-stepper-step>

            <v-divider></v-divider>

      <v-stepper-step step="4">
        User types
      </v-stepper-step>

            <v-divider></v-divider>

      <v-stepper-step step="5">
        Summary
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12 fill-height"
          color="grey lighten-1"
          height="70vh"
        >
        </v-card>

        <v-btn text>
          Back
        </v-btn>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn 
        @click="e1 = 2"
        text>
          Back
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
       e1: 1,
    }),
  }
</script>

<style scoped>
.flexcard {
  height: 100%;
}

</style>
