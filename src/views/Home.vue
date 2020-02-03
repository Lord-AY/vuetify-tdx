<template>
  <div>
     <div id="global-loader">
      <HomeLoader
        class="mobile-hidden"
        v-show="$route.name == 'home'"
      ></HomeLoader>
    </div>
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
const formatCurrency = require('format-currency');

import HomeLoader from "@/components/loaders/Homeloader";
export default {
  name: "home",
  data() {
    return {
      isLoading: true,
      renderKey: 0,
      productRender: 0,
      userWalletHistory: [],
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
    ...mapGetters("wallet", ["getwalletData"]),
  },
  methods: {
    ...mapActions("product", [
      "fetchAllCategories",
      "fetchAllProducts",
      "fetchAllComments"
    ]),
    ...mapActions("wallet", [
      "createUserwallet", 
      "FetchUserwallet", 
      "paymentStepOne", 
      "FetchUserwalletHistory"
    ]),
    forceRerender() {
      this.renderKey += 1;
      this.productRender += 1;
      // console.log();
    },
    sync() {
      // console.log("Jquery mounted");
    },
    formatCurrency(data){
      return formatCurrency(data)
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
    async loadfunc(){
      await this.fetchAllProducts().then(data => {
        this.fetchAllComments();
      }).catch(function (error) {
        // console.log(error)
      })
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
    },
    getwalletData: {
      handler: function(walletData) {
        if (walletData == null) {
          this.isLoading = true;
          this.createUserwallet(this.getUser.id)
          this.userWallet = this.getwalletData.walletid;
          // console.log(this.getwalletData);
          // console.log("wallet changed");
        }else{
          this.userWallet = this.getwalletData.walletid;
          this.isLoading = false;
          // console.log(walletData);
        }
      }
    },
  },
  created() {
    this.sync();
    this.$forceUpdate();
    this.fetchAllCategories();
    // this.fetchAllProducts();
    this.loadfunc();   
    if(this.getUser !== null){
      this.FetchUserwalletHistory(this.getUser.id).then(data => {
          // console.log(this.getwalletData);
          this.userWalletHistory.push(this.getwalletHistory);
          // this.mybal = this.userWalletHistory[this.userWalletHistory.length-1]
          // console.log(this.mybal);
      }); 
    }
    var walletBalance = formatCurrency(this.userWalletHistory[this.userWalletHistory.length -1])
    localStorage.setItem("walletBalance", walletBalance);
  },
  beforeCreate() {
    // console.log("this is before created");
  },
  beforeMount() {
    // console.log("this is before mounted");
  },
  mounted() {
    // console.log("this route just got mounted");
    // this.$forceUpdate();
    if (localStorage.getItem('reloaded')) {
          // The page was just reloaded. Clear the value from local storage
          // so that it will reload the next time this page is visited.
          localStorage.removeItem('reloaded');
      } else {
          // Set a flag so that we know not to reload the page twice.
          localStorage.setItem('reloaded', '1');
          location.reload();
      }
    this.sync();
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     if (localStorage.getItem('reloaded')) {
  //         // The page was just reloaded. Clear the value from local storage
  //         // so that it will reload the next time this page is visited.
  //         localStorage.removeItem('reloaded');
  //     } else {
  //         // Set a flag so that we know not to reload the page twice.
  //         localStorage.setItem('reloaded', '1');
  //         location.reload();
  //     }
  //   })
  // },
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
