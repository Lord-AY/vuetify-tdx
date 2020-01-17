<template>
  <div>
    <div class="referral generic-wrapper">
      <div class="referral-header">
        <img
          src="../../public/assets/iconfonts/referral.svg"
          alt="referral"
          class="referral-img"
        />
        <h1>Invite friends to Clipchamp</h1>
        <h2>
          Share a Clipchamp with a friend using the link below and when they
          sign up you both get <strong>1 month free</strong>
        </h2>
      </div>

      <div class="referral-input-box">
        <input type="text" class="referral-input" />
        <button class="referral-btn">COPY</button>
      </div>
      <div class="referral-links">
        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
        <img src="https://img.icons8.com/color/48/000000/twitter.png" />
        <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
        <img src="https://img.icons8.com/color/48/000000/whatsapp.png" />
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
// require("../../public/assets/css/style.css");
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

export default {
  name: "referal",
  methods: {
    sync() {
      // console.log("Jquery mounted");
    },
    onWindowLoad() {
      window.location.reload();
    }
  },
  watch: {
    $route: "sync"
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
