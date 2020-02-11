<template>
  <div>
<!--     <div id="global-loader">
      <Homeloader class="mobile-hidden"></Homeloader>
    </div>
    <div id="global-loader" v-show="isLoading">
      <Homeloader class="mobile-hidden"></Homeloader>
    </div> -->
  <div id="billerpaymentitem">
    <div class="section-padding  gray page-search">
      <div class="container">
        <!-- Row -->
        <div class="row">
          <div class="col-md-12 col-lg-12 col-xs-12">
            <!-- Row -->
            <br />
            <div class="row">
              <div class="clearfix"></div>
              <div class="list-style-1">
                <div class="panel with-nav-tabs panel-default">
                  <div class="panel-body">
                    <div class="tab-content">
                      <div class="tab-panel active">
                        <div class="container">
                          <div class="row mt-5 mb-5">
                            <div class="col-md-12">
                              <div
                                class="col-md-4 mb-5"
                                v-for="(payment,
                                index) in paymentItems.paymentitems"
                                :key="index"
                              >
                                <div class="card card-cat-tx mb-0 box-shadow-2">
                                  <div class="item-card item-card-tx">
                                    <div
                                      class="item-card-desc item-card-desc-tx"
                                    >
                                      <div
                                        class="item-card-img item-card-img-tx"
                                      >
                                        <img
                                          v-if="$route.params.type == 'company'"
                                          :src="
                                            'https://quickteller.sandbox.interswitchng.com/Content/Images/Downloaded/' +
                                              transform($route.params.imageId)
                                          "
                                          alt="img"
                                          class="br-tr-7 br-tl-7"
                                        />
                                        <img
                                          v-else
                                          :src="
                                            'img/' +
                                              transform($route.params.imageId)
                                          "
                                          alt="img"
                                          class="br-tr-7 br-tl-7"
                                        />
                                      </div>
                                      <div
                                        class="item-card-text item-card-text-tx"
                                      >
                                        <h4 class="mb-0">
                                          {{ payment.paymentitemname }}
                                        </h4>
                                        <h4 class="mb-0">
                                          Amount: {{ payment.amount }}
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <transition name="showForm">
                                  <div class="card">
                                    <!-- Button trigger modal -->
                                    <button
                                      type="button"
                                      class="btn btn-success-outline"
                                      @click="selectPayment(payment)"
                                    >
                                      Buy Now
                                    </button>
                                    <!-- Modal -->
                                    <PaymentModal
                                      :payment="selectedPayment"
                                      v-if="showModal"
                                      @close="showModal = false"
                                      @savePayment="sendValidatePayment"
                                      :user="getUser"
                                      :loading="isLoading"
                                    ></PaymentModal>
                                    <!-- Modal -->
                                  </div>
                                </transition>
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
  </div>
</div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import PaymentModal from "@/components/paymentModal";
// import Homeloader from "@/components/loaders/Homeloader";
// import Loading from "vue-loading-overlay";
export default {
  data() {
    return {
      amount: null,
      showModal: false,
      selectedPayment: null,
      isLoading: true,
      fullPage: true
    };
  },
  components: {
    PaymentModal
  },
  methods: {
    ...mapActions("valueAdded", [
      "paymentItem",
      "validatePaymentOption",
      "paymentAdvices"
    ]),
    ...mapMutations("transactions", ["SET_PAYMENT_RESPONSE"]),
    sendPaymentItem() {
      const payload = {
        payId: this.$route.params.payid
      };
      this.paymentItem(payload);
    },
    selectPayment(payment) {
      this.selectedPayment = payment;
      this.showModal = true;
    },
    sendValidatePayment(payload) {
      // console.log(payload);
      this.validatePaymentOption(payload);
      localStorage.setItem("walletDeposit", "1");
    },
    transform(image) {
      // console.log(image);
      return image + ".png";
    }
  },
  computed: {
    ...mapGetters("valueAdded", ["paymentItems"]),
    ...mapGetters("auth", ["getUser", "loading"])
  },
  watch: {
    loading: {
      handler: function(loading) {
        if (loading) {
          this.isLoading = true;
        }
        this.isLoading = false;
      }
    }
  },
  created() {
    this.sendPaymentItem();
    // console.log(this.paymentItems);
  },
  mounted() {
    // this.$forceUpdate();
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
  },

};
</script>
<style>
.showForm-enter-active {
  animation: bounce-in 0.5s;
}
.showForm-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
