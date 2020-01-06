import router from '../../router';
<template>
  <!--Section-->
  <section class="sptb bg-patterns">
    <div class="container">
      <div class="section-title center-block text-center mobile-hidden">
        <h2 style="display: inline-block; margin-left: 92px">Featured Ads</h2>
        <div class="viewall2">
          <router-link to="/Gridlist"
            >Show All <i class="fa fa-arrow-circle-right"></i
          ></router-link>
        </div>
      </div>

      <div
        class="section-title text-left hidden-desktop"
        style="padding: 0px; margin-bottom: 20px;"
      >
        <h2
          class="is-left-small text-bold"
          style="font-size: 20px; display: inline-block;"
        >
          Featured Ads
        </h2>
        <router-link to="gridlist" class="pull-right sptb-show-all">
          <span>
            Show all
          </span>
        </router-link>
      </div>
      <content-loader
        :height="300"
        :width="856"
        :speed="2"
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        v-show="showLoader2(ads)"
      >
        <rect x="23.37" y="22.27" rx="0" ry="0" width="196.35" height="89.3" />
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
        <rect x="29.22" y="189.84" rx="0" ry="0" width="143.88" height="12.8" />
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
        <rect x="349.54" y="248.79" rx="0" ry="0" width="127.8" height="12.6" />
        <rect x="356.68" y="273.27" rx="0" ry="0" width="62.22" height="9.18" />
        <circle cx="309.67" cy="265.02" r="27.45" />
        <rect x="544.23" y="19.27" rx="0" ry="0" width="206.17" height="89.3" />
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
        id="myCarousel2"
        class="owl-carousel owl-carousel-icons2"
        v-show="!showLoader2(ads)"
      >
        <div class="item" v-for="product in ads" :key="product.id">
          <div class="card mb-0">
            <div v-if="product.featured === 1">
              <div class="arrow-ribbon hot-package">
                <img
                  src="@/assets/images/hot-icon.png"
                  alt=""
                  width="32px"
                />
              </div>
            </div>
            <div v-else-if="product.featured === 2">
              <div class="arrow-ribbon bg-primary bg-tag-tx">Premium</div>
            </div>
            <div v-else>
              <div class="arrow-ribbon bg-tag-gold-tx">Gold</div>
            </div>
            <div class="item-card7-imgs">
              <router-link
                :to="`/ProductDetails/${product.id}/${product.cid}`"
              ></router-link>
              <img
                :src="product.photos[0]"
                :alt="product.name"
                class="cover-image"
              />
            </div>
            <div class="item-card7-overlaytext">
              <span class="mb-0 fs-13 active"
                ><i class="fa fa fa-heart"></i
              ></span>
            </div>
            <div class="card-body">
              <div class="item-card7-desc">
                <div class="item-card7-text">
                  <router-link
                    :to="`/ProductDetails/${product.id}/${product.cid}`"
                    class="text-dark"
                  >
                    <h4 class="product-title-tx">
                      {{ product.name }}
                    </h4></router-link
                  >

                  <p class="">
                    <i class="icon icon-location-pin text-muted mr-1"></i>
                    {{ product.region }}
                  </p>
                  <h5 class="font-weight-bold mb-0 price-tx">
                    &#8358;{{ product.amount }}
                  </h5>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex mb-0">
                <span class="fs-12"
                  ><i class="icon icon-event mr-2 mt-1"></i
                  >{{ format_date(product.createdAt) }}
                </span>
                <div class="ml-auto">
                  <a
                    href="#"
                    class=""
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Share Property"
                    ><i class="icon icon-share text-muted"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/Section-->
</template>

<script>
/* eslint-disable no-undef */
import { ContentLoader } from "vue-content-loader";
import moment from "moment";
import ash from "lodash";
export default {
  name: "SPTB-Pattern",
  props: {
    ads: Object
  },
  components: {
    ContentLoader
  },
  methods: {
    showLoader2(data) {
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
    },
    sync() {
      $(document).ready(() => {
        // ______________Owl-carousel-icons2
        $(".owl-carousel-icons2").owlCarousel({
          loop: true,
          rewind: false,
          margin: 25,
          animateIn: "fadeInDowm",
          animateOut: "fadeOutDown",
          autoplayTimeout: 5000, // set value to change speed
          autoplayHoverPause: true,
          dots: false,
          nav: true,
          autoplay: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: true
            },
            600: {
              items: 2,
              nav: true
            },
            1300: {
              items: 4,
              nav: true
            }
          }
        });
      });
    }
  },
  watch: {
    $route: "sync"
  },
  created() {
    this.sync();
  }
};
</script>

<style>
.item-card7-imgs {
  max-height: 208px;
  min-height: 208px;
}

.item-card7-imgs img {
  object-fit: cover;
}

</style>
