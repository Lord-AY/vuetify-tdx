<template>
  <div>
     <div id="global-loader">
      <ProductDetailsLoader
        class="mobile-hidden"
        v-show="$route.name == 'home'"
      ></ProductDetailsLoader>
    </div>
    <div class="pdetails">
    <!-- <Loading :active.sync="isLoading" :is-full-page="fullPage"></Loading> -->
      <productdetails
        :product="productWithSeller"
        :similarprods="getSimilarProds"
        :getUser="getUser"
        :productcomment="ProductsComment"
        :fsingleCategory="getSingleCategory"
      >
      </productdetails>
    </div>
  </div>
</template>
<script>
// require("../../public/assets/skins/color-skins/color15.css");
// require("../../public/assets/plugins/horizontal-menu/horizontal.css");
// require("../../public/assets/carspot-css/wp-includes/css/dist/block-library/style.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/stylea1ec.css");
// require("../../public/assets/carspot-css/wp-content/plugins/contact-form-7/includes/css/styles58e0.css");
// require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
// require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreenf43b.css");
// require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet-search.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/style4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/video_player4d2c.css");

// require("../../public/assets/plugins/bootstrap-4.3.1-dist/css/bootstrap.min.css");
// require("../../public/assets/css/style.css");
// require("../../public/assets/css/icons.css");
// require("../../public/assets/plugins/horizontal-menu/horizontal.css");
// require("../../public/assets/plugins/select2/select2.min.css");
// require("../../public/assets/plugins/cookie/cookie.css");
// require("../../public/assets/plugins/owl-carousel/owl.carousel.css");
// require("../../public/assets/plugins/scroll-bar/jquery.mCustomScrollbar.css");
// require("../../public/assets/skins/color-skins/color15.css");
// require("../../public/assets/css/flaticon24d2c.css");
// require("../../public/assets/plugins/slick-1.8.1/slick-1.8.1/slick/slick.css");
// require("../../public/assets/plugins/slick-1.8.1/slick-1.8.1/slick/slick-theme.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/footerSpecial.css");
// require("../../public/assets/plugins/fancyuploder/fancy_fileupload.css");

// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/star-rating4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/bcustom.css");
require("../../public/assets/css/imported/style4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/bstyle4d.css");

require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/jquery-confirm4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/datepicker.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/et-line-fonts4d2c.css");
// require("../../public/assets/carspot-css/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesome.min52c7.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/line-awesome.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/animate.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon24d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom_icons4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/select2.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/nouislider.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.carousel4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.theme4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/toastr.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/woocommerce4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/skins/minimal/minimal4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/jquery.fancybox.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/slider4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/js/slide4d2c.js?ver=5.2.4");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/carspot-menu4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/responsive-media4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css");
// require("../../public/assets/carspot-css/wp-content/plugins/add-to-any/addtoany.min9be6.css");

// require("../../public/assets/plugins/bootstrap-4.3.1-dist/css/bootstrap.min.css");

import productdetails from "@/components/product_overview/productdetails";
import { mapState, mapActions, mapGetters } from "vuex";
import ProductDetailsLoader from "@/components/loaders/productdetailsLoader"
// import Loading from "vue-loading-overlay";
export default {
  name: "productDetails",
  data() {
    return {
      product: {},
      isLoading: true,
      fullPage: true,
      prevRoute: null
    };
  },
  components: {
    productdetails,
    ProductDetailsLoader
    // Loading
  },
  computed: {
    ...mapState("product", ["products"]),
    ...mapGetters("product", [
      "singleProduct",
      "productWithSeller",
      "getSimilarProds",
      "ProductsComment",
      "getSingleCategory"
    ]),
    ...mapGetters("auth", ["loading", "getUser"])
  },
  methods: {
    ...mapActions("product", [
      "selectedProduct",
      "fetchSeller",
      "fetchSimilarProducts",
      "fetchCommentForProduct",
      "fetchSingleCategory"
    ]),
    sync() {
      // console.log("Jquery mounted");
      $("html,body").animate({ scrollTop: 0 }, "slow");
    },
    getSingleProduct() {
      this.isLoading = true;
      const payload = {
        id: this.$route.params.id
      };
      // console.log(payload);
      this.selectedProduct(payload);
    },
    singleCategory() {
      console.log("got to single category");
      this.isLoading = true;
      const payload = {
        cid: this.$route.params.cid
      };
      // console.log(payload);
      this.fetchSingleCategory(payload);
    },
    getSingleProductComment() {
      this.isLoading = true;
      const payload = {
        id: this.$route.params.id
      };
      // console.log(payload);
      this.fetchCommentForProduct(payload);
    },
    getProductSeller() {
      this.isLoading = true;
      const payload = {
        sellerId: this.$route.params.uid,
      };
      // console.log(payload);
      this.fetchSeller(payload);
    },
    getSimilarProducts() {
      this.isLoading = true;
      const payload = {
        cid: this.$route.params.cid,
        id: this.$route.params.id
      };
      this.fetchSimilarProducts(payload);
    }
  },
  watch: {
    $route: "sync",
    loading: {
      handler: function(loading) {
        if (loading) {
          this.isLoading = true;
        }
        this.isLoading = false;
      }
    }
  },
  created() {
    this.sync();
    this.$forceUpdate();
    // vm.$forceUpdate();
    // fetch single product for view
    this.getSingleProduct();
    this.getProductSeller();
    this.getSimilarProducts();
    this.getSingleProductComment();
    this.singleCategory();
    // console.log(this.singleProduct);
    // console.log(this.productWithSeller);
    // console.log(this.getSimilarProds);
    // console.log(this.ProductsComment);
  },
  beforeCreate() {
    // console.log("this is before created");
  },
  beforeMount() {
    // console.log("this is before mounted");
  },
  mounted() {
    // console.log("this route just got mounted");
    let extScript = document.createElement("script");
    extScript.setAttribute('src', '../../public/assets/js/vendors/jquery-3.2.1.min.js')
    extScript.setAttribute(
      "src",
      "../../public/assets/plugins/bootstrap-4.3.1-dist/js/bootstrap.min.js"
    );
    document.head.appendChild(extScript);
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
    // fetch single product for view
    // this.getSingleProduct();
    // // get similar products
    // this.getSimilarProducts();
    // this.getProductSeller();
  },
  // beforeRouteLeave: function(to, from, next) {
  //     if (this.prevRoute.path === to.path) {
  //       this.$router.go(to.path);
  //     }
  //     next()
  // },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.prevRoute = from
  //   })
  // },
};
</script>
<style scoped>
/*.tab-pane-tx a {
  background: none !important;
  color: #9a9a9a !important;
  font-size: 16px;
}

.tab-pane-tx.active a {
   background: none!important; 
  color: #000 !important;
}
.tab-pane-tx.active {
  border-bottom: 3px solid #4caf50 !important;
  color: #000 !important;
  font-weight: 700;
}*/
</style>
