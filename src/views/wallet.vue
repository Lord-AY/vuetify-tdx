<template>
  <div class="publishInventory">
    <div id="wrapper">
      <!-- LEFT SIDEBAR -->

      <dsidebar></dsidebar>
      <!-- END LEFT SIDEBAR -->

      <!-- MAIN -->
      <div
        class="main dashboard-main dashboard-main-content "
        style="min-height: 713px;"
      >
        <!-- MAIN CONTENT -->
        <div class="main-content">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="panel panel-headline">
              <div class="panel-heading">
                <div class="row">
                  <div class="col-md-12 col-lg-6 col-sm-12 col-xs-12">
                    <h3 class="panel-title">
                      Wallet Transactions
                      <!-- <span style="display: inline;">( 0 )</span> -->
                    </h3>
                    <div class="wallet-details">
                        <div class="balance">
                           <h4>&#x20A6; 0.00</h4> 
                        </div>
                        <div>
                            <router-link to="/wallet-deposit">
                            <button class="btn btn-theme btn-theme-dash">
                                    Deposit
                            </button>
                            </router-link>
                        </div>
                    </div>
                  </div>

                  <div class="col-md-12 col-lg-6 col-sm-12 col-xs-12">
                    <form
                      class="form form-inline form-published-search"
                      method="get"
                    >
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control search-input"
                          name="search_title"
                          value
                          placeholder="Search Transactions"
                        />
                        <input
                          type="hidden"
                          name="page-type"
                          value="published-ads"
                        />
                      </div>
                      <div class="form-group">
                        <button
                          type="submit"
                          class="btn btn-theme btn-search"
                          style="padding: 6px 15px; border-top-left-radius: 0px; border-bottom-left-radius: 0px; height: 38px;"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- <h3 class="panel-title">
                  Published
                  <span style="display: inline;">( 0 )</span>
                </h3>
                <form class="form form-inline form-published-search" method="get">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="search_title"
                      value
                      placeholder="Search Inventory"
                    />
                    <input type="hidden" name="page-type" value="published-ads" />
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-theme">Search</button>
                  </div>
                </form> -->
              </div>
              <div class="panel-body">
                <div class="table-responsive">
                  <table class="table dashboard-table table-fit">
                    <thead>
                      <tr>
                        <!-- <th>S/N</th> -->
                        <th>Transaction ID</th>
                        <th>Transaction Detail</th>
                        <th>Status</th>
                        <th>Date</th>
                        <!-- <th>Action</th> -->
                        <!-- <th>action</th> -->
                      </tr>
                    </thead>
                    <tbody>
                      <!-- <tr> <td colspan="5"><h4> no Inventory found</h4></td> </tr> -->
                      <tr>
                        <!-- <td>1</td> -->
                        <td>
                          <span class="ad-image">
                            12223261g7g2
                          </span>
                        </td>
                        <td>
                          <a
                            href="https://carspot.scriptsbundle.com/?post_type=ad_post&amp;p=3741"
                          >
                            <span class="ad-title">Deposit</span>
                          </a>
                          <span class="ad-date">
                            <i class="la la-calendar-o"></i> December 3, 2019
                          </span>
                          <!-- <span class="pending-post-msg">
                            <i class="fa fa-warning"></i> Your post is under
                            review
                          </span> -->
                        </td>
                        <td>
                          <span class="ad-cats">
                            <span class="padding_cats">
                              Successful
                            </span>
                          </span>
                        </td>
                        <td>22th January 2020</td>
                        <!-- <td>
                          <span class="ad-actions">
                            <ul class="ad-actions-list">
                              <li>
                                <a
                                  class="protip"
                                  data-pt-title=" View details"
                                  data-pt-position="top"
                                  data-pt-scheme="dark-transparent"
                                  data-pt-size="small"
                                  href="https://carspot.scriptsbundle.com/sell-your-car/?id=3741"
                                  data-adid="3741"
                                >
                                  <a href="" data-target="#myModal" data-toggle="modal"><i class="la la-eye"></i></a>
                                </a>
                              </li>
                            </ul>
                          </span>
                        </td> -->
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END MAIN CONTENT -->
        <div
          id="myModal"
          class="modal fade change-psw"
          role="dialog"
          style="display: none;"
        >
          <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header rte">
                <button type="button" class="close" data-dismiss="modal">
                  <span aria-hidden="true"> ✕ </span>
                </button>
                <h2 class="modal-title">Password Change</h2>
              </div>
              <form id="sb-change-password">
                <div class="modal-body">
                  <div class="form-group">
                    <label>Current Password</label>
                    <input
                      placeholder="Current Password"
                      class="form-control"
                      type="password"
                      name="current_pass"
                      id="current_pass"
                    />
                  </div>
                  <div class="form-group">
                    <label>New Password</label>
                    <input
                      placeholder="New Password"
                      class="form-control"
                      type="password"
                      name="new_pass"
                      id="new_pass"
                    />
                  </div>
                  <div class="form-group">
                    <label>Confirm New Password</label>
                    <input
                      placeholder="Confirm Password"
                      class="form-control"
                      type="password"
                      name="con_new_pass"
                      id="con_new_pass"
                    />
                  </div>

                  <div class="form-group">
                    <span
                      class="tooltip-disabled pull-left"
                      data-toggle="tooltip"
                      title="Disabled in demo"
                    >
                      <button
                        class="btn btn-theme btn-block"
                        type="button"
                        disabled=""
                      >
                        Reset My Password
                      </button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
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
require("../../public/assets/skins/color-skins/color15.css");
require("../../public/assets/plugins/horizontal-menu/horizontal.css");
require("../../public/assets/carspot-css/wp-includes/css/dist/block-library/style.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/stylea1ec.css");
require("../../public/assets/carspot-css/wp-content/plugins/contact-form-7/includes/css/styles58e0.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreenf43b.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet-search.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/style4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/video_player4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/bootstrap4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/star-rating4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/jquery-confirm4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/datepicker.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/et-line-fonts4d2c.css");
require("../../public/assets/carspot-css/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesome.min52c7.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/line-awesome.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/animate.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon24d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom_icons4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/select2.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/nouislider.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.carousel4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.theme4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/toastr.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/woocommerce4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/skins/minimal/minimal4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/jquery.fancybox.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/slider4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/carspot-menu4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/responsive-media4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css");
require("../../public/assets/carspot-css/wp-content/plugins/add-to-any/addtoany.min9be6.css");
require("../../public/assets/carspot-css/wp-includes/css/dist/block-library/style.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/stylea1ec.css");
require("../../public/assets/carspot-css/wp-content/plugins/contact-form-7/includes/css/styles58e0.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreenf43b.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/star-rating4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/style.css");
require("../../public/assets/css/user-dashboard/protip.css");

require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/jquery-confirm4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet-search.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/style4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/video_player4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/bootstrap4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/star-rating4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/jquery-confirm4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/datepicker.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/et-line-fonts4d2c.css");
require("../../public/assets/carspot-css/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesome.min52c7.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/line-awesome.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/animate.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon24d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom_icons4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/select2.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/nouislider.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.carousel4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.theme4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/toastr.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/woocommerce4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/skins/minimal/minimal4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/jquery.fancybox.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/slider4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/carspot-menu4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/responsive-media4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.carousel4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.theme4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/toastr.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/woocommerce4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/skins/minimal/minimal4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/jquery.fancybox.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/slider4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/carspot-menu4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/responsive-media4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css");
require("../../public/assets/carspot-css/wp-content/plugins/add-to-any/addtoany.min9be6.css");
require("../../public/assets/skins/color-skins/color15.css");
require("../../public/assets/plugins/horizontal-menu/horizontal.css");
require("../../public/assets/css/components.css");

import dsidebar from "@/components/Dsidebar";
// import dheader from "@/components/Dheader";
export default {
  name: "wallet",
  components: {
    dsidebar
  }
};
</script>

<style>
.dashboard-main-content {
  padding-top: 107px !important;
}
.wallet-details {
    display: flex;
    margin-top: 16px;
}
.balance h4{
    font-size: 20px;
    padding-top: 4px;
    margin-right: 20px;
}
.btn-theme-dash {
    padding: 10px 16px;
}
.btn-theme-dash a {
    color: #fff!important;
}
.table th {
  font-size: 14px;
}
ul.ad-actions-list li {
  display: inline-block;
}
.dashboard-table tr td .ad-actions i {
  font-size: 24px;
}

/* .dashboard-table .ad-image img {
    width: 100px;
    height: auto !important;
    border-radius: 5px;
    margin: 0px auto;
} */
.search-input {
  /* border-top-right-radius: 0px;
  border-bottom-right-radius: 0px; */
  border-radius: 8px 0px 0px 8px !important;
}
.btn.btn-theme.btn-search {
  border-radius: 0px 8px 8px 0px !important;
}

.form-published-search {
  display: flex;
}

@media (max-width: 992px) {
  .form-published-search {
    float: left;
    margin-top: 20px;
  }
}
</style>
