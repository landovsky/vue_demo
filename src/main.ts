import Vue from "vue";
import Vuex from "vuex"
import App from "./App.vue";
import router from "./router";
import store from "@/services/Store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
