<template>
  <!--Topbar-->
  <!-- <dheader></dheader> Is this even neccessary?-->
  <!--/Horizontal-main -->

  <!-- <button class="hamburger hamburger--collapse" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>-->
  <div>
     <div id="global-loader" v-show="loading">
      <DashboardLoader
        class="mobile-hidden"
      ></DashboardLoader>
    </div>
    <div id="wrapper">
      <div class="dashboard-carspot">
        <!-- LEFT SIDEBAR -->
        <dsidebar></dsidebar>

        <!-- END LEFT SIDEBAR -->

        <!-- MAIN -->
        <div class="main dashboard-main dashboard-main-content">
          <!-- MAIN CONTENT -->
          <div class="main-content">
            <div class="container-fluid">
              <!-- OVERVIEW -->
              <div class="row">
                <div class="col-md-12">
                  <div class="panel panel-headline">
                    <div class="panel-heading">
                      <h3 class="panel-title">Dashboard Overview</h3>
                      <p class="panel-subtitle">Last logged in 40 mins Ago</p>
                      <!-- Sidebar Trigger Button -->
                      <!-- <div class="hidden-desktop">
                      <button
                        class="btn btn-theme openbtn closed"
                        style="color: #fff;"
                      >&#9776; Open Sidebar</button>
                    </div>-->
                      <!-- End Sidebar Trigger Button -->
                    </div>
                    <div class="panel-body">
                      <!-- <div class="row">
                        <div class="col-md-3">
                          <div class="metric metric-services">
                            <span class="icon">
                              <i class="fa fa-mobile"></i>
                            </span>
                            <p>
                              <span class="title">Airtime</span>
                              <span class="number">{{ getAirtime() }}</span>
                            </p>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="metric metric-services">
                            <span class="icon">
                              <i class="fa fa-television"></i>
                            </span>
                            <p>
                              <span class="title">Cable TV</span>
                              <span class="number">{{ getCableTV() }}</span>
                            </p>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="metric metric-services">
                            <span class="icon">
                              <i class="fa fa-bolt"></i>
                            </span>
                            <p>
                              <span class="title">Electricity</span>
                              <span class="number">{{ getElectricity() }}</span>
                            </p>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="metric metric-services">
                            <span class="icon">
                              <i class="fa fa-plane"></i>
                            </span>
                            <p>
                              <span class="title">Flight</span>
                              <span class="number">{{ getFlight() }}</span>
                            </p>
                          </div>
                        </div>
                      </div> -->
                      <div class="row">
                        <div class="col-md-3">
                          <div class="metric">
                            <span class="icon">
                              <i class="fa fa-star"></i>
                            </span>
                            <p>
                              <span class="title">Featured Posts</span>
                              <span class="number">{{ getFeaturedAds() }}</span>
                            </p>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="metric">
                            <span class="icon">
                              <i class="fa fa-tasks"></i>
                            </span>
                            <p>
                              <span class="title">Active</span>
                              <span class="number">{{ getActiveAds() }}</span>
                            </p>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="metric">
                            <span class="icon">
                              <i class="fa fa-warning"></i>
                            </span>
                            <p>
                              <span class="title">Expired</span>
                              <span class="number">{{ getDeletedAds() }}</span>
                            </p>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="metric">
                            <span class="icon">
                              <i class="fa fa-shopping-bag"></i>
                            </span>
                            <p>
                              <span class="title">Sold</span>
                              <span class="number">{{ getSoldAds() }}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="panel panel-headline">
                  <div class="panel-heading">
                    <h3 class="panel-title">Most Viewed Posts</h3>
                    <a href class>View All Posts</a>
                  </div>
                  <div class="panel-body table-responsive">
                  </div>
                </div>
                <div class="panel panel-headline">
                  <div class="panel-heading">
                    <h3 class="panel-title">Most Recent Reviews</h3>
                    <a href class>View All Reviews</a>
                  </div>
                  <div class="panel-body">
                    <metrics></metrics>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <div class="panel panel-headline">
                  <div class="panel-heading">
                    <h3 class="panel-title">Most Viewed Posts</h3>
                    <a href class>View All Posts</a>
                  </div>
                  <div class="panel-body table-responsive">
                    <table
                      class="table dashboard-table table-fit table-striped"
                    >
                      <!--<thead>
                                <tr>
                                    <th></th>
                                    <th> detail</th>
                                    <th> Views</th>
                                </tr>
                      </thead>-->
                        <tbody>
                          <tr>
                            <td colspan="5">
                              <h4>No Inventory Found</h4>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="panel panel-headline">
                    <div class="panel-heading">
                      <h3 class="panel-title">Most Recent Reviews</h3>
                      <a href class>View All Reviews</a>
                    </div>
                    <div class="panel-body">
                      <div
                        class="alert custom-alert custom-alert-info"
                        role="alert"
                      >
                        <div class="custom-alert_top-side">
                          <span
                            class="alert-icon custom-alert_icon la la-info-circle"
                          ></span>
                          <div class="custom-alert_body">
                            <h6 class="custom-alert_heading">
                              No Review Availabler.
                            </h6>
                            <div class="custom-alert_content">
                              Your reviews will be visible here.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="panel panel-headline">
                    <div class="panel-body">
                      <div
                        class="alert custom-alert custom-alert-info"
                        role="alert"
                      >
                        <div class="custom-alert_top-side">
                          <span
                            class="alert-icon custom-alert_icon la la-info-circle"
                          ></span>
                          <div class="custom-alert_body">
                            <h6 class="custom-alert_heading">
                              No Notification Available.
                            </h6>
                            <div class="custom-alert_content">
                              Notifications from admin will be visible here.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-headline colored-panel">
                    <div class="panel-heading">
                      <h3 class="panel-title">Package Details</h3>
                    </div>
                    <div class="panel-body">
                      <ul class="profile-details">
                        <li>
                          <i class="la la-plus"></i>
                          <div class="profile-meta">
                            <h6>Simple Ads</h6>
                            <span>5</span>
                          </div>
                        </li>
                        <li>
                          <i class="la la-star"></i>
                          <div class="profile-meta">
                            <h6>Featured Ads</h6>
                            <span>3</span>
                          </div>
                        </li>
                        <li>
                          <i class="la la-retweet"></i>
                          <div class="profile-meta">
                            <h6>Bump up Ads</h6>
                            <span>2</span>
                          </div>
                        </li>
                        <li>
                          <i class="la la-calendar"></i>
                          <div class="profile-meta">
                            <h6>Package Expiry date</h6>
                            <span>Never Expire</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END MAIN CONTENT -->
        </div>
        <!-- END MAIN -->
        <div class="clearfix"></div>
      </div>
      <!-- <div class="text-center margin-top-30 margin-bottom-20">
        <ul class="pagination pagination-lg">
<li class="active"><a href="index.html">1</a></li>
<li><a href="page/2/index.html">2</a></li>
<li><a href="page/2/index.html" >Next Page &raquo;</a></li>
</ul>
    </div>-->

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
</template>
<script>
/* eslint-disable no-undef */

import dsidebar from "@/components/Dsidebar";

import DashboardLoader from "@/components/loaders/dashboardloader";
import { mapState, mapGetters, mapActions } from "vuex";
import metrics from "@/components/metrics";
// import dheader from "@/components/Dheader";
export default {
  name: "dashboard",
  components: {
    dsidebar,
    DashboardLoader,
    metrics
    // dheader
  },
  computed: {
    ...mapState("auth", ["loading"]),
    ...mapGetters('user', ['getDashboard'])
  },
  methods: {
    ...mapActions('user', ['fetchDashboardDetails']),
    sum( obj ) {
      var sum = 0;
      for( var el in obj ) {
        if( obj.hasOwnProperty( el ) ) {
          sum += parseFloat( obj[el] );
        }
      }
      return sum;
    },
    getFeaturedAds(){
      if(this.getDashboard[1].fetured){
        delete this.getDashboard[1].fetured['0'];
        return this.sum( this.getDashboard[1].fetured );
      }else{
        return 0 
      }
    },
    getSoldAds(){
      if(this.getDashboard[1].sold){
        return this.getDashboard[1].sold;
      }else{
        return 0 
      }
    },
    getActiveAds(){
      if(this.getDashboard[1].false){
        return this.getDashboard[1].false;
      }else{
        return 0 
      }
    },    
    getDeletedAds(){
      if(this.getDashboard[1].true){
        return this.getDashboard[1].true;
      }else{
        return 0 
      }
    },
    getAirtime(){
      if(this.getDashboard[0].Airtime){
        return this.getDashboard[0].Airtime;
      }else{
        return 0 
      }
    },
    getCableTV(){
      if(this.getDashboard[0].CableTV){
        return this.getDashboard[0].CableTV;
      }else{
        return 0 
      }
    },
    getElectricity(){
      if(this.getDashboard[0].Electricity){
        return this.getDashboard[0].Electricity;
      }else{
        return 0 
      }
    },
    getFlight(){
      if(this.getDashboard[0].Flight){
        return this.getDashboard[0].Flight;
      }else{
        return 0 
      }
    },
  },
  created() {
    this.fetchDashboardDetails()
  }
};
</script>
<style scoped>
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/style.css';
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css';
  /*@import '../../public/assets/carspot-css/wp-content/themes/carspot/style4d2c.css';*/
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css';
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/bcustom2.css';
</style>
<style>
.dashboard-main-content {
  padding-top: 107px !important;
}
.alert-icon {
  padding-left: 0px !important;
}
/* .col-md-3:nth-child(1) .metric-services {
    
  }
  .col-md-3:nth-child(2) .metric-services {

  }
  .col-md-3:nth-child(3) .metric-services {
    
  }
  .col-md-3:nth-child(4) .metric-services {
    
  } */
.metric-services {
  background-color: #e3f8f5 !important;
}
.metric-services .title {
  color: #939daa;
}
.metric-services .number {
  color: #232323;
}
.metric-services .icon {
  background-color: #3bbeb0 !important;
}
.metric-services .icon i {
  color: #fff !important;
}
</style>
