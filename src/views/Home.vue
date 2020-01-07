<template>
  <div>
    <HomeLoader v-if="isLoading"></HomeLoader>
    <div class="home" v-if="!isLoading">
      
      <start></start>
      <categories></categories>
      <sptb :categories="categories"></sptb>
      <sptbWhite :ads="productListings"></sptbWhite>
      <sptb_pattern :ads="productListings"></sptb_pattern>
      <total_sellers class="mobile-hidden"></total_sellers>
      <testimonial class="mobile-hidden"></testimonial>
      <recent_post :comments="comments" class="mobile-hidden"></recent_post>
      <BNav class="hidden-lg-up"></BNav>
    </div>
  </div>
</template>

<script>
require("../../public/assets/css/iocustom.css");
import { mapActions, mapGetters } from "vuex";

// import timer from "@/components/countdownTimer";
import start from "@/components/home/Start";
import categories from "@/components/home/Categories";
import sptb from "@/components/home/SPTB";
import sptbWhite from "@/components/home/SPTB-White";
import sptb_pattern from "@/components/home/SPTB-Pattern";
import total_sellers from "@/components/home/TotalSellers";
import testimonial from "@/components/home/Testimonial";
import recent_post from "@/components/home/RecentPost";
import HomeLoader from "@/components/loaders/Homeloader";
//experimental...

import BNav from "@/components/BNav";

export default {
  name: "home",
  data() {
    return {
      isLoading: true
    };
  },
  components: {
    // timer,
    start,
    categories,
    sptb,
    sptbWhite,
    sptb_pattern,
    total_sellers,
    testimonial,
    recent_post,
    BNav,
    HomeLoader
  },

  computed: {
    ...mapGetters("product", [
      "categories",
      "productListings",
      "getErrors",
      "getSuccess",
      "comments"
    ]),
    ...mapGetters("auth", ["loading"])
  },
  methods: {
    ...mapActions("product", [
      "fetchAllCategories",
      "fetchAllProducts",
      "fetchAllComments"
    ]),
    sync() {
      // console.log("Jquery mounted");
    },
    onWindowLoad() {
      window.location.reload();
    },
    showError() {
      this.$notify({
        group: "errors",
        type: "error",
        title: "Error Fetching Products",
        width: "100%",
        text: this.getErrors,
        classes: "error",
        duration: 10000,
        speed: 1000,
        position: "top right"
      });
    },
    showSuccess() {
      this.$notify({
        group: "notify",
        type: "success",
        title: "Success",
        text: this.getSuccess,
        position: "top right",
        duration: 10000,
        speed: 1000
      });
    }
  },
  watch: {
    $route: "sync",
    loading: {
      handler: function(loading) {
        if (loading) {
          this.isLoading = true;
          console.log(this.isLoading);
        }
        this.isLoading = false;
        console.log(this.isLoading);
      }
    },
    getErrors: {
      handler: function(errors) {
        if (errors === null || errors === undefined) {
          return;
        }
        this.showError();
      }
    },
    getSuccess: {
      handler: success => {
        if (success === null || success === undefined) {
          return;
        }
        this.showSuccess();
      }
    }
  },
  created() {
    this.sync();
    this.$forceUpdate();
    this.fetchAllCategories();
    this.fetchAllProducts();
    this.fetchAllComments();
    console.log(this.comments);
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
