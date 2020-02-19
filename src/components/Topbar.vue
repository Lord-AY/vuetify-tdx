<template>
  <!--Topbar-->
  <!--Topbar-->
  <div class="header-main">
    <div id="topb">
      <div class="top-bar mobile-hidden">
        <div class="container">
          <div class="row">
            <div class="col-xl-8 col-lg-8 col-sm-4 col-6 modified-width">
              <div class="top-bar-left d-flex">
                <div class="clearfix"></div>
                <div class="clearfix">
                  <ul class="contact">
                    <li class="dropdown" style="margin-right: 24px">
                      <a
                        href="#"
                        class="text-dark dropdown-head"
                        data-toggle="dropdown"
                      >
                        <span>
                          Language
                          <i class="fa fa-caret-down text-muted"></i>
                        </span>
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-right dropdown-menu-arrow"
                      >
                        <a href="#" class="dropdown-item">English</a>
                        <a class="dropdown-item" href="#">French</a>
                        <a class="dropdown-item" href="#">Arabic</a>
                        <a class="dropdown-item" href="#">German</a>
                        <a href="#" class="dropdown-item">Greek</a>
                        <a href="#" class="dropdown-item">Japanese</a>
                      </div>
                    </li>
                    <li class="dropdown">
                      <a
                        href="#"
                        class="text-dark dropdown-head"
                        data-toggle="dropdown"
                      >
                        <span>
                          Currency
                          <i class="fa fa-caret-down text-muted"></i>
                        </span>
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-right dropdown-menu-arrow"
                      >
                        <a href="#" class="dropdown-item">NGN</a>
                        <a href="#" class="dropdown-item">USD</a>
                        <a class="dropdown-item" href="#">EUR</a>
                        <a class="dropdown-item" href="#">INR</a>
                        <a href="#" class="dropdown-item">GBP</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-sm-8 col-6">
              <div class="top-bar-right">
                <ul class="listnone custom" v-if="!isLoggedIn">
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
                      to="/login"
                      class="btn btn-tx btn-theme text-dark post-ad-header-tx"
                      style="height: 40px!important; font-weight: 500!important; border-radius: 4px!important; padding: 8px 12px!important; margin-top: 4px!important; color: white;"
                      >POST AN AD</router-link
                    >
                  </li>
                </ul>
                <ul class="listnone custom" v-else>
                  <div class="" style="margin-top: auto; margin-right: 8px;">
                    <li>
                      <a class="shopping_bag_btn" href="">
                        <i class="fa fa-shopping-cart"></i>
                        <span>0</span>
                      </a>
                    </li>
                    <li>
                      <a class="shopping_bag_btn" href="">
                        <i class="fa fa-bell"></i>
                        <span>0</span>
                      </a>
                    </li>
                    <li>
                      <router-link to="/referal" class="referal">
                        <span>Refer</span>
                        <i class="fa fa-share"></i>
                      </router-link>
                    </li>
                  </div>

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
                        v-if="getUser === null"
                        class="img-circle resize"
                        alt="Avatar"
                        src="https://www.tradexplora.com.ng/media/avatar.png"
                      />
                      <img
                        class="img-circle resize"
                        v-else
                        alt="Avatar"
                        :src="
                          `https://www.tradexplora.com.ng/media/${getUser.pictureUrl}`
                        "
                      />
                      <span class="caret" style="color: #fff!important"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li
                        class="wallet-balance"
                        style="display: flex"
                      >
                        <router-link to="/wallet">
                          <img
                            src="@/assets/images/wallet.svg"
                            height="16px"
                            style="margin-top: -4px; margin-right: 5px; height:16px; weight:16px;"
                          />
                          Balance
                        </router-link>
                        <span style="line-height: 1.6!important">
                          {{
                            userbal
                          }}
                        </span>
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
                      style="height: 40px!important; font-weight: 500!important; border-radius: 4px!important; padding: 8px 12px!important; margin-top: 4px!important;"
                      >POST AN AD
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  Timer Component  -->
      <!-- <div id="timer" class="timer">
        <timer
          starttime="Jan 2, 2020 09:37:25"
          endtime="Nov 8, 2020 16:37:25"
          trans='{  
            "day":"Days",
            "hours":"Hours",
            "minutes":"Minutes",
            "seconds":"Seconds",
            "expired":"Promo has been expired.",
            "running":"🎅 Till the end of promo.",
            "upcoming":"Till start of promo.",
            "status": {
                "expired":"Expired",
                "running":"Running",
                "upcoming":"Future"
              }}'
        ></timer>
      </div> -->
      <!--  End! Timer Component  -->
    </div>
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
        <div class="smllogo">
          <img src="@/assets/images/brand/TRADEXPLORA-V4.1-mini.png" alt />
        </div>
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
      class="horizontal-main bg-dark-transparent my-nav clearfix mobile-hidden"
      style="padding: 16px 0"
    >
      <div class="horizontal-mainwrapper container2 clearfix">
        <!--Nav-->
        <nav class="horizontalMenu clearfix d-md-flex">
          <div class="desktoplogo">
            <router-link to="/">
              <img src="@/assets/images/brand/TRADEXPLORA-V4.1-mini.png" alt />
            </router-link>
          </div>
          <!-- <div class="desktoplogo-1">
            <router-link to="/">
              <img src="@/assets/images/brand/TRADEXPLORAV3.1.png" alt />
            </router-link>
          </div> -->
          <ul class="horizontalMenu-list" style="margin-top: auto; margin-bottom: auto">
            <li aria-haspopup="true" style="margin-right: 10px;">
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
                  <!-- {{ categories }} -->
                  All Categories
                </span>
              </label>
              <div class="hide-at-start-wrapper">
                <nav class="bmenu panel animated" v-if="categories">
                  <router-link
                    to="/categories"
                    v-for="(category, index) in categories"
                    :key="++index + index * 1000"
                  >
                    <div @mouseover.prevent="getsubcategory(category.id)">
                      <span class="triangle-origin">
                        {{ category.name }}
                      </span>
                    </div>
                    <hr />
                  </router-link>
                  <article
                    class="panel"
                    v-for="(category, index) in categories"
                    :key="++index + index"
                    style="min-width: 20%; margin-right: 100px;"
                  >
                    <div>
                      <div class="column">
                        <section class="titled-group">
                          <header>
                            Subcategory for Category {{ category.name }}
                          </header>
                          <div v-if="subcategories">
                            <a
                              href="/categories"
                              v-for="subcategory in subcategories"
                              :key="subcategory.id"
                              >{{ subcategory.name }}</a
                            >
                          </div>
                          <div v-else>
                            <a href="/categories">
                              No subcategories present.
                            </a>
                          </div>
                          <div v-show="productloading">
                            <SearchLoader></SearchLoader>
                          </div>
                        </section>
                      </div>
                    </div>
                  </article>
                </nav>
              </div>
            </li>
            <div class="row-tdx">
              <!-- <li aria-haspopup="true" style="padding: 0px;">
                <div class="row"> -->
              <div class="col-xl-10 col-lg-12 col-md-12 mb-0">
                <input
                  type="text"
                  class="form-control input-lg br-tr-md-0 br-br-md-0 main-search main-search-tx"
                  id="text5"
                  v-model="keyword"
                  @keydown.enter="sendSearch"
                  placeholder="Search products, brands and categories"
                  style="background-color: #fff!important; color: #232323!important; font-size: 15px!important; "
                />

                <!-- {{ getResults }} -->
                <!-- <div
                    v-show="searchLoading"
                    class="search-result"
                    style="z-index: 2000"
                  >
 -->                <div class="dropdown-header dropdown_empty" v-show="searchLoading">
                      <SearchLoader></SearchLoader>
                    </div>
                <!-- </div> -->
                <div id="searchResult" v-if="showResults">
                  <!-- {{ getResults }} -->
                  <div
                    v-if="showError"
                    class="dropdown-header dropdown_empty search-result" style="text-align:center;"
                  >
                    No entry found
                  </div>
                  <div class="search-result">
                    <ul class="dropdown search-dropdown">
                      <li
                        class="dropdown-item search-dropdown-item"
                        v-for="(result, index) in getResults.slice(0, 5)"
                        :key="index"
                      >
                        <router-link
                          :to="
                            `/productDetails/${result.id}/${result.cid}/${result.uid}`
                          "
                          >{{ result.name }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <span>
                  <i class="fa fa-search location-gps mr-1" style=" margin-top: -4px"></i>
                </span>
              </div>
              <div
                class="col-xl-2 col-lg-12 col-md-12"
                style="padding-left: 0px;"
              >
                <button
                  class="header-search-button btn btn-theme"
                  style="text-transform: none!important;"
                  @click.prevent="sendSearch"
                >
                  Search
                </button>
              </div>
              <!-- </div>
              </li> -->
            </div>
          </ul>
          <div class="call-us-now" style="width: 32%!important;">
            <div class="contact-us-header">
              <i style="color:black;" class="flaticon-customer-service"></i>

              <p>
                Call Us Now

                <br />
                <strong>(+234) 811-111-1808</strong>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <!--/Horizontal-main -->
</template>

<script>
$(document).click(function(e) {
  e.stopPropagation();
  var container = $(".toggle");
});
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon4d2c.css");
require("../../public/assets/css/tdx-mega.css");
/* TDX custom Mega menu with no JS */
const formatCurrency = require("format-currency");
import timer from "@/components/countdownTimer";
import { mapGetters, mapActions, mapState } from "vuex";
import SearchLoader from "@/components/loaders/SearchLoader";
/* eslint-disable no-undef */
export default {
  name: "topbar",
  data() {
    return {
      keyword: null,
      showResults: false,
      userbalance: null,
      searchLoading: false,
      isOpened: false,
      gottenResults: [],
      isLoading: true,
      userbal: "",
      noResult: false
    };
  },
  components: {
    // timer
    SearchLoader
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn", "getUser", "loading"]),
    ...mapGetters("product", ["categories", "subcategories"]),
    ...mapState("search", ["searching"]),
    ...mapState("product", ["productloading"]),
    ...mapGetters("search", ["getResults"]),
    ...mapGetters("transactions", ["getwalletData", "getwalletHistory"]),
  },
  methods: {
    ...mapActions("product", ["fetchAllCategories", "fetchSubCategories"]),
    ...mapActions("search", ["searchAction"]),
    ...mapActions("auth", ["logoutUser"]),
    ...mapActions("transactions", ["FetchUserwalletHistory"]),
    formatCurrency(data) {
      return formatCurrency(data);
    },
    setLogout() {
      this.logoutUser();
    },
    getsubcategory(id) {
      // console.log(id);
      // console.log("sub category called ");
      const payload = {
        cid: id
      };
      this.fetchSubCategories(payload);
    },
    showError(){
      if(this.getResults.length < 1){
        return true;
      }else{
        return false;
      }
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
    sendSearch() {
      if (this.keyword !== null) {
        this.$router.push(`/search/${this.keyword}`);
        this.keyword = null;
      }
    },
    getSearchResults(keyword) {
      if (this.keyword !== null) {
        const payload = {
          keyword
        };
        this.searchAction(payload);
      }
    },
    stopLoader() {
      let as = this;
      if (this.getResults.length < 1 || this.keyword > 1) {
        this.searchLoading = true;
      }
      setTimeout(function() {
        as.searchLoading = false;
      }, 3000);
    },
    documentClick(e) {
      $(document).ready(function() {
        // var isShown = $(".hide-at-start-wrapper").hasClass("show");
        $(document).click(function() {
          $("#bmenu_toggle").prop("checked", false);
          this.showResults = false;
          $("#searchResult").hide();
        });
        $("#bmenu_toggle").click(function(e) {
          e.stopPropagation();
        });
      });
    },
    sync() {
      $(window).on("load", function() {

        $("#bmenu_toggle").prop("checked", false);
        var stickyNavTop = $(".my-nav").offset().top;
        var stickyNav = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop >= stickyNavTop) {
            $("#topb").removeClass("mobile-hidden");
            $(".my-nav").addClass("top-bar-fixed");
          } else {
            $(".my-nav").removeClass("top-bar-fixed");
          }
        };

        stickyNav();
        $(window).scroll(function() {
          stickyNav();
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
  watch: {
    getwalletHistory: {
      handler: function(resp){        
        this.userbal = this.formatCurrency(resp[resp.length -1].currentBal);
      }
    },
    keyword: {
      handler: function(keyword) {
        // console.log(keyword);
        let as = this;
        if (keyword.length >= 2) {
          $(document).ready(function() {
            $("#searchResult").show();
          });
          // setTimeout(function() {
            this.searchLoading = true;
          // }, 200);
          // setTimeout(function() {
            if(this.getResults.length > 0){
              this.searchLoading = false;
              this.showResults = true;
            }
          // }, 3200);
          this.stopLoader();
          this.getSearchResults(keyword);
        } else {
            if(this.getResults.length > 0){
              this.searchLoading = true;
              this.showResults = false;
            }
          this.stopLoader();
        }
      }
    },
    loading: {
      handler: function(loading) {
        if (loading) {
          this.isLoading = true;
        } else {
          this.isLoading = false;
        }
      }
    },
    searching: {
      handler: function(loading) {
        let as = this;
        if (loading) {
          this.searchLoading = true;
        } else {
          setTimeout(function() {
            as.searchLoading = false;
          }, 3000);
        }
      }
    }
  },
  created() {
    // this.sync();
    this.fetchAllCategories();
    this.sendFetchSubCategories();
    this.userbalance = localStorage.getItem("walletBalance");
    this.userbal = this.formatCurrency(this.getwalletHistory[this.getwalletHistory.length -1].currentBal);
    document.addEventListener("click", this.documentClick);
    this.gottenResults = this.getResults;
     // $(".hide-at-start-wrapper").hide();
    
    // console.log(this.getwalletHistory);
  },
  beforeMount() {
     if (this.getUser !== null) {
      this.FetchUserwalletHistory(this.getUser.id);
    }
  },
  mounted() {
    this.sync();
  },
  destroyed() {
    // important to clean up!!
    document.removeEventListener("click", this.documentClick);
  }
};
</script>

<style>
/* Search bar styles */
.search-result, .dropdown_empty {
  margin-top: 8px;
  position: absolute;
  display: block;
  background: #fff;
  width: 95%;
  max-height: 240px;
  overflow: auto;
  border: 1px solid #dee2e4;
  border-top: none;
  border-radius: 4px;
  z-index: 4;
  overflow-y: scroll;
}
.search-dropdown-item {
  padding: 10px 16px !important;
  font-size: 16px !important;
  font-weight: 400 !important;
}
.header-search-button.btn {
  padding: 4px 12px;
}
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

@media (min-width: 1320px) {
  .container2 {
    max-width: 1440px !important;
    width: 1440px !important;
    /* padding: 0 8px!important; */
  }
}

@media (min-width: 1200px) {
  .container2 {
    max-width: 1320px !important;
    width: 1320px !important;
    /* padding: 0 8px!important; */
  }
}

@media(min-width: 900px) {
    .container2 {
        max-width: 1200px !important;
        width: 1152px !important;
        /* padding: 0 8px!important; */
    }
}
/* .top-bar-hide {
  display: none !important;
} */

.stupidline{
    display: none;
}
.hide-at-start-wrapper {
  position: absolute;
  z-index: 1000;
  top: 84px;
  width: 100%;
  margin-top: -11px;
  /* border-top: 3px solid #4caf50; */
}
.referal {
  color: #fff;
}
.referal span{
  margin-right: 5px;
}
.bmenu {
  background: white;
  color: black !important;
  font-size: 14px;
  text-align: left;
  font-weight: 400;
  /* font-family: avenir; */
}
.my-nav {
  position: sticky;
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
