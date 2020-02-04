<template>
  <div class="product_details generic-wrapper">
    <div class="main-content-area clearfix">
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
                <ul class="slides">
                  <li v-for="(photo, index) in product.photos" :key="index">
                    <a :href="photos" data-fancybox="group">
                      <!-- <a href="@/assets/carspot-css/wp-content/uploads/sites/28/2017/12/IMG_5006.jpg" data-fancybox="group"> -->
                      <!-- <img alt="2017 Maserati Ghibli SQ4 Blue" src="@/assets/carspot-css/wp-content/uploads/2017/12/IMG_5006-650x420.jpg"> -->
                      <img :alt="product.name" :src="photo" />
                    </a>
                    <i class="fa fa-search-plus zoom"></i>
                  </li>
                </ul>
              </div>
              <!-- Listing Slider Thumb -->
              <div id="carousel" class="flexslider">
                <ul class="slides small-slides">
                  <!-- <li><img alt="2017 Maserati Ghibli SQ4 Blue" draggable="false" src="@/assets/carspot-css/wp-content/uploads/sites/28/2017/12/IMG_5006-200x112.jpg"></li> -->
                  <li v-for="(photo, index) in product.photos" :key="index">
                    <img :alt="product.name" draggable="false" :src="photo"  class="img-responsive" />
                  </li>
                </ul>
              </div>

              <!-- Heading Area -->
              <!--
                <div class="key-features">
                  <div class="boxicon" v-for="(field,index) in singleCart" :key="index">
                    <a
                      data-Limit="tooltip"
                      data-placement="bottom"
                      title="Engine Type"
                      href="javascript:void(0)"
                    >
                      <i class="flaticon-gas-station-1 petrol"></i>
                      <p>{{field}}</p>
                    </a>
                  </div>
                </div> 
              -->
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
                    <div class="follow-seller">
                      <i class="fa fa-user-plus"></i>
                      <span class="tooltiptext">Follow Seller</span>
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
                        <!-- <ol>
                          <li>Looking to sell the car urgently.</li>
                          <li>Engine is good condition.</li>
                          <li>Complete service history available.</li>
                          <li>Original return file is available.</li>
                          <li>After Market Alloy rims.</li>
                          <li>As good as a brand new car.</li>
                          <li>Lady Driven Car in Immaculate Condition.</li>
                          <li>No Work Required in Car.</li>
                          <li>
                            Excellent Mileage , Local Average = 14 km , Long
                            Average = 16 km
                          </li>
                        </ol> -->
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
                      <div class="viewall-similar" v-if="productcomment.length > 2">
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
                      <!-- <div id="menu2" class="tab-pane fade"> -->
                      <!-- <h3 class="tab-title">Reviews</h3> -->
<!--                       <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.957357390124!2d7.483373915245445!3d9.067649490878031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a7ec1aac221%3A0xc536ed77b3c4d078!2sSilverbird%20Cinemas%20Abuja!5e0!3m2!1sen!2sng!4v1574666126350!5m2!1sen!2sng"
                        width="600"
                        height="450"
                        frameborder="0"
                        style="border:0;"
                        allowfullscreen="">
                      </iframe> -->
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
              <div
                data-Limit="modal"
                data-target=".share-ad"
                class="small-box col-md-3 col-sm-3 col-xs-12"
              >
                <i class="fa fa-share-alt"></i>
                <span class="hidetext">Share</span>
              </div>
              <div
                class="modal fade share-ad"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content text-left">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&#10005;</span
                        ><span class="sr-only">Close</span>
                      </button>
                      <h3 class="modal-title">Share</h3>
                    </div>
                    <div class="modal-body text-left">
                      <div class="recent-ads">
                        <div class="recent-ads-list">
                          <div class="recent-ads-container">
                            <div class="recent-ads-list-image">
                              <a
                                href="javascript:void(0);"
                                class="recent-ads-list-image-inner"
                              >
                                <img
                                  src="@/assets/carspot-css/wp-content/uploads/sites/28/2017/12/IMG_5006-360x270.jpg"
                                  alt="2017 Maserati Ghibli SQ4 Blue"
                                />
                              </a>
                            </div>
                            <div class="recent-ads-list-content">
                              <h3 class="recent-ads-list-title">
                                <a href="javascript:void(0);">{{
                                  product.name
                                }}</a>
                              </h3>
                              <div class="recent-ads-list-price">
                                {{ product.currency }} {{ product.amount
                                }}<span class="">(Negotiable)</span>
                              </div>
                              <p>
                                Looking to sell the car urgently. Engine is good
                                condition. Complete service history available.
                                Original return file is available. After Market
                                Alloy rims. As good as a brand new car. Lady
                                Driven Car in Immaculate Condition. No Work
                                Required in Car. ...
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3>Link</h3>
                      <p>
                        <a href="javascript:void(0);"
                          >https://carspot.scriptsbundle.com/transparent-1/ad/2017-maserati-ghibli-sq4-blue-1695-miles/</a
                        >
                      </p>
                    </div>
                    <div class="modal-footer">
                      <ul class="list-inline">
                        <li>
                          <a
                            href="https://www.facebook.com/sharer/sharer.php?u=https://carspot.scriptsbundle.com/transparent-1/ad/2017-maserati-ghibli-sq4-blue-1695-miles/"
                            >Facebook,
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://plus.google.com/share?url=https://carspot.scriptsbundle.com/transparent-1/ad/2017-maserati-ghibli-sq4-blue-1695-miles/"
                            >Google+,
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://pinterest.com/pin/create/button/?url=https://carspot.scriptsbundle.com/transparent-1/ad/2017-maserati-ghibli-sq4-blue-1695-miles/&amp;media=&amp;description=2017%20Maserati%20Ghibli%20SQ4%20Blue"
                            >Pinterest,
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/intent/tweet?text=2017%20Maserati%20Ghibli%20SQ4%20Blue&amp;url=https://carspot.scriptsbundle.com/transparent-1/ad/2017-maserati-ghibli-sq4-blue-1695-miles/"
                            >Twitter</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
                href="../tempview/comparison.html"
                id="ad_to_fav"
                data-adid="1375"
              >
                <img
                  src="@/assets/images/compare.svg"
                  style="height: 20px; color: #777; padding-right: 5px;"
                />
                <span class="hidetext"> Compare </span>
              </a>
              <div
                data-target=".report-quote"
                data-Limit="modal"
                class="small-box col-md-3 col-sm-3 col-xs-12"
              >
                <i class="fa fa-warning" style="color: red!important;"></i>
                <span class="hidetext" style="color: red!important;"
                  >Report</span
                >
              </div>
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
                      <SimilarProductLoader></SimilarProductLoader>
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
                              :to="
                                `/ProductDetails/${simProduct.id}/${simProduct.cid}/${simProduct.uid}`
                              "
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
                                :to="
                                  `/ProductDetails/${simProduct.id}/${simProduct.cid}/${simProduct.uid}`
                                "
                                >{{ simProduct.name }}</router-link
                              >
                            </h3>
                            <!-- Category -->
                            <div class="category-title">
                              <span class="padding_cats"
                                ><router-link
                                  :to="
                                    `/ProductDetails/${simProduct.id}/${simProduct.cid}/${simProduct.uid}`
                                  "
                                  >{{ simProduct.category }}</router-link
                                ></span
                              >
                            </div>
                            <!-- Short Description -->
                            <div class="clearfix visible-xs-block"></div>
                            <p class="hidden-sm">
                              {{ simProduct.desciption }}
                            </p>
                            <!-- Ad Features -->
                            <ul class="add_info">
                              <li
                                class="similar-ads-picture-thumbnails"
                                v-for="(photo, index) in simProduct.photos"
                                :key="index"
                                :class="index == 0 ? 'active' : ''"
                              >
                                <router-link
                                  :to="
                                    `/ProductDetails/${simProduct.id}/${simProduct.cid}/${simProduct.uid}`
                                  "
                                  ><img :src="photo" :alt="simProduct.name"
                                /></router-link>
                              </li>
                            </ul>
                            <!-- Ad History -->
                            <div class="clearfix archive-history">
                              <div style="margin-top: 8px;">
                                Location : Area 11, Garki, Abuja, Nigeria
                              </div>
                              <div class="last-updated">
                                Posted : July 21, 2017
                              </div>
                              <div class="ad-meta">
                                <a
                                  href="javascript:void(0);"
                                  data-adid="960"
                                  class="btn save-ad"
                                  ><i class="fa fa-heart-o"></i> </a
                                >
                                <router-link
                                  :to="
                                    `/ProductDetails/${simProduct.id}/${simProduct.cid}/${simProduct.uid}`
                                  "
                                  class="btn btn-success"
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
                  <div v-if="showDetails" style="color: #4baf50; margin-top: -.5em; font-weight: 600; cursor: pointer;" @click="showDetails = !showDetails">{{ product.seller.phone }}</div>
                  
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
              <!-- <div class="singlemap-location">
                <div class="template-icons" style="margin-bottom: 5px;">
                  <div class="icon-box-icon flaticon-location"></div>
                  <div class="class-name">
                    {{ product.seller.address }}
                  </div>
                </div>
              </div> -->
              <!-- <div class="category-list-icon">
                <i class="purple flaticon-smartphone"></i>
                <div class="category-list-title">
                  <h5 v-if="!showDetails">
                    <div
                      class="selector number"
                      @click="showDetails = !showDetails"
                      data-last="2221111999"
                      ><span>Click to View</span></div
                    >
                  </h5>
                  <h2 v-if="showDetails" style="color: #4baf50; margin-top: -.5em; font-weight: 600; cursor: pointer;" @click="showDetails = !showDetails">{{ product.seller.phone }}</h2>
                </div>
              </div> -->
              
              <!-- <div class="additional-btns">
                <ul>
                  <li>
                    <a
                      href="#"
                      class=""
                      data-Limit="modal"
                      data-target="#make-offer-modal"
                    >
                      <i class="la la-money"></i>
                      <span>Make an Offer Price</span>
                    </a>
                  </li>
                </ul>
              </div> -->
<!-- 
              <div class="category-list-icon" style="">
                <i class="green flaticon-mail-1"></i>            
                <div class="category-list-title" style="padding: 0;">
                  Email Button trigger modal
                  <h5>
                    <a
                      class="btn btn-block btn-warning"
                      style="color: #fff; padding: 16px; border-radius:0px;"
                      href="../../sign-in-to-your-account/index.html"
                      >Follow Seller
                    </a>
                  </h5>
                </div>
              </div> -->
               <!-- <div v-if="!isLoggedIn">
                  <router-link to="/login">
                    <div
                      class="btn btn-block btn-primary contact-seller cusbutton"
                      style="border-radius:0px; font-size: 20px;"
                    >
                      <i class="fa fa-commenting-o place-left"></i> Chat With Seller
                    </div>
                  </router-link>
                </div> -->
              
              <!-- <div class="social-and-product-highlight">
                <div class="fule-economy">
                  <h4>Product Highlight</h4>
                  <ul class="list-inline">
                    <li>
                      <h5>30</h5>
                      <p>Views</p>
                    </li>
                    <li>
                      <h5 style="color: #FFF500;">4.5</h5>
                      <p>Rating</p>
                    </li>
                  </ul>
                </div>

                <ul
                  class="footer-payments"
                  style="margin-top: 27px; display: flex; justify-content: space-between; padding-left: 8px;"
                >
                  <li class="pl-0">
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%;"
                        src="@/assets/images/socials/facebook.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%;"
                        src="@/assets/images/socials/twitter.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:; "
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%; "
                        src="@/assets/images/socials/whatsapp.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%;"
                        src="@/assets/images/socials/linkedin.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%;"
                        src="@/assets/images/socials/google plus.svg"
                    /></a>
                  </li>
                </ul>
              </div> -->

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
              <!-- <div class="widget" style="margin-bottom: 16px; ">
                <div class="widget-content saftey" style="padding: 4px 12px;">
                  <ul
                  class="footer-payments"
                  style="margin-top: 0px; display: flex; justify-content: space-between; padding-left: 8px;"
                >
                  <li >
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%;"
                        src="@/assets/images/socials/facebook.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%;"
                        src="@/assets/images/socials/twitter.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:; "
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%; "
                        src="@/assets/images/socials/whatsapp.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%;"
                        src="@/assets/images/socials/linkedin.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%;"
                        src="@/assets/images/socials/google plus.svg"
                    /></a>
                  </li>
                </ul>
                </div>
              </div> -->
              <div class="widget" style="margin-bottom: 16px;">
                <!-- <div class="widget-heading">
                  <h4
                    class="panel-title"
                    style="text-align: center; font-weight: 600;"
                  >
                    <span> Ads</span>
                  </h4>
                </div> -->
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
import { mapActions, mapGetters } from "vuex";
import ash from "lodash";
import moment from "moment";
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
      singleCart: null
    };
  },
  components: {
    SimilarProductLoader
  },
  props: {
    product: Object,
    similarprods: [Object, Array],
    getUser: [Object, Array],
    productcomment: Array,
    fsingleCategory: Object,
  },
  methods: {
    ...mapActions("chat", ["sendMessage"]),
    formatCurrency(data){
      return formatCurrency(data)
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
          sync: "#carousel"
        });
      });
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
    showSuccess() {
      this.$notify({
        group: "notify",
        type: "success",
        title: "Success",
        text: this.getSuccess,
        position: "top right",
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
      return this.limit2
        ? this.productcomment.slice(0, this.limit2)
        : this.productcomment;
    },
    ...mapGetters("chat", ["getErrors", "getSuccess"]),
    ...mapGetters("auth", ["isLoggedIn"])
  },
  watch: {
    $route: "sync",
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
    // console.log(this.fsingleCategory);
    // array1.concat(array2)
    this.singleCart = this.fsingleCategory.checkFields.split(',').concat(this.fsingleCategory.checkFields.split(','));
    // console.log(this.singleCart);
    this.sync();
  }
};
</script>

<style scoped>
.selector {
  cursor: pointer;
}
.zoom {
  bottom: 59px;
  left: 15px;
  color: #fff;
  font-size: 20px;
  position: absolute;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: rgba(0,0,0,0.5);
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
</style>
