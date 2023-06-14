<template>
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
                  showDeparments && dataForDepartments.departments.length > 0
                    ? "mdi-chevron-up"
                    : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div
                class="pb-1"
                v-show="showDeparments && dataForDepartments.departments.length > 0"
              >
                <v-divider></v-divider>
                <v-card
                  class="ma-4"
                  outlined
                  v-for="(brand, key) in dataForDepartments.departments"
                  :key="key"
                >
                  <v-row align="center" justify="center">
                    <v-text-field
                      label="New department"
                      placeholder="Department"
                      outlined
                      v-model="dataForDepartments.departments[key]"
                      class="shrink pt-8 mx-6"
                    >
                    </v-text-field>

                    <v-spacer></v-spacer>

                    <v-btn
                      @click="dataForDepartments.departments.splice(key, 1)"
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
</template>

<script>
export default {
name: 'ClientDepartments',

props: {
    dataForDepartments: {
        type: Object
    }
},
data: () => ({
    showDeparments: true
}),

methods: {
    addDepartmentsTextfield() {
      this.showDeparments = true;
      this.dataForDepartments.departments.push("");
    },
}

}
</script>

<style scoped src="@/assets/styles/stepper.css">
</style>