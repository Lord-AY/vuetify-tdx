<template>
  <!--Topbar-->
  <!--Topbar-->
  <div class="header-main">
    <!--/Topbar-->

    <!-- Header -->
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
        <!-- <div class="log-logo">
          <img src="@/assets/images/brand/tradexplora-01.png" alt />
        </div> -->
        <div class="smllogo">
          <img src="@/assets/images/brand/TRADEXPLORA-V4.1-mini.png" alt />
        </div>

        <!-- In case search is needed in mobile, this is an icon for it<div
          style="margin: 0px; position: relative; float: right; display: inline-block; top: 16px; height: 100%;"
        >
          <span><i class="fa fa-search" style="color: #cac9c9"></i></span>
        </div> -->
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
      class="horizontal-main horizontal-main-dashboard bg-dark-transparent my-dashboard-nav clearfix mobile-hidden"
    >
      <div
        class="horizontal-mainwrapper container2 container2-dashboard clearfix"
      >
        <!--Nav-->
        <nav class="horizontalMenu clearfix d-md-flex">
          <div class="desktoplogo">
            <router-link to="/">
              <img src="@/assets/images/brand/TRADEXPLORA-V4.1-mini.png" alt />
            </router-link>
          </div>
          <div class="desktoplogo-1">
            <router-link to="/">
              <img src="@/assets/images/brand/TRADEXPLORAV3.1.png" alt />
            </router-link>
          </div>
          <ul class="horizontalMenu-list" style="margin-top: 12px;">
            <li aria-haspopup="true" style="margin-right: 10px;">
              
            </li>
          </ul>

          <div class="call-us-now" style="width: 32%!important;">
            
            <div class="contact-us-header contact-us-header-dash">
              <!-- <i style="color:black;" class="flaticon-customer-service"></i> -->
              <div class="notification-dash">
                <router-link
                  class="shopping_bag_btn"
                  to="https://carspot.scriptsbundle.com/transparent-1/cart/"
                >
                  <i class="fa fa-bell-o"></i>
                  <span>0</span>
                </router-link>
              </div>
              <router-link
                to="/postad"
                class="btn btn-theme post-ad-header-tx-dashbaord"
                id="post-ad-header-tx-dashbaord-tx"
                >POST AN AD
              </router-link>
            </div>
          </div>
          <!-- <div class="postad">
            <ul>
              <li>
                <router-link
                  to="/postad"
                  class="btn btn-tx btn-theme text-dark post-ad-header-tx"
                  >POST AN AD
                </router-link>
              </li>
            </ul>
          </div> -->
        </nav>
      </div>
    </div>
  </div>
  <!--/Horizontal-main -->
</template>

<script>
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon4d2c.css");
require("../../public/assets/css/tdx-mega.css");
/* TDX custom Mega menu with no JS */
// import timer from "@/components/countdownTimer";
import { mapGetters, mapActions } from "vuex";
/* eslint-disable no-undef */
export default {
  name: "dashboardtopbar",
  components: {
    // timer
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn", "getUser"]),
    ...mapGetters("product", ["categories"])
  },
  methods: {
    ...mapActions("product", ["fetchAllCategories", "fetchSubCategories"]),
    ...mapActions("auth", ["logoutUser"]),
    setLogout() {
      this.logoutUser();
    },
    sendFetchSubCategories() {
      let categories = this.categories;
      for (let category in categories) {
        const payload = {
          cid: categories[category].id
        };
        this.fetchSubCategories(payload);
      }
    },
    sync() {
      $(document).ready(function() {
        $("#bmenu_toggle").prop("checked", false);
        // var stickyNavTop = $('.my-nav').offset().top;
        // var stickyNav = function() {
        //   var scrollTop = $(window).scrollTop();
        //   if (scrollTop >= stickyNavTop) {
        //       $("#topb").removeClass("mobile-hidden");
        //       $(".my-nav").addClass("top-bar-fixed");
        //     } else {
        //       $(".my-nav").removeClass("top-bar-fixed");
        //   }
        // }

        // stickyNav();
        // $(window).scroll(function() {
        //   stickyNav();
        // });

        // $(window).scroll(function() {
        //   var scroll = $(window).scrollTop();
        //   // console.log("we are scrolling " + scroll);
        //   if (scroll > 0) {
        //     $("#topb").removeClass("mobile-hidden");
        //     $("#topb").addClass("top-bar-hide");
        //   } else {
        //     $("#topb").removeClass("top-bar-hide");
        //   }
        // });
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
        
        function formatState(state) {
          if (!state.id) {
            return state.text;
          }
          var $state = $(
            '<span><img src="./assets/images/flags/' +
              state.element.value.toLowerCase() +
              '.svg" class="img-flag" /> ' +
              state.text +
              "</span>"
          );
          return $state;
        }
      });
    }
  },
  created() {
    this.sync();
    this.fetchAllCategories();
    this.sendFetchSubCategories();
  }
};
</script>

<style>
/* Sidebar Test Styles => Don't remove */
.container2-dashboard {
  /* width: 1492px !important; */
}
.contact-us-header-dash {
  height: 100%;
}
.notification-dash {
  margin-right: 48px;
}
.notification-dash i {
  color: #eee!important;
  font-size: 28px!important;
  margin-top: 18px!important;
}

.notification-dash span {
  position: absolute;
  margin-left: 10px;
  top: 34px;
}

.contact-us-header-dash a {
  margin-top: auto !important;
  margin-bottom: auto !important;
}
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
/* Mega Menu Internals */
.hide-at-start-wrapper {
  position: absolute;
  z-index: 1000;
  top: 94px;
  width: 100%;
  /* border-top: 3px solid #4caf50; */
}
.bmenu {
  background: white;
  color: black !important;
  font-size: 14px;
  text-align: left;
  font-weight: 400;
  /* font-family: avenir; */
}
.my-dashboard-nav {
  position: fixed !important;
  right: 0;
  left: 0;
  z-index: 1030;
  top: 0px;
}
.horizontal-main {
  border-bottom: 3px solid #4caf50;
}
.horizontal-main-dashboard {
  border-bottom: none !important;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
}
/* @media (min-width: 1440px) {
  .container2-dashboard {
    width: 138.25rem !important;
  }
}

@media (min-width: 1200px) {
  .container2-dashboard  {
    width: 122rem !important;
  }
} */

@media (min-width: 992px) {
  .container2-dashboard {
    max-width: 100%!important;
    width: 95%!important;
  }
}

@media (min-width: 768px) {
  .container2-dashboard {
    width: 750px;
  }
}
/* .top-bar-hide {
  display: none !important;
} */
.post-ad-header-tx-dashbaord {
  margin-top: 20px;
}
.notification i {
  color: #4caf50;
}
#post-ad-header-tx-dashbaord-tx {
  padding: 12px 16px !important;
  border-radius: 6px;
}
.header-search-button {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
  text-transform: uppercase;
  font-weight: 500 !important;
  transition: all ease-in 300ms;
  border-radius: 6px !important;
}
.header-search-button:hover {
  color: #fff !important;
  box-shadow: 0 6px 16px -6px rgba(76, 175, 80, 0.9) !important;
}
.profile-dropdown-list {
  margin-right: 0px !important;
  width: 100% !important;
}
.profile-dropdown-list a {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
/* .profile-dropdown-link {
  padding-top: 10px;
  padding-bottom: 10px;
} */
.profile-dropdown-icon {
  color: #232323 !important;
  font-size: 16px !important;
}
</style>
