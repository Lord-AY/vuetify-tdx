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
<!--                     <li class="select-country tdx-country mr-5">
                      <select
                        class="form-control select2-flag-search"
                        data-placeholder="Select Country"
                        style="color: #fff!important;"
                      >
                        <option value="NG">Nigeria</option>
                        <option value="UM">United States of America</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AL">Albania</option>
                        <option value="AD">Andorra</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AU">Australia</option>
                        <option value="AM">Armenia</option>
                        <option value="AO">Angola</option>
                        <option value="AR">Argentina</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BB">Barbados</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BE">Belgium</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BH">Bahrain</option>
                        <option value="BJ">Benin</option>
                        <option value="BN">Brunei</option>
                        <option value="BO">Bolivia</option>
                        <option value="BT">Bhutan</option>
                        <option value="BY">Belarus</option>
                        <option value="CD">Congo</option>
                        <option value="CA">Canada</option>
                        <option value="CF">Central African Republic</option>
                        <option value="CI">Cote d'Ivoire</option>
                        <option value="CL">Chile</option>
                        <option value="CM">Cameroon</option>
                        <option value="CN">China</option>
                        <option value="CO">Colombia</option>
                        <option value="CU">Cuba</option>
                        <option value="CV">Cabo Verde</option>
                        <option value="CY">Cyprus</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DK">Denmark</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EE">Estonia</option>
                        <option value="ER">Eritrea</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FI">Finland</option>
                        <option value="FJ">Fiji</option>
                        <option value="FR">France</option>
                        <option value="GA">Gabon</option>
                        <option value="GD">Grenada</option>
                        <option value="GE">Georgia</option>
                        <option value="GH">Ghana</option>
                        <option value="GH">Ghana</option>
                        <option value="HN">Honduras</option>
                        <option value="HT">Haiti</option>
                        <option value="HU">Hungary</option>
                        <option value="ID">Indonesia</option>
                        <option value="IE">Ireland</option>
                        <option value="IL">Israel</option>
                        <option value="IN">India</option>
                        <option value="IQ">Iraq</option>
                        <option value="IR">Iran</option>
                        <option value="IS">Iceland</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JO">Jordan</option>
                        <option value="JP">Japan</option>
                        <option value="KE">Kenya</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="KI">Kiribati</option>
                        <option value="KW">Kuwait</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="LA">Laos</option>
                        <option value="LB">Lebanons</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LR">Liberia</option>
                        <option value="LS">Lesotho</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="LV">Latvia</option>
                        <option value="LY">Libya</option>
                        <option value="MA">Morocco</option>
                        <option value="MC">Monaco</option>
                        <option value="MD">Moldova</option>
                        <option value="ME">Montenegro</option>
                        <option value="MG">Madagascar</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MK">Macedonia (FYROM)</option>
                        <option value="ML">Mali</option>
                        <option value="MM">Myanmar (formerly Burma)</option>
                        <option value="MN">Mongolia</option>
                        <option value="MR">Mauritania</option>
                        <option value="MT">Malta</option>
                        <option value="MV">Maldives</option>
                        <option value="MW">Malawi</option>
                        <option value="MX">Mexico</option>
                        <option value="MZ">Mozambique</option>
                        <option value="NA">Namibia</option>
                        <option value="NG">Nigeria</option>
                        <option value="NO">Norway</option>
                        <option value="NP">Nepal</option>
                        <option value="NR">Nauru</option>
                        <option value="NZ">New Zealand</option>
                        <option value="OM">Oman</option>
                        <option value="PA">Panama</option>
                        <option value="PF">Paraguay</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PH">Philippines</option>
                        <option value="PK">Pakistan</option>
                        <option value="PL">Poland</option>
                        <option value="QA">Qatar</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russia</option>
                        <option value="RW">Rwanda</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SC">Seychelles</option>
                        <option value="SD">Sudan</option>
                        <option value="SE">Sweden</option>
                        <option value="SG">Singapore</option>
                        <option value="TG">Togo</option>
                        <option value="TH">Thailand</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TL">Timor-Leste</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TN">Tunisia</option>
                        <option value="TO">Tonga</option>
                        <option value="TR">Turkey</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TW">Taiwan</option>
                        <option value="UA">Ukraine</option>
                        <option value="UG">Uganda</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VA">Vatican City (Holy See)</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Vietnam</option>
                        <option value="VU">Vanuatu</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                      </select>
                    </li>
 -->                    <li class="dropdown mr-5">
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
                <!-- <ul class="custom">
              <li>
                <router-link to="/register" class="text-dark text-white"><i class="fa fa-user mr-1"></i> <span>Register</span></router-link>
              </li>
              <li>
                <router-link to="/login" class="text-dark text-white"><i class="fa fa-sign-in mr-1"></i> <span>Login</span></router-link>
              </li>
              <li>
                <router-link to="/login" class="btn btn-tx btn-theme text-dark post-ad-header-tx"> POST AN AD</router-link>
              </li>
              </ul>-->

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
                    <a
                      class="shopping_bag_btn"
                      href=""
                    >
                      <i class="fa fa-shopping-cart"></i>
                      <span>0</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="shopping_bag_btn"
                      href=""
                    >
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
                      <li class="wallet-balance" style="display: flex" v-if="userbalance">
                        <router-link to="/wallet">
                          <img
                            src="@/assets/images/wallet.svg"
                            height="16px"
                            style="margin-top: -4px; margin-right: 5px; height:16px; weight:16px;"
                          />
                          Balance
                        </router-link>
                        <span style="line-height: 1.6!important">{{ userbalance }}</span>
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
      class="horizontal-main bg-dark-transparent my-nav clearfix mobile-hidden"
    >
      <div class="horizontal-mainwrapper container2 clearfix">
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
                  <!-- {{ categories }} -->
                  All Categories
                </span>
              </label>
              <div class="hide-at-start-wrapper">
                <nav class="bmenu panel animated" v-if="categories">
                  <router-link
                    to="/categories"
                    v-for="(category, index) in categories"
                    :key="++index + index * 10"
                    >

                    <div @mouseover.prevent="getsubcategory(category.id)">
                      <span class="triangle-origin">
                        {{ category.name }}
                      </span>
                    </div>
                    <hr />
                  </router-link>
                  <article class="panel"  v-for="(category, index) in categories"
                    :key="++index + index" style="min-width: 20%; margin-right: 100px;">
                    <div>
                      <div class="column">
                        <section class="titled-group">
                          <header>Subcategory for Category {{ category.name }}</header>
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
                  id="text4"
                  v-model="keyword"
                  @keydown.enter="sendSearch"
                  placeholder="Search products, brands and categories Using First 3 Letters"
                  style="background-color: #fff!important; color: #232323!important; font-size: 15px!important; "
                />
                
                <!-- {{ getResults }} -->
                <div id="searchResult" v-if="showResults">
                  <!-- {{ getResults }} -->
                  <div v-if="getResults != null">
                    <div
                      v-if="getResults.length < 1"
                      class="dropdown-header dropdown_empty"
                    >
                      No entry found
                    </div>
                  </div>
                   <div v-show="isLoading" class="search-result">
                    <ul class="dropdown search-dropdown">
                      <li class="dropdown-item search-dropdown-item">
                      <SearchLoader v-show="isLoading"></SearchLoader>
                      </li>
                    </ul>
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
                  <i class="fa fa-search location-gps mr-1"></i>
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
$(document).click(function (e) {
    e.stopPropagation();
    var container = $(".toggle");
})
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon4d2c.css");
// require("../../public/assets/css/tdx-mega.css");
/* TDX custom Mega menu with no JS */
import timer from "@/components/countdownTimer";
import { mapGetters, mapActions } from "vuex";
import SearchLoader from '@/components/loaders/SearchLoader';
/* eslint-disable no-undef */
export default {
  name: "topbar",
  data() {
    return {
      keyword: null,
      showResults: false,
      userbalance: null,
      isOpened: false,
      gottenResults: [],
      isLoading: true,
    };
  },
  components: {
    // timer
    SearchLoader
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn", "getUser","loading"]),
    ...mapGetters("product", ["categories", "subcategories"]),
    ...mapGetters("search", ["getResults"])
  },
  methods: {
    ...mapActions("product", ["fetchAllCategories", "fetchSubCategories"]),
    ...mapActions("search", ["searchAction"]),
    ...mapActions("auth", ["logoutUser"]),
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
      if(this.getResults.length < 1 || this.keyword > 0) {
        this.isLoading = true;
      }
      setTimeout(function(){as.isLoading = false;}, 400);
    },
    documentClick(e){
      $(document).ready(function() {
        var isShown = $(".hide-at-start-wrapper").hasClass("show");
        $(document).click(function(){
          $("#bmenu_toggle").prop("checked", false);
          this.showResults = false;
          $("#searchResult").hide();
        });
        $("#bmenu_toggle").click(function(e){
          e.stopPropagation();
        });
      });
    },
    sync() {
      $(window).on('load', function() {
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
    keyword: {
      handler: function(keyword) {
        if (keyword.length >= 3) {
          $(document).ready(function() {
              $("#searchResult").show();
          });

          this.showResults = true;
          this.getSearchResults(keyword);
          this.stopLoader();
        } else {
          let as = this;
          setTimeout(function(){as.showResults = false;}, 1200);
           this.stopLoader();
        }
      }
    },
    loading: {
      handler: function(loading) {
        if(loading) {
          this.isLoading = true;
        }else {
          setTimeout(function(){as.isLoading = false;}, 900);
        }
      }
    }
  },
  created() {
    this.sync();
    this.fetchAllCategories();
    this.sendFetchSubCategories();
    this.userbalance = localStorage.getItem("walletBalance");
    document.addEventListener('click', this.documentClick);
    this.gottenResults = this.getResults;
    // console.log(this.userbalance);
  },
  destroyed () {
    // important to clean up!!
    document.removeEventListener('click', this.documentClick);
  }

};
</script>

<style>
/* Search bar styles */
.search-result {
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
/* Mega Menu Internals */
.hide-at-start-wrapper {
  position: absolute;
  z-index: 1000;
  top: 94px;
  width: 100%;
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
.horizontal-main {
  border-bottom: none !important;
}
@media(min-width: 1320px) {
    .container2 {
        max-width: 1440px !important;
        width: 144px !important;
        /* padding: 0 8px!important; */
    }
}

@media(min-width: 1200px) {
    .container2 {
        max-width: 1320px !important;
        width: 1320px !important;
        /* padding: 0 8px!important; */
    }
}

@media(min-width: 900px) {
    .container2 {
        max-width: 1200px !important;
        width: 1200px !important;
        /* padding: 0 8px!important; */
    }
}
/* .top-bar-hide {
  display: none !important;
} */
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