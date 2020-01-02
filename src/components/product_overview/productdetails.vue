import false from 'vue-phone-number-input';
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
                  <ol class="breadcrumb breadcrumb-tx arrowed mt-2 mb-2">
                    <li class="breadcrumb-item">
                      <a href="https://tradexplorer.com/">Home > </a>
                    </li>

                    <li class="breadcrumb-item">
                      <a href="https://tradexplorer.com/"
                        >{{ product.category }} >
                      </a>
                    </li>

                    <li class="breadcrumb-item">
                      <a href="https://tradexplorer.com/ford-edge">Edge > </a>
                    </li>

                    <li class="breadcrumb-item active">
                      {{ product.name }}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 detail_price col-xs-12">
            <div class="singleprice-tag">
              NGN {{ product.amount }}<span class="">(Negotiable)</span>
            </div>
          </div>
          <!-- Middle Content Area -->
          <div class="col-md-8 col-xs-12 col-sm-12">
            <!-- Single Ad -->
            <div class="singlepage-detail">
              <div id="single-slider" class="flexslider">
                <ul class="slides">
                  <li>
                    <a
                      href="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006.jpg"
                      data-fancybox="group"
                    >
                      <!-- <a href="../../assets/carspot-css/wp-content/uploads/sites/28/2017/12/IMG_5006.jpg" data-fancybox="group"> -->
                      <!-- <img alt="2017 Maserati Ghibli SQ4 Blue" src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006-650x420.jpg"> -->
                      <img
                        alt="2017 Maserati Ghibli SQ4 Blue"
                        src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006.jpg"
                      data-fancybox="group"
                    >
                      <img
                        alt="2017 Maserati Ghibli SQ4 Blue"
                        src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006.jpg"
                      data-fancybox="group"
                    >
                      <img
                        alt="2017 Maserati Ghibli SQ4 Blue"
                        src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006.jpg"
                      data-fancybox="group"
                    >
                      <img
                        alt="2017 Maserati Ghibli SQ4 Blue"
                        src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006.jpg"
                      data-fancybox="group"
                    >
                      <img
                        alt="2017 Maserati Ghibli SQ4 Blue"
                        src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006.jpg"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006.jpg"
                      data-fancybox="group"
                    >
                      <img
                        alt="2017 Maserati Ghibli SQ4 Blue"
                        src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006.jpg"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <!-- Listing Slider Thumb -->
              <div id="carousel" class="flexslider">
                <ul class="slides">
                  <!-- <li><img alt="2017 Maserati Ghibli SQ4 Blue" draggable="false" src="../../assets/carspot-css/wp-content/uploads/sites/28/2017/12/IMG_5006-200x112.jpg"></li> -->
                  <li>
                    <img
                      alt="2017 Maserati Ghibli SQ4 Blue"
                      draggable="false"
                      src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006-268x166.jpg"
                    />
                  </li>
                  <li>
                    <img
                      alt="2017 Maserati Ghibli SQ4 Blue"
                      draggable="false"
                      src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006-268x166.jpg"
                    />
                  </li>
                  <li>
                    <img
                      alt="2017 Maserati Ghibli SQ4 Blue"
                      draggable="false"
                      src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006-268x166.jpg"
                    />
                  </li>
                  <li>
                    <img
                      alt="2017 Maserati Ghibli SQ4 Blue"
                      draggable="false"
                      src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006-268x166.jpg"
                    />
                  </li>
                  <li>
                    <img
                      alt="2017 Maserati Ghibli SQ4 Blue"
                      draggable="false"
                      src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006-268x166.jpg"
                    />
                  </li>
                  <li>
                    <img
                      alt="2017 Maserati Ghibli SQ4 Blue"
                      draggable="false"
                      src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006-268x166.jpg"
                    />
                  </li>
                  <li>
                    <img
                      alt="2017 Maserati Ghibli SQ4 Blue"
                      draggable="false"
                      src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006-268x166.jpg"
                    />
                  </li>
                  <li>
                    <img
                      alt="2017 Maserati Ghibli SQ4 Blue"
                      draggable="false"
                      src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006-268x166.jpg"
                    />
                  </li>
                </ul>
              </div>

              <!-- Heading Area -->
              <div class="key-features row">
                <div class="boxicon">
                  <a
                    data-Limit="tooltip"
                    data-placement="bottom"
                    title="Engine Type"
                    href="javascript:void(0)"
                  >
                    <i class="flaticon-gas-station-1 petrol"></i>
                    <p>Petrol</p>
                  </a>
                </div>
                <div class="boxicon">
                  <a
                    data-Limit="tooltip"
                    data-placement="bottom"
                    title="Mileage"
                    href="javascript:void(0)"
                  >
                    <i class="flaticon-dashboard-1 kilo-meter"></i>
                    <p>1,694 Km</p>
                  </a>
                </div>
                <div class="boxicon">
                  <a
                    data-Limit="tooltip"
                    data-placement="bottom"
                    title="Engine Capacity"
                    href="javascript:void(0)"
                  >
                    <i class="flaticon-tool engile-capacity"></i>
                    <p>3000</p>
                  </a>
                </div>
                <div class="boxicon">
                  <a
                    data-Limit="tooltip"
                    data-placement="bottom"
                    title="Year"
                    href="javascript:void(0)"
                  >
                    <i class="flaticon-calendar reg-year"></i>
                    <p>2017</p>
                  </a>
                </div>
                <div class="boxicon">
                  <a
                    data-Limit="tooltip"
                    data-placement="bottom"
                    title="Transmission Type"
                    href="javascript:void(0)"
                  >
                    <i class="flaticon-gearshift transmission"></i>
                    <p>Automatic</p>
                  </a>
                </div>
                <div class="boxicon">
                  <a
                    data-Limit="tooltip"
                    data-placement="bottom"
                    title="Body Type"
                    href="javascript:void(0)"
                  >
                    <i class="flaticon-transport-1 body-type"></i>
                    <p>Sedan</p>
                  </a>
                </div>
                <div class="boxicon">
                  <a
                    data-Limit="tooltip"
                    data-placement="bottom"
                    title="Color Family"
                    href="javascript:void(0)"
                  >
                    <i class="flaticon-cogwheel-outline car-color"></i>
                    <p>Blue</p>
                  </a>
                </div>
              </div>
              <div class="content-box-grid margin-top-20">
                <ul class="nav nav-tabs" style="margin-bottom: 16px;">
                  <li class="tab-pane-tx active">
                    <a data-Limit="tabs" href="#home">Description</a>
                  </li>
                  <li class="tab-pane-tx">
                    <a data-Limit="tabs" href="#menu1">Features</a>
                  </li>
                  <li class="tab-pane-tx">
                    <a data-Limit="tabs" href="#menu2">Reviews(0)</a>
                  </li>
                  <li class="tab-pane-tx">
                    <a data-Limit="tabs" href="#menu3">Location Map</a>
                  </li>
                  <!-- <li class="tab-pane-tx"><a data-Limit="pill" href="#menu3">Menu 3</a></li> -->
                </ul>

                <div class="tab-content">
                  <div id="home" class="tab-pane fade in active">
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

                  <div id="menu1" class="tab-pane fade">
                    <h3 class="tab-title">Features</h3>
                    <div class="short-features">
                      <div
                        class="col-sm-12 col-md-12 col-xs-12 no-padding categories-exist"
                      >
                        <span>
                          <strong>
                            Category:
                          </strong></span
                        >

                        <a href="../../search-cars/indexf98c.html?cat_id=62"
                          >Audi
                        </a>

                        <a href="../../search-cars/indexec88.html?cat_id=279"
                          >A3
                        </a>
                      </div>
                      <div class="col-sm-4 col-md-4 col-xs-12 no-padding">
                        <span><strong>Price</strong> :</span>
                        {{ product.currency }}{{ product.amount }}
                        <span class="">(Negotiable)</span>
                      </div>
                      <div class="col-sm-4 col-md-4 col-xs-12 no-padding">
                        <span><strong>Date</strong> :</span> January 24, 2019
                      </div>
                      <div class="col-sm-4 col-md-4 col-xs-12 no-padding">
                        <span><strong>Mileage</strong> :</span> 1694
                      </div>

                      <div class="col-sm-4 col-md-4 col-xs-12 no-padding">
                        <span><strong>Condition</strong> :</span> Used
                      </div>
                      <div class="col-sm-4 col-md-4 col-xs-12 no-padding">
                        <span><strong>Type</strong> :</span> Sell
                      </div>
                      <div class="col-sm-4 col-md-4 col-xs-12 no-padding">
                        <span><strong>Warranty</strong> :</span> Yes
                      </div>
                      <div class="col-sm-4 col-md-4 col-xs-12 no-padding">
                        <span><strong>Year</strong> :</span> 2017
                      </div>
                      <div class="col-sm-4 col-md-4 col-xs-12 no-padding">
                        <span><strong>Body Type</strong> :</span> Sedan
                      </div>
                      <div class="col-sm-4 col-md-4 col-xs-12 no-padding">
                        <span><strong>Transmission</strong> :</span> Automatic
                      </div>
                      <div class="col-sm-4 col-md-4 col-xs-12 no-padding">
                        <span><strong>Engine Size</strong> :</span> 3000
                      </div>
                      <div class="col-sm-4 col-md-4 col-xs-12 no-padding">
                        <span><strong>Engine Type</strong> :</span> Petrol
                      </div>
                      <div class="col-sm-4 col-md-4 col-xs-12 no-padding">
                        <span><strong>Assembly</strong> :</span> Local
                      </div>
                      <div class="col-sm-4 col-md-4 col-xs-12 no-padding">
                        <span><strong>Color</strong> :</span> Blue
                      </div>
                      <div class="col-sm-4 col-md-4 col-xs-12 no-padding">
                        <span><strong>Insurance</strong> :</span> Yes
                      </div>
                      <div
                        class="col-sm-12 col-md-12 col-xs-12 location-exit no-padding"
                      >
                        <span><strong>Location</strong> :</span>
                        <a
                          href="../../search-cars/indexfa61.html?country_id=312"
                          >{{ product.region }}</a
                        >,
                      </div>
                      <!-- Short features end -->
                    </div>
                    <ul class="car-feature-list ">
                      <li><i class="flaticon-disc-brake-1"></i>ABS</li>
                      <li><i class="flaticon-airbag"></i>Air Bags</li>
                      <li>
                        <i class="flaticon-air-conditioner-1"></i>Air
                        Conditioning
                      </li>
                      <li><i class="flaticon-rim"></i>Alloy Rims</li>
                      <li><i class="flaticon-antenna"></i>AM/FM Radio</li>
                      <li><i class="flaticon-music-1"></i>CD Player</li>
                      <li><i class="flaticon-navigation"></i>Cruise Control</li>
                      <li><i class="flaticon-car-4"></i>Immobilizer Key</li>
                      <li>
                        <i class="flaticon-location"></i>Navigation System
                      </li>
                      <li><i class="flaticon-power-button"></i>Power Locks</li>
                      <li><i class="flaticon-car-door"></i>Power Mirrors</li>
                      <li>
                        <i class="flaticon-car-steering-wheel"></i>Power
                        Steering
                      </li>
                      <li><i class="flaticon-car-door"></i>Power Windows</li>
                      <li>
                        <i class="flaticon-photo-camera-1"></i>Reversing Camera
                      </li>
                    </ul>
                    <div class="tags-share clearfix">
                      <div class="tags pull-left ">
                        <i class="fa fa-tags"></i>
                        <ul>
                          <li>
                            <a href="../../ad_tag/benz/index.html" title="benz">
                              #benz
                            </a>
                          </li>
                          <li>
                            <a
                              href="../../ad_tag/compact/index.html"
                              title="compact"
                            >
                              #compact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!--Features tab end  -->
                  </div>
                  <div
                    id="menu2"
                    class="tab-pane fade"
                    style="margin-top: 26px!important"
                  >
                    <h3 class="tab-title" style="display: inline-block;">
                      Reviews
                    </h3>
                    <div class="viewall">
                      <a href="">Show All</a>
                    </div>
                    <hr style="margin-top: -10px;" />
                    <div class="row">
                      <div class="col-md-12">
                        <h4 class="review-name" style="display: inline-block">
                          Ademola Mike :
                        </h4>
                        <span class="rating-number">4</span>
                        <i class="fa fa-star star-rating-summary"></i>
                        <p class="review-date">23-11-2019</p>
                        <p class="review">
                          I like the product. It came in a very good condition
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
                  <div id="menu3" class="tab-pane fade">
                    <h3 class="tab-title">Location Map</h3>
                    <!-- <div id="menu2" class="tab-pane fade"> -->
                    <!-- <h3 class="tab-title">Reviews</h3> -->
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.957357390124!2d7.483373915245445!3d9.067649490878031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a7ec1aac221%3A0xc536ed77b3c4d078!2sSilverbird%20Cinemas%20Abuja!5e0!3m2!1sen!2sng!4v1574666126350!5m2!1sen!2sng"
                      width="600"
                      height="450"
                      frameborder="0"
                      style="border:0;"
                      allowfullscreen=""
                    ></iframe>
                  </div>
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
                                  src="../../assets/carspot-css/wp-content/uploads/sites/28/2017/12/IMG_5006-360x270.jpg"
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
                  src="../../assets/images/compare.svg"
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
                      <div
                        class="ads-list-archive"
                        v-for="simProduct in toggleLimit"
                        :key="simProduct.id"
                      >
                        <!-- Image Block -->
                        <div class="col-lg-4 col-md-4 col-sm-4 no-padding">
                          <!-- Img Block -->
                          <div class="ad-archive-img">
                            <a href="../ad/audi-a5-for-sale/index.html">
                              <img
                                src="../../assets/carspot-css/wp-content/uploads/2017/07/1-3-360x270.jpg"
                                alt="Audi A5 For Sale"
                                class="img-responsive"
                              />
                            </a>
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
                              &#8358; {{ simProduct.amount }}
                              <span class="" v-if="simProduct.negotiable"
                                >(Negotiable)</span
                              >
                              <span class="" v-else>(Fixed)</span>
                            </div>
                            <!-- Title -->
                            <h3>
                              <a href="../ad/audi-a5-for-sale/index.html">{{
                                simProduct.name
                              }}</a>
                            </h3>
                            <!-- Category -->
                            <div class="category-title">
                              <span class="padding_cats"
                                ><a href="../ad_category/audi/index.html">{{
                                  simProduct.category
                                }}</a></span
                              ><span class="padding_cats"
                                ><a href="../ad_category/a5/index.html"
                                  >A5</a
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
                              <li class="similar-ads-picture-thumbnails active">
                                <a href="../ad/audi-a5-for-sale/index.html"
                                  ><img
                                    src="../../assets/carspot-css/wp-content/uploads/2017/07/1-3-110x60.jpg"
                                    :alt="simProduct.name"
                                /></a>
                              </li>
                              <li class="similar-ads-picture-thumbnails ">
                                <a href="../ad/audi-a5-for-sale/index.html"
                                  ><img
                                    src="../../assets/carspot-css/wp-content/uploads/2017/07/3-3-110x60.jpg"
                                    :alt="simProduct.name"
                                /></a>
                              </li>
                            </ul>
                            <!-- Ad History -->
                            <div class="clearfix archive-history">
                              <div class="last-updated">
                                Posted : July 21, 2017
                              </div>
                              <div class="ad-meta">
                                <a
                                  href="javascript:void(0);"
                                  data-adid="960"
                                  class="btn save-ad"
                                  ><i class="fa fa-heart-o"></i> Favourite</a
                                >
                                <router-link
                                  :to="
                                    `/ProductDetails/${simProduct.id}/${simProduct.cid}`
                                  "
                                  class="btn btn-success"
                                >
                                  View Details</router-link
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
              <div class="row" style="margin-top: 36px;">
                <div class="col-md-5"></div>
                <div class="col-md-3">
                  <!--                   <div class="viewall-similar">
                    <a href="">Show More</a>
                  </div> -->
                  <div class="viewall-similar">
                    <a @click="limit = null" v-show="limitBtn"
                      >Show More <i class="fa fa-arrow-circle-right"></i
                    ></a>
                    <a @click="limit = 3" v-show="!limitBtn"
                      >Show Less <i class="fa fa-arrow-circle-right"></i
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
              <div class="white-bg user-contact-info">
                <div class="user-info-card">
                  <div class="user-photo col-md-4 col-sm-3  col-xs-4">
                    <a href="../../dealer/gavien72/index.html" class="link">
                      <!-- <img class="img-circle" src="../../assets/carspot-css/wp-content/themes/carspot/images/"  alt="Profile Pic"> -->
                      <img
                        class="img-circle"
                        src="../../assets/images/profile-product-details.jpg"
                        alt="Profile Pic"
                      />
                    </a>
                    <!-- <div class="seller-online"></div> -->
                    <div class="seller-offline"></div>
                  </div>
                  <div class="user-information  col-md-8 col-sm-9 col-xs-8">
                    <span class="user-name">
                      <a
                        class="hover-color"
                        href="../../dealer/gavien72/index.html"
                      >
                        {{ product.creator }}
                      </a>
                    </span>
                    <div class="item-date">
                      <span class="ad-pub">
                        <b>Last Logged in:</b> 4 months Ago</span
                      >
                      <p
                        class="ad-pub"
                        style="font-size: 14px; margin-top: 4px;"
                      >
                        <b>Registered:</b> 10 Oct 2019
                      </p>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="singlemap-location">
                <div class="template-icons" style="margin-bottom: 5px;">
                  <div class="icon-box-icon flaticon-location"></div>
                  <div class="class-name">
                    3225 West Olympic Boulevard, Los Angeles, CA, United States
                  </div>
                </div>
              </div>
              <div class="category-list-icon">
                <i class="purple flaticon-smartphone"></i>
                <div class="category-list-title">
                  <h5>
                    <a
                      href="javascript:void(0)"
                      class="number"
                      data-last="2221111999"
                      ><span>Click to View</span></a
                    >
                  </h5>
                </div>
              </div>
              <div class="additional-btns">
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
              </div>

              <div class="category-list-icon" style="">
                <!-- <i class="green flaticon-mail-1"></i>             -->
                <div class="category-list-title" style="padding: 0;">
                  <!-- Email Button trigger modal -->
                  <h5>
                    <a
                      class="btn btn-block btn-warning"
                      style="color: #fff; padding: 16px; border-radius:0px;"
                      href="../../sign-in-to-your-account/index.html"
                      >Follow Seller
                    </a>
                  </h5>
                </div>
              </div>
              <div
                class="category-list-title"
                style="padding: 0;box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4)"
              >
                <!-- Email Button trigger modal -->
                <h5>
                  <a
                    class="btn btn-block btn-primary contact-seller"
                    href="../../sign-in-to-your-account/index.html"
                    style="border-radius:0px;"
                  >
                    <i class="fa fa-commenting-o"></i> Chat With Seller</a
                  >
                </h5>
              </div>
              <div class="social-and-product-highlight">
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
                        src="../../assets/images/socials/facebook.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%;"
                        src="../../assets/images/socials/twitter.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:; "
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%; "
                        src="../../assets/images/socials/whatsapp.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%;"
                        src="../../assets/images/socials/linkedin.svg"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img
                        class="payment-card-icon-footer-tx"
                        style="box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4); border-radius: 50%;"
                        src="../../assets/images/socials/google plus.svg"
                    /></a>
                  </li>
                </ul>
              </div>

              <!-- Saftey Tips  -->
              <div class="widget" style="margin-top: 5px;">
                <div class="widget-heading">
                  <h4
                    class="panel-title"
                    style="text-align: center; font-weight: 600;"
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
              <div class="widget">
                <div class="widget-heading">
                  <h4
                    class="panel-title"
                    style="text-align: center; font-weight: 600;"
                  >
                    <span> Ads</span>
                  </h4>
                </div>
                <div class="widget-content ">
                  <div class="ads">
                    <img
                      src="../../assets/images/gloads.jpg"
                      alt=""
                      srcset=""
                    />
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
      value="../../assets/carspot-css/wp-content/uploads/sites/28/2018/04/logo-2.png"
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
export default {
  name: "productDetails",
  data() {
    return {
      limit: 3,
      limitBtn: true
    };
  },
  props: {
    product: Object,
    similarprods: [Object, Array]
  },
  methods: {
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
    }
  },
  computed: {
    toggleLimit() {
      return this.limit
        ? this.similarprods.slice(0, this.limit)
        : this.similarprods;
    }
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
    }
  },
  created() {
    this.sync();
  }
};
</script>

<style scoped>
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
</style>
