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
                <form action="" class="form-horizontal" @submit.prevent="register" enctype="multipart/form-data">
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
	                <div v-if="errors" class="container">
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
                          :class="errors.firstname ? 'is-invalid' : ''"
                          required=""
                          v-model="formFields.firstName"
                          type="text"
                        />
                        <div v-show="errors.firstname" class="invalid-feedback">
                          {{ errors.firstname }}.
                        </div>
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
                           :class="errors.lastname ? 'is-invalid' : ''"
                            v-model="formFields.lastName"
                          class="form-control input-md"
                          required=""
                          type="text"
                        />
                        <div v-show="errors.lastname" class="invalid-feedback">
                          {{ errors.lastname }}.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group form-group-tx row">
                    <div class="col-md-12 col-lg-12 col-sm-12">
                    <label class=" control-label">Email Address</label>
                    <div class="">
                      <input
                        name
                        placeholder="Email"
                        class="form-control input-md"
                        :class="errors.email ? 'is-invalid' : ''"
                        type="text"
                        v-model.trim="formFields.email"
                      />
                      <div v-show="errors.email" class="invalid-feedback">
                        {{ errors.email }}.
                      </div>
                    </div>
                    </div>

                  </div>
                  <!-- Phone Number -->
                 <div class="form-group form-group-tx row">
                      <label class="control-label">Phone Number</label>
                    <div class="col-md-12 ">
                    <VuePhoneNumberInput v-model.trim="formFields.phone"  :class="errors.phone ? 'is-invalid' : ''" default-country-code="NG"/>
                      <div v-show="errors.phone" class="invalid-feedback">
                        {{ errors.phone }}.
                      </div>
                      <div class="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            value
                            style="opacity: 1; margin-top: 5px"
                          />
                          <small>Hide the phone number on published ads.</small>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="form-group form-group-tx row">
                    <label class="control-label">Home Address</label>
                    <div class="col-md-12">
                      <input
                        name
                        placeholder="Enter Address"
                        class="form-control input-md"
                        :class="errors.address ? 'is-invalid' : ''"
                        type="text"
                        v-model="formFields.address"
                      />
                      <div v-show="errors.address" class="invalid-feedback">
                        {{ errors.address }}.
                      </div>
                    </div>
                  </div>

                   <div class="form-group form-group-tx row">
                    <label class=" control-label">Country</label>
                    <div class="col-md-12">
                      <select
                        class="form-control"
                        for="country"
                        v-model="formFields.rcountry"
                      >
                        <option :value="null" disabled selected
                          >--- Select your country ---</option
                        >
                        <option
                          :value="item.name"
                          v-for="(item, index) in items"
                          :key="index"
                          id="country"
                          >{{ item.name }}</option
                        >
                      </select>
                      <div v-show="errors.rcountry" class="invalid-feedback">
                        {{ errors.rcountry }}.
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-group-tx row">
                    <label for class=" control-label">Password</label>
                    <div class="col-md-12">
                      <div class="radio">
                        <input
                          name
                          placeholder="Password"
                          class="form-control input-md"
                          :class="
                            passwordErr
                              ? 'is-invalid'
                              : '' || errors.password
                              ? 'is-invalid'
                              : ''
                          "
                          required
                          type="password"
                          v-model.trim="formFields.password"
                        />
                        <small
                          id="passwordHelpBlock"
                          class="form-text text-muted"
                          >At least 6 characters</small
                        >
                        <div v-show="passwordErr" class="invalid-feedback">
                          {{ passwordErr }}.
                        </div>
                        <div v-show="errors.password" class="invalid-feedback">
                          {{ errors.password }}.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group form-group-tx row">
                    <label for class="control-label"
                      >Confirm Password</label
                    >
                    <div class="col-md-12">
                      <div class="radio">
                        <input
                          name
                          placeholder="verify password"
                          class="form-control input-md"
                          :class="
                            passwordErr
                              ? 'is-invalid'
                              : '' || errors.password
                              ? 'is-invalid'
                              : ''
                          "
                          required
                          type="password"
                          v-model.trim="formFields.confirmPassword"
                        />
                        <small
                          id="passwordHelpBlock"
                          class="form-text text-muted"
                          >At least 6 characters</small
                        >
                        <div v-show="passwordErr" class="invalid-feedback">
                          {{ passwordErr }}.
                        </div>
                        <div v-show="errors.password" class="invalid-feedback">
                          {{ errors.password }}.
                        </div>
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
                            <button
                            type="submit"
                              class="btn btn-block btn-primary btn-register-tx"
                              >Register</button
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
  </section>
  <!--/stop -->
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input'
export default {
 name: "registerForm",
  data() {
    return {};
  },
  props: {
    formFields: Object,
    register: Function,
    items: Array,
    passwordErr: String,
    errors: [Array, Object, String],
  },
  components: {
    VuePhoneNumberInput
  }
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
