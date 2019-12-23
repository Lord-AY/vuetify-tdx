<template>
  <div>
    <registerForm
      :formFields="signUp"
      :register="sendRegisterData"
      :items="items"
      :passwordErr="errors"
      :errors="registerErrors"
    ></registerForm>
  </div>
</template>

<script>
require("../assets/plugins/bootstrap-4.3.1-dist/css/bootstrap.min.css");
require("../assets/css/style.css");
require("../assets/css/icons.css");
require("../assets/plugins/horizontal-menu/horizontal.css");
require("../assets/plugins/select2/select2.min.css");
require("../assets/plugins/cookie/cookie.css");
require("../assets/plugins/owl-carousel/owl.carousel.css");
require("../assets/plugins/scroll-bar/jquery.mCustomScrollbar.css");
require("../assets/skins/color-skins/color15.css");
require("../assets/css/flaticon24d2c.css");
require("../assets/plugins/slick-1.8.1/slick-1.8.1/slick/slick.css");
require("../assets/plugins/slick-1.8.1/slick-1.8.1/slick/slick-theme.css");
require("../assets/carspot-css/wp-content/themes/carspot/footerSpecial.css");


import registerForm from "@/components/auth/register";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import ash from "lodash";

export default {
  name: "userRegister",
  data() {
    return {
      signUp: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
        password: "",
        confirmPassword: "",
        rcountry: ""
      },
      items: [],
      errors: null
    };
  },
  components: {
    registerForm
  },
  computed: {
    ...mapGetters("auth", {
      registerErrors: "getRegisterErrors"
    })
  },
  created() {
    this.fetchCountries();
  },
  methods: {
    ...mapActions("auth", ["registerUser"]),
    sendRegisterData() {
      let verification = this.verifyPassword();
      if (verification) {
        const payload = {
          newUser: {
            firstName: this.signUp.firstName,
            lastName: this.signUp.lastName,
            email: this.signUp.email,
            address: this.signUp.address,
            phone: this.signUp.phone.replace(/ /g, ""),
            password: this.signUp.password,
            rcountry: this.signUp.rcountry
          }
        };
        this.registerUser(payload);
      } else {
        this.errors = "Passwords does not match";
      }
    },
    verifyPassword() {
      let pass = this.signUp.password;
      let verPass = this.signUp.confirmPassword;
      if (ash.isEqual(pass, verPass)) {
        return true;
      } else {
        return false;
      }
    },
    async fetchCountries() {
      const res = await axios.get("https://restcountries.eu/rest/v2/all");
      this.items = res.data;
    }
  }
};
</script>
