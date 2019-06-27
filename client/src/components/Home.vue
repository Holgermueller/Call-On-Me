<template>
  <div>
    <h2 class="page-header">Welcome to Call On Me</h2>
    <div class="actions">
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

<style scoped>
.page-header {
  text-align: center;
}
.actions {
  text-align: center;
  margin-bottom: 10%;
}
</style>

