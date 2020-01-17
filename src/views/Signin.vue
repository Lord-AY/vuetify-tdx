<template>
  <div class="login">
    <Login
      :loginFields="loginData"
      :submit="sendLoginData"
      :errors="dbErrors"
      :loading="loading"
    ></Login>
  </div>
</template>

<script>
import Login from "@/components/auth/signin";
import { mapActions } from "vuex";
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
      dbErrors: ""
    };
  },
  computed: {
    getErrors() {
      return this.$store.getters["auth/getLoginError"];
    },
    loading() {
      return this.$store.getters["auth/loading"];
    }
  },
  watch: {
    getErrors: {
      // passing back the function to watch for changes
      handler: function(error) {
        if (error !== null && error !== undefined) {
          this.dbErrors = error;
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
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
  }
};
</script>
