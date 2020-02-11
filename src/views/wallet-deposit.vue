<template>
  <div class="publishInventory">
    <div id="wrapper">
      <!-- LEFT SIDEBAR -->
      <div id="global-loader" v-show="isLoading">
        <DashboardLoader class="mobile-hidden"></DashboardLoader>
      </div>
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
                      Wallet
                      <!-- <span style="display: inline;">( 0 )</span> -->
                    </h3>
                    <div class="wallet-details">
                      <div class="balance">
                        <h4>&#x20A6; 0.00</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel-body">
                <div
                  class="col-md-12 col-lg-12 col-sm-12 col-xs-12"
                  style="margin-top: 24px;"
                >
                  <div class="edit-profile-form">
                    <form
                      id="sb_update_profile"
                      class="sb_update_profile"
                    >
                      <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                          <div class="form-group">
                            <label class="control-label control-label-dashboard"
                              >Wallet ID</label
                            >
                            <input
                              class="form-control form-control-dashboard"
                              type="text"
                              name="first_name"
                              :value="userWallet"
                              data-pt-position="top"
                              data-pt-scheme="dark-transparent"
                              data-pt-size="small"
                              disabled
                            />
                          </div>
                        </div>
                        <div class="col-md-3"></div>
                      </div>
                      <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                          <div class="form-group">
                            <label class="control-label control-label-dashboard"
                              >Amount</label
                            >
                            <input
                              @input="onInput" 
                              class="form-control form-control-dashboard"
                              type="number"
                              v-model="amount"
                              data-pt-position="top"
                              data-pt-scheme="dark-transparent"
                              data-pt-size="small"
                            />
                          </div>
                        </div>
                        <div class="col-md-3"></div>
                      </div>
                      <div class="row">
                          <div class="col-md-3"></div>
                          <div class="col-md-6">
                              <div class="col-md-10"></div>
                            <div class="col-md-2 col-dash">
                                <paystack
                                  class="btn btn-theme btn-theme-dash"
                                  :amount="Depositamount"
                                  :email="getUser.email"
                                  :paystackkey="paystackkey"
                                  :reference="reference"
                                  :callback="callback"
                                  :close="close"
                                  :embed="false"
                                >
                                  <i class="fas fa-money-bill-alt"></i>
                                  Continue to Pay
                                </paystack>

                            </div>
                          </div>
                          <div class="col-md-3"></div>
                      </div>
                    </form>
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


import { mapActions, mapGetters } from "vuex";
import paystack from "vue-paystack";
import DashboardLoader from "@/components/loaders/dashboardloader";
import dsidebar from "@/components/Dsidebar";
// import dheader from "@/components/Dheader";
export default {
  name: "wallet-deposit",
  data() {
    return {
      isLoading: true,
      userWallet: null,
      paystackkey: "pk_test_b9c529f4da742bbae2e19746ed9b9914f4e1f17c", //paystack public key
      amount: null,
      Depositamount: 0
    };
  },
  components: {
    dsidebar,
    DashboardLoader,
    paystack
  },
  computed: {
    ...mapGetters("transactions", ["getwalletData"]),
    ...mapGetters("auth", ["getUser", "loading"]),
    loading() {
      return this.$store.getters["auth/loading"];
    },
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
  },
  methods: {
    ...mapActions("transactions", ["createUserwallet", "FetchUserwallet", "paymentStepOne"]),
    async checkUserWalletState(){
      await this.FetchUserwallet(this.getUser.id)
    },
    onInput($event) {
      // console.log($event.target.value);
      this.Depositamount = parseInt($event.target.value) * 100;
    },
    updatePayment() {
      const payload = {
        user: this.getUser.firstname + " " + this.getUser.lastname,
        amt: this.amount,
      };
      if(this.amount > 999){
        localStorage.setItem('walletDeposit', '1');
        this.paymentStepOne(payload);
      }else{

      }
    },
    callback: function(response) {
      let customdata = {
        "source":"Wallet Deposit",
        "amount": this.amount
      }
      const transactionResponse = Object.assign(customdata,response)
      // this.saveTransactions(response);
      console.log(transactionResponse);
    },
    close: function() {
      console.log("Payment closed");
    },
  },
  watch: {
    $route: "sync",
    getwalletData: {
      handler: function(walletData) {
        if (walletData == null) {
          this.isLoading = true;
          this.createUserwallet(this.getUser.id)
          this.userWallet = this.getwalletData.walletid;
          // console.log(this.getwalletData);
          // console.log("wallet changed");
        }else{
          this.userWallet = this.getwalletData.walletid;
          this.isLoading = false;
          // console.log(walletData);
        }
      }
    },
  },
  created() {
    this.FetchUserwallet(this.getUser.id);
  },
  beforeCreate() {
    // console.log("this is before created");
  },

};
</script>
<style scoped>
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/style.css';
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css';
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/style4d2c.css';
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css';
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/bootstrap4d2c.css';
</style>
<style>
.dashboard-main-content {
  padding-top: 107px !important;
}
.wallet-details {
  display: flex;
  margin-top: 16px;
}
.balance h4 {
  font-size: 20px;
  padding-top: 4px;
  margin-right: 20px;
}
.btn-theme-dash {
  padding: 10px 16px;
  border-radius: 6px;
  
}
.col-dash {
    padding-right: 0px!important;
}
.col-dash .btn-theme-dash{
    float: right;
    margin-top: 16px;
    margin-bottom: 32px;
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
