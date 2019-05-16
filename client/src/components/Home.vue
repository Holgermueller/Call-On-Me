<template>
  <div>
    <h2>Welcome to call on me</h2>
    <div>
      <router-link to="/register" class="waves-effect waves-light btn-large">Register</router-link>
      <router-link to="/signin" class="waves-effect waves-light btn-large">Sign In</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
