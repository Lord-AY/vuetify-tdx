<template>
  <div class="header-main">
    <div class="top-bar mobile-hidden" id="topb">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8 col-sm-4 col-6 modified-width">
            <div class="top-bar-left d-flex">
              <div class="clearfix"></div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-sm-8 col-6">
            <div class="top-bar-right">
              <ul class="custom" v-if="!isLoggedIn">
                <li>
                  <router-link to="/register" class="text-dark text-white">
                    <i class="fa fa-user mr-1"></i>
                    <span>Register</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/login" class="text-dark text-white">
                    <i class="fa fa-sign-in mr-1"></i>
                    <span>Login</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="login"
                    class="btn btn-tx btn-theme text-dark post-ad-header-tx"
                    >POST AN AD</router-link
                  >
                </li>
              </ul>
              <ul class="listnone custom" v-if="isLoggedIn">
                <li>
                  <a
                    class="shopping_bag_btn"
                    href="https://carspot.scriptsbundle.com/transparent-1/cart/"
                  >
                    <i class="fa fa-shopping-cart"></i>
                    <span>0</span>
                  </a>
                </li>
                <li>
                  <a
                    class="shopping_bag_btn"
                    href="https://carspot.scriptsbundle.com/transparent-1/cart/"
                  >
                    <i class="fa fa-bell"></i>
                    <span>0</span>
                  </a>
                </li>

                <li class="dropdown">
                  <a
                    href="#"
                    class="dropdown-toggle dropdown-head"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      class="img-circle resize"
                      alt="Avatar"
                       :src="this.getUser !== null ? `https://www.tradexplora.com.ng/media/${getUser.pictureUrl}`
                         : 'https://www.tradexplora.com.ng/media/avatar.png' "
                    />
                    <span class="caret" style="color: #fff!important"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="wallet-balance">
                      <img
                        src="@/assets/images/wallet.svg"
                        height="18px"
                        style="margin-top: -4px; margin-right: 5px;"
                        alt
                        srcset
                      />
                      Balance
                      <span>00.00</span>
                    </li>
                    <li class="profile-dropdown-list">
                      <router-link
                        to="/maindashboard"
                        class="profile-dropdown-link"
                      >
                        <i class="fa fa-dashboard profile-dropdown-icon"></i>
                        Dashboard
                      </router-link>
                    </li>
                    <li class="profile-dropdown-list">
                      <a
                        style="cursor:pointer"
                        @click.prevent="setLogout"
                        class="profile-dropdown-link"
                      >
                        <i class="fa fa-sign-out profile-dropdown-icon"></i>
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link
                    to="/postad"
                    class="btn btn-tx btn-theme text-dark post-ad-header-tx"
                    >POST AN AD
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/Topbar-->

    <!-- Header -->
    <!-- <div class="horizontal-header clearfix">
      <div class="container">
        <a id="horizontal-navtoggle" class="animated-arrow">
          <span></span>
        </a>
        <span class="smllogo">
          <img src="@/assets/images/brand/tx-logo.png" alt />
        </span>
        <!- <i href="tel:245-6325-3256" class="callusbtn"><i class="fa fa-phone" aria-hidden="true"></i></a> ->
      </div>
    </div> -->

    <div class="horizontal-header clearfix" style="z-index: 1001;">
      <div class="container">
        <!-- <a id="horizontal-navtoggle" class="animated-arrow"><span></span></a> -->
        <div
          id="tx-menu-toggle"
          class="openbtn closed"
          style="margin: 0px; position: relative; float: left; display: inline-block; top: 16px; height: 100%;"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span class="smllogo">
          <img src="@/assets/images/brand/tradexplora-01.png" alt />
        </span>
        <!-- <i href="tel:245-6325-3256" class="callusbtn"><i class="fa fa-phone" aria-hidden="true"></i></a> -->
      </div>
    </div>
    <div id="tempSidebar" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
        >&times;</a
      >
      <a href="#">Home</a>
      <a href="#">Categories</a>
      <a href="#">My Profile</a>
      <a href="#">My Messages</a>
      <a href="#">Favorites</a>
      <a href="#">Notifications</a>
    </div>
    <!--/Header -->

    <!--Start Horizontal-main -->
    <div
      class="horizontal-main bg-dark-transparent clearfix mobile-hidden top-bar-fixed"
    >
      <div class="horizontal-mainwrapper container clearfix">
        <!-- <div class="desktoplogo-1" >
          <a href="index.html"><img src="@/assets/images/brand/tradexplora-main.svg" alt=""></a>
        </div>-->
        <!--Nav-->
        <nav class="horizontalMenu clearfix d-md-flex">
          <div class="desktoplogo">
            <router-link to="/">
              <img src="@/assets/images/TRADE_XPLORA_V4.1.png" alt />
            </router-link>
          </div>
          <ul class="horizontalMenu-list" style="margin-top: 12px;">
            <!-- <li aria-haspopup="true">
              <router-link to="about">ABOUT US</router-link>
            </li>
            <li aria-haspopup="true">
              <a href="#">FAQ</a>
            </li>
            <li aria-haspopup="true">
              <router-link to="contact">
                CONTACT US
                <span class="hmarrow"></span>
              </router-link>
            </li> -->
            <li aria-haspopup="true" style="margin-right: 10px;">
              <!-- <button class="btn">
                <i class="fa fa-bars" style="color: #4CAF50"></i> All Categories
              </button> -->
              <input
                id="bmenu_toggle"
                type="checkbox"
                name="bmenu-open"
                class="hidden"
                aria-checked="true"
              />
              <label
                class="bmenu toggle"
                for="bmenu_toggle"
                accesskey="1"
                style="padding: 10px; height: 40px;"
              >
                <span style="font-size: 14.6px; font-weight: 400;">
                  <i
                    class="fa fa-bars"
                    style="color: #4CAF50; margin-right: 3px;"
                  ></i>
                  All Categories
                </span>
              </label>
              <div class="hide-at-start-wrapper">
                <nav class="bmenu panel animated">
                  <a href="#/home.html"
                    ><span class="triangle-origin">Vehicles</span></a
                  >
                  <a href="#/markets.html"
                    ><span class="triangle-origin">Real Estate</span></a
                  >
                  <a href="#/technology.html"
                    ><span class="triangle-origin"
                      >Phones &amp; Tablets</span
                    ></a
                  >
                  <a href="#/politics.html"
                    ><span class="triangle-origin">Electronics</span></a
                  >
                  <a href="#/pursuits.html"
                    ><span class="triangle-origin">Fashion</span></a
                  >
                  <a href="#/opinion.html"
                    ><span class="triangle-origin">Jobs</span></a
                  >
                  <a href="#/businessweek.html"
                    ><span class="triangle-origin">Babies &amp; Kids</span></a
                  >
                  <hr />
                  <a href=""
                    ><span class="triangle-origin"
                      >Agriculture &amp; Food</span
                    ></a
                  >
                  <a href="#"><span class="triangle-origin">Handy Man</span></a>
                  <article class="panel">
                    <div class="column">
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">Ayam Tired</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">It's our work o!!</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                    <div class="column">
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">Who knew this could be stressful</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                  </article>
                  <article class="panel">
                    <div class="column">
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                    <div class="column">
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                  </article>
                  <article class="panel">
                    <div class="column">
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                    <div class="column">
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                      </section>
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                  </article>
                  <article class="panel">
                    <div class="column">
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A worthless sub cat...</a>
                      </section>
                    </div>
                    <div class="column">
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                  </article>
                  <article class="panel">
                    <div class="column">
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                    <div class="column">
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                      </section>
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                  </article>
                  <article class="panel">
                    <div class="column">
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                    <div class="column">
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                  </article>
                  <article class="panel">
                    <div class="column">
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                    <div class="column">
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Category Title</header>
                        <a href="#">A sub category...</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                  </article>
                  <article class="panel">
                    <div class="column">
                      <section class="titled-group">
                        <header>Fresh Food</header>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Livestock &amp; Poultry</header>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                    <div class="column">
                      <section class="titled-group">
                        <header>Meals &amp; Drinks</header>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Feeds, Supplements &amp; Seeds</header>
                        <a href="#">Cat 1</a>
                        <a href="#">Cat 2</a>
                        <a href="#">Cat 3</a>
                        <a href="#">Gosh!!! I'm tired</a>
                      </section>
                    </div>
                  </article>
                  <article class="panel">
                    <div class="column">
                      <section class="titled-group">
                        <header>Hard Work</header>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Soft Work</header>
                        <a href="#">It's our work o!!</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                  </article>
                  <article class="panel">
                    <div class="column">
                      <section class="titled-group">
                        <header>Title</header>
                        <a href="#">It's our work o!!</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                      <section class="titled-group">
                        <header>Title</header>
                        <a href="#">It's our work o!!</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                    <div class="column">
                      <section class="titled-group">
                        <header>Title</header>
                        <a href="#">It's our work o!!</a>
                        <a href="#">A Sub Category</a>
                        <a href="#">A Sub Category</a>
                      </section>
                    </div>
                  </article>
                </nav>
              </div>
            </li>
            <li aria-haspopup="true" style="padding: 0px;">
              <div class="row">
                <div class="col-xl-10 col-lg-12 col-md-12 mb-0">
                  <input
                    type="text"
                    class="form-control input-lg br-tr-md-0 br-br-md-0 main-search"
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
            <!-- <li aria-haspopup="true" class="d-lg-none mt-5 pb-5 mt-lg-0"><span><a class="btn tx-btn-color" href="ad-posts.html">Post Property Ad</a></span></li> -->
          </ul>
          <!-- <ul class="mb-0">
            <li aria-haspopup="true" class="mt-3 d-none d-lg-block top-postbtn">
              <span><a class="btn tx-btn-color ad-post " href="ad-posts.html">Post Property Ad</a></span>
            </li>
          </ul>-->
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
import { mapGetters, mapActions } from "vuex";

/* eslint-disable no-undef */
export default {
  name: "topbar2",
  computed: {
    ...mapGetters("auth", ["isLoggedIn", "getUser"])
  },
  methods: {
    ...mapActions("auth", ["logoutUser"]),
    setLogout() {
      this.logoutUser();
    },
   avatarCheck () {
        if(this.isLoggedIn) {
           let avatar = this.getUser.pictureUrl;
            if(avatar !== null || avatar !== undefined || avatar !== '') {
              // return `https://www.tradexplora.com.ng/media/${getUser.pictureURL}`;
              return true;
            }
        }
        return false;
    },
    sync() {
      $(document).ready(function() {
        $("#bmenu_toggle").prop("checked", false);
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          // console.log("we are scrolling " + scroll);
          if (scroll > 25) {
            $("#topb").removeClass("mobile-hidden");
            $("#topb").addClass("top-bar-hide");
          } else {
            $("#topb").removeClass("top-bar-hide");
          }
        });
        $("#tx-menu-toggle").click(function() {
          $(this).toggleClass("open");
        });

        let sideBarTrigger = $(".openbtn");
        // let sideBar = $("#sidebar-nav");
        let sideBar = $("#tempSidebar");
        let dashboardContent = $(".dashboard-main");
        // let closeBtn = $("")
        sideBarTrigger.click(() => {
          if (sideBarTrigger.hasClass("closed")) {
            //to open
            sideBar.css({ left: "0px" });
            dashboardContent.css({
              left: "250px",
              transition: "all 0.3s ease-in-out;"
            });
            sideBarTrigger.toggleClass("closed");
            // console.log("Sidebar is now open");
          } else {
            //to close
            sideBar.css({ left: "-260px" });
            dashboardContent.css({
              left: "0px",
              transition: "all 0.3s ease-in-out;"
            });
            sideBarTrigger.toggleClass("closed");
            // console.log("Sidebar is now closed");
          }
        });
      });
    }
  },
  watch: {
    $route: "sync"
  },
  created() {
    this.sync();
  }
};
</script>

<style>
/* Sidebar Test Styles => Don't remove */

.sidenav {
  box-shadow: 3px 5px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
  /* width: 0; */
  width: 250px;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: -260px;
  background-color: #fff;
  color: #000;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 10px 8px 10px 16px;
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:not(:first-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.sidenav a:not(:first-child):hover {
  color: #fff;
  background: #4caf50;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 10px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
.top-bar-hide {
  display: none !important;
}
</style>
