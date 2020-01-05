<template>
  <div>
    <!--Start Section-->
    <!--  -->
    <Loading :active.sync="isLoading" :is-full-page="fullPage"></Loading>
    <div class="row">
      <div class="col-md-12 col-grid-tx">
        <div class="grid-style-2">
          <ContentLoader
            :height="300"
            :width="856"
            :speed="2"
            primaryColor="#f3f3f3"
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
            primaryColor="#f3f3f3"
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
            v-for="product in paginatedList"
            :key="product.id"
            v-show="!showLoader(paginatedList)"
          >
            <div class="col-md-3 col-lg-3 col-sm-6 col-xs-12" id=".holder-1375">
              <div class="category-grid-box-1">
                <!-- <div class="featured-ribbon"><span>Featured</span></div> -->
                <div class="image">
                  <div class="hot-ribbon">
                    <img src="../../assets/images/hot-deals.svg" />
                  </div>
                  <router-link
                    :to="`productDetails/${product.id}/${product.cid}`"
                  >
                    <img
                      :src="product.photos[0]"
                      :alt="product.name"
                      class="img-responsive"
                    />
                  </router-link>
                  <!-- <a href="../ad/2017-maserati-ghibli-sq4-blue-1695-miles-2/index.html"><img src="../wp-content/uploads/2017/12/IMG_5006-268x166.jpg" alt="2017 Maserati Ghibli SQ4 Blue 1,695 Miles" class="img-responsive"></a>  -->
                  <!-- <div class="play-video"><i class="fa fa-camera price-tag-tx camera-icon"></i></div> -->
                  <div class="price-tag">
                    <div class="price">
                      <span class="price-tag-tx">
                        &#8358; {{ product.amount }}
                        <span class v-if="product.negotiable"
                          >(Negotiable)</span
                        >
                        <span class v-else>(Fixed)</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="short-description-1 clearfix">
                  <div class="category-title">
                    <span class="padding_cats">
                      <router-link
                        :to="`productDetails/${product.id}/${product.cid}`"
                        >{{ product.category }}
                      </router-link>
                    </span>
                  </div>
                  <h3>
                    <router-link
                      :to="`productDetails/${product.id}/${product.cid}`"
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
                  <!-- <ul class="list-unstyled">
                  <li><i class="flaticon-gas-station-1"></i>Petrol</li>
                  <li><i class="flaticon-dashboard"></i>1,694 Km</li>
                  <li><i class="flaticon-engine-2"></i>3,000 cc</li>
                  <li><i class="flaticon-car-2"></i>Sedan</li>
                  <li><i class="flaticon-cogwheel-outline"></i>Blue</li>
                </ul> -->
                </div>
                <div class="ad-info-1">
                  <p>
                    <i class="flaticon-calendar"></i> &nbsp;
                    <span>{{ format_date(product.createdAt) }}</span>
                  </p>
                  <!-- <ul class="pull-right "><li><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Save Ad" href="javascript:void(0);" class="save-ad" data-adid="1375"><i class="flaticon-like-1"></i></a></li><li><a href="../ad/2017-maserati-ghibli-sq4-blue-1695-miles-2/index.html"><i class="flaticon-message"></i></a></li></ul> -->
                  <div class="icon-reveal mobile-hidden">
                    <a class="btn icon-reveal-btn">
                      <i class="fa fa-heart-o"></i>
                    </a>
                  </div>
                  <div class="button-reveal mobile-hidden">
                    <router-link
                      class="btn btn-block button-reveal-btn"
                      :to="`productDetails/${product.id}/${product.cid}`"
                      >Contact Seller</router-link
                    >
                  </div>
                  <div class="button-griddy hidden-desktop">
                    <router-link
                      class="btn btn-block btn-theme"
                      :to="`productDetails/${product.id}/${product.cid}`"
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

    <!-- PAGINATION CONTROLS -->
    <div class="pagination-wrapper" v-if="data.length > 5">
      <div class="pagination">
        <button
          class="prev page-numbers"
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
        >
          prev
        </button>
        <button
          class="page-numbers"
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
        >
          First
        </button>

        <!-- Range of pages -->
        <button
          class="page-numbers"
          :class="{ current: isPageActive(page.number) }"
          type="button"
          v-for="(page, index) in pages"
          :key="index"
          :disabled="page.isDisabled"
          @click="onClickPage(page.number)"
        >
          {{ page.number }}
        </button>
        <!-- End page range-->
        <!-- <span aria-current="page" class="page-numbers current">1</span> -->

        <button
          class="page-numbers"
          type="button"
          @click="onClickNextPage"
          :disabled="isInLastPage"
        >
          Next
        </button>
        <button
          class="next page-numbers"
          type="button"
          @click="onClickLastPage"
          :disabled="isInLastPage"
        >
          Last
        </button>
      </div>
    </div>
    <!-- END PAGINATION CONTROLS -->
  </div>
</template>
<script>
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import ash from "lodash";
import moment from "moment";
import { ContentLoader } from "vue-content-loader";
export default {
  data() {
    return {
      isLoading: false,
      fullPage: true
    };
  },
  props: {
    data: {
      type: [Array, Object],
      required: true
    },
    maxVisibleButton: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  components: {
    Loading,
    ContentLoader
  },
  computed: {
    paginatedList() {
      let start = (this.currentPage - 1) * this.perPage,
        end = start + this.perPage;
      return this.data.slice(start, end);
    },
    startPage() {
      //getting first page
      if (this.currentPage === 1) {
        return 1;
      }
      // when on the last page
      if (this.currentPage === this.totalPages) {
        return (
          this.totalPages - this.maxVisibleButton + (this.maxVisibleButton - 1)
        );
      }
      // when at the middle
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i += 1
      ) {
        range.push({
          number: i,
          isDisabled: i === this.currentPage
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    }
  },
  methods: {
    onClickFirstPage() {
      this.isLoading = true;
      this.$emit("pagechanged", 1);
      this.loading = false;
    },
    onClickPreviousPage() {
      this.isLoading = true;
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.isLoading = true;
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.isLoading = true;
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
    onPageChange(page) {
      this.currentPage = page;
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
