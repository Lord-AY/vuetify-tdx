<template>
  <div class="header-main">
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8 col-sm-4 col-6">
            <div class="top-bar-left d-flex">
              <div class="clearfix"></div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-sm-8 col-6">
            <div class="top-bar-right">
              <ul class="custom">
                <li>
                  <router-link to="register" class="text-dark text-white"
                    ><i class="fa fa-user mr-1"></i>
                    <span>Register</span></router-link
                  >
                </li>
                <li>
                  <router-link to="login" class="text-dark text-white"
                    ><i class="fa fa-sign-in mr-1"></i>
                    <span>Login</span></router-link
                  >
                </li>
                <li>
                  <router-link
                    to="login"
                    class="btn btn-tx btn-theme text-dark post-ad-header-tx"
                  >
                    POST AN AD</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/Topbar-->

    <!-- Header -->
    <div class="horizontal-header clearfix ">
      <div class="container">
        <a id="horizontal-navtoggle" class="animated-arrow"><span></span></a>
        <span class="smllogo"
          ><img src="../assets/images/brand/tx-logo.png" alt=""
        /></span>
        <!-- <i href="tel:245-6325-3256" class="callusbtn"><i class="fa fa-phone" aria-hidden="true"></i></a> -->
      </div>
    </div>
    <!--/Header -->

    <!--Start Horizontal-main -->
    <div class="horizontal-main bg-dark-transparent clearfix">
      <div class="horizontal-mainwrapper container clearfix">
        <!-- <div class="desktoplogo-1" >
					<a href="index.html"><img src="../assets/images/brand/tradexplora-main.svg" alt=""></a>
				</div> -->
        <!--Nav-->
        <nav class="horizontalMenu clearfix d-md-flex">
          <div class="desktoplogo">
            <a href="index.html"
              ><img src="../assets/images/brand/TRADEXPLORAV3.1.png" alt=""
            /></a>
          </div>
          <ul class="horizontalMenu-list" style="margin-top: 12px;">
            <!-- <li aria-haspopup="true"><a href="about.html"> ABOUT US </a></li>
            <li aria-haspopup="true"><a href="#"> FAQ </a></li> -->
            <li aria-haspopup="true" style="margin-right: 10px;">
              <button class="btn">
                <i class="fa fa-bars" style="color: #4CAF50"></i> All Categories
              </button>
            </li>
            <li aria-haspopup="true" style="padding: 0px;">
              <div class="row">
                <div class="col-xl-10 col-lg-12 col-md-12 mb-0">
                  <input
                    type="text"
                    class="form-control input-lg br-tr-md-0 br-br-md-0 main-search"
                    id="text4"
                    placeholder="Search products, brands and categories"
                  />
                  <span>
                    <i class="fa fa-search location-gps mr-1"></i>
                  </span>
                </div>
                <div class="col-xl-2 col-lg-12 col-md-12">
                  <button
                    class="header-search-button btn btn-theme"
                    style="height: 100%; line-height: 13px; font-size: 14px; color: #fff;"
                  >
                    Search
                  </button>
                </div>
              </div>
            </li>
            <!-- <li aria-haspopup="true"><a href="widgets.html">WIDGETS</a></li>							 -->
            <!-- <li aria-haspopup="true"><a href="#">CATEGORIES <span class="fa fa-caret-down m-0" style="color: #232323;"></span></a>
							<ul class="sub-menu">
								<li aria-haspopup="true"><a href="col-left.html">Vehicles</a></li>
								<li aria-haspopup="true"><a href="col-right.html">RealEstate</a></li>
								<li aria-haspopup="true"><a href="col-right.html">Mobile Phones</a></li>
							</ul>
						</li> -->
            <!-- <li aria-haspopup="true">
              <a href="contact.html">
                CONTACT US <span class="hmarrow"></span
              ></a>
            </li>
            <li aria-haspopup="true" class="d-lg-none mt-5 pb-5 mt-lg-0">
            </li> -->
          </ul>
          <!-- <ul class="mb-0">
						<li aria-haspopup="true" class="mt-3 d-none d-lg-block top-postbtn">
							<span><a class="btn tx-btn-color ad-post " href="ad-posts.html">Post Property Ad</a></span>
						</li>
					</ul> -->
          <div class="call-us-now">
            <div class="contact-in-header">
              <i class="flaticon-customer-service"></i>
              <span
                style="color: #999; float: right; line-height: 25px; margin-left: 10px; margin-top: 10px; font-size: 16px;"
              >
                Call Us Now
                <br />
                <strong
                  style="font-size: 20px; color: #4CAF50; font-weight: 600!important;"
                  >(+234) 811-111-1808</strong
                >
              </span>
            </div>
          </div>
        </nav>
        <!--Nav-->
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "topbar2"
};
</script>

<style></style>
