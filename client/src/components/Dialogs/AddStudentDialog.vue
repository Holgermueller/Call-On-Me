<template>
  <div data-app>
    <v-dialog v-model="dialog">
      <template v-slot:activator="{on}">
        <v-btn block color="green" dark v-on="on">
          <span class="mdi mdi-account-plus"></span> ADD A STUDENT
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline blue">
          <span class="headline mdi mdi-account-plus">Add a Student:</span>
        </v-card-title>

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
                <v-text-field type="text" v-model="first_name" label="First name*"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field type="text" v-model="last_name" label="Family name*"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field type="text" v-model="preferred_name" label="Preferred name*"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>* Indicates required field.</small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" @click="dialog = false">CANCEL</v-btn>
          <v-btn color="blue darken-1" @click="addStudentToClass">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import API from "../../utils/API";

export default {
  name: "AddStudentDialog",
  mounted() {},
  data() {
    return {
      errors: [],
      first_name: null,
      last_name: null,
      preferred_name: null,
      dialog: false
    };
  },
  methods: {
    addStudentToClass() {
      API.addStudentToClass({
        first_name: this.first_name,
        last_name: this.last_name,
        preferred_name: this.preferred_name
      })
        .then(res => {
          this.$router.go();
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


