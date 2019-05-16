<template>
  <div>
    <h2>Register Here:</h2>
    <div class="row">
      <form action="#" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" placeholder="Username" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" placeholder="Email" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="password" placeholder="Password" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="password" placeholder="Confirm Password" required>
          </div>
        </div>
        <router-link to="/" class="waves-effect waves-light btn-large">BACK</router-link>
        <button type="submit" class="waves-effect waves-light btn-large">REGISTER</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register"
};
</script>

