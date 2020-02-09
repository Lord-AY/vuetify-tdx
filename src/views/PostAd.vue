<template>
  <div>
    <postad
      :categories="categories"
      :ads="ads"
      :images="selectedImages"
      @create-ads="createAds"
      :items="items"
      :itemExists="itemsExists"
      :loading="loading"
      :dbErrors="getErrors"
      :success="getSuccess"
      :subcategories="subcategories"
    ></postad>
  </div>
</template>
<script>
require("../../public/assets/plugins/bootstrap-4.3.1-dist/css/bootstrap.min.css");
require("../../public/assets/css/style.css");
require("../../public/assets/css/icons.css");
require("../../public/assets/plugins/horizontal-menu/horizontal.css");
require("../../public/assets/plugins/select2/select2.min.css");
require("../../public/assets/plugins/cookie/cookie.css");
// require("../../public/assets/plugins/owl-carousel/owl.carousel.css");
require("../../public/assets/plugins/scroll-bar/jquery.mCustomScrollbar.css");
require("../../public/assets/skins/color-skins/color15.css");
require("../../public/assets/css/flaticon24d2c.css");
// require("../../public/assets/plugins/slick-1.8.1/slick-1.8.1/slick/slick.css");
// require("../../public/assets/plugins/slick-1.8.1/slick-1.8.1/slick/slick-theme.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/footerSpecial.css");
require("../../public/assets/plugins/fancyuploder/fancy_fileupload.css");

import postad from "@/components/product_overview/postad";
import { mapState, mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "postads",
  data() {
    return {
      selectedImages: [],
      items: [],
      itemsExists: false,
      ads: {
        cid: "",
        uid: "",
        name: "",
        photos: "",
        videos: [],
        region: "",
        currency: "Naira",
        creator: "",
        price: null,
        amount: null,
        negotiable: false,
        address:  "",
        subcategory: null,
        featured: false,
        tradexplorer: true,
<<<<<<< HEAD
        adtype: null,
=======
        adType: null,
>>>>>>> 2c1b171439813ed2f79983c677640c208431dab8
        paymentype: 1,
        approved: true,
        published: true,
        description: "",
        keywords: [],
        canExchange: false,
        inputFields:{},
        checkFields:{},
      }
    };
  },
  components: {
    postad
  },
  computed: {
    ...mapState("product", ["categories"]),
    ...mapGetters("product", ["getErrors", "getSuccess", "subcategories"]),
    ...mapGetters("auth", ["loading", "getUser"])
  },
  methods: {
    ...mapActions("product", ["createProduct", "fetchSubCategories"]),
    sync() {
      // console.log("Jquert Mounted");
    },
    createAds(e) {
      // create payload
      // console.log("event emitted");
      const payload = {
        product: this.ads
      };
      // add image to payload
      payload.product.photos = e.toString();
    },
    async fetchCountries() {
      const res = await axios.get("https://restcountries.eu/rest/v2/all");
      this.items = res.data;
      // console.log(res.data);
    },
    watchCountries() {
      const countries = this.items;
      // checking if its an array and its not empty
      if (Array.isArray(countries) && countries.length) {
        this.itemsExists = true;
        // console.log(this.items);
      } else {
        this.itemsExists = false;
        // console.log(this.items);
      }
    }
  },
  watch: {
    $route: "sync"
  },
  mounted() {
    this.fetchCountries();
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
  },
  created() {
    this.sync();
    this.watchCountries();
    this.ads.address = this.getUser.address;
    // console.log(this.getUser.address);
    // console.log(!!this.itemsExists);
  }
};
</script>

<style></style>
