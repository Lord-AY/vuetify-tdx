<template>
  <div class="row" style="margin-bottom: 24px!important; margin-top: -13px; border-bottom: 2px solid #ededed">
    <div class="short-features">
      <div class="grid-style-2">
        <div class="heading-panel">
          <div
            class="col-xs-12 col-md-12 col-sm-12 grid-flex-custom"
            style="margin-bottom: 16px"
          >
            <h3 class="main-title text-left" style="">
              Hot Sellers
            </h3>
            <span
              class="hotseller-sub"
              style="display: inline; margin-left: 0px; color: #785edd;"
            >
              Join the hot sellers and increase your sales over 1 million other
              sellers.
            </span>
          </div>
        </div>

        <div class="container">
          <div class="row" v-if="hotsellers">
            <!-- <div class="col-xs-6 col-sm-4 col-md-2 col-join-tx"> -->
            <div
              class="col-lg-2 col-md-4 col-sm-12 col-xs-12 col-join-tx category-grid-box-tx-custom"
              style="padding-left: 6px!important;"
            >
              <div class="category-grid-box-1 category-grid-box-tx">
                <div class="hot-ribbon">
                  <img src="@/assets/images/hoticonv2.png" />
                </div>
                <div class="image-price">
                  <div class="image">
                    <router-link to="/postad">
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
                <slick ref="slick" :options="slickOptions" v-if="hotsellers">
                  <div
                    class="item item-carousel"
                    v-for="(sellers, index) in hotsellers"
                    :key="index"
                  >
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
                            <a href="/#/">
                              <img
                                v-if="sellers.avatar"
                                class="img-responsive"
                                :alt="sellers.name"
                                :src="
                                  `https://www.tradexplora.com.ng/media/${sellers.avatar}`
                                "
                              />
                              <img
                                v-else
                                class="img-responsive"
                                alt="Avatar"
                                src="https://www.tradexplora.com.ng/media/avatar.png"
                              />
                            </a>

                            <div
                              class="new-hot-sellers"
                              v-if="getdiff(sellers.createdAt) < 4"
                              style="left: 72px!important"
                            >
                              new
                            </div>
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

                          <div
                            class="follow"
                            v-show="checkFollowing(sellers.id)"
                          >
                            <p class="btn" @click.prevent="UnfollowSellerClick(sellers.id)">
                              <i class="fa fa-user-plus"></i> Unfollow
                            </p>
                          </div>
                          <div
                            class="follow"
                            v-show="!checkFollowing(sellers.id)"
                          >
                            <p class="btn" @click.prevent="followSellerClick(sellers.id)">
                              <i class="fa fa-user-plus"></i> Follow
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </slick>
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
import Slick from "vue-slick";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "hotsellers",
  data() {
    return {
      slickOptions: {
          //options can be used from the plugin documentation
          slidesToShow: 4,
          infinite: true,
          accessibility: true,
          adaptiveHeight: false,
          arrows: false,
          dots: false,
          draggable: true,
          edgeFriction: 0.30,
          swipe: true,
          cssEase: "ease",
          autoplay: true,
          // nextArrow: '<i class="fa fa-arrow-right nextArrowBtn"></i>',
          // prevArrow: '<i class="fa fa-arrow-left prevArrowBtn"></i>'
      },
      exists: null
    };
  },
  props: {
    hotsellers: Array,
    isLoading: Boolean
  },
  components: {
    Slick
  },
  computed: {
    ...mapGetters("auth", ["getFollowing"]),
  },
  methods: {
    ...mapActions("user", ["followSeller"]),
    checkFollowing(sellerid) {
      var exists = (this.getFollowing.indexOf(sellerid) > -1); //true
      if(exists){
        return true;
      }else{
        return false;
      }
    },
    sync: function() {},
    followSellerClick(sellerid) {
      // console.log(sellerid)
      let newFollower = this.getFollowing.push(sellerid);
      // console.log(newFollower);
      this.followSeller(newFollower);
    },
    UnfollowSellerClick(sellerid) {
      const index = this.getFollowing.indexOf(sellerid);
      if (index > -1) {
        this.getFollowing.splice(index, 1);
      }
      this.followSeller(this.getFollowing);
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },
    daysago(dateago) {
      if (dateago) {
        return moment.duration(moment().diff(dateago)).humanize() + " ago";
      }
    },
    getdiff(ddate) {
      const diff = moment().diff(ddate, "days");
      // console.log(diff);
      return diff;
    }
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

  mounted() {
    // var vm = this;
    // vm.hotsellers = this.hotsellers;
    // this.$nextTick(function(){
    this.sync();
    // }.bind(vm));
  },
  created() {
    // console.log(this.getFollowing)
  },
  beforeMount() {}
};
</script>

<style>
p.btn {
  text-transform: none !important;
  color: #fff !important;
  font-weight: 500 !important;
  margin-bottom: 0px !important;
  padding: 1px 15px !important;
}
/* div.follow:hover {
  box-shadow: 0px 4px 14px 6px rgba(0, 0, 0, 0.5);
} */
.owl-carousel {
  cursor: default !important;
}
.short-description-1.hot-sellers-name-tx.clearfix {
  cursor: default !important;
}
.new-hot-sellers {
  left: 72px !important;
}
@media (max-width: 767px) {
  .hotseller-sub {
    display: inline-block;
    margin-left: 0px;
    margin-top: 10px;
  }
}
.nextArrowBtn{
    position: absolute;
    z-index: 1000;
    top: 50%;
    right: 0;
    color: black;
}
.prevArrowBtn{
    position: absolute;
    z-index: 1000;
    top: 50%;
    left: 0;
    color: black;
}
</style>
