<template>
  <div>
    <h2 class="page-header">Welcome to Call On Me</h2>
    <div class="actions">
      <RegistrationModal />
      <LogInModal />
    </div>
  </div>
</template>

<script>
import RegistrationModal from "../components/Modals/RegistrationModal"
import LogInModal from "../components/Modals/LogInModal"

export default {
  name: "Home",
  components: {
    RegistrationModal,
    LogInModal,
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

