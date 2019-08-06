<template>
  <div data-app>
    <v-dialog v-model="dialog">
      <template v-slot:activator="{on}">
        <v-btn block color="red" dark v-on="on">
          <span class="mdi mdi-delete"></span>
          Delete Account
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline red">
          <span class="headline mdi mdi-delete">Delete Account</span>
        </v-card-title>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <p>Are you certain you want to delete your account?</p>
              <p>This process is irreversable.</p>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-btn color="red darken-2" @click="dialog = false">
            NO
            <span class="mdi mdi-close bold"></span>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="green darken-2" @click="deleteAccount">
            Yes
            <span class="mdi mdi-check-bold"></span>
          </v-btn>
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
      errors: []
    };
  },
  created() {},
  methods: {
    deleteAccount() {
      console.log("click");
    }
  }
};
</script>

