<template>
  <div data-app>
    <v-dialog v-model="dialog">
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
          <v-container grid-list>
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
                <v-text-field type="email" v-model="email_edit" label="email"></v-text-field>
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
  mounted() {},
  methods: {
    submitEdits: function() {
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

