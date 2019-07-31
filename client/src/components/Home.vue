<template>
  <div>
    <h2 class="text-center p-5%">Welcome to Call On Me</h2>
    <div class="text-center">
      <RegistrationDialog />
      <v-spacer></v-spacer>
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
</style>

