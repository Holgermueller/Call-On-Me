<template>
  <div data-app>
    <v-layout row justify-center>
      <v-dialog v-model="dialog">
        <template v-slot:activator="{on}">
          <v-btn color="green" dark v-on="on" large>SIGN UP</v-btn>
        </template>

        <v-card>
          <v-card-title>
            <span class="headline">Register Here:</span>
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
                  <v-text-field type="text" v-model="username_input" label="Username*"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="email_input" label="E-mail*"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    type="password"
                    v-model="password_input"
                    label="Password*"
                    hint="Must have at least one capital letter, one symbol, and one number."
                    persistent-hint
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    type="password"
                    v-model="password_check_input"
                    label="Confirm Password*"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>* Indicates required field.</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" @click="dialog = false">Cancel</v-btn>
            <v-btn color="blue darken-1" @click="checkForm">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import API from "../../utils/API";

export default {
  name: "RegistratioDialog",
  data() {
    return {
      errors: [],
      username_input: null,
      email_input: null,
      password_input: null,
      password_check_input: null,
      dialog: false
    };
  },
  mounted() {},
  methods: {
    checkForm: function() {
      this.$router.push("/:instructor_profile_id");

      // this.errors = [];
      // if (
      //   !this.username_input &&
      //   !this.email_input &&
      //   !this.password_input &&
      //   !this.password_check_input
      // ) {
      //   this.errors.push("Please fill out all of the fields.");
      // } else if (!this.username_input) {
      //   this.errors.push("Username required.");
      // } else if (!this.email_input) {
      //   this.errors.push("Email required.");
      // } else if (!this.checkValidEmail(this.email_input)) {
      //   this.errors.push("Valid email required");
      // } else if (!this.password_input) {
      //   this.errors.push("Password required.");
      // } else if (!this.password_check_input) {
      //   this.errors.push("Password confirmation required.");
      // } else if (this.password_input !== this.password_check_input) {
      //   this.errors.push("Passwords do not match.");
      // } else {
      //   this.registerUser();
      // }
    },
    checkValidEmail: function(email_input) {
      const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return regex.test(email_input);
    },
    checkPassword: function(password_input) {
      //const pwd_regex = ;
      // return pwd_regex.test(password_input);
    },
    registerUser: function() {
      API.registerUser({
        instructor_name: this.username_input,
        email: this.email_input,
        password: this.password_input
      })
        .then(res => {
          console.log(res.data);
          this.$router.push("/:instructor_profile_id");
        })
        .catch(err => {
          console.log(err);
          this.errors.push("User already exists.");
        });
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
