<template>
  <div class="publishInventory">
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
                      Expired 
                      <span style="display: inline;">( {{ filteredRow.length }} )</span>
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
                          placeholder="Search product"
                          v-model="search_input"
                          @keyup.enter="getUserReferees()"
                        />
<!--                         <input
                          type="hidden"
                          name="page-type"
                          value="published-ads"
                          v-model="search_input"
                          @keyup.enter="getUserReferees()"
                        />
 -->                  </div>
                      <div class="form-group">
                        <button
                          type="submit"
                          class="btn btn-theme"
                          style="padding: 6px 15px; border-top-left-radius: 0px; border-bottom-left-radius: 0px; height: 38px;"
                          @click.prevent="getUserReferees()"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="panel-body">
                <div class="table-responsive">
                  <table class="table dashboard-table table-fit">
                    <thead>
                      <tr>
                        <!-- <th>S/N</th> -->
                        <th>S/n</th>
                        <th>detail</th>
                        <th>Category</th>
                        <!-- <th>Views</th> -->
                        <th>action</th>
                      </tr>
                    </thead>
                    <tbody v-for="(product, index) in filteredRow" :key="index">
                      <!-- <tr> <td colspan="5"><h4> no Inventory found</h4></td> </tr> -->
                      <tr v-if="product.published == false">
                        <!-- <div v-if="product.published == true"> -->
                          <td>
                            {{index}}
                          </td>
                          <td>
                            <a
                              href="https://carspot.scriptsbundle.com/?post_type=ad_post&amp;p=3741"
                            >
                              <span class="ad-title">{{ product.name }}</span>
                            </a>
                            <span class="ad-date">
                              <i class="la la-calendar-o"></i> {{ format_date(product.createdAt) }}
                            </span>
                            <span class="pending-post-msg">
                              <i class="fa fa-warning"></i> Your post Live
                              review
                            </span>
                          </td>
                          <td>
                            <span class="ad-cats">
                              <span class="padding_cats">
                                <a
                                  href="#"
                                  >{{ product.category  }}</a
                                >
                              </span>
                            </span>
                          </td> 
                          <td>
                            <span class="ad-actions">
                              <ul class="ad-actions-list">
                                <li>
                                  <a
                                    class="protip"
                                    data-pt-title=" Edit Ad"
                                    data-pt-position="top"
                                    data-pt-scheme="dark-transparent"
                                    data-pt-size="small"
                                    href="https://carspot.scriptsbundle.com/sell-your-car/?id=3741"
                                    data-adid="3741"
                                  >
                                    <i class="la la-edit"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="protip delete_ad"
                                    data-pt-title=" Delete Ad"
                                    data-pt-position="top"
                                    data-pt-scheme="dark-transparent"
                                    data-pt-size="small"
                                    href="javascript:void(0);"
                                    data-adid="3741"
                                    style="color: red;"
                                  >
                                    <i class="la la-trash"></i>
                                  </a>
                                </li>
                              </ul>
                            </span>
                          </td>
                        <!-- </div> -->
                      </tr>
                    </tbody>
                  </table>
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
  /*@import '../../public/assets/carspot-css/wp-content/themes/carspot/style4d2c.css';*/
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css';
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/bcustom2.css';
</style>

<script>
import { mapActions, mapGetters } from "vuex";
import dsidebar from "@/components/Dsidebar";
import moment from "moment";
// import dheader from "@/components/Dheader";
export default {
  name: "expired-inventory",
  data() {
    return {
      myreferals : [],
      search_input: '',
      isLoading: true,
    };
  },
  components: {
    dsidebar
  },
  computed: {
    ...mapGetters("product", ["sellerProducts"]),
    filteredRow: function(){
      return this.myreferals.filter((row) => {
        for(var key in row){
          if(String(row[key]).indexOf(this.search_input) !== -1){
            return true;
          }
        }
        return false;
      });
    }
  },
  methods: {
    ...mapActions("product", ["fetchSellerProducts"]),
    format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },
    async getUserReferees() {
      // console.log(payload);
      await this.fetchSellerProducts();
    },
  },
  watch: {
    $route: "sync",
     loading: {
      handler: function(loading) {
        if (loading) {
          this.isLoading = true;
        }
        this.isLoading = false;
      }
    },
  },
  created() {
    this.getUserReferees().then(data => {
        // console.log(this.getReferee);
        this.myreferals = this.sellerProducts;
    });
    // console.log(this.getUser);
    
  },
};
</script>

<style>
.dashboard-main-content {
    padding-top: 107px!important;
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
