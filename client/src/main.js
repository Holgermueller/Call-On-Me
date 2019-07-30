import Vue from "vue";
import App from "./App.vue";
import router from "./Router";
import Vuetify from "@/plugins/vuetify";
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false;

new Vue({
  router,
  Vuetify,
  render: h => h(App)
}).$mount("#app");
