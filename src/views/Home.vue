<template> 
  <div>
    <div id="global-loader" v-show="isLoading">
      <HomeLoader class="mobile-hidden"></HomeLoader>
    </div>
    <div class="home">
      <start :isLoading="isLoading" @stop="stopLoader"></start>
      <categories></categories>
      <sptb :categories="categories" :ads="productListings"></sptb>
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
const formatCurrency = require("format-currency");

// import HomeLoader from "@/components/loaders/Homeloader";
export default {
  name: "home",
  data() {
    return {
      isLoading: true,
      renderKey: 0,
      productRender: 0,
      userWalletHistory: []
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
      "comments",
      "paginatedProducts"
    ]),
    ...mapGetters("auth", ["loading", "errors", "getUser"]),
    ...mapGetters("transactions", ["getwalletData", "getwalletHistory"])
  },
  methods: {
    ...mapActions("product", [
      "fetchAllCategories",
      "fetchAllProducts",
      "fetchAllComments"
    ]),
    ...mapActions("user", ["fetchDashboardDetails"]),
    ...mapActions("transactions", [
      "createUserwallet",
      "FetchUserwallet",
      "paymentStepOne",
      "FetchUserwalletHistory"
    ]),
    stopLoader(){
      // console.log("function emitted");
      this.isLoading = false;
    },
    forceRerender() {
      this.renderKey += 1;
      this.productRender += 1;
      // console.log();
    },
    sync() {
      // console.log("Jquery mounted");
    },
    formatCurrency(data) {
      return formatCurrency(data);
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
    },
    async loadfunc() {
      await this.fetchAllProducts()
        .then(data => {
          this.fetchAllComments();
        })
        .catch(function(error) {
        });
    }
  },
  watch: {
    $route: "sync",
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
    },
    getwalletData: {
      handler: function(walletData) {
        if (walletData == null) {
          // this.isLoading = true;
          this.createUserwallet(this.getUser.id);
          this.userWallet = this.getwalletData.walletid;
        } else {
          this.userWallet = this.getwalletData.walletid;
        }
      }
    }
  },
  created() {
    this.sync();
    this.$forceUpdate();
    this.fetchAllProducts();
    this.loadfunc();
  },
  beforeCreate() {
    
  },
  beforeMount() {
    this.isLoading = true;
     if (this.getUser !== null) {
      if(this.productListings != null){
        this.fetchDashboardDetails();
        this.FetchUserwalletHistory(this.getUser.id);
        this.FetchUserwallet(this.getUser.id);
      }
    }
  },
  mounted() {
    this.sync();
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
