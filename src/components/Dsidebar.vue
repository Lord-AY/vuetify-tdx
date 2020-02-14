<template>
  <div>
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
    <div id="sidebar-nav" class="sidebar">
      <div
        class="slimScrollDiv"
        style="position: relative; overflow: hidden; width: auto; height: 95%;"
      >
        <div
          class="sidebar-scroll"
          style="overflow: hidden; width: auto; height: 95%;"
        >
          <nav>
            <ul class="nav dashboard-sidebar">
              <li class="welcome-text">
                <img
                  :src="'https://www.tradexplora.com.ng/media/'+getUser.pictureUrl"
                  class="img-responsive"
                  alt="Profile Picture"
                />
                <div class="text-box">
                  Welcome back:
                  <span>{{ getUser.firstname }}</span>
                </div>
              </li>
              <li>
                <router-link to="/maindashboard">
                  <i class="la la-home"></i>
                  <span>Dashboard</span>
                </router-link>
              </li>
              <li>
                <router-link to="/editProfile">
                  <i class="la la-pencil"></i>
                  <span>Edit Profile</span>
                </router-link>
              </li>

              <li>
                <router-link to="/messaging">
                  <i class="la la-envelope"></i>
                  <span>My Messages</span>
                  <!-- <span class="badge referral">0</span> -->
                </router-link>
              </li>
              <li>
                <a href="#subPages" class="collapsed" data-toggle="collapse">
                  <i class="la la-list"></i>
                  <span>My Inventory</span>
                  <i class="icon-submenu la la-chevron-left"></i>
                </a>
                <div id="subPages" class="collapse">
                  <ul class="nav nav-dash">
                    <li>
                      <router-link to="/publishedInventory">
                        <span>Published</span>
                        <span class="badge">0</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/expired">
                        <span>Expired</span>
                        <span class="badge">0</span>
                      </router-link>
                    </li>
<!--                     <li>
                      <router-link to="/sold">
                        <span>Sold</span>
                        <span class="badge">0</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/pending">
                        <span>Pending</span>
                        <span class="badge">0</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/saved">
                        <span>Favourite</span>
                        <span class="badge">0</span>
                      </router-link>
                    </li>
 -->                  </ul>
                </div>
              </li>
              <li>
                <router-link to="/wallet">
                  <i class="la la-money"></i>
                  <span>Wallet</span>
                </router-link>
              </li>
              <li>
                <router-link to="/refferal">
                  <i class="la la-users"></i>
                  <span>Referral</span>
                  <span class="badge referral">0</span>
                </router-link>
              </li>
              <li>
                <router-link to="/rating">
                  <i class="la la-star"></i>
                  <span>My Ratings</span>
                </router-link>
              </li>
              <li>
                <router-link to="/ordersInventory">
                  <i class="la la-check-circle-o"></i>
                  <span>My Orders</span>
                </router-link>
              </li>
              <li>
                <router-link to="/mainSettings">
                  <i class="la la-cog"></i>
                  <span>Settings</span>
                </router-link>
              </li>
              <li>
                <a @click.prevent="setLogout">
                  <i class="fa fa-sign-out"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          class="slimScrollBar"
          style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 643px;"
        ></div>
        <div
          class="slimScrollRail"
          style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  /* eslint-disable no-undef */
props: {
  user: [Object, Array]
},
computed: {
    ...mapGetters("auth", ["getUser"]),
},
  methods: {
    ...mapActions("auth", ["logoutUser"]),
    setLogout() {
      this.logoutUser();
    },
    sync() {
      $(document).ready(function() {
        $("#tx-menu-toggle").click(function() {
          $(this).toggleClass("open");
        });

        let sideBarTrigger = $(".openbtn");
        let sideBar = $("#sidebar-nav");
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
  },
};
</script>

<style >
#sidebar-nav {
  padding-top: 104.98px!important;
}

.nav-dash li {
  width: 100%;
}
.nav.dashboard-sidebar {
  display: block!important;
}
@media only screen and (max-width: 991px) {
  .horizontal-header .smllogo {
    display: inline-block;
    margin-top: -8px;
  }
}
.sidebar .nav > li > a .badge {
  margin-bottom: 10px;
}
</style>
