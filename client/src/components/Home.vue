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
import LogInModal from "../components/Modals/LogInModal"
import RegistrationModal from "../components/Modals/RegistrationModal"

export default {
  name: "Home",
  components: {
    LogInModal,
    RegistrationModal
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

