<template>
  <div>
    <h3>Sign In Here</h3>
    <div class="row">
      <form @submit.prevent="verifyUserLogin" class="col s12">
        <div class="row" v-if="errors.length">
          <b>Please fix the following error(s):</b>
          <ul>
            <li v-for="(error, index) in errors" v-bind:key="index">{{error}}</li>
          </ul>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="username_login" placeholder="Username">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="password" v-model="password_login" placeholder="Password">
          </div>
        </div>
        <div class="link-button">
          <router-link to="/" class="waves-effect waves-light btn-large">BACK</router-link>
          <button type="submit" class="waves-effect waves-light btn-large">SUBMIT</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      errors: [],
      username_login: null,
      password_login: null
    };
  },
  methods: {
    verifyUserLogin: function() {
      this.errors = [];
      if (!this.username_login) {
        this.errors.push("Username required.");
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
    }
  }
};
</script>

<style scoped>
form {
  width: 75%;
}
.link-button{
  text-align: center;
}
</style>

