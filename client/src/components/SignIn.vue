<template>
  <div>
    <h3>Sign In Here</h3>
    <div class="row">
    <form action="#" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" placeholder="Username" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="password" placeholder="Password" required>
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
  name: "SignIn"
};
</script>

<style scoped>
form {
  width: 75%;
}
</style>

