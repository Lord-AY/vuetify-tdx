import router from '../../router';
<template>
  <!--Section-->
  <section class="sptb bg-white">
    <div class="container">
      <div class="section-title center-block text-center mobile-hidden">
        <h2 style="display: inline-block; margin-left: 92px">Latest Ads</h2>
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
          Latest Ads
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
          <div class=" mb-0">
            <div class="item-card2-img">
            <!--   <router-link
                :to="`/ProductDetails/${product.id}/${product.cid}`"
              ></router-link> -->
              <img
                :src="product.photos[0]"
                :alt="product.name"
                class="cover-image"
              />
            </div>
            <div class="item-card2-icons">
              <a href="#" class="item-card2-icons-r bg-secondary-tx"
                ><i class="fa fa fa-heart-o"></i
              ></a>
            </div>
            <div class="card-body">
              <div class="item-card2">
                <div class="item-card2-text">
                  <router-link
                    :to="`productDetails/${product.id}/${product.cid}/${product.uid}`"
                    class="text-dark"
                  >
                    <h4 class="product-title-tx">
                      {{ product.name }}
                    </h4></router-link
                  >

                  <p class="mb-2">
                    <i class="fa fa-map-marker text-muted mr-1"></i>
                    {{ product.region }}
                  </p>
                  <h5 class="font-weight-bold mb-2 price-tx">
                    &#8358;{{ product.amount }}
                  </h5>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="footerimg d-flex mt-0 mb-0">
                <div class="d-flex footerimg-l mb-0">
                  <img
                    src="@/assets/images/faces/male/18.jpg"
                    alt="image"
                    class="avatar brround  mr-2"
                  />
                  <h5
                    class="time-title text-muted p-0 leading-normal mt-1 mb-0"
                  >
                    {{ product.creator
                    }}<i
                      class="si si-check text-success fs-12 ml-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="verified"
                    ></i>
                  </h5>
                </div>
<!--                 <div class="mt-2 footerimg-r ml-auto">
                  <small class="text-muted">{{ daysago(format_date(product.createdAt)) }}</small>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </slick>
    </div>
      <!-- </simple-carousel-container> -->
<!--       <b-carousel :defaultIndex="3"
        v-show="!showLoader(ads)"
      >
        <div class="" v-for="product in ads" :key="product.id">

        </div>
      </b-carousel> -->
    </div>
  </section>
  <!--/Section-->
</template>

<script>
// require("../../../public/assets/carspot-css/wp-content/themes/carspot/css/bcustom.css");
/* eslint-disable no-undef */
import Slick from 'vue-slick';
import ProductLoader from "@/components/loaders/Productloader";
import moment from "moment";
import ash from "lodash";
// import { SimpleCarouselContainer, SimpleCarouselItem } from 'vue-simple-carousel';

export default {
  name: "SPTB-White",
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
    daysago(dateago){
      if (dateago){
        return  moment.duration(moment().diff(dateago)).humanize() + " ago";
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
.item-card2-img {
  max-height: 208px;
  min-height: 208px;
}

.item-card2-img img {
  object-fit: cover;
}
</style>
