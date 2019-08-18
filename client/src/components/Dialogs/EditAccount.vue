<template>
  <div data-app>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{on}">
        <v-btn block color="amber" dark v-on="on">
          <span class="mdi mdi-pen-plus"></span>
          Edit Account
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline blue">
          <span class="headline mdi mdi-account-edit">Edit Information:</span>
        </v-card-title>

        <v-card-text>
          <div class="errors" v-if="errors.length">
            <b>Please fix the following error(s):</b>
            <ul class="error-list">
              <li v-for="(error, index) in errors" v-bind:key="index">{{error}}</li>
            </ul>
          </div>

          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs-12>
                <v-text-field
                  prepend-icon="mdi-account-circle"
                  type="text"
                  v-model="user_name_edit"
                  label="Username"
                ></v-text-field>
              </v-flex>

              <v-flex xs-12>
                <v-text-field
                  prepend-icon="mdi-email"
                  type="email"
                  v-model="email_edit"
                  label="email"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue" @click="submitEdits">Submit</v-btn>
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
      user_name_edit: null,
      email_edit: null
    };
  },
  created() {},
  methods: {
    submitEdits() {
      console.log("click");
      const edit_object = {
        user_name_edit: this.user_name_edit,
        email_edit: this.email_edit
      };
      console.log(edit_object);
    }
  }
};
</script>

