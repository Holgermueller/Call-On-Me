<template>
  <div data-app>
    <v-dialog v-model="dialog">
      <template v-slot:activator="{on}">
        <v-btn block class="success" v-on="on" large append-icon="mdi-pen">
          <span class="mdi mdi-pen"></span>
          SIGN UP
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="blue lighten-1">
          <span class="headline" primary-title>Register Here:</span>
        </v-card-title>

        <v-card-text>
          <div class="errors" v-if="errors.length">
            <b>Please fix the following error(s):</b>
            <ul class="error-list">
              <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
            </ul>
          </div>

          <v-form ref="form">
            <v-flex xs12 sm6 md4>
              <v-text-field
                prepend-icon="mdi-account-circle"
                type="text"
                v-model="username_input"
                label="Username*"
              ></v-text-field>
            </v-flex>

            <v-flex xs12 sm6 md4>
              <v-text-field v-model="email_input" label="E-mail*" prepend-icon="mdi-email"></v-text-field>
            </v-flex>

            <v-flex xs12 sm6 md4>
              <v-text-field
                :type="show_password ? 'text' : 'password'"
                v-model="password_input"
                label="Password*"
                prepend-icon="mdi-lock"
                :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                hint="Must have at least one capital letter, one symbol, and one number."
                persistent-hint
                @click:append="show_password = !show_password"
              ></v-text-field>
            </v-flex>

            <v-flex xs12 sm6 md4>
              <v-text-field
                :type="show_confirm_password ? 'text' : 'password'"
                v-model="password_check_input"
                label="Confirm Password*"
                prepend-icon="mdi-lock"
                :append-icon="show_confirm_password ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show_confirm_password = !show_confirm_password"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-btn color="amber" class="white--text" @click="resetForm">
                <span class="mdi mdi-close"></span>
                Clear Form
              </v-btn>
            </v-flex>
          </v-form>

          <small>* Indicates required field.</small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" @click="dialog = false" class="white--text">
            <span class="mdi mdi-close-circle white--text"></span>Cancel
          </v-btn>
          <v-btn color="blue" @click="checkForm" class="white--text">
            <span class="mdi mdi-check-bold white--text"></span>Register
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      dialog: false,
      valid: true,
      show_password: false,
      show_confirm_password: false
    };
  },
  created() {},
  methods: {
    checkForm() {
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

    checkValidEmail(email_input) {
      const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return regex.test(email_input);
    },

    checkPassword(password_input) {
      //const pwd_regex = ;
      // return pwd_regex.test(password_input);
    },

    registerUser() {
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
    },

    resetForm() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
</style>
