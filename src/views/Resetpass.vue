<template>
  <div class="resetpass">
    <resetpass
      :loginFields="loginData"
      :submit="sendResetData"
      :errors="dbErrors"
      :loading="loading"
    ></resetpass>
  </div>
</template>

<script>
import resetpass from "@/components/auth/forgotpass";
import { mapActions } from "vuex";
export default {
  name: "reset",
  components: {
    resetpass
  },
  data() {
    return {
      loginData: {
        email: ""
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
    ...mapActions("auth", ["resetUser"]),
    sendResetData() {
      const { email } = this.loginData;
      const payload = {
        user: { email }
      };
      this.resetUser(payload);
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
