<template>
  <div>
    <v-btn @click="logout" color="blue">
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
    logout: function() {
      console.log("click");
    }
  }
};
</script>

