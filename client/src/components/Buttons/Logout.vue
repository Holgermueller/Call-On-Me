<template>
  <div>
    <v-btn block @click="logout" color="blue">
      Log Out
      <span class="mdi mdi-logout"></span>
    </v-btn>
  </div>
</template>

<script>
import API from "../../utils/API";

export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      console.log("click");
    }
  }
};
</script>

