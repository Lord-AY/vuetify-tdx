import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { sync } from "vuex-router-sync";
import Notifications from "vue-notification";
import firebase from "firebase";
import Clipboard from 'v-clipboard'
require("firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyDHL1CoDv-fQc_uEGuiVXEbTKPRYh65K7w",
    authDomain: "tradex-chat.firebaseapp.com",
    databaseURL: "https://tradex-chat.firebaseio.com",
    projectId: "tradex-chat",
    storageBucket: "tradex-chat.appspot.com",
    messagingSenderId: "589334644454",
    appId: "1:589334644454:web:3185d38221822872031d27",
    measurementId: "G-HXV1P1K4DJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var chatDb = firebase.firestore();
  chatDb.settings({
  });
  window.chatDb = chatDb;
// import velocity from "velocity-animate";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
Vue.config.productionTip = false;
Vue.use(Notifications);
Vue.use(Clipboard)
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
