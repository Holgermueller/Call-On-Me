<template>
  <div>
    <a class="waves-effect waves-light btn modal-trigger btn-large" href="#modal1">SIGN UP</a>

    <div id="modal1" class="modal">
      <div class="modal-content">
        <div>
          <h2 class="form-header">Register Here:</h2>
          <h6 class="form-subheader">Please fill out all of the fields.</h6>
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
                  <input type="text" v-model="username_input" placeholder="Username" />
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input type="text" v-model="email_input" placeholder="Email" />
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input
                    type="password"
                    v-model="password_input"
                    placeholder="Password (Must have at least one capital letter, one symbol, and one number.)"
                  />
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input
                    type="password"
                    v-model="password_check_input"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div class="link-button">
                <button
                  type="submit"
                  v-on:click="closeModal"
                  class="waves-effect waves-light btn-large red"
                >CANCEL</button>
                <button type="submit" class="waves-effect waves-light btn-large">REGISTER</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../../utils/API";

export default {
  name: "RegistrationModal",
  data() {
    return {
      errors: [],
      username_input: null,
      email_input: null,
      password_input: null,
      password_check_input: null
    };
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll(".modal");
      const instances = M.Modal.init(elems);
    });
  },
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
    },
    closeModal: function(e) {
      e.preventDefault();
      console.log("click");
    }
  }
};
</script>

<style scoped>
.form-header {
  text-align: center;
}
.form-subheader {
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
