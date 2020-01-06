<template>
  <div class="home">
    <!--  Timer Component  -->
    <div id="timer" class="timer">
      <timer
        starttime="Jan 2, 2020 09:37:25"
        endtime="Nov 8, 2020 16:37:25"
        trans='{  
            "day":"Days",
            "hours":"Hours",
            "minutes":"Minutes",
            "seconds":"Seconds",
            "expired":"Promo has been expired.",
            "running":"🎅 Till the end of promo.",
            "upcoming":"Till start of promo.",
            "status": {
                "expired":"Expired",
                "running":"Running",
                "upcoming":"Future"
              }}'
      ></timer>
    </div>
    <!--  End! Timer Component  -->
    <start></start>
    <categories></categories>
    <sptb :categories="categories"></sptb>
    <sptbWhite :ads="productListings"></sptbWhite>
    <sptb_pattern :ads="productListings"></sptb_pattern>
    <total_sellers class="mobile-hidden"></total_sellers>
    <testimonial class="mobile-hidden"></testimonial>
    <recent_post :comments="productListings" class="mobile-hidden"></recent_post>
    <BNav class="hidden-lg-up"></BNav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import timer from "@/components/countdownTimer";
import start from "@/components/home/Start";
import categories from "@/components/home/Categories";
import sptb from "@/components/home/SPTB";
import sptbWhite from "@/components/home/SPTB-White";
import sptb_pattern from "@/components/home/SPTB-Pattern";
import total_sellers from "@/components/home/TotalSellers";
import testimonial from "@/components/home/Testimonial";
import recent_post from "@/components/home/RecentPost";

//experimental...

import BNav from "@/components/BNav";

export default {
  name: "home",
  components: {
    timer,
    start,
    categories,
    sptb,
    sptbWhite,
    sptb_pattern,
    total_sellers,
    testimonial,
    recent_post,
    BNav
  },

  computed: {
    ...mapGetters("product", ["categories", "productListings"])
  },
  methods: {
    ...mapActions("product", ["fetchAllCategories", "fetchAllProducts"]),
    sync() {
      // console.log("Jquery mounted");
    },
    onWindowLoad() {
      window.location.reload();
    }
  },
  watch: {
    $route: "sync"
  },
  created() {
    this.sync();
    this.$forceUpdate();
    this.fetchAllCategories();
    this.fetchAllProducts();
  },
  beforeCreate() {
    // console.log("this is before created");
  },
  beforeMount() {
    // console.log("this is before mounted");
  },
  mounted() {
    if (localStorage.getItem("reloader") === 1) {
      // localStorage.removeItem("reloader")
      location.reload();
    } else if (localStorage.getItem("reloader") === 0) {
      // localStorage.setItem("reloader", "0")
      // location.reload();
    }
  }
};
</script>

<style>
@media (min-width: 992px) {
  .hidden-lg-up {
    display: none !important;
  }
}
.mobile-hidden {
  display: none;
}
.hidden-desktop {
  display: block;
}

@media (min-width: 769px) {
  .mobile-hidden {
    display: block;
  }
  .hidden-desktop {
    display: none !important;
  }
}
</style>
