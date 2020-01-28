<template>
  <div>
    <div class="list">
      <div class="main-content-area clearfix">
        <section
          class="section-padding gray page-search"
          style="padding-top: 30px;"
        >
          <div class="container">
            <!-- Row -->
            <div class="row">
              <div class="col-md-12 col-lg-12 col-xs-12">
                <!-- Row -->
                <div class="row">
                  <div class="clearfix"></div>
                  <div class="list-style-1">
                    <div class="panel with-nav-tabs panel-default">
                      <div class="panel-heading">
                        <ul class="nav nav-tabs">
                          <li class="active">
                            <a href="#tab1default" data-toggle="tab"
                              >Search Results ({{ results.length }})</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="panel-body">
                        <div class="tab-content" v-if="results !== null">
                          <div
                            class="tab-pane fade in active"
                            id="tab1default"
                            v-for="(product, index) in results"
                            :key="index"
                          >
                            <div class="ads-list-archive featured_ads">
                              <!-- Image Block -->
                              <div
                                class="col-lg-4 col-md-4 col-sm-4 no-padding"
                              >
                                <!-- Img Block -->
                                <div class="ad-archive-img">
                                  <router-link
                                    :to="
                                      `/ProductDetails/${product.id}/${product.cid}`
                                    "
                                  >
                                    <img
                                      v-for="(image, index) in product.photos.slice(0, 1)"
                                      :key="index"
                                      :src="image"
                                      :alt="product.name"
                                      class="img-responsive"
                                    />
                                  </router-link>
                                  <div
                                    class="arrow-ribbon bg-primary bg-tag-tx"
                                  >
                                    Premium
                                  </div>
                                </div>
                                <!-- Img Block -->
                              </div>
                              <!-- Ads Listing -->
                              <div class="clearfix visible-xs-block"></div>
                              <!-- Content Block -->
                              <div
                                class="col-lg-8 col-md-8 col-sm-8 no-padding"
                              >
                                <!-- Ad Desc -->
                                <div class="ad-archive-desc">
                                  <!-- Price -->
                                  <div class="ad-price">
                                    &#8358; {{ product.amount }}
                                    <span class v-if="product.negotiable"
                                      >(Negotiable)</span
                                    >
                                    <span class v-else>(Fixed)</span>
                                  </div>
                                  <!-- Title -->
                                  <h3>
                                    <router-link
                                      :to="
                                        `/ProductDetails/${product.id}/${product.cid}`
                                      "
                                    >
                                      {{ product.name }}
                                    </router-link>
                                  </h3>
                                  <!-- Category -->
                                  <div class="category-title">
                                    <span class="padding_cats">
                                      <router-link
                                        :to="
                                          `/ProductDetails/${product.id}/${product.cid}`
                                        "
                                        >{{ product.category }}</router-link
                                      >
                                    </span>
                                  </div>
                                  <!-- Short Description -->
                                  <div class="clearfix visible-xs-block"></div>
                                  <p class="hidden-sm">
                                    {{ product.description }}
                                  </p>
                                  <!-- Ad Features -->
                                  <ul class="add_info">
                                    <li>
                                      <router-link
                                        :to="
                                          `/ProductDetails/${product.id}/${product.cid}`
                                        "
                                      >
                                        <img
                                      v-for="(image, index) in product.photos.slice(1)"
                                      :key="index"
                                      :src="image"
                                      :alt="product.name"
                                      class="img-responsive"
                                    />
                                      </router-link>
                                    </li>
                                  </ul>
                                  <!-- Ad History -->
                                  <div class="clearfix archive-history">
                                    <div class="last-updated">
                                      Posted : January 24, 2019
                                    </div>
                                    <div class="ad-meta">
                                      <a
                                        href="javascript:void(0);"
                                        data-adid="1375"
                                        class="btn save-ad"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                        Favourite
                                      </a>
                                      <router-link
                                        :to="
                                          `/ProductDetails/${product.id}/${product.cid}`
                                        "
                                        class="btn2 btn-success"
                                      >
                                        <i class="fa fa-phone"></i> View Details
                                      </router-link>
                                    </div>
                                  </div>
                                </div>
                                <!-- Ad Desc End -->
                              </div>
                              <!-- Content Block End -->
                            </div>
                          </div>
                        </div>
                        <div v-else> <h4>Sorry No Results for this search...</h4></div>
                      </div>
                    </div>
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

export default {
  props: {
    results: [Object, Array, String],
  },
}
</script>

<style>
.ad-meta:first-child a {
  margin-right: 10px;
}
</style>
