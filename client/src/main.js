import Vue from "vue";
import App from "./App.vue";
import router from "./Router";
import Vuetify from "vuetify";

Vue.use(Vuetify);

import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
