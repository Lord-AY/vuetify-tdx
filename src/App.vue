import component from '../public/assets/plugins/slick-1.8.1/slick-1.8.1/component.json';
<template>
  <div id="app">
    <!--Loader-->
    <!-- <topbar></topbar> -->
    <div v-if="$route.meta.header === 1" v-show="isloading"><topbar></topbar></div>
    <div v-else-if="$route.meta.header === 3" v-show="isloading"><topbar2></topbar2></div>
    <div v-else-if="$route.meta.header === 4" v-show="isloading"><topbar2></topbar2></div>
    <div v-else-if="$route.meta.header === 5" v-show="isloading" ><dashboardtopbar></dashboardtopbar></div>
    <!-- <topbar></topbar> -->
    <transition name="page-animation">
      <div class="tdx-main-view">
        <router-view />
      </div>
    </transition>
    <!-- <Footer></Footer> -->
    <div v-if="$route.meta.header === 1" v-show="isloading"><Footer></Footer></div>
    <div v-if="$route.meta.header === 3" v-show="isloading"><Footer></Footer></div>
    <div v-if="$route.meta.header === 4" v-show="isloading"><Footer></Footer></div>
    <notifications group="errors" :speed="500" />
    <notifications group="notify" :speed="500" />
    <!-- <div v-else-if="$route.meta.header === 3">I'm visible on home page two</div> -->
    <!-- <Footer></Footer> -->
    <!-- Mobile Bottom Bar -->
    <!-- <BNav
      v-if="
        $route.meta.header === 1 ||
          route.meta.header === 3 ||
          route.meta.header === 4
      "
      class="hidden-lg-up"
    ></BNav> -->
    <!-- /Mobile Bottom Bar -->
    <!-- Back to top -->
    <!-- <i href="#top" id="back-to-top"><i class="fa fa-rocket"></i></a> -->
  </div>
</template>

<style></style>
<script>
// require("@/assets/plugins/select2/select2.min.css");
/* eslint-disable no-undef*/

import topbar from "@/components/Topbar";
import dashboardtopbar from "@/components/dashboardtopbar";
// import topbar2 from "@/components/Topbar2";
import router from "@/router"
import Footer from "@/components/Footer";
// import BNav from "@/components/BNav";
// import Vue from "vue";
// Vue.forceUpdate();
export default {
  data(){
    return{
      isloading: false
    }
  },
  components: {
    topbar,
    // topbar2,
    // BNav,
    dashboardtopbar,
    Footer,
  },
  methods: {
    sync() {
      $(document).ready(() => {
        this.isloading = true;
        // ______________ Global Loader
        $(window).on("load", function() {

          $("#global-loader").fadeOut("slow");
        });
        // ______________ Back to Top
        $(window).on("scroll", function() {
          if ($(this).scrollTop() > 0) {
            $("#back-to-top").fadeIn("slow");
          } else {
            $("#back-to-top").fadeOut("slow");
          }
        });
        $("#back-to-top").on("click", function() {
          $("html, body").animate(
            {
              scrollTop: 0
            },
            600
          );
          return false;
        });
      });
    }
  },
  watch: {
    $route: "sync"
  },
  computed: {
     currentRouteName() {
        return this.$route.name;
        // return console.log(this.$route.name);
    }
  },
  created() {
    this.sync();
    // console.log(process.env.BASE_URL)
    // this.$forceUpdate();
  }
  // mounted(){
  //   localStorage.setItem("reloader", "0");
  // }
};
</script>
<style lang="scss">
@media (max-width: 991px) {
  .footer-main {
    padding-top: 0px !important;
    padding-bottom: 64px !important;
  }
  .no-show-footer-mobile {
    display: none !important;
  }
}
</style>
