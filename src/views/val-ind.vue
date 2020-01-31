<template>
  <div class="val-ind-box">
    <div class="top-box">
      <div class="top-box-1 val-card">
        <h1>Transaction Details</h1>
        <div class="container mt-5">
          <p class="details">
            Name: <strong>{{ webpayDetails.nm }}</strong>
          </p>
          <p class="details">
            Amount: <strong>{{ webpayDetails.amt/100 }}</strong>
          </p>
        </div>
      </div>
      
      <div class="top-box-2 val-card">
        <h1>Make Payment</h1>
        <div class="top-box-body">
          <div class="top-box-body">
            <form
              action="https://sandbox.interswitchng.com/collections/w/pay" 
              method="POST"
            >
            <!-- <div> -->
              <div class="form-group">
                <input
                  name="product_id"
                  type="hidden"
                  value="1076"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  name="pay_item_id"
                  type="hidden"
                  value="101"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  name="currency"
                  type="hidden"
                  value="566"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  name="site_redirect_url"
                  type="hidden"
                  :value="webpayDetails.url"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  name="txn_ref"
                  type="hidden"
                  :value="webpayDetails.trn"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  name="cust_id"
                  type="hidden"
                  value="JUST-AVASYN"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  type="hidden"
                  class="form-control"
                  :value="webpayDetails.amt"
                  name="amount"
                />
              </div>
              <div class="form-group">
                <input
                  type="hidden"
                  class="form-control"
                  :value="webpayDetails.nm"
                  name="cust_name"
                />
              </div>
              <div class="form-group">
                <input
                  type="hidden"
                  class="form-control"
                  :value="webpayDetails.hash"
                  name="hash"
                />
              </div>
            <!-- </div> -->
              <button class="val-ind-button text-white">
                continue to pay
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-box val-card">
      <div class="bottom-box-text">
        <h1>Save Money</h1>
        <div>
          No convenience fee when you pay for toll on Trade explora One.
        </div>
      </div>

      <div class="bottom-box-text">
        <h1>Save Time - Instant Toll fee Payment</h1>
        <div>
          Paying your toll fees is always a breeze with Jumia One. Enjoy the
          comfort of topping up your toll account online without moving an inch.
          Jumia One’s convenient, uncomplicated and speedy payment service is
          all you need.
        </div>
      </div>

      <div>
        Jumia One also offers easy and convenient Airtime and Mobile Data
        purchases, as well as Internet and Electricity bill payments.
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "valind",
  data() {
    return {
      hiddenForm: false
    };
  },
  computed: {
    ...mapGetters("wallet", ["webpayDetails"])
  },
  methods: {
    makePayment() {
      const payload  = {

      }
      axios.post('https://sandbox.interswitchng.com/collections/w/pay', payload).then(({data}) => {
        // console.log(data);
      });
    }
  },
  mounted() {
  // console.log("this route just got mounted");
  // this.$forceUpdate();
    if (localStorage.getItem('walletDeposit')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('walletDeposit');
    } else {
        // Set a flag so that we know not to reload the page twice.
        this.$router.push('wallet-deposit');
    }
  },
  created() {
    if (window.performance) {
      // console.info("window.performance is supported");
    }

    // do something based on the navigation type...
    switch(performance.navigation.type) {
      case 0:
        // console.info("TYPE_NAVIGATE");
        break;
      case 1:
        // console.info("TYPE_RELOAD");
        localStorage.setItem('walletDeposit', '1');
        break;
      case 2:
        // console.info("TYPE_BACK_FORWARD");
        break;
      case 255:
        // console.info("255");
        break;
    }
  },

};
</script>
<style scoped lang="scss">
.val-card {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
  padding: 20px;
}

.val-ind-box {
  max-width: 60%;
  margin: 0 auto;
}

.top-box {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.top-box-1 {
  width: calc(40% - 10px);
}

.top-box-2 {
  width: calc(60% - 10px);
  padding: 20px;
}

.top-box h1 {
  font-size: 18px;
  font-weight: 600;
}

.top-box-body {
  margin-top: 30px;
  font-size: 16px;
}

.top-box-1-body {
  font-size: 14px;
  color: #8e8e93;
  font-weight: 600;
}

.val-ind-button {
  padding: 10px;
  width: 100%;
  border: none;
  background-color: #4caf50;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 500;
}

.bottom-box {
  margin-top: 50px;
  color: #6d6d6d;
}

.bottom-box h1 {
  color: #777777;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 10px;
}

.bottom-box-text {
  margin-bottom: 20px;
}
.details {
  font-size: 18px !important;
  strong {
    color: #4caf50;
    text-transfrom: uppercase !important;
  }
}
</style>
