<template>
  <!--Start Section-->
  <!--  -->
  <div class="row">
    <div class="col-md-12 col-grid-tx">
      <div class="grid-style-2">
        <content-loader
          :height="300"
          :width="856"
          :speed="2"
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
          v-show="showLoader(products)"
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
          <rect x="610.23" y="267.67" rx="0" ry="0" width="61" height="11.7" />
          <circle cx="565.14" cy="260.58" r="26.91" />
        </content-loader>
        <content-loader
          :height="300"
          :width="856"
          :speed="2"
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
          v-show="showLoader(products)"
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
          <rect x="610.23" y="267.67" rx="0" ry="0" width="61" height="11.7" />
          <circle cx="565.14" cy="260.58" r="26.91" />
        </content-loader>
        <div
          class="posts-masonry"
          v-for="product in products"
          :key="product.id"
          v-show="!showLoader(products)"
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
                      <span class v-if="product.negotiable">(Negotiable)</span>
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
  <!--/Section-->
</template>

<script>
import { ContentLoader } from "vue-content-loader";
// import pagination from "@/components/pagination";
import ash from "lodash";
import moment from "moment";

export default {
  name: "gridprops",
  props: {
    products: [Object, Array]
  },
  components: {
    ContentLoader
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },
    showLoader(data) {
      if (ash.isEmpty(data) || data == undefined || data == null) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style></style>
