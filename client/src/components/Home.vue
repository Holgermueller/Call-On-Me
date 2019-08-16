<template>
  <div>
    <h2 class="text-center p-5%">Welcome to Call On Me</h2>

    <v-card class="text-center home-card elevation-0">
      <RegistrationDialog />
      
      <LogInDialog />
    </v-card>
    
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
.home-card {
  width: 55%;
  margin: 5% auto;
}
</style>

