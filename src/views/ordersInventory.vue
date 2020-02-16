<template>
  <div class="order-inventory">
    <div id="wrapper">
      <!-- LEFT SIDEBAR -->
      <dsidebar></dsidebar>

      <!-- END LEFT SIDEBAR -->

      <!-- MAIN -->
      <div class="main dashboard-main dashboard-main-content" style="min-height: 713px;">
        <!-- MAIN CONTENT -->
        <div class="main-content">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="panel panel-headline">
              <div class="panel-heading">
                <div class="row">
                  <div class="col-md-12 col-lg-6 col-sm-12 col-xs-12">
                    <h3 class="panel-title">
                      Orders
                      <span style="display: inline;">( 0 )</span>
                    </h3>
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
                          placeholder="Search Inventory"
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
              </div>
              <!-- Table view of pending orders <div class="panel-body">
                <div class="table-responsive">
                  <table class="table dashboard-table table-fit">
                    <thead>
                      <tr>
                        <th></th>
                        <th>detail</th>
                        <th>Category</th>
                        <th>Views</th>
                        <th>action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colspan="5">
                          <h4>no Inventory found</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>-->

              <!-- No Orders -->
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div
                      class="edit-profile-form dealers-review-section on-backend"
                    >
                      <div class="row">
                        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                          <div
                            class="alert custom-alert custom-alert-info"
                            role="alert"
                          >
                            <div class="custom-alert_top-side row">
                              <div
                                class="col-md-12 col-lg-12 col-sm-12 text-center"
                              >
                                <div
                                  class="alert-icon custom-alert_icon la la-info-circle"
                                  style="display: inline-block; margin: 0px auto;"
                                ></div>
                              </div>
                              <div
                                class="col-md-12 col-lg-12 col-sm-12 text-center"
                              >
                                <div class="custom-alert_body">
                                  <h6 class="custom-alert_heading">
                                    No Orders Available.
                                  </h6>
                                  <div class="custom-alert_content">
                                    Your orders will show up here.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

<style scoped>
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/style.css';
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css';
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/bcustom2.css';
</style>


<script>

import dsidebar from "@/components/Dsidebar";
export default {
  name: "productDetails",
  components: {
    dsidebar
  }
};
</script>

<style>
.dashboard-main-content {
    padding-top: 107px!important;
  }
.table th {
  font-size: 14px;
}
.search-input {
  /* border-top-right-radius: 0px;
  border-bottom-right-radius: 0px; */
  border-radius: 8px 0px 0px 8px !important;
}
.btn.btn-theme.btn-search {
  border-radius: 0px 8px 8px 0px!important;
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
