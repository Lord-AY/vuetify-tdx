<template>
  <div>
    <!-- <Loading :active.sync="isLoading" :is-full-page="fullPage"></Loading> -->
    <div class="list">
      <div class="main-content-area clearfix">
        <section
          class="section-padding gray page-search"
          style="padding-top: 30px;"
        >
          <div class="container">
            <!-- Row -->
            <div class="row">
              <div class="col-md-3 col-sm-12 col-xs-12">
                <div class="sidebar">
                  <div
                    class="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div
                      class="panel panel-default"
                      id="red-title"
                      v-for="(category, index) in getBillerCategories"
                      :key="index"
                    >
                      <!-- Heading -->
                      <div class="panel-heading" role="tab" id="headingFive">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            @click.prevent="showCategoryBillers(category)"
                            role="button"
                          >
                            {{ category }}
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-9 col-lg-9 col-xs-12">
                <!-- Row -->
                <div class="clearfix"></div>
                <div class="panel-body">
                  <transition name="fade">
                    <div
                      class="tab-pane fade in active"
                      v-show="selected"
                      id="tab1default"
                    >
                      <div class="row">
                        <Loading
                          :active.sync="isLoading"
                          :is-full-page="fullPage"
                        ></Loading>
                        <div
                          class="col-md-6 col-lg-3 mb-5"
                          v-show="!isLoading"
                          v-for="(biller, index) in filteredBillers"
                          :key="index"
                        >
                          <div class="card card-cat-tx mb-0 box-shadow-2">
                            <div class="item-card item-card-tx">
                              <div class="item-card-desc item-card-desc-tx">
                                <router-link
                                  v-if="biller.mediumImageId"
                                  :to="
                                    `paymentitem/${biller.billerid}/company/${biller.mediumImageId}`
                                  "
                                ></router-link>
                                 <router-link
                                  v-else
                                  :to="
                                    `paymentitem/${biller.billerid}/default/${defaultImg}`
                                  "
                                ></router-link>
                                <div class="item-card-img item-card-img-tx">
                                  <img
                                    v-if="biller.mediumImageId"
                                    :src="
                                      `https://quickteller.sandbox.interswitchng.com/Content/Images/Downloaded/${biller.mediumImageId}` +
                                        '.png'
                                    "
                                    alt="img"
                                    class="br-tr-7 br-tl-7"
                                  />
                                  <img
                                    v-else
                                    :src="'img/'+defaultImg+'.png'"
                                    alt="img"
                                    class="br-tr-7 br-tl-7"
                                  />
                                </div>
                                <div class="item-card-text item-card-text-tx">
                                  <h4 class="mb-0">{{ biller.billername }}</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>

                <div class="clearfix"></div>
                <!-- <div class="text-center margin-top-30 margin-bottom-20">
                  <ul class="pagination pagination-lg">
                    <li class="active">
                      <a href="index23c2.html?carspot_layout_type=1">1</a>
                    </li>
                    <li>
                      <a href="page/2/index23c2.html?carspot_layout_type=1"
                        >2</a
                      >
                    </li>
                    <li>
                      <a href="page/2/index23c2.html?carspot_layout_type=1"
                        >Next Page &raquo;</a
                      >
                    </li>
                  </ul>
                </div> -->
              </div>
            </div>
          </div>
        </section>
      </div>

      <!--Sticky header logic-->
      <input type="hidden" id="header_style" value="transparent" />
      <input type="hidden" id="is_sticky_header" value="0" />
      <input
        type="hidden"
        id="sticky_sb_logo_url"
        value="https://carspot.scriptsbundle.com/wp-content/uploads/2017/06/logo-2.png"
      />
      <input
        type="hidden"
        id="static_sb_logo_url"
        value="https://carspot.scriptsbundle.com/wp-content/uploads/2018/04/logo-1.png"
      />
      <input type="hidden" id="msg_notification_on" value="1" />
      <input type="hidden" id="msg_notification_time" value="1000000000" />
      <input type="hidden" id="is_unread_msgs" value="0" />
      <a href="#0" class="cd-top">Top</a>
      <!-- Email verification and reset password -->
    </div>
  </div>
</template>
<script>
require("../../public/assets/skins/color-skins/color15.css");
require("../../public/assets/plugins/horizontal-menu/horizontal.css");
// require("../../public/assets/carspot-css/wp-includes/css/dist/block-library/style.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/stylea1ec.css");
// require("../../public/assets/carspot-css/wp-content/plugins/contact-form-7/includes/css/styles58e0.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreenf43b.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet-search.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/style4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/video_player4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/bootstrap4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/bcustom.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/star-rating4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/bstyle4d.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/jquery-confirm4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/datepicker.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/et-line-fonts4d2c.css");
require("../../public/assets/carspot-css/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesome.min52c7.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/line-awesome.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/animate.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon24d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom_icons4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/select2.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/nouislider.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.carousel4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.theme4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/toastr.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/woocommerce4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/skins/minimal/minimal4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/jquery.fancybox.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/slider4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/carspot-menu4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/responsive-media4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css");
require("../../public/assets/carspot-css/wp-content/plugins/add-to-any/addtoany.min9be6.css");

import { mapActions, mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import ash from "lodash";
export default {
  data() {
    return {
      selected: false,
      filteredBillers: [],
      isLoading: true,
      fullPage: true,
      defaultImg: "TRADEXPLORA-V4.1-mini.b55c0fd7"
    };
  },
  components: {
    Loading
  },
  computed: {
    ...mapGetters("valueAdded", ["billerListings", "getBillerCategories"])
  },
  methods: {
    ...mapActions("valueAdded", ["fetchAllBillers"]),
    showCategoryBillers(category) {
      // console.log(category);
      let billerListings = this.billerListings;
      this.filteredBillers = [];
      for (let biller in billerListings) {
        if (billerListings[biller].categoryname == category) {
          this.filteredBillers.push(billerListings[biller]);
        }
      }
      console.log(this.filteredBillers);
    }
  },
  watch: {
    billerListings: {
      handler: function(billerListings) {
        if (billerListings !== null && billerListings !== undefined) {
          this.isLoading = true;
        }
        this.isLoading = false;
      }
    },
    filteredBillers: {
      handler: function(filteredArray) {
        this.selected = true;
        if (ash.isEmpty(filteredArray)) {
          this.isLoading = true;
        }
        this.isLoading = false;
      }
    }
  },
  created() {
    this.isLoading = true;
    this.fetchAllBillers();
    // console.log(this.getBillerCategories);
  }
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
