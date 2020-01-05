import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { sync } from "vuex-router-sync";
import Notifications from "vue-notification";
// import velocity from "velocity-animate";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
Vue.config.productionTip = false;
Vue.use(Notifications);
export const bus = new Vue();
sync(store, router);
new Vue({
  router,
  store,
  render: h => h(App)
  // watch: {
  //   $route(to) {
  //     if (to.currentRoute.meta.reload == true) {
  //       window.location.reload();
  //     }
  //   }
  // }
}).$mount("#app");
