<template>
  <div>
    <!--Start Section-->
    <!--  -->
    <!-- <Loading :active.sync="isLoading" :is-full-page="fullPage"></Loading> -->
    <Loading :active.sync="loading" :is-full-page="fullPage"></Loading>
    <div class="row">
      <div class="col-md-12 col-grid-tx">
        <div class="grid-style-2">
          <ContentLoader
            :height="300"
            :width="856"
            :speed="2"
            primaryColor="#bcbcbc"
            secondaryColor="#ecebeb"
            v-show="showLoader(products[0])"
          >
            <rect
              x="23.37"
              y="22.27"
              rx="0"
              ry="0"
              width="196.35"
              height="89.3"
            />
            <rect
              x="26.22"
              y="133.27"
              rx="0"
              ry="0"
              width="140.28"
              height="12.48"
            />
            <rect
              x="40.22"
              y="160.27"
              rx="0"
              ry="0"
              width="129.49"
              height="11.52"
            />
            <rect
              x="29.22"
              y="189.84"
              rx="0"
              ry="0"
              width="143.88"
              height="12.8"
            />
            <rect x="98.23" y="269.67" rx="0" ry="0" width="0" height="0" />
            <circle cx="46.14" cy="265.58" r="26.91" />
            <rect
              x="84.23"
              y="253.67"
              rx="0"
              ry="0"
              width="119.28"
              height="11.76"
            />
            <rect x="91.23" y="279.67" rx="0" ry="0" width="61" height="9" />
            <rect
              x="278.88"
              y="21.03"
              rx="0"
              ry="0"
              width="208.13"
              height="86.62"
            />
            <rect
              x="284.49"
              y="120.86"
              rx="0"
              ry="0"
              width="143.09"
              height="12.73"
            />
            <rect
              x="299.69"
              y="150.51"
              rx="0"
              ry="0"
              width="132.08"
              height="11.75"
            />
            <rect
              x="284.51"
              y="181.67"
              rx="0"
              ry="0"
              width="146.76"
              height="12.03"
            />
            <rect
              x="349.54"
              y="248.79"
              rx="0"
              ry="0"
              width="127.8"
              height="12.6"
            />
            <rect
              x="356.68"
              y="273.27"
              rx="0"
              ry="0"
              width="62.22"
              height="9.18"
            />
            <circle cx="309.67" cy="265.02" r="27.45" />
            <rect
              x="544.23"
              y="19.27"
              rx="0"
              ry="0"
              width="206.17"
              height="89.3"
            />
            <rect
              x="548.22"
              y="130.67"
              rx="0"
              ry="0"
              width="150.1"
              height="12.11"
            />
            <rect
              x="562.22"
              y="154.27"
              rx="0"
              ry="0"
              width="116.54"
              height="10.37"
            />
            <rect
              x="548.22"
              y="177.67"
              rx="0"
              ry="0"
              width="156.83"
              height="10.24"
            />
            <rect
              x="603.81"
              y="243.09"
              rx="0"
              ry="0"
              width="129.22"
              height="12.74"
            />
            <rect
              x="610.23"
              y="267.67"
              rx="0"
              ry="0"
              width="61"
              height="11.7"
            />
            <circle cx="565.14" cy="260.58" r="26.91" />
          </ContentLoader>
          <ContentLoader
            :height="300"
            :width="856"
            :speed="2"
            primaryColor="#bcbcbc"
            secondaryColor="#ecebeb"
            v-show="showLoader(products[0])"
          >
            <rect
              x="23.37"
              y="22.27"
              rx="0"
              ry="0"
              width="196.35"
              height="89.3"
            />
            <rect
              x="26.22"
              y="133.27"
              rx="0"
              ry="0"
              width="140.28"
              height="12.48"
            />
            <rect
              x="40.22"
              y="160.27"
              rx="0"
              ry="0"
              width="129.49"
              height="11.52"
            />
            <rect
              x="29.22"
              y="189.84"
              rx="0"
              ry="0"
              width="143.88"
              height="12.8"
            />
            <rect x="98.23" y="269.67" rx="0" ry="0" width="0" height="0" />
            <circle cx="46.14" cy="265.58" r="26.91" />
            <rect
              x="84.23"
              y="253.67"
              rx="0"
              ry="0"
              width="119.28"
              height="11.76"
            />
            <rect x="91.23" y="279.67" rx="0" ry="0" width="61" height="9" />
            <rect
              x="278.88"
              y="21.03"
              rx="0"
              ry="0"
              width="208.13"
              height="86.62"
            />
            <rect
              x="284.49"
              y="120.86"
              rx="0"
              ry="0"
              width="143.09"
              height="12.73"
            />
            <rect
              x="299.69"
              y="150.51"
              rx="0"
              ry="0"
              width="132.08"
              height="11.75"
            />
            <rect
              x="284.51"
              y="181.67"
              rx="0"
              ry="0"
              width="146.76"
              height="12.03"
            />
            <rect
              x="349.54"
              y="248.79"
              rx="0"
              ry="0"
              width="127.8"
              height="12.6"
            />
            <rect
              x="356.68"
              y="273.27"
              rx="0"
              ry="0"
              width="62.22"
              height="9.18"
            />
            <circle cx="309.67" cy="265.02" r="27.45" />
            <rect
              x="544.23"
              y="19.27"
              rx="0"
              ry="0"
              width="206.17"
              height="89.3"
            />
            <rect
              x="548.22"
              y="130.67"
              rx="0"
              ry="0"
              width="150.1"
              height="12.11"
            />
            <rect
              x="562.22"
              y="154.27"
              rx="0"
              ry="0"
              width="116.54"
              height="10.37"
            />
            <rect
              x="548.22"
              y="177.67"
              rx="0"
              ry="0"
              width="156.83"
              height="10.24"
            />
            <rect
              x="603.81"
              y="243.09"
              rx="0"
              ry="0"
              width="129.22"
              height="12.74"
            />
            <rect
              x="610.23"
              y="267.67"
              rx="0"
              ry="0"
              width="61"
              height="11.7"
            />
            <circle cx="565.14" cy="260.58" r="26.91" />
          </ContentLoader>
          <!-- {{ products}} -->
          <div v-if="list.length == 0">
            <div class="infinite-wrapper">
              <div
                class="posts-masonry"
                v-for="product in toggleLimit"
                :key="product.id"
                v-show="!showLoader(paginatedList)"
              >
                <div
                  class="col-md-3 col-lg-3 col-sm-6 col-xs-12 col-md-3-tx col-lg-3-tx col-sm-6-tx col-xs-12-tx"
                  id=".holder-1375"
                >
                  <div class="category-grid-box-1 sold-tx">
                    <!-- <div class="featured-ribbon"><span>Featured</span></div> -->
                    <div class="image">
                      <!-- <div class="arrow-ribbon bg-primary bg-sold bg-tag-tx">
                      Sold
                    </div> -->
                      <div class="hot-ribbon-tx">
                        <img
                          src="../../assets/images/brand/tradexplora_main_logo.png"
                        />
                      </div>
                      <!-- <div class="hot-ribbon">
                      <img src="../../assets/images/hoticonv2.png" />
                    </div> -->
                      <!-- <router-link
                        :to="
                          `productDetails/${product.id}/${product.cid}/${product.uid}`
                        "
                      >
 -->                      
                      <router-link
                            :to="{ path: '/productDetails', query: { id: product.id, cid: product.cid, uid:product.uid }}"
                      >

                        <img
                          :src="product.photos[0]"
                          :alt="product.name"
                          class="img-responsive"
                        />
                      </router-link>
                      <div class="price-tagg" id="price-tag">
                        <div class="camera">
                          {{ product.photos.length }}
                          <i class="fa fa-camera"></i>
                        </div>
                        <div class="video">
                          {{ product.videos.length }}
                          <i class="fa fa-video-camera"></i>
                        </div>

                        <!-- <div class="price">
                        <span class="price-tag-tx">
                          &#8358; {{ product.amount }}
                          <span class v-if="product.negotiable"
                            >(Negotiable)</span
                          >
                          <span class v-else>(Fixed)</span>
                        </span>
                      </div> -->
                        <!-- </div> -->
                      </div>
                    </div>
                    <div class="short-description-1 clearfix">
                      <div class="">
                        <div class="category-title" style="margin-bottom: 6px;">
                          <span
                            v-if="product.adtype == 0"
                            class="padding_cats"
                            style="background-color: #eee; "
                          >
                            <!-- <router-link to="#"> -->
                            <i style="color: #232323!important;">Regular</i>

                            <!-- </router-link> -->
                          </span>
                          <span
                            v-else-if="product.adtype == 1"
                            class="padding_cats"
                            style="background-color: #b9b9b9;"
                          >
                            <i>urgent</i>
                          </span>
                          <span
                            v-else-if="product.adtype == 2"
                            class="padding_cats"
                            style="background-color: #6b6b6b;"
                          >
                            <i>top ad</i>
                          </span>
                          <span
                            v-else-if="product.adtype == 3"
                            class="padding_cats"
                            style="background-color: #F0AC4E;"
                          >
                            <i>gold</i>
                          </span>
                          <span
                            v-else-if="product.adtype == 4"
                            class="padding_cats"
                            style="background-color: #26C781;"
                          >
                            <i>Premium</i>
                          </span>
                          <span
                            v-else-if="product.adtype == 5"
                            class="padding_cats"
                            style="background-color: #4caf50;"
                          >
                            <i>Hot seller</i>
                          </span>
                          <span
                            v-else
                            class="padding_cats"
                            style="background-color: #eee;"
                          >
                            <i style="color: #232323!important;">Regular</i>
                          </span>
                          <!-- <span
                            class="padding_cats ml-3"
                            v-if="product.category"
                          >
                            <i>{{ product.category }}</i>
                          </span> -->
                        </div>
                        <!-- <i class="fa fa-heart-o"></i> -->
                      </div>
                      <h3 class="product-name-tx">
                      <router-link
                            :to="{ path: '/productDetails', query: { id: product.id, cid: product.cid, uid:product.uid }}"
                      >
                          {{ product.name }}
                        </router-link>
                      </h3>
                      <span class="price-tag-tx">
                        &#8358; {{ formatCurrency(product.amount) }}
                        <!-- <span class v-if="product.negotiable"> (Negotiable)</span>
                        <span class v-else> (Fixed)</span> -->
                      </span>
                      <!-- <span class="price-tag-tx">
                      &#8358; {{ product.amount }}
                      <span class v-if="product.negotiable"> (Negotiable)</span>
                      <span class v-else> (Fixed)</span>
                    </span> -->
                      <p class="location location-tx">
                        <i class="fa fa-map-marker"></i>
                        <a href="../ad_country/california/index.html">{{
                          product.region
                        }}</a>
                      </p>
                      <p class="gd-date-tx">
                        <i class="flaticon-calendar"></i> &nbsp;
                        <span>{{ format_date(product.createdAt) }}</span>
                      </p>
                    </div>
                    <div class="ad-info-1">
                      <!-- <span class="price-tag-tx">
                    </span> -->
                      <div class="icon-reveal mobile-hidden">
                        <a class="btn icon-reveal-btn">
                          <i class="fa fa-heart"></i>
                        </a>
                      </div>
                      <div class="button-reveal mobile-hidden">
                        <router-link
                          class="btn btn-block button-reveal-btn"
                            :to="{ path: '/productDetails', query: { id: product.id, cid: product.cid, uid:product.uid }}"
                          >
                          Contact Seller</router-link
                        >
                      </div>
                      <div class="button-griddy hidden-desktop">
                        <router-link
                          class="btn btn-block btn-theme"
                          :to="
                            `productDetails/${product.id}/${product.cid}/${product.uid}`
                          "
                          >Contact Seller</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div
              class="posts-masonry"
              v-for="product in toggleLimit"
              :key="product.id"
              v-show="!showLoader(products[0])"
            >
              <div
                class="col-md-3 col-lg-3 col-sm-6 col-xs-12 col-md-3-tx col-lg-3-tx col-sm-6-tx col-xs-12-tx"
                id=".holder-1375"
              >
                <div class="category-grid-box-1 sold-tx">
                  <!-- <div class="featured-ribbon"><span>Featured</span></div> -->
                  <div class="image">
                    <!-- <div class="arrow-ribbon bg-primary bg-sold bg-tag-tx">
                    Sold
                  </div> -->
                    <div class="hot-ribbon-tx">
                      <img
                        src="../../assets/images/brand/tradexplora_main_logo.png"
                      />
                    </div>
                    <!-- <div class="hot-ribbon">
                    <img src="../../assets/images/hoticonv2.png" />
                  </div> -->
                    <router-link
                      :to="
                        `productDetails/${product.id}/${product.cid}/${product.uid}`
                      "
                    >
                      <img
                        :src="product.photos[0]"
                        :alt="product.name"
                        class="img-responsive"
                      />
                    </router-link>
                    <div class="price-tagg" id="price-tag">
                      <div class="camera">
                        {{ product.photos.length }} <i class="fa fa-camera"></i>
                      </div>
                      <div class="video">
                        {{ product.videos.length }}
                        <i class="fa fa-video-camera"></i>
                      </div>

                      <!-- <div class="price">
                      <span class="price-tag-tx">
                        &#8358; {{ product.amount }}
                        <span class v-if="product.negotiable"
                          >(Negotiable)</span
                        >
                        <span class v-else>(Fixed)</span>
                      </span>
                    </div> -->
                      <!-- </div> -->
                    </div>
                  </div>
                  <div class="short-description-1 clearfix">
                    <div class="">
                      <div class="category-title" style="margin-bottom: 6px;">
                          <span
                            v-if="product.adtype == 0"
                            class="padding_cats"
                            style="background-color: #eee; "
                          >
                            <!-- <router-link to="#"> -->
                            <i style="color: #232323!important;">Regular</i>

                            <!-- </router-link> -->
                          </span>
                          <span
                            v-else-if="product.adtype == 1"
                            class="padding_cats"
                            style="background-color: #b9b9b9;"
                          >
                            <i>urgent</i>
                          </span>
                          <span
                            v-else-if="product.adtype == 2"
                            class="padding_cats"
                            style="background-color: #6b6b6b;"
                          >
                            <i>top ad</i>
                          </span>
                          <span
                            v-else-if="product.adtype == 3"
                            class="padding_cats"
                            style="background-color: #F0AC4E;"
                          >
                            <i>gold</i>
                          </span>
                          <span
                            v-else-if="product.adtype == 4"
                            class="padding_cats"
                            style="background-color: #26C781;"
                          >
                            <i>Premium</i>
                          </span>
                          <span
                            v-else-if="product.adtype == 5"
                            class="padding_cats"
                            style="background-color: #4caf50;"
                          >
                            <i>Hot seller</i>
                          </span>
                          <span
                            v-else
                            class="padding_cats"
                            style="background-color: #eee;"
                          >
                            <i style="color: #232323!important;">Regular</i>
                          </span>
                          <!-- <span
                            class="padding_cats ml-3"
                            v-if="product.category"
                          >
                            <i>{{ product.category }}</i>
                          </span> -->
                        </div>
                      <!-- <i class="fa fa-heart-o"></i> -->
                    </div>
                    <h3 class="product-name-tx">
                      <router-link
                        :to="
                          `productDetails/${product.id}/${product.cid}/${product.uid}`
                        "
                      >
                        {{ product.name }}
                      </router-link>
                    </h3>
                    <span class="price-tag-tx">
                      &#8358; {{ formatCurrency(product.amount) }}
                      <!-- <span class v-if="product.negotiable"> (Negotiable)</span>
                      <span class v-else> (Fixed)</span> -->
                    </span>
                    <!-- <span class="price-tag-tx">
                    &#8358; {{ product.amount }}
                    <span class v-if="product.negotiable"> (Negotiable)</span>
                    <span class v-else> (Fixed)</span>
                  </span> -->
                    <p class="location location-tx">
                      <i class="fa fa-map-marker"></i>
                      <a href="../ad_country/california/index.html">{{
                        product.region
                      }}</a>
                    </p>
                    <p class="gd-date-tx">
                      <i class="flaticon-calendar"></i> &nbsp;
                      <span>{{ format_date(product.createdAt) }}</span>
                    </p>
                  </div>
                  <div class="ad-info-1">
                    <!-- <span class="price-tag-tx">
                  </span> -->
                    <div class="icon-reveal mobile-hidden">
                      <a class="btn icon-reveal-btn">
                        <i class="fa fa-heart"></i>
                      </a>
                    </div>
                    <div class="button-reveal mobile-hidden">
                      <router-link
                        class="btn btn-block button-reveal-btn"
                        :to="
                          `productDetails/${product.id}/${product.cid}/${product.uid}`
                        "
                        >Contact Seller</router-link
                      >
                    </div>
                    <div class="button-griddy hidden-desktop">
                      <router-link
                        class="btn btn-block btn-theme"
                        :to="
                          `productDetails/${product.id}/${product.cid}/${product.uid}`
                        "
                        >Contact Seller</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="viewall-similar mb-5"
      id="show-more-details"
      v-if="
        paginatedProducts &&
          paginatedProducts.length !== limit &&
          list.length == 0
      "
    >
      <a @click="limit += 10" v-show="limitBtn">
        Show More
        <i class="fa fa-arrow-circle-right" style="color: #4caf50;"></i
      ></a>
    </div>
    <div
      class="viewall-similar"
      id="show-more-details"
      v-if="list && list.length > limit"
    >
      <a @click="limit += 10" v-show="limitBtn">
        Show More
        <i class="fa fa-arrow-circle-right" style="color: #4caf50;"></i
      ></a>
    </div>
  </div>
</template>
<script>
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
const formatCurrency = require("format-currency");
import { mapActions, mapGetters } from "vuex";
import "vue-loading-overlay/dist/vue-loading.css";
import ash from "lodash";
import moment from "moment";
import { ContentLoader } from "vue-content-loader";
// import InfiniteLoading from 'vue-infinite-loading';

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      limitBtn: true,
      page: 1,
      busy: false,
      products: [],
      limit: 10
    };
  },
  props: {
    loading: Boolean,
    data: {
      type: [Array, Object],
      required: true
    },
    baseLimit: {
      type: [Number]
    },
    list: [Array, Object]
  },
  components: {
    Loading,
    ContentLoader
  },
  computed: {
    ...mapGetters("product", ["paginatedProducts"]),
    paginatedList() {
      return this.data.slice(0, 10);
    },
    toggleLimit() {
      if (this.list.length == 0) {
        if (this.limit !== this.data.length) {
          // this.limit += 10;
          return this.limit ? this.data.slice(0, this.limit) : this.data;
        }
      } else {
        if (this.limit !== this.list.length) {
          // this.limit += 10;
          return this.limit ? this.list.slice(0, this.limit) : this.list;
        }
      }
      return this.data;
    }
  },
  methods: {
    ...mapActions("product", ["fetchAllProducts", "fetchHotSellers"]),
    formatCurrency(data) {
      return formatCurrency(data);
    },
    paginateData() {
      this.products.push(this.data);
    },
    async getAllPro() {
      return this.products;
    },
    loadMore: function($state) {
      // setTimeout(function () {
      this.getAllPro().then(response => {
        // console.log(response);
        if (response) {
          $state.loaded();
        } else {
          $state.complete();
        }
      });
      // }.bind(this), 1000);
    },
    sync() {
      $("html,body").animate({ scrollTop: 0 }, "slow");
    },
    showLoader(data) {
      if (ash.isEmpty(data) || data == undefined || data == null) {
        return true;
      } else {
        return false;
      }
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    }
  },
  watch: {
    isLoading: {
      handler: function(loading) {
        this.sync();
        this.isLoading = false;
      }
    },
    limit: {
      handler: function(limit) {
        if (limit == this.data.lenght || limit == this.list.length) {
          this.limitBtn = false;
        } else {
          this.limitBtn = true;
        }
      }
    },
    list: {
      handler: function(list) {
        if (list.length !== 0) {
          this.limit = 10;
        }
      }
    },
    baseLimit: {
      handler: function(limit) {
        if (limit !== 0) {
          this.limit = 10;
        }
      }
    }
  },
  created() {
    window.scrollTo(0,0);
    this.paginateData();
    // console.log(this.products);
  }
};
</script>
<style scoped lang="scss">
//----------  responsive breakpoints
//------------------------------------------------------------------------------
@mixin breakpoint($value) {
  @if $value == "phone" {
    @media only screen and (min-width: 120px) and (max-width: 767px) {
      @content;
    }
  } @else if $value == "tablet" {
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      @content;
    }
  } @else if $value == "touch" {
    @media only screen and (min-width: 120px) and (max-width: 1024px) {
      @content;
    }
  } @else if $value == "desktop" {
    @media only screen and (min-width: 1025px) {
      @content;
    }
  } @else {
    @media only screen and (max-width: $value) {
      @content;
    }
  }
}

// Colors
$white: #fff;
$black: #000;
$grey: #595959;
$grey-dark: #2b2b2b;
$grey-light: #eee;
$green: #86c023;
$blue: #017ac7;

// Transition
$duration: 400ms;
$easing: ease;

//----------  reset
//------------------------------------------------------------------------------
htm,
body {
  font-family: sans-serif;
}

a {
  text-decoration: none;
}
button {
  text-decoration: none;
  border: none;
  cursor: pointer;
}
.col-md-3-tx,
.col-lg-3-tx,
.col-sm-6-tx,
.col-xs-12-tx {
  padding-right: 8px !important;
  padding-left: 8px !important;
}
.p-name-p-category {
  display: flex;
  justify-content: space-between;
}

.p-name-p-category i.fa {
  font-size: 18px;
}
.category-grid-box-1 #price-tag {
  bottom: 0;
  position: absolute;
  right: 0 !important;
}
#show-more-details {
  display: flex;
  justify-content: center;
}
.price-tagg {
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 4px 0px 4px 8px;
  border-radius: 8px 0 0 0;
  color: #fff !important;
}
.price-tagg .video {
  margin-right: 16px;
  margin-left: 8px;
}
.location-tx {
  margin-top: 4px !important;
  margin-bottom: 6px !important;
}
.location-tx i {
  margin-right: 4px !important;
}
.price-tag-tx {
  background-color: transparent !important;
  color: #232323;
  font-weight: 400;
  font-size: 17px;
  // line-height: 1.2;
}

.img-responsive {
  max-height: 166px !important;
  min-height: 166px !important;
}

.price-tag-tx span {
  background-color: transparent !important;
}

// .sold-tx {
//   opacity: 0.3;
// }

// .bg-sold {
//   background-color: #ed5151!important
// }
// .arrow-ribbon.bg-sold:before {
//   border-left: 15px solid #ed5151;
// }

.hot-ribbon-tx {
  position: absolute;
  right: 10px;
  text-align: left;
  top: 10px;
  width: 30px;
  z-index: 1;
}

//----------  pagination
//------------------------------------------------------------------------------
.pagination-wrapper {
  text-align: center;
  margin: 40px 0;
}

.product-name-tx {
  font-size: 17px !important;
  margin-bottom: 6px;
}

.product-name-tx a {
  font-weight: 600 !important;
}

.gd-date-tx {
  margin-bottom: 14px !important;
}

.gd-date-tx i {
  margin-right: 4px !important;
}

.icon-reveal-btn {
  background-color: #232323 !important;
  color: #fff !important;
  font-size: 14px;
  font-weight: 600 !important;
  padding: 3px 8px !important;
  display: none;
  border-radius: 50% !important;
  opacity: 0.4;
  
}

.icon-reveal-btn:hover {
  background-color: #232323 !important;
  color: #fff !important;
  font-weight: 700;
  opacity: 1;
}

.pagination {
  display: inline-block;
  height: 70px;
  margin-top: 70px;
  padding: 0 25px;
  border-radius: 35px;
  background-color: $grey-light;

  @include breakpoint(1199px) {
    height: 50px;
    margin-top: 50px;
    padding: 0 10px;
    border-radius: 25px;
  }
}

.padding_cats {
  padding: 2px 8px;
  border-radius: 24px;
  color: #fff !important;
  margin-bottom: 8px;
}

.padding_cats a {
  color: #fff !important;
}

.page-numbers {
  display: block;
  padding: 0 25px;
  float: left;
  transition: $duration $easing;
  color: $grey;
  font-size: 20px;
  letter-spacing: 0.1em;
  line-height: 70px;

  &:hover,
  &.current {
    background-color: $green;
    color: $white;
  }

  &.prev:hover,
  &.next:hover {
    background-color: transparent;
    color: $green;
  }

  @include breakpoint(1199px) {
    padding: 0 15px;
    font-size: 16px;
    line-height: 50px;
  }

  @include breakpoint(touch) {
    padding: 0 14px;
    display: none;

    &:nth-of-type(2) {
      position: relative;
      padding-right: 50px;

      &::after {
        content: "...";
        position: absolute;
        font-size: 25px;
        top: 0;
        left: 45px;
      }
    }

    &:nth-child(-n + 3),
    &:nth-last-child(-n + 3) {
      display: block;
    }

    &:nth-last-child(-n + 4) {
      padding-right: 14px;

      &::after {
        content: none;
      }
    }
  }
}
</style>
