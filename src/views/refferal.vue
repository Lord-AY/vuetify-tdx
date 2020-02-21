<template>
  <div>
    <div>
      <div id="global-loader" v-show="isLoading">
        <HomeLoader class="mobile-hidden"></HomeLoader>
      </div>
    </div>
    <div class="referals">
      <div id="wrapper">
        <!-- LEFT SIDEBAR -->
        <dsidebar></dsidebar>
        <!-- END LEFT SIDEBAR -->

        <!-- MAIN -->
        <div
          class="main dashboard-main dashboard-main-content"
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
                        My Refferals
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
                            placeholder="Search referal"
                            v-model="search_input"
                            @keyup.enter="getUserReferees()"
                          />
                        </div>
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
                          <th>S/N</th>
                          <th>detail</th>
                          <th>referal id</th>
                          <!-- <th> Views</th> -->
                          <!-- <th>referal id</th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <!-- <tr> <td colspan="5"><h4> no Inventory found</h4></td> </tr> -->
                        <tr
                          v-for="(referal, index) in filteredRow"
                          :key="index"
                        >
                          <td>
                            {{ index }}
                          </td>
                          <td>
                            <a
                              href="https://carspot.scriptsbundle.com/?post_type=ad_post&amp;p=3741"
                            >
                              <span class="ad-title"
                                >{{ referal.firstname }}
                                {{ referal.lastname }}</span
                              >
                            </a>
                            <span class="ad-date">
                              <i class="la la-calendar-o"></i>
                              {{ format_date(referal.createdAt) }}
                            </span>
                            <!-- <span class="pending-post-msg"> <i class="fa fa-warning"></i> 
                          Your post is under review                                    </span>-->
                          </td>
                          <td>
                            <span class="ad-cats">
                              <span class="padding_cats">
                                https://www.tradexplora.com/dist/#/register/{{
                                  referal.referalId
                                }}
                              </span>
                              <span class="padding_cats"></span>
                            </span>
                          </td>
                          <!-- <td>0</td> -->
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

      <input type="hidden" id="msg_notification_on" value="1" />
      <input type="hidden" id="msg_notification_time" value="1000000000" />
      <input type="hidden" id="is_unread_msgs" value="0" />
      <a href="#0" class="cd-top">Top</a>
      <!-- Email verification and reset password -->
    </div>
  </div>
</template>
<style scoped>
@import "../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/style.css";
@import "../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css";
@import "../../public/assets/carspot-css/wp-content/themes/carspot/css/bcustom2.css";
</style>

<script>
import { mapActions, mapGetters } from "vuex";
import dsidebar from "@/components/Dsidebar";
import moment from "moment";
import HomeLoader from "@/components/loaders/Homeloader";
// import dheader from "@/components/Dheader";
export default {
  name: "referals",
  data() {
    return {
      myreferals: [],
      search_input: "",
      isLoading: true
    };
  },
  components: {
    dsidebar,
    HomeLoader
  },
  computed: {
    ...mapGetters("auth", ["loading", "errors", "getReferee", "getUser"]),
    filteredRow: function() {
      return this.myreferals.filter(row => {
        for (var key in row) {
          if (String(row[key]).indexOf(this.search_input) !== -1) {
            return true;
          }
        }
        return false;
      });
    }
  },
  methods: {
    ...mapActions("auth", ["fetchUserReferee"]),
    format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },
    async getUserReferees() {
      const payload = {
        refcode: this.getUser.id
      };
      // console.log(payload);
      await this.fetchUserReferee(payload);
    },
    showError(error, title) {
      this.$swal.fire({
        toast: true,
        icon: "error",
        width: 350,
        padding: "1.5em",
        background: "#fff",
        position: "top-end",
        title,
        text: error,
        showConfirmButton: false,
        timer: 6000,
        timerProgressBar: true,
        onOpen: toast => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        }
      });
    }
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
    geErrors: {
      handler: function(error) {
        if (error !== null && error !== undefined) {
          let title = "Referal Error";
          this.error(error, title);
        }
      }
    }
  },
  created() {
    this.getUserReferees().then(data => {
      // console.log(this.getReferee);
      this.myreferals = this.getReferee;
    });
    // console.log(this.getUser);
  }
};
</script>
<style>
.dashboard-main-content {
  padding-top: 107px !important;
}
.table th {
  font-size: 14px;
}
.search-input {
  /* border-top-right-radius: 0px;
  border-bottom-right-radius: 0px; */
  border-radius: 8px 0px 0px 8px !important;
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
