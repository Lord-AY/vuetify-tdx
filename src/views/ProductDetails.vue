<template>
  <div>
     <div id="global-loader" v-show="loading">
      <ProductDetailsLoader
        class="mobile-hidden"
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
        :photos="productWithSeller.photos"
      >
      </productdetails>
    </div>
  </div>
</template>
<script>
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/bcustom.css");
require("../../public/assets/css/imported/style4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/jquery-confirm4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/line-awesome.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/slider4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/js/slide4d2c.js?ver=5.2.4");

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
      // console.log("got to single category");
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
    // fetch single product for view
    this.getSingleProduct();
    this.getProductSeller();
    this.getSimilarProducts();
    this.getSingleProductComment();
    this.singleCategory();
  },
  beforeCreate() {
  },
  beforeMount() {
    this.isLoading = true;
  },  
  mounted() {
  },

};
</script>
<style scoped>
</style>
