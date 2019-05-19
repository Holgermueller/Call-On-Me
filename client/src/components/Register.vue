<template>
  <div>
    <h2>Register Here:</h2>
    <div class="row">
      <form @submit.prevent="registerUser" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="username_input" placeholder="Username" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="email_input" placeholder="Email" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="password" v-model="password_input" placeholder="Password" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              type="password"
              v-model="password_check_input"
              placeholder="Confirm Password"
              required
            >
          </div>
        </div>
        <router-link to="/" class="waves-effect waves-light btn-large">BACK</router-link>
        <button type="submit" class="waves-effect waves-light btn-large">REGISTER</button>
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
      username_input: null,
      email_input: null,
      password_input: null,
      password_check_input: null
    };
  },
  methods: {
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

