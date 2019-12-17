<template>
  <!--start-->
  <section class="main-content-reg-tx">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 col-sm-12">
          <div class="form-box">
            <div class="form-box-title">
              <img
                class=""
                src="../../assets/images/add-account.svg"
                style="max-width: 32px;"
              />
              <span style="font-size: 18px; margin-left: 10px;"
                >Create your account, it's free.</span
              >
            </div>

            <div class="row">
              <div class="col-md-8 offset-md-2">
                <form action="" class="form-horizontal">
                  <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <div class="social-media-button">
                        <button
                          class="btn btn-block btn-reg facebook-reg text-bold"
                        >
                          <i class="fa fa-facebook fa-2x"></i>

                          Continue with Facebook
                        </button>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <div class="social-media-button">
                        <button class="btn btn-block btn-reg google-reg">
                          <i class="fa fa-google-plus fa-2x"></i>
                          Continue with Google
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

                  <!-- Customer Name -->
                  <div class="row form-group-tx form-group">
                    <div class="col-md-12 col-lg-6 col-sm-12">
                      <label for="" class="control-label">
                        First Name
                      </label>
                      <div class="radio">
                        <input
                          name=""
                          placeholder="John"
                          class="form-control input-md"
                          required=""
                          type="text"
                        />
                      </div>
                    </div>

                    <div class="col-md-12 col-lg-6 col-sm-12">
                      <label for="" class="control-label">
                        Last Name
                      </label>
                      <div class="radio">
                        <input
                          name=""
                          placeholder="Doe"
                          class="form-control input-md"
                          required=""
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Phone Number -->
                  <div class="form-group form-group-tx row">
                    <div class="col-md-12">
                      <label class="control-label">Phone Number </label>
                      <div class="radio">
                        <input
                          name=""
                          placeholder="09000000001"
                          class="form-control input-md"
                          type="text"
                        />
                        <div class="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              value=""
                              style="opacity: 1; margin-top: 5px"
                            />
                            <small>
                              Hide the phone number on published ads.</small
                            >
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Gender -->
                  <div class="form-group form-group-tx row">
                    <div class="col-md-12 col-sm-12">
                      <label for="" class="control-label">
                        Gender
                      </label>
                      <div class="radio" style="margin-top: 5px;">
                        <label for="">
                          <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="option3"
                            checked=""
                          />
                          Female
                        </label>
                      </div>
                      <div class="radio">
                        <label for="">
                          <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="option4"
                          />
                          Male
                        </label>
                      </div>
                    </div>
                  </div>

                  <!-- About -->
                  <div class="form-group form-group-tx row">
                    <div class="col-md-12 col-sm-12">
                      <label class="control-label" for="textarea"
                        >About Yourself</label
                      >

                      <div class="radio">
                        <textarea
                          class="form-control"
                          id="textarea"
                          name="textarea"
                          rows="6"
                          placeholder="Write a short description about yourself..."
                          style="padding: 10px;"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div class="form-group form-group-tx row">
                    <div class="col-md-12 col-sm-12">
                      <label for="" class=" control-label">
                        Email
                      </label>
                      <div class="radio">
                        <input
                          name=""
                          placeholder="johndoe@example.com"
                          class="form-control input-md"
                          required=""
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group form-group-tx row">
                    <div class="col-sm-12 col-md-12">
                      <label for="" class=" control-label">
                        Password
                      </label>
                      <div class="radio">
                        <input
                          name=""
                          placeholder="Choose a password"
                          class="form-control input-md"
                          required=""
                          type="password"
                        />
                        <small
                          id="passwordHelpBlock"
                          class="form-text text-muted"
                          >At least 5 characters</small
                        >
                      </div>
                    </div>
                  </div>

                  <div class="form-group form-group-tx row">
                    <div class="col-md-12 col-sm-12">
                      <div class="radio">
                        <div class="termbox mb10">
                          <div class="col-12 col-tx my-1 no-padding">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customControlAutosizing"
                              />
                              <label
                                class="custom-control-label"
                                for="customControlAutosizing"
                              >
                                <span class="custom-control-description">
                                  I have read and agree to the
                                  <a
                                    href="terms-conditions.html"
                                    style="color: #4CAF50;"
                                    >Terms &amp; Conditions</a
                                  >
                                </span></label
                              >
                            </div>
                          </div>
                        </div>
                        <div style="clear:both"></div>
                        <div class="row">
                          <div class="col-md-8 offset-md-2 col-sm-12">
                            <a
                              class="btn btn-block btn-primary btn-register-tx"
                              href="account-home.html"
                              >Register</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-12 reg-sidebar">
          <div class="reg-sidebar-inner text-center">
            <div class="row">
              <div class="promo-text-box">
                <i class=" icon-picture fa fa-4x icon-color-1"></i>

                <h3><strong>Post a Free Classified</strong></h3>

                <p>
                  Post your free online classified ads with us. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div class="promo-text-box">
                <i class=" fa fa-pencil-square fa-4x icon-color-2"></i>

                <h3><strong>Create and Manage Items</strong></h3>

                <p>
                  Nam sit amet dui vel orci venenatis ullamcorper eget in lacus.
                  Praesent tristique elit pharetra magna efficitur laoreet.
                </p>
              </div>
              <div class="promo-text-box">
                <i class=" fa fa-heart fa-4x icon-color-3"></i>

                <h3><strong>Create your Favorite ads list.</strong></h3>

                <p>
                  PostNullam quis orci ut ipsum mollis malesuada varius eget
                  metus. Nulla aliquet dui sed quam iaculis, ut finibus massa
                  tincidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Oldie -->
    <!-- <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="form-box">
            <h2 class="form-box-title">
              <div class="row">
                <div class="col-md-1">
                  <img
                    class=""
                    src="../../assets/images/add-account.svg"
                    style="max-width: 32px;"
                  />
                </div>
                <div class="col-md-11" style="padding: 0.625rem;">
                  Create your account, it's free.
                </div>
              </div>
            </h2>
            <div class="row">
              <div class="col-sm-12">
                <form action="" class="form-horizontal">
                  <div class="form-group form-group-tx row">
                    <label for="" class="col-md-4 control-label"> </label>
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="social-media-button">
                            <button class="btn btn-block btn-reg facebook-reg">
                              <i class="fa fa-facebook fa-2x"></i> Signup
                            </button>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="social-media-button">
                            <button class="btn btn-block btn-reg google-reg">
                              <i class="fa fa-google-plus fa-2x"></i> Signup
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-6">
                      <div class="bc-auth-card__form-separator"></div>
                    </div>
                  </div>

                  <div class="form-group form-group-tx row">
                    <label for="" class="col-md-4 control-label">
                      First Name
                    </label>
                    <div class="col-md-6">
                      <div class="radio">
                        <input
                          name=""
                          placeholder="First Name"
                          class="form-control input-md"
                          required=""
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-group-tx row">
                    <label for="" class="col-md-4 control-label">
                      Last Name
                    </label>
                    <div class="col-md-6">
                      <div class="radio">
                        <input
                          name=""
                          placeholder="Last Name"
                          class="form-control input-md"
                          required=""
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-group-tx row">
                    <label class="col-md-4 control-label">Phone Number </label>
                    <div class="col-md-6">
                      <input
                        name=""
                        placeholder="Phone Number"
                        class="form-control input-md"
                        type="text"
                      />
                      <div class="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            value=""
                            style="opacity: 1; margin-top: 5px"
                          />
                          <small>
                            Hide the phone number on published ads.</small
                          >
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-group-tx row">
                    <label for="" class="col-md-4 control-label">
                      Gender
                    </label>
                    <div class="col-md-6">
                      <div class="radio">
                        <label for="">
                          <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="option3"
                            checked=""
                          />
                          Female
                        </label>
                      </div>
                      <div class="radio">
                        <label for="">
                          <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="option4"
                          />
                          Male
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-group-tx row">
                    <label class="col-md-4 control-label" for="textarea"
                      >About Yourself</label
                    >

                    <div class="col-md-6">
                      <textarea
                        class="form-control"
                        id="textarea"
                        name="textarea"
                      ></textarea
                      >
                    </div>
                  </div>
                  <div class="form-group form-group-tx row">
                    <label for="" class="col-md-4 control-label">
                      Email
                    </label>
                    <div class="col-md-6">
                      <div class="radio">
                        <input
                          name=""
                          placeholder="Email"
                          class="form-control input-md"
                          required=""
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-group-tx row">
                    <label for="" class="col-md-4 control-label">
                      Password
                    </label>
                    <div class="col-md-6">
                      <div class="radio">
                        <input
                          name=""
                          placeholder="Password"
                          class="form-control input-md"
                          required=""
                          type="password"
                        />
                        <small
                          id="passwordHelpBlock"
                          class="form-text text-muted"
                          >At least 5 characters</small
                        >
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-group-tx row">
                    <label class="col-md-4 control-label"></label>

                    <div class="col-md-8">
                      <div class="termbox mb10">
                        <div class="col-auto col-tx my-1 no-padding">
                          <div class="custom-control custom-checkbox mr-sm-2">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customControlAutosizing"
                            />
                            <label
                              class="custom-control-label"
                              for="customControlAutosizing"
                            >
                              <span class="custom-control-description">
                                I have read and agree to the
                                <a
                                  href="terms-conditions.html"
                                  style="color: #4CAF50;"
                                  >Terms &amp; Conditions</a
                                >
                              </span></label
                            >
                          </div>
                        </div>
                      </div>
                      <div style="clear:both"></div>
                      <div class="row">
                        <div class="col-md-9">
                          <a
                            class="btn btn-block btn-primary btn-register-tx"
                            href="account-home.html"
                            >Register</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 reg-sidebar">
          <div class="reg-sidebar-inner text-center">
            <div class="promo-text-box">
              <i class=" icon-picture fa fa-4x icon-color-1"></i>

              <h3><strong>Post a Free Classified</strong></h3>

              <p>
                Post your free online classified ads with us. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div class="promo-text-box">
              <i class=" fa fa-pencil-square fa-4x icon-color-2"></i>

              <h3><strong>Create and Manage Items</strong></h3>

              <p>
                Nam sit amet dui vel orci venenatis ullamcorper eget in lacus.
                Praesent tristique elit pharetra magna efficitur laoreet.
              </p>
            </div>
            <div class="promo-text-box">
              <i class=" fa fa-heart fa-4x icon-color-3"></i>

              <h3><strong>Create your Favorite ads list.</strong></h3>

              <p>
                PostNullam quis orci ut ipsum mollis malesuada varius eget
                metus. Nulla aliquet dui sed quam iaculis, ut finibus massa
                tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </section>
  <!--/stop -->
</template>

<script>
export default {
  name: "register"
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
