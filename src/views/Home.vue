<template>
  <div>
    <div class="home" v-if="!isLoading">
      
      <start></start>
      <categories></categories>
      <sptb :categories="categories"></sptb>
      <sptbWhite :ads="productListings" :key="productRender"></sptbWhite>
      <sptb_pattern :ads="productListings"></sptb_pattern>
      <total_sellers class="mobile-hidden"></total_sellers>
      <testimonial class="mobile-hidden"></testimonial>
      <recent_post :comments="comments" class="mobile-hidden"></recent_post>
      <BNav class="hidden-lg-up"></BNav>
    </div>
  </div>
</template>

<script>
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/bstyle4d.css");
// require("../../public/assets/css/iocustom.css");



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
//experimental...
import BNav from "@/components/BNav";

export default {
  name: "home",
  data() {
    return {
      isLoading: true,
      renderKey: 0,
      productRender: 0
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
    BNav
  },

  computed: {
    ...mapGetters("product", [
      "categories",
      "productListings",
      "getErrors",
      "getSuccess",
      "comments"
    ]),
    ...mapGetters("auth", ["loading", "errors"])
  },
  methods: {
    ...mapActions("product", [
      "fetchAllCategories",
      "fetchAllProducts",
      "fetchAllComments"
    ]),
    forceRerender() {
      this.renderKey += 1;
      this.productRender += 1;
      // console.log();
    },
    sync() {
      // console.log("Jquery mounted");
    },
    onWindowLoad() {
      window.location.reload();
    },
    showError(error, title) {
      this.$notify({
        group: "errors",
        type: "error",
        title,
        width: "100%",
        text: error,
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
          // console.log(this.isLoading);
        }
        this.isLoading = false;
        // console.log(this.isLoading);
      }
    },
    getErrors: {
      handler: function(errors) {
        if (errors === null || errors === undefined) {
          return;
        }
        let title = "Getting Ads";
        this.showError(errors, title);
      }
    },
    errors: {
      handler: function(errors) {
        if (errors === null || errors === undefined) {
          return;
        }
        let title = "Logging Out Error";
        this.showError(errors, title);
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
    // console.log(this.comments);
  },
  beforeCreate() {
    // console.log("this is before created");
  },
  beforeMount() {
    // console.log("this is before mounted");
  },
  mounted() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
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
