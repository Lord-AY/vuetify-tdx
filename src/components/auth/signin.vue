<template>
  <!--start-->
  <!-- <section class="main-content-reg-tx" style="padding: 120px 0px;"> -->
  <section class="main-content-reg-tx">
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="form-box" style="border: none;">
            <div class="row login-logo">
              <a href="index.html" style="margin: auto;" class="">
                <img
                  src="../../assets/images/brand/TRADEXPLORAV3.1.png"
                  style="height: 80px;"
                  alt=""
                />
              </a>
            </div>

            <div class="row">
              <div class="col-md-8 offset-md-2">
                <div class="row">
                  <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="social-media-button">
                      <button
                        class="btn btn-block btn-reg facebook-reg text-bold"
                      >
                        <i class="fa fa-facebook fa-2x"></i>

                        Login with Facebook
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="social-media-button">
                      <button class="btn btn-block btn-reg google-reg">
                        <i class="fa fa-google-plus fa-2x"></i>

                        Login with Google
                      </button>
                    </div>
                  </div>
                </div>

                <div class="row mb-5" style="margin-top: 15px;">
                  <div class="col-md-12">
                    <div
                      style="width: 100%; height: 14px; border-bottom: 1px solid rgba(0,0,0, 0.09); text-align: center"
                    >
                      <span
                        style="font-size: 16px; background-color: #fff; padding: 0 10px;"
                      >
                        OR
                      </span>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-12">
                    <form action="" class="form-horizontal">
                      <!-- <div class="row">
                    <fa class="col-md-3"></fa>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="bc-auth-card__form-separator"></div>
                    </div>
                  </div> -->

                      <div class="row form-group-tx form-group">
                        <div class="col-md-12">
                          <label for="" class="control-label">
                            Email Address
                          </label>
                          <div class="radio">
                            <input
                              name=""
                              placeholder="someone@example.com"
                              class="form-control input-md"
                              required=""
                              type="email"
                            />
                          </div>
                        </div>

                        <div class="col-md-12 mt-3">
                          <label for="" class="control-label">
                            Password
                          </label>
                          <div class="radio">
                            <input
                              name=""
                              placeholder="password"
                              class="form-control input-md"
                              required=""
                              type="password"
                            />
                            <!-- <small id="passwordHelpBlock" class="form-text text-muted">At least 5 characters</small> -->
                          </div>
                        </div>
                      </div>

                      <div class="col-mdm-12 mt-5">
                        <a
                          class="btn btn-block btn-primary btn-register-tx text-uppercase"
                          href="account-home.html"
                          >Login</a
                        >
                      </div>
                    </form>
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
  name: "login"
};
</script>

<style>
.facebook-reg {
  background-color: #3b5998;
  color: #fff;
}

.google-reg {
  background-color: #ea4335;
  color: #fff;
}
.form-box {
  padding: 20px;
}

@media (min-width: 768px) {
  .form-box {
    padding: 40px 20px;
  }
}
</style>
