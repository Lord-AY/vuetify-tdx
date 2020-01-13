<template>
  <!--start-->
  <!-- <section class="main-content-reg-tx" style="padding: 120px 0px;"> -->
  <section class="main-content-reg-tx">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 brand-logo">
          <router-link to="/">
            <img src="@/assets/images/brand/TRADEXPLORA-V4.1-mini.png" alt />
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="form-box" style="border: none;">
            <div class="form-box-title">
              <img
                class
                src="@/assets/images/add-account.svg"
                style="max-width: 32px;"
              />
              <span style="font-size: 18px; margin-left: 10px;"
                >Reset Password.</span
              >
            </div>
            <div class="row">
              <!-- <div class="col-md-8"> -->
                <!-- <div class="row"> -->
                  <div class="col-sm-12">
                    <form
                      action=""
                      class="form-horizontal"
                      @submit.prevent="submit"
                    >
                      <div class="row mb-5" style="margin-top: 15px;">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                          <div
                            style="width: 100%; height: 14px; border-bottom: 1px solid rgba(0,0,0, 0.09); text-align: center"
                          >
                            <span
                              style="font-size: 16px; background-color: #fff; padding: 0 10px;"
                              >Request Reset Link</span
                            >
                          </div>
                        </div>
                      </div>
                      <div v-if="errors" class="">
                        <div
                          class="alert alert-danger alert-dismissible fade show"
                        >
                          <strong>Error!</strong>
                          {{ errors.message || errors }}
                          <button
                            type="button"
                            class="close"
                            data-dismiss="alert"
                          >
                            &times;
                          </button>
                        </div>
                      </div>
                      <div class="form-group form-group-tx row" style="margin-bottom: 1.5rem!important;">
                        <!-- <div class="col-md-12 col-lg-12 col-sm-12"> -->
                        <label class="col-md-2 control-label"></label>
                        
                        <div class="col-md-8">
                          <label class=" control-label">Email </label>
                          <div class="radio">
                            <input
                              name=""
                              placeholder="someone@example.com"
                              class="form-control input-md"
                              required=""
                              type="email"
                              v-model.trim="loginFields.email"
                            />
                            <div v-show="errors.email" class="invalid-feedback">
                              {{ errors.email }}.
                            </div>
                          </div>
                        </div>

                        <!-- </div> -->
                      </div>
                      <div class="form-group form-group-tx row" style="margin-bottom: 1.5rem!important;">
                        <label class="col-md-2 control-label"></label>
                        <!-- <div class="col-md-12 col-sm-12"> -->
                        <div class="col-md-8">
                          <div class="radio">
                            <div style="clear:both"></div>
                            <div class="row">
                              <div class="col-sm-12" style="padding-left: 0px; padding-right: 0px;">
                                <button
                                  class="btn btn-block btn-primary btn-register-tx text-uppercase"
                                  :class="loading ? 'disabled-btn' : ''"
                                  :disabled="loading"
                                  :loading="loading"
                                >
                                  Request
                                </button>
                                
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- </div> -->
                      </div>
                    </form>
                  </div>
                <!-- </div>
              </div> -->
              <!-- end -->
            </div>
            <div class="form-box-footer">
              <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-12">
                      <router-link to="/login"
                        >I Know My Password Now ? Login</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </section>
  <!--/ Main-content -->
  <!--Footer Section-->

  <!--/stop -->
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {},
  props: {
    loginFields: Object,
    submit: Function,
    errors: [String, Object],
    loading: Boolean
  }
};
</script>

<style>
.disabled-btn {
  cursor: wait !important;
} 
/* .row,.form-group, .form-group-tx {
  margin-bottom: 1rem!important;
} */
.form-box-title {
  text-align: center;
}
.main-content-reg-tx {
  background-image: url("../../assets/images/e-commerce-png-ecommerce-png-png-image-510.png"), url("../../assets/images/e-commerce-png-sell-your-products-and-services-online-1000.png");
    background-attachment: fixed, fixed;
    background-size: 300px, 368px;
    background-repeat: no-repeat, no-repeat;
    background-repeat-x: no-repeat, no-repeat;
    background-repeat-y: no-repeat, no-repeat;
    background-position: left bottom, right bottom;
    background-position-x: left, right;
    background-position-y: bottom, bottom;
    height: 100vh;
}
.brand-logo {
  text-align: center;
  margin-bottom: 24px;
}

.brand-logo img {
  height: 64px;
}

.form-group-tx input, select {
  height: 48px!important;
}

.form-group-tx input::placeholder {
  color: #99c1b2;
}

.form-group-tx select option.first-option {
  color: #99c1b2!important;
}

.form-group-tx .checkbox input{
  height: auto!important;
}

.form-control {
  padding: 0px 12px!important;
  color: #232323!important;
}

/* .facebook-reg {
  background-color: #3b5998;
  color: #fff;
}

.google-reg {
  background-color: #ea4335;
  color: #fff;
} */
.form-box {
  padding: 20px;
}

.form-box-footer {
  line-height: 1;
  margin: 4px -20px 5px;
  padding: 20px 20px 0px;
  border-top: 1px solid #e6e6e6;
  
  font-weight: normal;
  /* font-size: 1rem; */
  text-align: center;
  /* text-transform: uppercase; */
}

.form-box-footer a {
  color:rgb(68, 156, 70);
}

.form-box-footer a:hover {
  text-decoration: underline;
}

@media (min-width: 768px) {
  .form-box {
    padding: 40px 20px;
  }
}

@media (max-width: 400px) {
  .main-content-reg-tx {
    height: auto!important;
  }

  .facebook-mobile {
    padding-right: 0px!important;
  }
  
  .main-content-reg-tx {
    background: rgb(255, 255, 255);
  }

  .form-box {
    padding-left: 0px!important;
    padding-right: 0px!important;
  }

  .form-box-title {
    font-size: 0.5rem!important;
}
}
</style>
