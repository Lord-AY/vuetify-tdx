<template>
  <!--start-->
  <section class="main-content-reg-tx">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 col-sm-12">
          <div class="form-box">
            <div class="form-box-title">
              <img
                class
                src="../../assets/images/add-account.svg"
                style="max-width: 32px;"
              />
              <span style="font-size: 18px; margin-left: 10px;"
                >Create your account, it's free.</span
              >
            </div>

            <div class="row">
              <div class="col-md-8 offset-md-2">
                <form
                  action
                  class="form-horizontal"
                  @submit.prevent="register"
                  enctype="multipart/form-data"
                >
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
                          >OR</span
                        >
                      </div>
                    </div>
                  </div>
                  <div v-if="errors" class="">
                    <div class="alert alert-danger alert-dismissible fade show">
                      <strong>Error!</strong>
                      {{ errors.message }}
                      <button type="button" class="close" data-dismiss="alert">
                        &times;
                      </button>
                    </div>
                  </div>
                  <!-- Customer Name -->

                  <div class="row form-group-tx form-group">
                    <div class="col-md-12 col-lg-6 col-sm-12">
                      <label for class="control-label">First Name</label>
                      <div class="radio">
                        <input
                          name
                          placeholder="John"
                          class="form-control input-md"
                          :class="errors.firstname  ? 'is-invalid' : ''"
                          required
                          v-model="formFields.firstName"
                          type="text"
                        />
                        <div v-show="errors.firstname" class="invalid-feedback">
                          {{ errors.firstname }}.
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12 col-lg-6 col-sm-12">
                      <label for class="control-label">Last Name</label>
                      <div class="radio">
                        <input
                          name
                          placeholder="Doe"
                          :class="errors.lastname ? 'is-invalid' : ''"
                          v-model="formFields.lastName"
                          class="form-control input-md"
                          required
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
                      <label class="control-label">Email Address</label>
                      <div class>
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
                    <div class="col-md-12">
                      <label class="control-label">Phone Number</label>
                      <VuePhoneNumberInput
                        v-model.trim="formFields.phone"
                        :class="errors.phone ? 'is-invalid' : ''"
                        default-country-code="NG"
                      />
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
                    <div class="col-md-12">
                      <label class="control-label">Home Address</label>
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
                    <div class="col-md-12">
                      <label class="control-label">Country</label>
                      <select
                        class="form-control"
                        for="country"
                        v-model="formFields.rcountry"
                      >
                        <option :value="null" disabled selected
                          >--- Select your country ---</option
                        >
                        <option
                          v-show="items"
                          :value="item.name"
                          v-for="(item, index) in items"
                          :key="index"
                          id="country"
                          >{{ item.name }}</option
                        >
                        <option value="NG" v-show="!items">Nigeria</option>
                        <option value="UM" v-show="!items"
                          >United States of America</option
                        >
                        <option value="AF" v-show="!items">Afghanistan</option>
                        <option value="AL" v-show="!items">Albania</option>
                        <option value="AD" v-show="!items">Andorra</option>
                        <option value="AG" v-show="!items"
                          >Antigua and Barbuda</option
                        >
                        <option value="AU" v-show="!items">Australia</option>
                        <option value="AM" v-show="!items">Armenia</option>
                        <option value="AO" v-show="!items">Angola</option>
                        <option value="AR" v-show="!items">Argentina</option>
                        <option value="AT" v-show="!items">Austria</option>
                        <option value="AZ" v-show="!items">Azerbaijan</option>
                        <option value="BA" v-show="!items"
                          >Bosnia and Herzegovina</option
                        >
                        <option value="BB" v-show="!items">Barbados</option>
                        <option value="BD" v-show="!items">Bangladesh</option>
                        <option value="BE" v-show="!items">Belgium</option>
                        <option value="BF" v-show="!items">Burkina Faso</option>
                        <option value="BG" v-show="!items">Bulgaria</option>
                        <option value="BH" v-show="!items">Bahrain</option>
                        <option value="BJ" v-show="!items">Benin</option>
                        <option value="BN" v-show="!items">Brunei</option>
                        <option value="BO" v-show="!items">Bolivia</option>
                        <option value="BT" v-show="!items">Bhutan</option>
                        <option value="BY" v-show="!items">Belarus</option>
                        <option value="CD" v-show="!items">Congo</option>
                        <option value="CA" v-show="!items">Canada</option>
                        <option value="CF" v-show="!items"
                          >Central African Republic</option
                        >
                        <option value="CI" v-show="!items"
                          >Cote d'Ivoire</option
                        >
                        <option value="CL" v-show="!items">Chile</option>
                        <option value="CM" v-show="!items">Cameroon</option>
                        <option value="CN" v-show="!items">China</option>
                        <option value="CO" v-show="!items">Colombia</option>
                        <option value="CU" v-show="!items">Cuba</option>
                        <option value="CV" v-show="!items">Cabo Verde</option>
                        <option value="CY" v-show="!items">Cyprus</option>
                        <option value="DJ" v-show="!items">Djibouti</option>
                        <option value="DK" v-show="!items">Denmark</option>
                        <option value="DM" v-show="!items">Dominica</option>
                        <option value="DO" v-show="!items"
                          >Dominican Republic</option
                        >
                        <option value="EC" v-show="!items">Ecuador</option>
                        <option value="EE" v-show="!items">Estonia</option>
                        <option value="ER" v-show="!items">Eritrea</option>
                        <option value="ET" v-show="!items">Ethiopia</option>
                        <option value="FI" v-show="!items">Finland</option>
                        <option value="FJ" v-show="!items">Fiji</option>
                        <option value="FR" v-show="!items">France</option>
                        <option value="GA" v-show="!items">Gabon</option>
                        <option value="GD" v-show="!items">Grenada</option>
                        <option value="GE" v-show="!items">Georgia</option>
                        <option value="GH" v-show="!items">Ghana</option>
                        <option value="GH" v-show="!items">Ghana</option>
                        <option value="HN" v-show="!items">Honduras</option>
                        <option value="HT" v-show="!items">Haiti</option>
                        <option value="HU" v-show="!items">Hungary</option>
                        <option value="ID" v-show="!items">Indonesia</option>
                        <option value="IE" v-show="!items">Ireland</option>
                        <option value="IL" v-show="!items">Israel</option>
                        <option value="IN" v-show="!items">India</option>
                        <option value="IQ" v-show="!items">Iraq</option>
                        <option value="IR" v-show="!items">Iran</option>
                        <option value="IS" v-show="!items">Iceland</option>
                        <option value="IT" v-show="!items">Italy</option>
                        <option value="JM" v-show="!items">Jamaica</option>
                        <option value="JO" v-show="!items">Jordan</option>
                        <option value="JP" v-show="!items">Japan</option>
                        <option value="KE" v-show="!items">Kenya</option>
                        <option value="KG" v-show="!items">Kyrgyzstan</option>
                        <option value="KI" v-show="!items">Kiribati</option>
                        <option value="KW" v-show="!items">Kuwait</option>
                        <option value="KZ" v-show="!items">Kazakhstan</option>
                        <option value="LA" v-show="!items">Laos</option>
                        <option value="LB" v-show="!items">Lebanons</option>
                        <option value="LI" v-show="!items"
                          >Liechtenstein</option
                        >
                        <option value="LR" v-show="!items">Liberia</option>
                        <option value="LS" v-show="!items">Lesotho</option>
                        <option value="LT" v-show="!items">Lithuania</option>
                        <option value="LU" v-show="!items">Luxembourg</option>
                        <option value="LV" v-show="!items">Latvia</option>
                        <option value="LY" v-show="!items">Libya</option>
                        <option value="MA" v-show="!items">Morocco</option>
                        <option value="MC" v-show="!items">Monaco</option>
                        <option value="MD" v-show="!items">Moldova</option>
                        <option value="ME" v-show="!items">Montenegro</option>
                        <option value="MG" v-show="!items">Madagascar</option>
                        <option value="MH" v-show="!items"
                          >Marshall Islands</option
                        >
                        <option value="MK" v-show="!items"
                          >Macedonia (FYROM)</option
                        >
                        <option value="ML" v-show="!items">Mali</option>
                        <option value="MM" v-show="!items"
                          >Myanmar (formerly Burma)</option
                        >
                        <option value="MN" v-show="!items">Mongolia</option>
                        <option value="MR" v-show="!items">Mauritania</option>
                        <option value="MT" v-show="!items">Malta</option>
                        <option value="MV" v-show="!items">Maldives</option>
                        <option value="MW" v-show="!items">Malawi</option>
                        <option value="MX" v-show="!items">Mexico</option>
                        <option value="MZ" v-show="!items">Mozambique</option>
                        <option value="NA" v-show="!items">Namibia</option>
                        <option value="NG" v-show="!items">Nigeria</option>
                        <option value="NO" v-show="!items">Norway</option>
                        <option value="NP" v-show="!items">Nepal</option>
                        <option value="NR" v-show="!items">Nauru</option>
                        <option value="NZ" v-show="!items">New Zealand</option>
                        <option value="OM" v-show="!items">Oman</option>
                        <option value="PA" v-show="!items">Panama</option>
                        <option value="PF" v-show="!items">Paraguay</option>
                        <option value="PG" v-show="!items"
                          >Papua New Guinea</option
                        >
                        <option value="PH" v-show="!items">Philippines</option>
                        <option value="PK" v-show="!items">Pakistan</option>
                        <option value="PL" v-show="!items">Poland</option>
                        <option value="QA" v-show="!items">Qatar</option>
                        <option value="RO" v-show="!items">Romania</option>
                        <option value="RU" v-show="!items">Russia</option>
                        <option value="RW" v-show="!items">Rwanda</option>
                        <option value="SA" v-show="!items">Saudi Arabia</option>
                        <option value="SB" v-show="!items"
                          >Solomon Islands</option
                        >
                        <option value="SC" v-show="!items">Seychelles</option>
                        <option value="SD" v-show="!items">Sudan</option>
                        <option value="SE" v-show="!items">Sweden</option>
                        <option value="SG" v-show="!items">Singapore</option>
                        <option value="TG" v-show="!items">Togo</option>
                        <option value="TH" v-show="!items">Thailand</option>
                        <option value="TJ" v-show="!items">Tajikistan</option>
                        <option value="TL" v-show="!items">Timor-Leste</option>
                        <option value="TM" v-show="!items">Turkmenistan</option>
                        <option value="TN" v-show="!items">Tunisia</option>
                        <option value="TO" v-show="!items">Tonga</option>
                        <option value="TR" v-show="!items">Turkey</option>
                        <option value="TT" v-show="!items"
                          >Trinidad and Tobago</option
                        >
                        <option value="TW" v-show="!items">Taiwan</option>
                        <option value="UA" v-show="!items">Ukraine</option>
                        <option value="UG" v-show="!items">Uganda</option>
                        <option value="UY" v-show="!items">Uruguay</option>
                        <option value="UZ" v-show="!items">Uzbekistan</option>
                        <option value="VA" v-show="!items"
                          >Vatican City (Holy See)</option
                        >
                        <option value="VE" v-show="!items">Venezuela</option>
                        <option value="VN" v-show="!items">Vietnam</option>
                        <option value="VU" v-show="!items">Vanuatu</option>
                        <option value="YE" v-show="!items">Yemen</option>
                        <option value="ZM" v-show="!items">Zambia</option>
                        <option value="ZW" v-show="!items">Zimbabwe</option>
                      </select>
                      <div v-show="errors.rcountry" class="invalid-feedback">
                        {{ errors.rcountry }}.
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-group-tx row">
                    <div class="col-md-12">
                      <label for class="control-label">Password</label>
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
                    <div class="col-md-12">
                      <label for class="control-label">Confirm Password</label>
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
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div style="clear:both"></div>
                        <div class="row">
                          <div class="col-md-8 offset-md-2 col-sm-12">
                            <button
                              type="submit"
                              class="btn btn-block btn-primary btn-register-tx"
                              :class="loading ? 'disabled-btn' : ''"
                              :disabled='loading'
                            >
                              Register
                            </button>
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
                <i class="icon-picture fa fa-4x icon-color-1"></i>

                <h3>
                  <strong>Post a Free Classified</strong>
                </h3>

                <p>
                  Post your free online classified ads with us. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div class="promo-text-box">
                <i class="fa fa-pencil-square fa-4x icon-color-2"></i>

                <h3>
                  <strong>Create and Manage Items</strong>
                </h3>

                <p>
                  Nam sit amet dui vel orci venenatis ullamcorper eget in lacus.
                  Praesent tristique elit pharetra magna efficitur laoreet.
                </p>
              </div>
              <div class="promo-text-box">
                <i class="fa fa-heart fa-4x icon-color-3"></i>

                <h3>
                  <strong>Create your Favorite ads list.</strong>
                </h3>

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
import VuePhoneNumberInput from "vue-phone-number-input";
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
    loading: Boolean
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
