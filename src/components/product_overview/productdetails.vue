<template>
  <div class="product_details generic-wrapper">
    <div class="main-content-area clearfix" v-if="product">
      <section
        class="section-padding .margin-top-30 gray"
        style="padding-bottom: 50px; padding-top: 60px;"
      >
        <!-- Main Container -->
        <div class="container">
          <!-- Row -->
          <div class="col-md-8 col-xs-12 col-sm-8">
            <div class="heading-zone">
              <h1>{{ product.name }}</h1>
              <div class="short-history">
                <nav
                  aria-label="breadcrumb"
                  class="d-none d-sm-none d-md-none d-lg-block d-xl-block"
                >
                  <ol class="breadcrumb breadcrumb-tx arrowed ">
                    <li class="breadcrumb-item">
                      <a href="https://tradexplorer.com/">Home</a>
                    </li>

                    <li class="breadcrumb-item">
                      <a href="https://tradexplorer.com/"
                        >{{ product.category }}
                      </a>
                    </li>

                    <li class="breadcrumb-item">
                      <a href="https://tradexplorer.com/ford-edge">Edge</a>
                    </li>

                    <li class="breadcrumb-item active">
                      {{ product.name }}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-4 col-sm-4 detail_price col-xs-12">
            <div class="singleprice-tag">
               {{ product.amount |  currency }}
              <span class="">(Negotiable)</span>
            </div>
          </div> -->
          <!-- Middle Content Area -->
          <div class="col-md-8 col-xs-12 col-sm-12">
            <!-- Single Ad -->
            <div class="singlepage-detail">
              <div id="single-slider" class="flexslider">
                <ul class="slides" v-viewer="{movable: false}">
                  <li v-for="(photo, index) in product.photos" :key="index">
                    <a :href="photos" data-fancybox="group">
                      <img :alt="product.name" :src="photo" />
                    </a>
                    <i class="fa fa-search-plus zoom" @click="showZoom"></i>
                  </li>
                </ul>
              </div>
              <!-- Listing Slider Thumb -->
              <div id="carousel" class="flexslider">
                <ul class="slides small-slides">
                  <li v-for="(photo, index) in product.photos" :key="index">
                    <img :alt="product.name" draggable="false" :src="photo"  class="img-responsive" />
                  </li>
                </ul>
              </div>
              <!-- {{product.seller.id}} -->

              <div class="content-box-grid margin-top-20">
                <ul class="nav nav-pills" style="margin-bottom: 16px;">
                  <li class="tab-pane-tx" v-bind:class="{ 'active': tab1 }" @click='toggle("Description")'>
                    <!-- <a data-toggle="pill" href="#home">Description</a> -->
                    <div class="nav-link">Description</div>
                  </li>
                  <li class="tab-pane-tx" v-bind:class="{ 'active': tab2 }" @click='toggle("Features")'>
                    <!-- <a data-toggle="pill" href="#menu1">Features</a> -->
                    <div href="#" class="nav-link">Features</div>
                  </li>
                  <li class="tab-pane-tx" v-bind:class="{ 'active': tab3 }" @click='toggle("Reviews")'>
                    <!-- <a data-toggle="pill" href="#menu2">Reviews(0)</a> -->
                    <div href="#" class="nav-link">Reviews(0)</div>
                  </li>
                  <li class="tab-pane-tx" v-bind:class="{ 'active': tab4 }" @click='toggle("LocationMap")'>
                    <!-- <a data-toggle="pill" href="#menu3">Location Map</a> -->
                    <div href="#" class="nav-link">LocationMap</div>
                  </li>
                  
                  <li>
                    <div v-show="checkFollowing()">
                      <div class="follow-seller" @click.prevent="UnfollowSellerClick()">
                        <i class="fa fa-user-plus"></i>
                        <span class="tooltiptext" style='color:red'>Unfollow Seller</span>
                      </div>              
                    </div>   
                    <div v-show="!checkFollowing()">   
                      <div class="follow-seller" @click.prevent="followSellerClick()">
                        <i class="fa fa-user-plus"></i>
                        <span class="tooltiptext">Follow Seller</span>
                      </div>
                    </div>
                  </li>
                  <!-- <li class="tab-pane-tx"><a data-Limit="pill" href="#menu3">Menu 3</a></li> -->
                </ul>

                <div class="">
                  <!-- <router-view> -->
                    
                    <div  class="tab-pane fade in active" v-if="tab1">
                      <h3 class="tab-title">Description</h3>
                      <!-- Paste -->
                      <div class="desc-points">
                        <p>
                          {{ product.description }}
                        </p>
                      </div>

                      <!-- Desc tab end -->
                    </div>

                    <div class="tab-pane fade in active" v-if="tab2">
                      <h3 class="tab-title">Features</h3>
                      <div class="desc-points">
                        <span><strong>Price</strong> :</span>
                        {{ product.currency }}{{ product.amount }}
                        <span class="">(Negotiable)</span>
                      </div>
                      <!--Features tab end  -->
                    </div>
                    <div
                      class="tab-pane fade in active"
                      style="margin-top: 26px!important"
                      v-if="tab3"
                    >
                      <h3 class="tab-title" style="display: inline-block;">
                        Reviews
                      </h3>
                      <div class="viewall-similar" v-if="productcomment">
                        <a @click="limit2 = null" v-show="limitBtn2"
                          >Show All
                          <i
                            class="fa fa-arrow-circle-right"
                            style="color: #4caf50;"
                          ></i
                        ></a>
                        <a @click="limit2 = 3" v-show="!limitBtn2"
                          >Show Less
                          <i
                            class="fa fa-arrow-circle-right"
                            style="color: #4caf50;"
                          ></i
                        ></a>
                      </div>

                      <hr style="margin-top: -10px;" />
                      <!-- {{ productcomment }} -->
                      <div class="row" v-for="(comment, index) in toggleComment" :key="index">
                        <div class="col-md-12">
                          <h4 class="review-name" style="display: inline-block">
                            {{ comment.firstname }}  {{ comment.lastname}}:
                          </h4>
                          <!-- <span class="rating-number">4</span> -->
                          <i class="fa fa-star star-rating-summary"></i>
                          <p class="review-date">{{ daysago(format_date(comment.createdAt)) }}</p>
                          <p class="review">
                            {{ comment.comment }}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-md-12 send-review">
                          <h4 class="send-review-title">Send Your Review</h4>
                          <div class="review-box">
                            <textarea
                              name=""
                              class="form-control review-form"
                              id=""
                              rows="3"
                            ></textarea>
                          </div>
                          <button class="btn btn-primary">Submit</button>
                        </div>
                      </div>
                      <!-- Reviews tab end -->
                    </div>
                    <div class="tab-pane fade in active" v-if="tab4">
                      <h3 class="tab-title">Location Map</h3>
                      <div v-if="product.latitude != null && product.logitude !=null ">
                        <iframe
                          :src="`https://maps.google.com/maps?q=${product.latitude},${product.logitude}&hl=es;z=14&amp;output=embed`"
                          width="600"
                          height="450"
                          frameborder="0"
                          style="border:0;"
                          allowfullscreen="">
                        </iframe>
                      </div>
                      <div v-else>
                        No Location for this Product
                      </div>
                    </div>

                  <!-- </router-view> -->
                </div>
              </div>
              <div class="clearfix"></div>
            </div>

            <div class="clearfix"></div>
            <div class="ad-share text-center">
              <router-link to="/referal">
                <div
                  data-Limit="modal"
                  data-target=".share-ad"
                  class="small-box col-md-3 col-sm-3 col-xs-12"
                >
                  <i class="fa fa-share-alt"></i>
                  <span class="hidetext">Share</span>
                </div>
              </router-link>
              <a
                class="small-box col-md-3 col-sm-3 col-xs-12"
                style="padding-left: 22px; padding-right: 22px;"
                href="javascript:void(0);"
                id="ad_to_fav"
                data-adid="1375"
              >
                <i class="fa fa-heart-o active"></i>
                <span class="hidetext"> Add to Wishlist </span>
              </a>
              <a
                class="small-box col-md-3 col-sm-3 col-xs-12"
                id="ad_to_fav"
                data-adid="1375"
                @click.prevent="pustTocompare"
              >
                <i class="fa fa-compress"></i>
                <span class="hidetext"> Compare </span> 
              </a>   
              <div
                data-target=".report-quote"
                data-Limit="modal"
                class="small-box col-md-3 col-sm-3 col-xs-12"
                @click.prevent="showReport(product.id,product.name)"
              >
                <i class="fa fa-warning" style="color: red!important;"></i>
                <span class="hidetext" style="color: red!important;"
                  >Report</span
                >
              </div>
              <reportModal :productname="product.name" :productid="product.id" @closeReport="closeReport" />
            </div>
            <div
              class="modal fade report-quote"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                      <span aria-hidden="true">&#10005;</span
                      ><span class="sr-only">Close</span>
                    </button>
                    <h3 class="modal-title">
                      Why are you reporting this ad?
                    </h3>
                  </div>
                  <div class="modal-body">
                    <!-- content goes here -->
                    <form>
                      <div class="skin-minimal">
                        <div class="form-group col-md-12 col-sm-12">
                          <ul class="list">
                            <li>
                              <select class="alerts" id="report_option">
                                <option value="Spam">Spam</option>
                                <option value="Offensive">Offensive</option>
                                <option value="Duplicated">Duplicated</option>
                                <option value="Fake">Fake</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="form-group  col-md-12 col-sm-12">
                        <label></label>
                        <textarea
                          placeholder="Write your comments."
                          rows="3"
                          class="form-control"
                          id="report_comments"
                        ></textarea>
                      </div>
                      <div class="clearfix"></div>
                      <div
                        class="col-md-12 col-sm-12 margin-bottom-20 margin-top-20"
                      >
                        <input type="hidden" id="ad_id" value="1375" />
                        <button
                          type="button"
                          class="btn btn-theme btn-block"
                          id="sb_mark_it"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div class="clearfix"></div>

            <div class="list-style-1 margin-top-20">
              <div class="panel with-nav-tabs panel-default">
                <div class="panel-heading">
                  <ul class="nav nav-tabs"></ul>
                </div>
                <div class="panel-body">
                  <div class="tab-content">
                    <div class="tab-pane  in active  fade" id="tab1default">
                      <h3 class="tab-title">Similar Ads</h3>
                      <SimilarProductLoader @showLoader="showLoader" :similarprods="similarprods"></SimilarProductLoader>
                      <div
                        class="ads-list-archive"
                        v-show="!showLoader(similarprods)"
                        v-for="simProduct in toggleLimit"
                        :key="simProduct.id"
                      >
                        <!-- Image Block -->
                        <div class="col-lg-4 col-md-4 col-sm-4 no-padding">
                          <!-- Img Block -->
                          <div class="ad-archive-img">
                          <router-link
                            :to="{ path: '/productDetails', query: { id: simProduct.id, cid: simProduct.cid, uid:simProduct.uid }}"
                          >
                               <img
                                      v-for="(image,
                                      index) in simProduct.photos.slice(0, 1)"
                                      :key="index"
                                      :src="image"
                                      :alt="simProduct.name"
                                      class="img-responsive"
                                    />
                            </router-link>
                          </div>
                          <!-- Img Block -->
                        </div>
                        <!-- Ads Listing -->
                        <div class="clearfix visible-xs-block"></div>
                        <!-- Content Block -->
                        <div class="col-lg-8 col-md-8 col-sm-8 no-padding">
                          <!-- Ad Desc -->
                          <div class="ad-archive-desc">
                            <!-- Price -->
                            <div class="ad-price">
                              &#8358; {{ formatCurrency(simProduct.amount) }}
                              <span class="" v-if="simProduct.negotiable"
                                >(Negotiable)</span
                              >
                              <span class="" v-else>(Fixed)</span>
                            </div>
                            <!-- Title -->
                            <h3>
                          <router-link
                            :to="{ path: '/productDetails', query: { id: simProduct.id, cid: simProduct.cid, uid:simProduct.uid }}"
                          >
                              {{ simProduct.name }}</router-link
                              >
                            </h3>
                            <!-- Category -->
                            <div class="category-title">
                              <span class="padding_cats"
                                >
                            <router-link
                              :to="{ path: '/productDetails', query: { id: simProduct.id, cid: simProduct.cid, uid:simProduct.uid }}"
                            >
                                  {{ simProduct.category }}
                                  </router-link
                                ></span
                              >
                            </div>
                            <!-- Short Description -->
                            <div class="clearfix visible-xs-block"></div>
                            <p class="hidden-sm">
                              {{ simProduct.desciption }}
                            </p>
                            <!-- Ad Features -->

                            <!-- <div id="carousel" class="flexslider"> -->
                              <ul class="slides small-slides add_info">
                                <li 
                                  class="similar-ads-picture-thumbnails" 
                                  v-for="(photo, index) in simProduct.photos"
                                  :key="index"
                                >
                                <!-- :class="index == 0 ? 'active' : ''" -->
                                <router-link
                                  :to="{ path: '/productDetails', query: { id: simProduct.id, cid: simProduct.cid, uid:simProduct.uid }}"
                                >
                                  <img :src="photo" :alt="simProduct.name" />
                                </router-link>
                                </li>
                              </ul>
                            <!-- </div> -->

                            <!-- Ad History -->
                            <div class="clearfix archive-history">
                              <div style="margin-top: 8px;">
                                Location : {{ simProduct.region }}
                              </div>
                              <div class="last-updated">
                                Posted : {{ daysago(format_date(simProduct.createdAt)) }}
                              </div>
                              <div class="ad-meta">
                                <a
                                  href="javascript:void(0);"
                                  data-adid="960"
                                  class="btn save-ad"
                                  ><i class="fa fa-heart-o"></i> </a
                                >
                             <router-link
                                :to="{ path: '/productDetails', query: { id: simProduct.id, cid: simProduct.cid, uid:simProduct.uid }}"
                              >                                  
                                <i class="fa fa-eye"></i></router-link
                                >
                              </div>
                            </div>
                          </div>
                          <!-- Ad Desc End -->
                        </div>
                        <!-- Content Block End -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" style="margin-top: 36px!important;">
                <div class="col-md-5"></div>
                <div class="col-md-3">
                  <!--                   <div class="viewall-similar">
                    <a href="">Show More</a>
                  </div> -->
                  <div class="viewall-similar" id="show-more-details" v-if="similarprods.length > 3">
                    <a @click="limit = null" v-show="limitBtn"
                      >Show More
                      <i
                        class="fa fa-arrow-circle-right"
                        style="color: #4caf50;"
                      ></i
                    ></a>
                    <a @click="limit = 3" v-show="!limitBtn"
                      >Show Less
                      <i
                        class="fa fa-arrow-circle-right"
                        style="color: #4caf50;"
                      ></i
                    ></a>
                  </div>
                </div>
                <div class="col-md-5"></div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="col-md-4 col-xs-12 col-sm-12">
            <div class="sidebar">
              <div class="detail_price">
                <div id="singleprice-tag-tx">
                  &#x20A6; {{  formatCurrency(product.amount) }}

                  <!-- <span class="">(Negotiable)</span> -->
                </div>
              </div>
              <div class="white-bg user-contact-info">
                <div class="user-info-card">
                  <div class="user-photo col-md-12 col-sm-12  col-xs-12 center-with-flex">
                    <a href="../../dealer/gavien72/index.html" class="link">
                      <img
                        v-if="getUser === null"
                        class="img-circle"
                        alt="Profile Pic"
                        src="https://www.tradexplora.com.ng/media/avatar.png"
                      />
                      <img
                        v-else
                        class="img-circle"
                        alt="Profile Pic"
                        :src="
                          `https://www.tradexplora.com.ng/media/${getUser.pictureUrl}`
                        "
                      />
                    </a>
                    <!-- <div class="seller-online"></div> -->
                    <div class="seller-offline"></div>
                  </div>
                  <div class="user-information  col-md-12 ">
                    <div class="user-name">
                      <a
                        class="hover-color"
                        href="../../dealer/gavien72/index.html"
                      >
                        {{ product.seller.firstname }}
                        {{ product.seller.lastname }}
                      </a>
                    </div>
                    <div class="item-date">
                      <div class="ad-pub">
                        <h4>{{
                          daysago(format_date(product.seller.updatedAt))
                        }}</h4>
                        <span>Last Logged in</span>
                        </div
                      >
                      <div
                        class="ad-pub"
                      >
                        <h4>{{ format_date(product.seller.createdAt) }}</h4>
                        <span>Registered</span>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <div class="btn btn-block btn-primary view-contact cusbutton" style=" font-size: 20px;">
                  <div v-if="!showDetails">
                    <div class="selector number" @click="showDetails = !showDetails" data-last="2221111999">
                      <i class="fa fa-phone place-left"></i>
                      View Contact
                    </div>
                  </div>
                  <div class="selector number" v-if="showDetails" style="color: #fff!important; font-weight: 400; cursor: pointer;" @click="showDetails = !showDetails">{{ product.seller.phone }}</div>
                  
                </div>
                <div
                  class="category-list-title"
                  style="padding: 0;"
                  v-if="isLoggedIn"
                >
                  <!-- Email Button trigger modal -->
                  <div v-if="!isHidden">
                    <h5 v-on:click="isHidden = !isHidden">
                      <div
                        class="btn btn-block btn-primary contact-seller cusbutton"
                        style="font-size: 20px;"
                      >
                        <i class="fa fa-commenting-o place-left"></i> Chat With Seller
                      </div>
                    </h5>
                  </div>
                  <div class="row" style="margin-top: 10px;" v-if="isHidden">
                    <p style="font-weight: 500; margin-bottom: 6px; color: #232323;">Message &#128522;</p>
                    <textarea
                      class="message-box"
                      rows="6"
                      cols="50"
                      v-model="message"
                    ></textarea>
                    <h5 class="send-message">
                      <div
                        class="btn btn-block btn-primary send-message-button cusbutton"
                        style="border-radius:6px; font-size: 20px;box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4)"
                        @click="sendSellerMessage()"
                      >
                        <i class="fa fa-commenting-o"></i> Send Message
                      </div>
                    </h5>
                  </div>
                </div>
              </div>

              <!-- Saftey Tips  -->
              <div class="widget" style="margin-bottom: 16px;">
                <div class="widget-heading">
                  <h4
                    class="panel-title"
                    style="text-align: center; font-size: 16px; font-weight: 600;"
                  >
                    <span>Safety tips for buyers</span>
                  </h4>
                </div>
                <div class="widget-content saftey">
                  <ol style="list-style-type: circle;">
                    <li>Use a safe location to meet seller</li>
                    <li>Avoid cash transactions</li>
                    <li>Beware of unrealistic offers</li>
                    <li>Check item and be satisfied before payment</li>
                  </ol>
                </div>
              </div>
              <div class="widget" style="margin-bottom: 16px;">
                <div class="widget-content ">
                  <div class="ads">
                    <img src="@/assets/images/gloads.jpg" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </section>

      <div class="floating-elements"></div>
    </div>
    <!--Footer Section-->
    <!--/Footer Section-->

    <!--Sticky header logic-->
    <input type="hidden" id="header_style" value="white" />
    <input type="hidden" id="is_sticky_header" value="1" />
    <input
      type="hidden"
      id="sticky_sb_logo_url"
      value="../wp-content/uploads/sites/28/2018/04/logo-2.png"
    />
    <input
      type="hidden"
      id="static_sb_logo_url"
      value="@/assets/carspot-css/wp-content/uploads/sites/28/2018/04/logo-2.png"
    />
    <input type="hidden" id="msg_notification_on" value="" />
    <input type="hidden" id="msg_notification_time" value="100000" />
    <input type="hidden" id="is_unread_msgs" value="0" />
    <a href="#0" class="cd-top">Top</a>
  </div>
</template>
<script>
/* eslint-disable no-undef */
// import productSlider from "@/components/product_overview/productSlider";
// import pricingArea from "@/components/product_overview/pricingArea";

// require("../../../public/assets/carspot-css/wp-content/themes/carspot/css/bootstrap4d2c.css");
const formatCurrency = require('format-currency')
import SimilarProductLoader from "@/components/loaders/SimilarProductLoader";
import reportModal from "@/components/modals/reportModal";
import { mapActions, mapGetters } from "vuex";
import ash from "lodash";
import moment from "moment";
let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;
// import VueImageSlider from 'vue-image-slider';
// import Slick from 'vue-slick';
// import './../../../node_modules/slick-carousel/slick/slick.css';

export default {
  name: "productDetails",
  data() {
    return {
      limit: 3,
      limit2: 2,
      limitBtn: true,
      limitBtn2: true,
      isHidden: false,
      message: null,
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      showDetails: false,
      singleCart: null,
      slickOptions: {
          //options can be used from the plugin documentation
          slidesToShow: this.photos.length,
          infinite: true,
          accessibility: true,
          adaptiveHeight: false,
          arrows: false,
          dots: false,
          draggable: true,
          edgeFriction: 0.30,
          swipe: true
      },
      followingClone:[],
      toStringvar: ""
    };
  },
  components: {
    SimilarProductLoader,
    reportModal
  },
  props: {
    product: Object,
    similarprods: [Object, Array],
    getUser: [Object, Array],
    productcomment: Array,
    fsingleCategory: Object,
    photos: Array,
  },
  methods: {
    ...mapActions("chat", ["sendMessage"]),
    ...mapActions("user", ["followSeller"]),
    ...mapActions("product", ["fetchComparedProducts"]),
    compareProduct(){
      let payload = {
        cid:this.product.cid,
        uid:this.product.uid,
        name:this.product.name,
      }
      this.fetchComparedProducts(payload);
    },
    pustTocompare(){
      if(this.getComparedProduct.length < 1){
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'There are no Product to Compare Against',
        })
      }else{
        this.$router.push({ path: '/comparison', query: { id: this.product.id, cid: this.product.cid, uid:this.product.uid, name:this.product.name }})
      }
    },
    checkFollowing() {
      var exists = (this.followingClone.indexOf(this.product.seller.id) > -1); //true
      if(exists){
        return true;
      }else{
        return false;
      }
    },
    followSellerClick() {
      // console.log("to follow seller")
      let newFollower = this.followingClone.push(this.product.seller.id);
      this.toStringvar = this.followingClone.join();  
      // console.log(newFollower);
      this.followSeller(this.toStringvar);
    },
    UnfollowSellerClick() {
      const index = this.followingClone.indexOf(this.product.seller.id);
      if (index > -1) {
        this.followingClone.splice(index, 1);
      }
      this.toStringvar = this.followingClone.join();  
      this.followSeller(this.toStringvar);
    },
    formatCurrency(data){
      return formatCurrency(data)
    },
    sync() {
      $(document).ready(function() {
        $(".owl-carousel").owlCarousel({
          items: 5,
          loop: true,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: false
            },
            600: {
              items: 3,
              nav: false
            },
            1000: {
              items: 5,
              nav: true
            }
          }
        });
        $("#carousel").flexslider({
          animation: "slide",
          controlNav: false,
          animationLoop: false,
          slideshow: false,
          itemWidth: 160,
          itemMargin: 5,
          asNavFor: "#single-slider",
          rtl: true
        });
        $("#single-slider").flexslider({
          rtl: true,
          animation: "slide",
          controlNav: false,
          animationLoop: false,
          slideshow: false,
          sync: "#carousel",
        });
      });
    },
    avatarCheck() {
      let avatar = this.getUser.pictureUrl;
      if (avatar !== null || avatar !== undefined || avatar !== "") {
        // return `http://157.245.82.193/media/${getUser.pictureURL}`;
        return true;
      }
      return false;
    },
    showLoader(data) {
      if (ash.isEmpty(data) || data == undefined || data == null) {
        return true;
      } else {
        return false;
      }
    },
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
     sendSellerMessage() {
      if(this.message){
        const payload = {
          message: this.message,
          recieverId: this.$route.params.uid,
          senderId: this.getUser.id,
          senderName: this.getUser.firstname + " " + this.getUser.lastname,
          senderAvatar: this.getUser.pictureUrl
        };
        this.sendMessage(payload);
        this.message = null;
        // this.scrollToElement();
      }else{
        this.testing = true
      }
    },
    toggle(param){
      // console.log(param)
      if(param == "Description"){
        this.tab1=true;
        this.tab2=false;
        this.tab3=false;
        this.tab4=false;
      }else if(param == "Features"){
        this.tab1=false;
        this.tab2=true;
        this.tab3=false;
        this.tab4=false;
      }else if(param == "Reviews"){
        this.tab1=false;
        this.tab2=false;
        this.tab3=true;
        this.tab4=false;
      }else if(param == "LocationMap"){
        this.tab1=false;
        this.tab2=false;
        this.tab3=false;
        this.tab4=true;
      }else{

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
    showReport(id, name){
      // console.log("to show report")
      // console.log(name);
      this.$modal.show('report-product', {
        text: {"name":name, "id":id}
      });
    },
    closeReport () {
      this.$modal.hide('report-product');
      this.showSuccess("Your Complain has been Submitted");
    },
    showZoom() {
        const viewer = this.$el.querySelector('.slides').$viewer
        viewer.show()
    },
    showError(error, title) {
      this.$notify({
        group: "errors",
        type: "error",
        title,
        width: "100%",
        text: error,
        classes: "error",
        duration: 10000,
        speed: 1000,
        position: "top right"
      });
    },
    showSuccess(msgtext) {
      this.$notify({
        group: "notify",
        type: "success",
        title: "Success",
        text: msgtext,
        position: "center right",
        duration: 10000,
        speed: 500
      });
    }
  },
  computed: {
    toggleLimit() {
      return this.limit
        ? this.similarprods.slice(0, this.limit)
        : this.similarprods;
    },
    toggleComment() {
      if(this.productcomment){
        return this.limit2
          ? this.productcomment.slice(0, this.limit2)
          : this.productcomment;
      }else{
        return null
      }
    },
    ...mapGetters("chat", ["getErrors", "getSuccess"]),
    ...mapGetters("auth", ["isLoggedIn", "getFollowing"]),
    ...mapGetters("product", ["getComparedProduct"])
  },
  watch: {
    $route: "sync",
    getFollowing: {
      handler: function(data) {
        for(let i in this.getFollowing){
          this.followingClone.push(this.getFollowing[i])
        }
      }
    },
    limit: {
      handler: function(limit) {
        if (limit == null) {
          this.limitBtn = false;
        } else {
          this.limitBtn = true;
        }
      }
    },
    limit2: {
      handler: function(limit) {
        if (limit == null) {
          this.limitBtn2 = false;
        } else {
          this.limitBtn2 = true;
        }
      }
    },
    getErrors: {
      handler: function(errors) {
        if (errors === null || errors === undefined) {
          return;
        }
        this.showError(errors);
      }
    },
    getSuccess: {
      handler: function(success) {
        if (success === null || success === undefined) {
          return;
        }
        this.showSuccess(success);
      }
    }
  },
  created() {
    // console.log(this.product);
    window.scrollTo(0,0);
    var tempfix = this.fsingleCategory;
    // array1.concat(array2)
    // this.photos = this.product.photos;
    if(this.fsingleCategory){
      if(this.fsingleCategory.checkFields !== null){
        this.singleCart = this.fsingleCategory.checkFields.split(',').concat(this.fsingleCategory.checkFields.split(','));
      }
    }
    // console.log(this.productcomment);
    for(let i in this.getFollowing){
      this.followingClone.push(this.getFollowing[i])
    }
    this.sync();
    this.compareProduct();
  },
  mounted: function(){
    this.sync();
  }
};
</script>

<style scoped>
.selector {
  cursor: pointer;
}
.zoom {
  position: absolute;
  top: 70%;
  left: 3%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}
.breadcrumb {
  padding: 8px 15px 8px 0px !important;
  margin-bottom: 20px !important;
  list-style: none;
  background-color: #f5f5f5 !important;
  border-radius: 4px;
}

.breadcrumb > li + li:before {
  padding: 0 5px !important;
  color: #ccc !important;
  content: "/\00a0" !important;
}

.single-slider img {
  max-height: 576px!important;
}

.small-slides img {
  max-height: 100px;
}

.boxicon {
  width: 109px;
}

.tab-pane-tx a {
  background: none !important;
  color: #9a9a9a !important;
  font-size: 16px;
}

.tab-pane-tx.active a {
  /* background: none!important; */
  color: #000 !important;
}
.tab-pane-tx.active {
  border-bottom: 3px solid #4caf50 !important;
  color: #000 !important;
  font-weight: 700;
}

textarea {
    resize: none!important;
    border: 1px solid #e3e3e3;
}

.message-box {
  width: 100%;
  border-radius: 6px;
}

.message-box:focus {
  border: 1px solid rgb(76, 175, 80);
  box-shadow: 0px 1px 10px 0px rgba(76, 175, 80, 0.3) ;
}

.send-message {
  width: 100%;
  margin-top: 12px;
}

.cusbutton {
  cursor: pointer;
  position: relative;
  font-size: 16px;
}
.cusbutton .hover {
  display: none;
  position: absolute;
}
.cusbutton:hover .hover {
  display: block;
}
.cusbutton:hover .original {
  display: none;
}

.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}

.visible-xs-block {
  display: none !important;
}

.btn-success {
  color: #fff;
  background-color: #4caf50;
  border-color: #4caf50;
}

.btn-warning {
  background-color: #f0ad4e !important;
  border-color: #eea236 !important;
}

.btn-warning:hover {
  background-color: #dd9a3c !important;
  border-color: #dd9a3c !important;
}
.nav-pills > li {
    float: left;
}
.nav > li {
    position: relative;
    display: block;
}
.nav > li > a {
    position: relative;
    display: block;
    padding: 10px 15px;
}
.zoomicon {
    text-shadow: 1px 1px 1px #ccc;
    font-size: 1.5em;
}
</style>

<style lang="scss">
$vue-navy: #2c3e50;
$vue-navy-light: #3a5169;
$vue-teal: #42b883;
$vue-teal-light: #42b983;
$gray: #666a73;
$light-gray: #f8f8f8;


.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: $gray;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 640px;
  
  &--overflow-container {
    overflow: hidden;
  }
  
  &--nav__left,
  &--nav__right {
    display: inline-block;
    width: 15px;
    height: 15px;
    padding: 10px;
    box-sizing: border-box;
    border-top: 2px solid $vue-teal;
    border-right: 2px solid $vue-teal;
    cursor: pointer;
    margin: 0 20px;
    transition: transform 150ms linear;
    &[disabled] {
      opacity: 0.2;
      border-color: black;
    }
  }
  
  &--nav__left {
    transform: rotate(-135deg);
    &:active {
      transform: rotate(-135deg) scale(0.9);
    }
  }
  
  &--nav__right {
    transform: rotate(45deg);
    &:active {
      transform: rotate(45deg) scale(0.9);
    }
  }
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
 
  .card-carousel--card {
    margin: 0 10px;
    cursor: pointer;
    box-shadow: 0 4px 15px 0 rgba(40,44,53,.06), 0 2px 2px 0 rgba(40,44,53,.08);
    background-color: #fff;
    border-radius: 4px;
    z-index: 3;
    margin-bottom: 2px;
    
    &:first-child {
      margin-left: 0;
    }
    
    &:last-child {
      margin-right: 0;
    }
    
    img {
      vertical-align: bottom;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      transition: opacity 150ms linear;
      user-select: none;
      
      &:hover {
        opacity: 0.5;
      }
    }
    
    &--footer {
      border-top: 0;
      padding: 7px 15px;
      
      p {
        padding: 3px 0;
        margin: 0;
        margin-bottom: 2px;
        font-size: 19px;
        font-weight: 500;
        color: $vue-navy;
        user-select: none;
        
        &.tag {
          font-size: 11px;
          font-weight: 300;
          padding: 4px;
          background: rgba(40,44,53,.06);
          display: inline-block;
          position: relative;
          margin-left: 4px;
          color: $gray;
          
          &:before {
            content:"";
            float:left;
            position:absolute;
            top:0;
            left: -12px;
            width:0;
            height:0;
            border-color:transparent rgba(40,44,53,.06) transparent transparent;
            border-style:solid;
            border-width:8px 12px 12px 0;
        }
          &.secondary {
            margin-left: 0;
            border-left: 1.45px dashed white;
            &:before {
              display: none !important;
            }
          }
        
          &:after {
            content:"";
            position:absolute;
            top:8px;
            left:-3px;
            float:left;
            width:4px;
            height:4px;
            border-radius: 2px;
            background: white;
            box-shadow:-0px -0px 0px #004977;
          }
        }
      }
    }
  }
}

h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: $vue-teal;
}
</style>
