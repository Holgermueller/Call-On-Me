<template>
  <div>
    <h2 class="form-header">Register Here:</h2>
    <div class="row">
      <form @submit.prevent="checkForm" class="col s12">
        <div class="row errors" v-if="errors.length">
          <b>Please fix the following error(s):</b>
          <ul class="error-list">
            <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
          </ul>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="username_input" placeholder="Username">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="email_input" placeholder="Email">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="password" v-model="password_input" placeholder="Password">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="password" v-model="password_check_input" placeholder="Confirm Password">
          </div>
        </div>
        <div class="link-button">
          <router-link to="/" class="waves-effect waves-light btn-large">BACK</router-link>
          <button type="submit" class="waves-effect waves-light btn-large">REGISTER</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import API from "../utils/API";
export default {
  name: "Register",
  data() {
    return {
      errors: [],
      username_input: null,
      email_input: null,
      password_input: null,
      password_check_input: null
    };
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.username_input) {
        this.errors.push("Username required.");
      }
      if (!this.email_input) {
        this.errors.push("Email required.");
      } else if (!this.checkValidEmail(this.email_input)) {
        this.errors.push("Valid email required");
      }
      if (!this.password_input) {
        this.errors.push("Password required.");
      }
      if (!this.password_check_input) {
        this.errors.push("Password confirmation required.");
      }
    },
    checkValidEmail: function(email_input) {
      const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return regex.test(email_input);
    },
    confirmPassword: function() {
      if (this.password_input !== this.password_check_input) {
        this.errors.push("Passwords do not match.");
      }
    },
    registerUser: function() {
      API.registerUser({
        instructor_name: this.username_input,
        email: this.email_input,
        password: this.password_input
      })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.form-header {
  text-align: center;
}
.link-button {
  text-align: center;
}
.errors {
  text-align: center;
  color: red;
}
.error-list {
  text-align: left;
}
</style>


