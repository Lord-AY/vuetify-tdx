<template>
  <div class="login">
    <Login
      :loginFields="loginData"
      :submit="sendLoginData"
      :errors="dbErrors"
      :loginErrors="vuexErrors"
      :loading="loading"
    ></Login>
  </div>
</template>

<script>
import Login from "@/components/auth/signin";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "signin",
  components: {
    Login
  },
  data() {
    return {
      loginData: {
        email: "",
        password: ""
      },
      dbErrors: "",
      vuexErrors: ""
    };
  },
  computed: {
    ...mapGetters("auth", ["getLoginError", "errors"]),
    loading() {
      return this.$store.getters["auth/loading"];
    }
  },
  watch: {
    errors: {
      // passing back the function to watch for changes
      handler: function(error) {
        if (error !== null && error !== undefined) {
          this.dbErrors = error;
          let title = "Login Errors";
          this.showError(error, title);
        }
      }
    },
    getLoginError: {
      handler: function(error) {
        if (error !== null && error !== undefined) {
          this.vuexErrors = error;
          let title = "Login Errors";
          this.showError(error, title);
        }
      }
    }
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),
    sendLoginData() {
      const { email, password } = this.loginData;
      const payload = {
        user: { email, password }
      };
      this.loginUser(payload);
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
  mounted() {}
};
</script>
