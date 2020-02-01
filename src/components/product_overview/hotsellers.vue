<template>
  <div class="row" style="margin-bottom: 24px; margin-top: -13px;">
    <div class="short-features">
      <div class="grid-style-2">
        <div class="heading-panel">
          <div class="col-xs-12 col-md-12 col-sm-12 grid-flex-custom">
            <h3
              class="main-title text-left"
              style="border-bottom: 2px solid #4CAF50;"
            >
              Hot Sellers
            </h3>
            <span
              class="hotseller-sub"
              style="display: inline; margin-left: 10px; color: #785edd;"
            >
              Join the hot sellers and increase your sales over 1 million other
              sellers.
            </span>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <!-- <div class="col-xs-6 col-sm-4 col-md-2 col-join-tx"> -->
            <div
              class="col-lg-2 col-md-4 col-sm-12 col-xs-12 col-join-tx category-grid-box-tx-custom"
            >
              <div class="category-grid-box-1 category-grid-box-tx">
                <div class="hot-ribbon">
                  <img src="@/assets/images/hoticonv2.png" />
                </div>
                <div class="image-price">
                  <div class="image">
                    <router-link to="/register">
                      <img
                        src="@/assets/images/add-seller.svg"
                        alt="2017 Maserati Ghibli SQ4 Blue 1,695 Miles"
                        class="img-responsive"
                      />
                    </router-link>
                  </div>
                </div>

                <div class="short-description-1 hot-sellers-name-tx clearfix">
                  <div class="category-title-tx">
                    <p>Join Hot Sellers</p>
                  </div>

                  <div class="follow">
                    <p class="btn">Join</p>
                  </div>
                </div>
              </div>
            </div>
 
            <!-- <div class="col-xs-6 col-sm-8 col-md-10"> -->
            <div class="col-lg-10 col-md-8 col-sm-12 col-xs-12">
              <div class="short-feature-body">
                <div class="featured-slider-1 owl-carousel owl-theme" v-carousel>
                  <div class="item" v-for="(sellers, index) in hotsellers" :key="index">
                    <div
                      class="col-md-12 col-lg-12 col-sm-12 col-xs-12 col-sellers-tx"
                      id="holder-1554"
                    >
                      <div class="category-grid-box-1 category-grid-box-tx">
                        <div class="hot-ribbon">
                          <img src="@/assets/images/hoticonv2.png" />
                        </div>
                        <div class="image-price">
                          <div class="image">
                            <a
                              href="/#/"
                            >
                              <img
                                v-if="sellers.avatar === null"
                                class="img-responsive"
                                alt="Avatar"
                                src="https://www.tradexplora.com.ng/media/avatar.png"
                              />
                              <img
                                v-else
                                class="img-responsive"
                                alt="Avatar"
                                :src="sellers.avatar !== null ? `https://www.tradexplora.com.ng/media/${sellers.avatar}`
                                : 'https://www.tradexplora.com.ng/media/avatar.png' "
                              />
                            </a>

                            <div class="new-hot-sellers" v-if="getdiff(sellers.createdAt) <  4">new</div>
                            <!-- <div class="" v-else></div> -->
                          </div>
                        </div>

                        <div
                          class="short-description-1 hot-sellers-name-tx clearfix"
                        >
                          <div class="category-title-tx">
                            <p>
                              {{ sellers.name }}
                              <!--Nwankwo-->
                            </p>
                          </div>

                          <div class="follow">
                            <p class="btn"><i class="fa fa-user-plus"></i> Follow</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import ash from "lodash";
import moment from "moment";
import carousel from 'vue-owl-carousel'
export default {
  name: "hotsellers",
  data() {
    return {
    };
  },
  props: {
    hotsellers: Array
  },

  methods: {
    sync() {
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
    getdiff(ddate){
      const diff = moment().diff(ddate, 'days');
      // console.log(diff);
      return diff;
    }
  },
  directives: {
            carousel: {
                inserted: function (el) {
                    $(el).owlCarousel({
                        //loop: true,
                        margin: 10,
                        nav: true,
                        responsive: {
                          0: {
                            items: 1
                          },
                          600: {
                            items: 3
                          }
                        }
                    }).trigger('to.owl.carousel', app.items.length)
                    console.log("crousel inserted")
                },
            }
        },
  watch: {
    $route: "sync"
  },
  created() {
    this.sync();
    // console.log(this.hotsellers);
  }
};
</script>

<style>
p.btn {
  text-transform: none!important;
  color: #fff!important;
  font-weight: 500!important;
  margin-bottom: 0px!important;
  padding: 1px 15px!important;
}
/* div.follow:hover {
  box-shadow: 0px 4px 14px 6px rgba(0, 0, 0, 0.5);
} */
.owl-carousel {
  cursor: default!important;
}
.short-description-1.hot-sellers-name-tx.clearfix {
  cursor: default!important;
}
.new-hot-sellers {
  left: 8.5rem!important;
}
@media (max-width: 767px) {
  .hotseller-sub {
    display: inline-block;
    margin-left: 0px;
    margin-top: 10px;
  }
}
</style>
