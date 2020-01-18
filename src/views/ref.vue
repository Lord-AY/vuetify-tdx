<template>
  <div>
    <div class="referral generic-wrapper">
      <div class="referral-header">
        <img
          src="../../public/assets/iconfonts/referral.svg"
          alt="referral"
          class="referral-img"
        />
        <h1>Invite friends to Tradexplora</h1>
        <h2>
          Share a Tradexplora with a friend using the link below and when they
          sign up you both get <strong>1 month free</strong>
        </h2>
      </div>

      <div class="referral-input-box">
        <input type="text" disabled :value="`https://www.tradexplora.com/dist/#/register/${getUser.referalId}`" class="referral-input" />
        <button class="referral-btn" @click="copyData">COPY</button>
      </div>
      <div class="referral-links">
         <social-sharing :url="`https://www.tradexplora.com/dist/#/register/${getUser.referalId}`" 
            title="Register On Tradexplora"
            description="Sell, Buy and trade faster on Tradexplora."
            quote="tradexplora adlisting site."
            hashtags="buy,sell,tradexplora, adlisting"
            twitter-user="tradexplora"
            inline-template>
            <div>
              <network class="selector" network="facebook">
                  <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
              </network>
              <network class="selector" network="twitter">
                  <img src="https://img.icons8.com/color/48/000000/twitter.png" />
              </network>
              <network class="selector" network="linkedin">
                  <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
              </network>
              <network class="selector" network="whatsapp">
                  <img src="https://img.icons8.com/color/48/000000/whatsapp.png" />
              </network>
              <network class="selector" network="skype">
                  <img src="https://img.icons8.com/color/48/000000/skype.png" />
              </network>
              <network class="selector" network="sms">
                <img src="https://img.icons8.com/color/48/000000/sms.png" />
              </network>
            </div>
          </social-sharing>
      </div>

      <div class="referral-bottom">
        <h1>How it works</h1>
        <div class="referral-bottombox">
          <div class="referral-box">
            <img src="https://img.icons8.com/ios/50/000000/invite.png" />
            <h1>Invite your friends</h1>
            <p>
              Send your unique links to your friends inviting them to Clipchamp
            </p>
          </div>

          <div class="referral-box">
            <img
              src="https://img.icons8.com/dotty/50/000000/add-user-male.png"
            />
            <h1>They sign up</h1>
            <p>When your friends sign up your invitation is complete</p>
          </div>

          <div class="referral-box">
            <img
              src="https://img.icons8.com/pastel-glyph/50/000000/trophy--v2.png"
            />
            <h1>Get 1 month free</h1>
            <p>
              Your friend will get 1 month free and you will get 1 month free on
              your existing plan
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// require("../../public/assets/plugins/bootstrap-4.3.1-dist/css/bootstrap.min.css");
require("../../public/assets/css/style.css");
// require("../../public/assets/css/icons.css");
// require("../../public/assets/plugins/horizontal-menu/horizontal.css");
// require("../../public/assets/plugins/select2/select2.min.css");
// require("../../public/assets/plugins/cookie/cookie.css");
// require("../../public/assets/plugins/owl-carousel/owl.carousel.css");
// require("../../public/assets/plugins/scroll-bar/jquery.mCustomScrollbar.css");
// require("../../public/assets/skins/color-skins/color15.css");
// require("../../public/assets/css/flaticon24d2c.css");
// require("../../public/assets/plugins/slick-1.8.1/slick-1.8.1/slick/slick.css");
// require("../../public/assets/plugins/slick-1.8.1/slick-1.8.1/slick/slick-theme.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/footerSpecial.css");

import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "referal",
  data() {
    return { 
      success: null
    };
  },
  components: {
  },
  computed: {
    ...mapGetters("auth", ["loading", "getUser"])
  },
  methods: {
    sync() {
      // console.log("Jquery mounted");
    },
    onWindowLoad() {
      window.location.reload();
    },
    copyData(){
        this.success = null;
        this.$clipboard("https://www.tradexplora.com/dist/#/register/"+this.getUser.referalId);
        this.success = "Referal Link Copied To Clipboard";
    },
    showSuccess() {
      this.$notify({
        group: "notify",
        type: "success",
        title: "Success",
        text: this.success,
        position: "top right",
        duration: 10000,
        speed: 1000
      });
    }
  },
  watch: {
    $route: "sync",
    success: {
      handler: function(success) {
        if (success === null || success === undefined) {
          return;
        }
        this.showSuccess();
      }
    }

  },
  created() {
    this.sync();
  },
  beforeCreate() {
    // console.log("this is before created");
  },
  beforeMount() {
    // console.log("this is before mounted");
  }
};
</script>
<style>
  
.referral {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
}

.referral-header {
  margin-top: 50px;
}

.referral-header h1 {
  font-size: 18px;
  font-weight: 700;
  margin: 20px 0;
}

.referral-header h2 {
  font-size: 14px;
  line-height: 24px;
}

.referral-img {
  width: 250px;
}

.referral-input-box {
  display: flex;
  align-items:baseline;
  justify-content: center;
}

.referral-input {
  margin-top: 2rem;
  width: 70%;
  padding: 15px;
  border: 1px solid #4caf50;
  border-radius: 5px;
}

.referral-btn {
  background: #4caf50;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 2px;
  padding: 10px 20px;
  margin-left: -85px;
}

.referral-links {
  width: 40%;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}

.referral-bottom h1 {
  margin: 20px 0;
  font-size: 16px;
  text-align: left;
  text-transform: uppercase;
  font-weight: 600;
}

.referral-box {
  text-align: left;
  box-shadow: 0 20px 35px rgba(0, 50, 95, 0.1);
  padding: 2rem;
  flex: 0 0 250px;
}

.referral-box img {
  width: 50px;
  height: 50px;
}

.referral-bottombox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/*--------------CUSTOM CSS -------------*/
.cst-width {
  min-width: 170px !important;
}

.sidebar-scroll .nav li {
  width: 100%;
}

.custom-alert_top-side {
  justify-content: space-around;
}

.custom-alert_icon {
  padding: 0 !important;
}

</style>
<style>
.selector {
  cursor: pointer;
}
</style>

