import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { sync } from "vuex-router-sync";
import Notifications from "vue-notification";
import firebase from "firebase";
import Clipboard from 'v-clipboard';
import VueChatScroll from 'vue-chat-scroll';
import Vue2Filters from 'vue2-filters';
import ScrollLoader from 'vue-scroll-loader'
import underscore from 'vue-underscore';
import infiniteScroll from "vue-infinite-scroll";
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';
require("firebase/firestore");
var SocialSharing = require('vue-social-sharing');

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
// install components and use imports
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(Notifications);
Vue.use(Clipboard);
Vue.use(SocialSharing);
Vue.use(VueChatScroll);
Vue.use(Vue2Filters);
Vue.use(ScrollLoader);
Vue.use(underscore);
Vue.use(infiniteScroll);

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
