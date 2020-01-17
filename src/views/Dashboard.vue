<template>
  <!--User Dashboard-->
  <section class="sptb">
    <div v-show="isLoggedIn" class="container">
      <div class="alert alert-warning alert-dismissible fade show">
        <strong>Warning!</strong>
        Please your account has not been verified, click to verify your account
        <button class="btn btn-primary ml-5" @click="sendVerifyCode">
          Verify Account
        </button>
        <button type="button" class="close" data-dismiss="alert">
          &times;
        </button>
      </div>
    </div>
    <div class="container" style="padding-top: 70px;">
      <div class="row">
        <sidebar></sidebar>
        <div class="col-xl-9 col-lg-12 col-md-12">
          <div class="row">
            <div class="col-md-4">
              <div class="card stat-summary" style="background-color: #4CAF50;">
                <!-- <div class="card-header">
                                        <h4 class="card-title">Airtime</h4>
                                    </div> -->
                <div class="card-body">
                  <div class="icon-bg">
                    <i class="fa fa-mobile"></i>
                  </div>
                  <div class="data-info">
                    <h5>Airtime</h5>
                    <h3>N1200</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/User Dashboard-->
</template>

<script>
import sidebar from "@/components/Sidebar";
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  components: {
    sidebar
  },
  data() {
    return {
      code: null
    };
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
    ...mapState("auth", ["user"])
  },
  methods: {
    ...mapActions("auth", ["getVerificationCode"]),
    sendVerifyCode() {
      this.getVerificationCode();
    }
  }
};
</script>

<style></style>
