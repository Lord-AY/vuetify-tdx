<template>
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
                                v-for="(payment, index) in paymentItems.paymentitems"
                                :key="index"
                              >
                                <div class="card card-cat-tx mb-0 box-shadow-2">
                                  <div class="item-card item-card-tx">
                                    <div
                                      class="item-card-desc item-card-desc-tx"
                                    >
                                      <a
                                        v-show=" payment.amount == '0' "
                                        @click="showForm = !showForm"
                                        style="cursor: pointer;"
                                      ></a>
                                      <a
                                        v-show="payment.amount !== '0' "
                                        @click.prevent="
                                          sendValidatePayment(payment)
                                        "
                                        style="cursor: pointer;"
                                      ></a>
                                      <div
                                        class="item-card-img item-card-img-tx"
                                      >
                                        <img
                                          src="assets/images/categories/car.svg"
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
                                <div class="card">
                                  <input type="text" placeholder="Add Preferred Amount" v-model='amount'>
                                  <button class="btn btn-success-outline" type="submit" @click.prevent="addAmount">Make Payment</button>
                                  <button class="btn btn-success-outline" type="button" @click="showForm = !showForm">Cancel</button>
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
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      amount: null,
      sendForm: false
    };
  },
  methods: {
    ...mapActions("valueAdded", ["paymentItem"]),
    sendPaymentItem() {
      const payload = {
        payId: this.$route.params.payid
      };
      this.paymentItem(payload);
    },
    sendValidatePayment(payment) {
      console.log(payment);
    },
    addAmount() {
      console.log(this.amount);
    }
  },
  computed: {
    ...mapGetters("valueAdded", ["paymentItems"])
  },
  created() {
    this.sendPaymentItem();
  }
};
</script>
<style></style>
