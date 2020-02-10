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
      <ProductLoader v-show="showLoader(ads)"></ProductLoader>
      <!-- <simple-carousel-container loop :watch-it="ads"> -->
        <div v-if="ads">
        <slick ref="slick" :options="slickOptions">     
          <div class=""  v-for="product in ads" :key="product.id">
          <div class="card mb-0">
            <div v-if="product.featured === 1">
              <div class="arrow-ribbon hot-package">
                <img src="@/assets/images/hot-icon.png" alt="" width="32px" />
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
                :to="`productDetails/${product.id}/${product.cid}/${product.uid}`"
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
                    :to="`productDetails/${product.id}/${product.cid}/${product.uid}`"
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
        </slick>
      </div>
      <!-- </simple-carousel-container> -->
    </div>
  </section>
  <!--/Section-->
</template>

<script>
/* eslint-disable no-undef */
import Slick from 'vue-slick';
import ProductLoader from "@/components/loaders/Productloader";
import moment from "moment";
import ash from "lodash";
// import { SimpleCarouselContainer, SimpleCarouselItem } from 'vue-simple-carousel';
export default {
  name: "SPTB-Pattern",
  data() {
    return {
      slickOptions: {
          //options can be used from the plugin documentation
          slidesToShow: 4,
          infinite: true,
          accessibility: true,
          adaptiveHeight: false,
          arrows: true,
          dots: false,
          draggable: true,
          edgeFriction: 0.30,
          swipe: true
      }
    }
  },
  props: {
    ads: [Object, Array]
  },
  components: {
    ProductLoader,
    Slick
  },
  methods: {
    next () {
      this.$refs.slick.next()
    },

    prev () {
      this.$refs.slick.prev()
    },

    reInit () {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
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
    },
    sync() {
      
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      this.sync();
    })
  },
  watch: {
    $route: "sync"
  },
   beforeUpdate() {
      if (this.$refs.slick) {
          this.$refs.slick.destroy();
      }
  },
  updated() {
      this.$nextTick(function () {
          if (this.$refs.slick) {
              this.$refs.slick.create(this.slickOptions);
          }
      });
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
