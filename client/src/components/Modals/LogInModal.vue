<template>
  <div>
    <a class="waves-effect waves-light btn modal-trigger btn-large" href="#modal1">Log In</a>

    <div id="modal1" class="modal">
      <div class="modal-content">
        <h3>Sign In Here</h3>
        <div class="row">
          <form @submit.prevent="loginUser" class="col s12">
            <div class="row" v-if="errors.length">
              <b>Please fix the following error(s):</b>
              <ul>
                <li v-for="(error, index) in errors" v-bind:key="index">{{error}}</li>
              </ul>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="text" v-model="username_login" placeholder="Username or email" />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="password" v-model="password_login" placeholder="Password" />
              </div>
            </div>
            <div class="link-button">
              <button type="submit" v-on:click="closeModal" class="waves-effect waves-light btn-large">CANCEL</button>
              <button type="submit" class="waves-effect waves-light btn-large">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../../utils/API";

export default {
  name: "LogInModal",
  data() {
    return {
      errors: [],
      username_login: null,
      password_login: null
    };
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll(".modal");
      const instances = M.Modal.init(elems);
    });
  },
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
    },
    closeModal: function(e) {
      e.preventDefault();
      console.log('click');
    }
  }
};
</script>

<style scoped>
</style>

