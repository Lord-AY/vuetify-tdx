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
    ...mapGetters('auth', ['getLoginError', 'errors']),
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
        }
      }
    },
    getLoginError: {
        handler: function(error) {
        if (error !== null && error !== undefined) {
          this.vuexErrors = error;
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
    }
  },
  mounted() {
  }
};
</script>
