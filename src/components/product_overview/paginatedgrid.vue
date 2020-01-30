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
            v-show="showLoader(paginatedList)"
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
            v-show="showLoader(paginatedList)"
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
          <div
            class="posts-masonry"
            v-for="product in list"
            :key="product.id"
            v-show="!showLoader(paginatedList)"
          >
            <div class="col-md-3 col-lg-3 col-sm-6 col-xs-12 col-md-3-tx col-lg-3-tx col-sm-6-tx col-xs-12-tx" id=".holder-1375">
              <div class="category-grid-box-1">
                <!-- <div class="featured-ribbon"><span>Featured</span></div> -->
                <div class="image">
                  <div class="hot-ribbon">
                    <img src="../../assets/images/hoticonv2.png" />
                  </div>
                  <router-link
                    :to="`productDetails/${product.id}/${product.cid}/${product.uid}`"
                  >
                    <img
                      :src="product.photos[0]"
                      :alt="product.name"
                      class="img-responsive"
                    />
                  </router-link>
                  <div class="price-tag">
                    <div class="camera">
                      1 <i class="fa fa-camera"></i>
                    </div>
                    <div class="video">
                      2 <i class="fa fa-video-camera"></i>
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
                  </div>
                </div>
                <div class="short-description-1 clearfix">
                  <div class="category-title">
                    <span class="padding_cats">
                      <!-- <router-link
                        :to="`productDetails/${product.id}/${product.cid}/${product.uid}`"
                        >{{ product.category }}
                      </router-link> -->
                    </span>
                  </div>
                  <h3>
                    <router-link
                      :to="`productDetails/${product.id}/${product.cid}/${product.uid}`"
                    >
                      {{ product.name }}
                    </router-link>
                  </h3>
                  <p class="location">
                    <i class="fa fa-map-marker"></i>
                    <a href="../ad_country/california/index.html">{{
                      product.region
                    }}</a>
                  </p>
                  <p>
                    <i class="flaticon-calendar"></i> &nbsp;
                    <span>{{ format_date(product.createdAt) }}</span>
                  </p>
                </div>
                <div class="ad-info-1">
                  <span class="price-tag-tx">
                    &#8358; {{ product.amount  }}
                    <span class v-if="product.negotiable"
                      > (Negotiable)</span
                    >
                    <span class v-else> (Fixed)</span>
                  </span>
                  <div class="icon-reveal mobile-hidden">
                    <a class="btn icon-reveal-btn">
                      <i class="fa fa-heart-o"></i>
                    </a>
                  </div>
                  <div class="button-reveal mobile-hidden">
                    <router-link
                      class="btn btn-block button-reveal-btn"
                      :to="`productDetails/${product.id}/${product.cid}/${product.uid}`"
                      >Contact Seller</router-link
                    >
                  </div>
                  <div class="button-griddy hidden-desktop">
                    <router-link
                      class="btn btn-block btn-theme"
                      :to="`productDetails/${product.id}/${product.cid}/${product.uid}`"
                      >Contact Seller</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <infinite-loading @infinite="infiniteHandler"></infinite-loading>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Import component
import Loading from "vue-loading-overlay";
import InfiniteLoading from 'vue-infinite-loading';
// Import stylesheet
import axios from "axios";
import "vue-loading-overlay/dist/vue-loading.css";
import ash from "lodash";
import moment from "moment";
import { ContentLoader } from "vue-content-loader";
const api = 'https://www.tradexplora.com.ng/product/product';
export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      list: [],
      page: 1,
    };
  },
  props: {
    loading: Boolean,
    data: {
      type: [Array, Object],
      required: true
    },
  },
  components: {
    Loading,
    ContentLoader,
    InfiniteLoading
  },
  computed: {
    paginatedList() {
      return this.data.slice(0, 10);
    },
  },
  methods: {
    sync() {
      $("html,body").animate({ scrollTop: 0 }, "slow");
    },
     infiniteHandler($state) {
      axios.get(api, {
        params: {
          page: this.page,
        },
      }).then(({ data }) => {
        // console.log(data.length)
        if (data.lenght) {
          this.page += 1;
          this.list.push(...data);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
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
    }
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
.col-md-3-tx, .col-lg-3-tx, .col-sm-6-tx, .col-xs-12-tx {
  padding-right: 8px!important;
  padding-left: 8px!important;
}
.price-tag {
  display: flex;
  margin-bottom: 8px;
}
.price-tag .video {
  margin-right: 16px;
  margin-left: 8px;
}
.price-tag-tx {
    background-color: transparent!important;
    display: flex;
    justify-content: center;
    color: rgb(76, 175, 80);
    font-weight: 600;
    line-height: 48px;
    font-size: 16px;
}

.price-tag-tx span{
    background-color: transparent!important;
    margin-left: 4px;
    
}
//----------  pagination
//------------------------------------------------------------------------------
.pagination-wrapper {
  text-align: center;
  margin: 40px 0;
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
