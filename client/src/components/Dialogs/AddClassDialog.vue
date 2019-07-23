<template>
  <div data-app>
    <v-dialog>
      <template v-slot:activator="{on}">
        <v-btn color="green" dark v-on="on">Add A Class</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline">Add a class:</v-card-title>

        <div class="errors" v-if="errors.length">
          <b>Please fix the following error(s):</b>
          <ul class="error-list">
            <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
          </ul>
        </div>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  type="text"
                  v-model="class_name"
                  label="Enter class name here*"
                  hint="Ex.: Multicultural Lit T-Th 9-9:50"
                  persistent-hint
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>* Indicates required field.</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-2" @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-2" @click="saveClass">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import API from "../../utils/API";

export default {
  data() {
    return {
      dialog: false,
      errors: [],
      class_name: null
    };
  },
  methods: {
    saveClass: function() {
      API.addClass({
        class_name: this.class_name
      })
        .then(res => {
          this.$router.go();
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>
