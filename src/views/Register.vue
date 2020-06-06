<template>
  <div>
    <registerForm
      :formFields="signUp"
      :register="sendRegisterData"
      :items="items"
      :passwordErr="errors"
      :errors="registerError"
      :loading="loading"
    ></registerForm>
  </div>
</template>

<script>
require("../../public/assets/plugins/bootstrap-4.3.1-dist/css/bootstrap.min.css");
require("../../public/assets/css/style.css");
require("../../public/assets/css/icons.css");
require("../../public/assets/plugins/horizontal-menu/horizontal.css");
require("../../public/assets/plugins/select2/select2.min.css");
require("../../public/assets/plugins/cookie/cookie.css");
require("../../public/assets/plugins/scroll-bar/jquery.mCustomScrollbar.css");
require("../../public/assets/skins/color-skins/color15.css");
require("../../public/assets/css/flaticon24d2c.css");


import registerForm from "@/components/auth/register";
import { mapActions } from "vuex";
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
        rcountry: "null",
        referer: null
      },
      items: [],
      errors: null,
      registerError: ""
    };
  },
  components: {
    registerForm
  },
  computed: {
    getErrors() {
      return this.$store.getters["auth/registerErrors"];
    },
    loading() {
      return this.$store.getters["auth/loading"];
    }
  },
  watch: {
    getErrors(error) {
      if (error !== null && error !== undefined) {
        this.registerError = error;
        let title = "Registration Error";
        this.showError(error, title);
        // console.log(this.registerError);
      }
    }
  },
  created() {
    this.fetchCountries();
    // console.log(this.loading);
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
            rcountry: this.signUp.rcountry,
            referer: this.$route.params.referal
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
  }
};
</script>
