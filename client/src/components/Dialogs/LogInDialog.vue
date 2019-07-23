<template>
  <div data-app>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{on}">
        <v-btn color="green" dark v-on="on" large>SIGN IN</v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">Sign In Here</span>
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
              <v-flex xs12>
                <v-text-field v-model="username_login" label="Username or Email*"></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field v-model="password_login" label="Password*"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>* Indicates required field.</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" @click="dialog = false">Cancel</v-btn>
          <v-btn color="green darken-1" @click="loginUser">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import API from "../../utils/API";

export default {
  name: "LogInDialog",
  data() {
    return {
      errors: [],
      username_login: null,
      password_login: null,
      dialog: false
    };
  },
  mounted() {},
  methods: {
    verifyUserLogin: function() {
      this.errors = [];
      if (!this.username_login) {
        this.errors.push("Username or email required.");
      }
      if (!this.password_login) {
        this.errors.push("Password required.");
      }
    },
    loginUser: function() {
      const user_login_info = {
        username: this.username_login,
        password: this.password_login
      };

      this.$router.push("/:instructor_profile_id");
    }
  }
};
</script>

<style scoped>
.errors {
  text-align: center;
  color: red;
}
.error-list {
  text-align: left;
}
</style>

