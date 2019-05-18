<template>
  <div>
    <h3>Sign In Here</h3>
    <div class="row">
      <form @submit.prevent="loginUser" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="username_login" placeholder="Username" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="password" v-model="password_login" placeholder="Password" required>
          </div>
        </div>
        <router-link to="/" class="waves-effect waves-light btn-large">BACK</router-link>
        <button type="submit" class="waves-effect waves-light btn-large">SUBMIT</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      username_login: null,
      password_login: null
    };
  },
  methods: {
    loginUser: function() {
      const user_login_info = {
        username: this.username_login,
        password: this.password_login
      };
      console.log(user_login_info);
    }
  }
};
</script>

<style scoped>
form {
  width: 75%;
}
</style>

