import component from '../public/assets/plugins/slick-1.8.1/slick-1.8.1/component.json';
<template>
  <div id="app">
    <!--Loader-->
    <div id="global-loader">
      <Homeloader
        class="mobile-hidden"
        v-show="$route.name == 'home'"
      ></Homeloader>
      <HomeMobileLoader v-show="$route.name == 'home'"></HomeMobileLoader>
      <GridListLoader
        class="mobile-hidden"
        v-show="$route.name == 'gridlist'"
      ></GridListLoader>
    </div>
    <div v-if="$route.meta.header === 1"><topbar></topbar></div>
    <div v-else-if="$route.meta.header === 3"><topbar2></topbar2></div>
    <div v-else-if="$route.meta.header === 4"><topbar2></topbar2></div>
    <!-- <topbar></topbar> -->
    <transition name="page-animation">
      <div class="tdx-main-view">
        <router-view />
      </div>
    </transition>
    <div v-if="$route.meta.header === 1"><Footer></Footer></div>
    <div v-if="$route.meta.header === 3"><Footer></Footer></div>
    <div v-if="$route.meta.header === 4"><Footer></Footer></div>
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
    <a href="#top" id="back-to-top"><i class="fa fa-rocket"></i></a>
  </div>
</template>

<style></style>
<script>
// require("@/assets/plugins/select2/select2.min.css");
/* eslint-disable no-undef*/

import topbar from "@/components/Topbar";
import topbar2 from "@/components/Topbar2";
import Footer from "@/components/Footer";
import Homeloader from "@/components/loaders/Homeloader";
import HomeMobileLoader from "@/components/loaders/HomeMbLoader";
import GridListLoader from "@/components/loaders/GridlistLoader";
// import BNav from "@/components/BNav";
export default {
  components: {
    topbar,
    topbar2,
    // BNav,
    Footer,
    Homeloader,
    HomeMobileLoader,
    GridListLoader
  },
  methods: {
    sync() {
      $(document).ready(() => {
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
  created() {
    this.sync();
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
.page-animation {
  &-enter-active {
    animation: coming 1s;
    animation-delay: 0.5s;
    opacity: 0;
  }
  &-leave-active {
    animation: leaving 1s;
  }
}
@keyframes coming {
  from {
    tramsform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes leaving {
  from {
    tramsform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
</style>
