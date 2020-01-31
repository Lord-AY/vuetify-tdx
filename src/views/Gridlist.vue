<template>
  <div>
    <div id="global-loader" v-show="isLoading">
      <GridListLoader
        class="mobile-hidden"
      ></GridListLoader>
    </div>
    <div class="gridlist">
      <!-- <Loading :active.sync="isLoading" :is-full-page="fullPage"></Loading> -->
      <div class="main-content-area clearfix">
        <section
          class="section-padding gray page-search"
          style="padding: 8px 0px!important;"
        >
          <div class="container">
            <div class="value-added-services-row row mobile-hidden">
              <div
                class="col-md-2 col-sm-4 col-xs-4"
                style="padding-left: 0px; "
              >
                <a href="#">
                  <div class="d-flex value-added">
                    <div class="outline1">
                      <div class="outline2">
                        <div
                          class="icon-bg-service"
                          style="background-color:#5E57BF; border-radius:16%;"
                        >
                          <span class="icon-service1 text-primary">
                            <i
                              class="fa fa-mobile fa-5x"
                              style="color: #fff !important; font-size: 35px;"
                            ></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="ml-4 mt-1">
                      <h3 class="mb-0 mt-3 font-weight-bold value-added-tx">
                        Airtime / Data
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div
                class="col-md-2 col-sm-4 col-xs-4"
                style="padding-left: 0px; "
              >
                <a href="#">
                  <div class="d-flex value-added">
                    <div
                      class="icon-bg-service"
                      style="background-color:#579CDF; border-radius:16%;"
                    >
                      <span class="icon-service1 text-warning">
                        <i
                          class="fa fa-television"
                          style="color: #fff !important; font-size: 25px; margin-left: 3px;"
                        ></i>
                      </span>
                    </div>
                    <div class="ml-4 mt-1">
                      <h3 class="mb-0 mt-3 font-weight-bold value-added-tx">
                        Cable TV
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div
                class="col-md-2 col-sm-4 col-xs-4"
                style="padding-left: 0px; "
              >
                <a href="#">
                  <div class="d-flex value-added">
                    <div
                      class="icon-bg-service"
                      style="background-color:#4BAD4C; border-radius:16%;"
                    >
                      <span class="icon-service1 text-secondary">
                        <i
                          class="fa fa-bolt"
                          style="color: #fff !important; font-size: 25px;"
                        ></i>
                      </span>
                    </div>
                    <div class="ml-4 mt-1">
                      <h3 class="mb-0 mt-3 font-weight-bold value-added-tx">
                        Electricity
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div
                class="col-md-2 col-sm-4 col-xs-4"
                style="padding-left: 0px; "
              >
                <a href="#">
                  <div class="d-flex value-added">
                    <div
                      class="icon-bg-service"
                      style="background-color:#CB8A47; border-radius:16%;"
                    >
                      <span class="icon-service1 text-primary">
                        <i
                          class="fa fa-plane fa-3x"
                          style="color: #fff !important; font-size: 21px;"
                        ></i>
                      </span>
                    </div>
                    <div class="mt-1">
                      <h3 class="mb-0 mt-3 font-weight-bold value-added-tx">
                        Flight
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div
                class="col-md-2 col-sm-4 col-xs-4"
                style="padding-left: 0px; "
              >
                <a href="#">
                  <div class="d-flex value-added">
                    <div
                      class="icon-bg-service"
                      style="background-color:#31B19B; border-radius:16%;"
                    >
                      <span class="icon-service1 text-warning">
                        <i
                          class="fa fa-bed"
                          style="color: #fff !important; font-size: 21px;"
                        ></i>
                      </span>
                    </div>
                    <div class="mt-1">
                      <h3 class="mb-0 mt-3 font-weight-bold value-added-tx">
                        Hotel
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div
                class="col-md-2 col-sm-4 col-xs-4"
                style="padding-left: 0px; padding-right: 0px; "
              >
                <router-link to="/listbillers">
                  <div class="d-flex value-added">
                    <div
                      class="icon-bg-service"
                      style="background-color:#1C1E23; border-radius:16%;"
                    >
                      <span class="icon-service1 text-warning">
                        <i
                          class="fa fa-ellipsis-h"
                          style="color: #fff !important; font-size: 28px;"
                        ></i>
                      </span>
                    </div>
                    <div class="ml-4 mt-1">
                      <h3 class="mb-0 mt-3 font-weight-bold value-added-tx">
                        More Services
                      </h3>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <!-- <hr /> -->
            <hotsellers
              class="mobile-hidden"
              :hotsellers="getHotSellers"
            ></hotsellers>
            <!-- Row -->
            <div class="row">
              <div class="col-md-3 col-sm-12 col-xs-12">
                <gsidebar :categories="categories"></gsidebar>
              </div>
              <div class="col-md-9 col-lg-9 col-xs-12">
                <ptoggler
                  :current-comp="currentComp"
                  :ads="paginatedProducts"
                  @selectedFilter="chooseFilter"
                ></ptoggler>
                <paginatedGrid
                  :is="currentComp"
                  :data="paginatedProducts"
                  :loading="isLoading"
                  @pagechanged="onPageChange"
                />
              </div>
            </div>

            <!-- <component :is="currentComp" :products="productListings"></component> -->
            <!-- <gridprops></gridprops> -->
            <!-- <listprops
            :data="paginatedProducts"
            :total-pages="Math.ceil(paginatedProducts.length / 9)"
            :total="paginatedProducts.length"
            :per-page="10"
            :current-page="currentPage"
            @pagechanged="onPageChange"></listprops> -->
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/bcustom.css");
require("../../public/assets/plugins/select2/select2.min.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css");

// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/bstyle4d.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css");
// require("../../public/assets/css/imported/style4d2c.css");
// require("../../public/assets/css/iocustom.css");
import hotsellers from "@/components/product_overview/hotsellers";
import gsidebar from "@/components/product_overview/gridSidebar";
import paginatedGrid from "@/components/product_overview/paginatedgrid";
import listprops from "@/components/listPaginated";
import ptoggler from "@/components/product_overview/ptoggler";
import { mapActions, mapGetters } from "vuex";
import { bus } from "../main.js";
import Loading from "vue-loading-overlay";
import GridListLoader from "@/components/loaders/Homeloader";
export default {
  name: "gridlist",
  data() {
    return {
      currentComp: "paginatedGrid",
      currentPage: 1,
      isLoading: false,
      fullPage: true,
      prevRoute: null
    };
  },
  computed: {
    ...mapGetters("product", [
      "paginatedProducts",
      "getSuccess",
      "getErrors",
      "getHotSellers",
      "categories"
    ]),
    ...mapGetters("auth", ["loading"]),
  },
  components: {
    gsidebar: gsidebar,
    hotsellers: hotsellers,
    paginatedGrid: paginatedGrid,
    listprops: listprops,
    ptoggler: ptoggler,
    GridListLoader,
    Loading
  },
  methods: {
    ...mapActions("product", ["fetchAllProducts", "fetchHotSellers"]),
    sync() {},
    onPageChange(page) {
      this.currentPage = page;
    },
    showError() {
      this.$notify({
        group: "errors",
        type: "error",
        title: "Error Fetching Ads",
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
    },
    chooseFilter(payload) {
      console.log(payload);
      if (payload.type == 2) {
        this.newestTooldest(payload.data);
      } else if (payload.type == 3) {
        this.alphabeticallyAtoZ(payload.data);
      } else if (payload.type == 4) {
        this.alphabeticallyZtoA(payload.data);
      } else if (payload.type == 5) {
        this.highestTolowestPrice(payload.data);
      } else if (payload.type == 6) {
        this.lowestTohighestPrice(payload.data);
      } else {
        console.log("return normal list");
      }
    },
    alphabeticallyZtoA(array) {
      let res = array.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      this.paginatedProducts = res;
    },
    alphabeticallyAtoZ(array) {
      let res = array.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textB < textA ? -1 : textB > textA ? 1 : 0;
      });
      console.log(res);
    },
    newestTooldest(array) {
      let res = array.sort(function(a, b) {
        var c = new Date(a.createdAt);
        var d = new Date(b.createdAt);
        return d - c;
      });
      console.log(res);
    },
    oldestToNewest(array) {
      let res = array.sort(function(a, b) {
        var c = new Date(a.createdAt);
        var d = new Date(b.createdAt);
        return c - d;
      });
      console.log(res);
    },
    highestTolowestPrice(array) {
      let res = array.sort(function(a, b) {
        return parseFloat(a.amount) - parseFloat(b.amount);
      });
      console.log(res);
    },
    lowestTohighestPrice(array) {
      let res = array.sort(function(a, b) {
        return parseFloat(b.amount) - parseFloat(a.amount);
      });
      console.log(res);
    },
    filterByCategory(array, value) {
      var filtered = [];
      for (var i = 0; i < array.length; i++) {
        if (array[i].cid == value) {
          filtered.push(array[i]);
        }
      }
      console.log(filtered);
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
    },
    paginatedProducts: {
      handler: function(products) {
        this.isLoading = true;
        let as = this;
        setTimeout(function() {
          as.isLoading = false;
        }, 1000);
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
      handler: () => {
        this.showSuccess();
      }
    }
  },
  created() {
    // this.$forceUpdate();
    bus.$on("switchComp", comp => {
      this.currentComp = comp;
    });
    this.sync();
    this.fetchAllProducts();
    this.fetchHotSellers();
    this.filterByCategory(this.paginatedProducts, 1);
    // console.log(this.getHotSellers);
    // vm.$forceUpdate();
  },
  beforeCreate() {
    // console.log("this is before created");
  },
  beforeMount() {
    // console.log("this is before mounted");
  }
  // mounted() {
  //   // console.log("this route just got mounted");
  //   // this.$forceUpdate();
  //   if (localStorage.getItem('reloaded')) {
  //       // The page was just reloaded. Clear the value from local storage
  //       // so that it will reload the next time this page is visited.
  //       localStorage.removeItem('reloaded');
  //   } else {
  //       // Set a flag so that we know not to reload the page twice.
  //       localStorage.setItem('reloaded', '1');
  //       location.reload();
  //   }
  //   this.sync();
  // },
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

<style>
.ml-4,
.mx-4 {
  margin-left: 0.625rem !important;
}

.mt-3 {
  margin-top: 0.46875rem !important;
}

/* i.list {
  border-color: green!important;
  color: green!important;
}

i.switch[disabled="disabled"] {
    color: lightgray;
    border-color: lightgray;
} */

.visible-xs-block {
  display: none !important;
}

.value-added-tx {
  font-size: 1.5rem !important;
  font-weight: normal !important;
}
.value-added-tx:hover {
  color: #4caf50 !important;
}

.category-grid-box-tx .image img {
  width: 8rem !important;
  height: 8rem !important;
  margin-top: 20px;
}

.short-features {
  max-width: 100%;
}
@media (max-width: 992px) {
  .short-features {
    max-width: 100%;
  }
}
.button-griddy > a,
.button-griddy > a:hover {
  color: #fff;
  border-radius: 0px;
}
.custom-select {
  height: 4.6rem;
  margin-right: 4px 0px;
  border-right: 4px;
  font-size: 12px;
}
.horizontalMenu-list input.main-search {
  position: relative;
  height: 50px !important;
  padding-left: 30px;
}

html {
  font-size: 10px;
}

.ad-meta:first-child a {
  margin-right: 10px;
}
</style>
<style scoped>
@media only screen and (max-width: 991px) {
  .horizontal-header .smllogo {
    position: relative !important;
    top: -20px !important;
  }
}
a {
  color: #fff;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #23527c;
  text-decoration: underline;
}
a:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
figure {
  margin: 0;
}
img {
  vertical-align: middle;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

input,
button,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.red-title:hover {
  background-color: rgb(43, 124, 46) !important;
}

.select2 .select2-container .select2-container--default {
  width: 160px !important;
}
</style>
