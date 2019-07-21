<template>
  <div>
    <h2 class="page-header">Welcome to Call On Me</h2>
    <div class="actions">
      <RegistrationDialog />
      <LogInDialog />
    </div>
  </div>
</template>

<script>
import RegistrationDialog from "../components/Dialogs/RegistrationDialog"
import LogInDialog from "../components/Dialogs/LogInDialog"

export default {
  name: "Home",
  components: {
    RegistrationDialog,
    LogInDialog,
  }
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

