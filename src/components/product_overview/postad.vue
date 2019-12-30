/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/no-parsing-error
*/
<template>
  <!--Section-->
  <section class="sptb" style="padding-top: 30px;">
    <!-- <div class="container" style="padding-top: 70px;"> -->
    <div class="container">
      <div class="row ">
        <div class="col-lg-8 col-md-12 col-md-12">
          <form action="" class="form-horizontal" @submit.prevent="processForm">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="form-box">
                  <div class="form-box-title">
                    <span
                      style="font-size: 18px; margin-left: 10px;"
                      class="text-uppercase"
                      >Post an Ad</span
                    >
                  </div>

                  <div class="row">
                    <div
                      class="col-md-10 offset-md-1 col-sm-12 col-lg-10 offset-lg-1"
                    >
                      <!-- Ad Details -->
                      <div class="row">
                        <div class="col-md-12">
                          <div class="row">
                            <div class="col-md-12 col-sm-12 col-lg-12">
                              <!-- AD details -->

                              <div class="ad-information ">
                                <div class="ad-section-title">Ad Details</div>
                              </div>

                              <div class="row form-group-tx form-group">
                                <div class="col-md-12 col-sm-12 col-lg-12">
                                  <label class="form-label text-dark"
                                    >Ad Title</label
                                  >
                                  <div class="radio">
                                    <input
                                      type="text"
                                      class="form-control post-ad-input"
                                      placeholder="Ad title"
                                      v-model="ads.name"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div class="row form-group-tx form-group">
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label class="form-label text-dark"
                                      >Category</label
                                    >
                                    <select
                                      class="form-control custom-select"
                                      v-model="ads.cid"
                                    >
                                      <option value="0" disabled
                                        >-- Select Option --</option
                                      >
                                      <option
                                        :value="category.id"
                                        v-for="category in categories"
                                        :key="category.id"
                                        >{{ category.name }}</option
                                      >
                                    </select>
                                  </div>
                                </div>
                                <div class="col-md-6"></div>
                              </div>

                              <div class="row form-group-tx form-group">
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label class="form-label text-dark">
                                      Country</label
                                    >
                                    <select class="form-control custom-select">
                                      <option value="0" disabled
                                        >-- Select Option --</option
                                      >
                                      <option
                                        :value="item.name"
                                        v-for="(item, index) in items"
                                        :key="index"
                                        >{{ item.name }}</option
                                      >
<<<<<<< HEAD
                                      <option value="NG" v-show="!items"
                                        >Nigeria</option
                                      >
                                      <option value="UM" v-show="!items"
                                        >United States of America</option
                                      >
                                      <option value="AF" v-show="!items"
                                        >Afghanistan</option
                                      >
                                      <option value="AL" v-show="!items"
                                        >Albania</option
                                      >
                                      <option value="AD" v-show="!items"
                                        >Andorra</option
                                      >
                                      <option value="AG" v-show="!items"
                                        >Antigua and Barbuda</option
                                      >
                                      <option value="AU" v-show="!items"
                                        >Australia</option
                                      >
                                      <option value="AM" v-show="!items"
                                        >Armenia</option
                                      >
                                      <option value="AO" v-show="!items"
                                        >Angola</option
                                      >
                                      <option value="AR" v-show="!items"
                                        >Argentina</option
                                      >
                                      <option value="AT" v-show="!items"
                                        >Austria</option
                                      >
                                      <option value="AZ" v-show="!items"
                                        >Azerbaijan</option
                                      >
                                      <option value="BA" v-show="!items"
                                        >Bosnia and Herzegovina</option
                                      >
                                      <option value="BB" v-show="!items"
                                        >Barbados</option
                                      >
                                      <option value="BD" v-show="!items"
                                        >Bangladesh</option
                                      >
                                      <option value="BE" v-show="!items"
                                        >Belgium</option
                                      >
                                      <option value="BF" v-show="!items"
                                        >Burkina Faso</option
                                      >
                                      <option value="BG" v-show="!items"
                                        >Bulgaria</option
                                      >
                                      <option value="BH" v-show="!items"
                                        >Bahrain</option
                                      >
                                      <option value="BJ" v-show="!items"
                                        >Benin</option
                                      >
                                      <option value="BN" v-show="!items"
                                        >Brunei</option
                                      >
                                      <option value="BO" v-show="!items"
                                        >Bolivia</option
                                      >
                                      <option value="BT" v-show="!items"
                                        >Bhutan</option
                                      >
                                      <option value="BY" v-show="!items"
                                        >Belarus</option
                                      >
                                      <option value="CD" v-show="!items"
                                        >Congo</option
                                      >
                                      <option value="CA" v-show="!items"
                                        >Canada</option
                                      >
                                      <option value="CF" v-show="!items"
                                        >Central African Republic</option
                                      >
                                      <option value="CI" v-show="!items"
                                        >Cote d'Ivoire</option
                                      >
                                      <option value="CL" v-show="!items"
                                        >Chile</option
                                      >
                                      <option value="CM" v-show="!items"
                                        >Cameroon</option
                                      >
                                      <option value="CN" v-show="!items"
                                        >China</option
                                      >
                                      <option value="CO" v-show="!items"
                                        >Colombia</option
                                      >
                                      <option value="CU" v-show="!items"
                                        >Cuba</option
                                      >
                                      <option value="CV" v-show="!items"
                                        >Cabo Verde</option
                                      >
                                      <option value="CY" v-show="!items"
                                        >Cyprus</option
                                      >
                                      <option value="DJ" v-show="!items"
                                        >Djibouti</option
                                      >
                                      <option value="DK" v-show="!items"
                                        >Denmark</option
                                      >
                                      <option value="DM" v-show="!items"
                                        >Dominica</option
                                      >
                                      <option value="DO" v-show="!items"
                                        >Dominican Republic</option
                                      >
                                      <option value="EC" v-show="!items"
                                        >Ecuador</option
                                      >
                                      <option value="EE" v-show="!items"
                                        >Estonia</option
                                      >
                                      <option value="ER" v-show="!items"
                                        >Eritrea</option
                                      >
                                      <option value="ET" v-show="!items"
                                        >Ethiopia</option
                                      >
                                      <option value="FI" v-show="!items"
                                        >Finland</option
                                      >
                                      <option value="FJ" v-show="!items"
                                        >Fiji</option
                                      >
                                      <option value="FR" v-show="!items"
                                        >France</option
                                      >
                                      <option value="GA" v-show="!items"
                                        >Gabon</option
                                      >
                                      <option value="GD" v-show="!items"
                                        >Grenada</option
                                      >
                                      <option value="GE" v-show="!items"
                                        >Georgia</option
                                      >
                                      <option value="GH" v-show="!items"
                                        >Ghana</option
                                      >
                                      <option value="GH" v-show="!items"
                                        >Ghana</option
                                      >
                                      <option value="HN" v-show="!items"
                                        >Honduras</option
                                      >
                                      <option value="HT" v-show="!items"
                                        >Haiti</option
                                      >
                                      <option value="HU" v-show="!items"
                                        >Hungary</option
                                      >
                                      <option value="ID" v-show="!items"
                                        >Indonesia</option
                                      >
                                      <option value="IE" v-show="!items"
                                        >Ireland</option
                                      >
                                      <option value="IL" v-show="!items"
                                        >Israel</option
                                      >
                                      <option value="IN" v-show="!items"
                                        >India</option
                                      >
                                      <option value="IQ" v-show="!items"
                                        >Iraq</option
                                      >
                                      <option value="IR" v-show="!items"
                                        >Iran</option
                                      >
                                      <option value="IS" v-show="!items"
                                        >Iceland</option
                                      >
                                      <option value="IT" v-show="!items"
                                        >Italy</option
                                      >
                                      <option value="JM" v-show="!items"
                                        >Jamaica</option
                                      >
                                      <option value="JO" v-show="!items"
                                        >Jordan</option
                                      >
                                      <option value="JP" v-show="!items"
                                        >Japan</option
                                      >
                                      <option value="KE" v-show="!items"
                                        >Kenya</option
                                      >
                                      <option value="KG" v-show="!items"
                                        >Kyrgyzstan</option
                                      >
                                      <option value="KI" v-show="!items"
                                        >Kiribati</option
                                      >
                                      <option value="KW" v-show="!items"
                                        >Kuwait</option
                                      >
                                      <option value="KZ" v-show="!items"
                                        >Kazakhstan</option
                                      >
                                      <option value="LA" v-show="!items"
                                        >Laos</option
                                      >
                                      <option value="LB" v-show="!items"
                                        >Lebanons</option
                                      >
                                      <option value="LI" v-show="!items"
                                        >Liechtenstein</option
                                      >
                                      <option value="LR" v-show="!items"
                                        >Liberia</option
                                      >
                                      <option value="LS" v-show="!items"
                                        >Lesotho</option
                                      >
                                      <option value="LT" v-show="!items"
                                        >Lithuania</option
                                      >
                                      <option value="LU" v-show="!items"
                                        >Luxembourg</option
                                      >
                                      <option value="LV" v-show="!items"
                                        >Latvia</option
                                      >
                                      <option value="LY" v-show="!items"
                                        >Libya</option
                                      >
                                      <option value="MA" v-show="!items"
                                        >Morocco</option
                                      >
                                      <option value="MC" v-show="!items"
                                        >Monaco</option
                                      >
                                      <option value="MD" v-show="!items"
                                        >Moldova</option
                                      >
                                      <option value="ME" v-show="!items"
                                        >Montenegro</option
                                      >
                                      <option value="MG" v-show="!items"
                                        >Madagascar</option
                                      >
                                      <option value="MH" v-show="!items"
                                        >Marshall Islands</option
                                      >
                                      <option value="MK" v-show="!items"
                                        >Macedonia (FYROM)</option
                                      >
                                      <option value="ML" v-show="!items"
                                        >Mali</option
                                      >
                                      <option value="MM" v-show="!items"
                                        >Myanmar (formerly Burma)</option
                                      >
                                      <option value="MN" v-show="!items"
                                        >Mongolia</option
                                      >
                                      <option value="MR" v-show="!items"
                                        >Mauritania</option
                                      >
                                      <option value="MT" v-show="!items"
                                        >Malta</option
                                      >
                                      <option value="MV" v-show="!items"
                                        >Maldives</option
                                      >
                                      <option value="MW" v-show="!items"
                                        >Malawi</option
                                      >
                                      <option value="MX" v-show="!items"
                                        >Mexico</option
                                      >
                                      <option value="MZ" v-show="!items"
                                        >Mozambique</option
                                      >
                                      <option value="NA" v-show="!items"
                                        >Namibia</option
                                      >
                                      <option value="NG" v-show="!items"
                                        >Nigeria</option
                                      >
                                      <option value="NO" v-show="!items"
                                        >Norway</option
                                      >
                                      <option value="NP" v-show="!items"
                                        >Nepal</option
                                      >
                                      <option value="NR" v-show="!items"
                                        >Nauru</option
                                      >
                                      <option value="NZ" v-show="!items"
                                        >New Zealand</option
                                      >
                                      <option value="OM" v-show="!items"
                                        >Oman</option
                                      >
                                      <option value="PA" v-show="!items"
                                        >Panama</option
                                      >
                                      <option value="PF" v-show="!items"
                                        >Paraguay</option
                                      >
                                      <option value="PG" v-show="!items"
                                        >Papua New Guinea</option
                                      >
                                      <option value="PH" v-show="!items"
                                        >Philippines</option
                                      >
                                      <option value="PK" v-show="!items"
                                        >Pakistan</option
                                      >
                                      <option value="PL" v-show="!items"
                                        >Poland</option
                                      >
                                      <option value="QA" v-show="!items"
                                        >Qatar</option
                                      >
                                      <option value="RO" v-show="!items"
                                        >Romania</option
                                      >
                                      <option value="RU" v-show="!items"
                                        >Russia</option
                                      >
                                      <option value="RW" v-show="!items"
                                        >Rwanda</option
                                      >
                                      <option value="SA" v-show="!items"
                                        >Saudi Arabia</option
                                      >
                                      <option value="SB" v-show="!items"
                                        >Solomon Islands</option
                                      >
                                      <option value="SC" v-show="!items"
                                        >Seychelles</option
                                      >
                                      <option value="SD" v-show="!items"
                                        >Sudan</option
                                      >
                                      <option value="SE" v-show="!items"
                                        >Sweden</option
                                      >
                                      <option value="SG" v-show="!items"
                                        >Singapore</option
                                      >
                                      <option value="TG" v-show="!items"
                                        >Togo</option
                                      >
                                      <option value="TH" v-show="!items"
                                        >Thailand</option
                                      >
                                      <option value="TJ" v-show="!items"
                                        >Tajikistan</option
                                      >
                                      <option value="TL" v-show="!items"
                                        >Timor-Leste</option
                                      >
                                      <option value="TM" v-show="!items"
                                        >Turkmenistan</option
                                      >
                                      <option value="TN" v-show="!items"
                                        >Tunisia</option
                                      >
                                      <option value="TO" v-show="!items"
                                        >Tonga</option
                                      >
                                      <option value="TR" v-show="!items"
                                        >Turkey</option
                                      >
                                      <option value="TT" v-show="!items"
                                        >Trinidad and Tobago</option
                                      >
                                      <option value="TW" v-show="!items"
                                        >Taiwan</option
                                      >
                                      <option value="UA" v-show="!items"
                                        >Ukraine</option
                                      >
                                      <option value="UG" v-show="!items"
                                        >Uganda</option
                                      >
                                      <option value="UY" v-show="!items"
                                        >Uruguay</option
                                      >
                                      <option value="UZ" v-show="!items"
                                        >Uzbekistan</option
                                      >
                                      <option value="VA" v-show="!items"
                                        >Vatican City (Holy See)</option
                                      >
                                      <option value="VE" v-show="!items"
                                        >Venezuela</option
                                      >
                                      <option value="VN" v-show="!items"
                                        >Vietnam</option
                                      >
                                      <option value="VU" v-show="!items"
                                        >Vanuatu</option
                                      >
                                      <option value="YE" v-show="!items"
                                        >Yemen</option
                                      >
                                      <option value="ZM" v-show="!items"
                                        >Zambia</option
                                      >
                                      <option value="ZW" v-show="!items"
                                        >Zimbabwe</option
=======
                                      <option 
                                        value="NG"
                                      >Nigeria</option>
>>>>>>> 8d2e3f59351aa87496c7d3168b3adafb45d095bb
                                      >
                                    </select>
                                  </div>
                                </div>
                                <div class="col-md-6"></div>
                              </div>

                              <div class="row form-group-tx form-group">
                                <div class="col-md-12 col-sm-12 col-lg-12">
                                  <label class="form-label text-dark"
                                    >Description</label
                                  >
                                  <textarea
                                    class="form-control"
                                    name="example-textarea-input"
                                    rows="4"
                                    placeholder="Write a short description about the item"
                                    style="padding-top: 10px"
                                    v-model="ads.description"
                                  ></textarea>
                                </div>
                              </div>

                              <div class="row form-group-tx form-group">
                                <div class="col-sm-12 col-lg-6 col-md-6">
                                  <div class="form-group">
                                    <label class="form-label">Price</label>
                                    <input
                                      type="number"
                                      class="form-control post-ad-input"
                                      placeholder="Price"
                                      v-model="ads.amount"
                                    />
                                  </div>
                                </div>
                                <div class="col-sm-12 col-lg-6 col-md-6">
                                  <div
                                    class="checkbox checkbox-info"
                                    style="margin-top: 40px;"
                                  >
                                    <label
                                      class="custom-control mt-4 custom-checkbox"
                                    >
                                      <input
                                        type="checkbox"
                                        class="custom-control-input"
                                        v-model="ads.negotiable"
                                      />
                                      <span
                                        class="custom-control-label text-dark pl-2"
                                        style="margin-left: -10px;"
                                        >Negotiable</span
                                      >
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div class="p-2 border mb-4 form-group">
                                <label for="">Upload images</label>
                                <vue-upload-multiple-image
                                  @upload-success="selectImageSuccess"
                                  @before-remove="beforeRemove"
                                  :data-images="images"
                                  dragText="Images must not exceed 2mb for each"
                                  browseText="Browse image"
                                  primaryText="Default Image"
                                  markIsPrimaryText="slide images"
                                  popupText="This image will be used as the default display image, when showing your ads"
                                ></vue-upload-multiple-image>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Personal Information -->
                      <!-- <div class="row" style="margin-top: 30px;">
                      <div class="col-md-12">
                        <form action="" class="form-horizontal">
                          <div class="row">
                            <div class="col-md-12 col-sm-12 col-lg-12">
                          <div class="ad-information ">
                                <div class="ad-section-title">
                                  Personal Information
                                </div>
                              </div>

                              <div class="row">
                                <div class="col-sm-12 col-lg-6 col-md-6">
                                  <div class="form-group">
                                    <label class="form-label">Full Name</label>
                                    <input
                                      type="text"
                                      class="form-control post-ad-input"
                                      placeholder="John Doe"
                                    />
                                  </div>
                                </div>
                                <div class="col-sm-12 col-lg-6 col-md-6">
                                  <div class="form-group mb-0">
                                    <label class="form-label"
                                      >Phone Number</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control post-ad-input"
                                      placeholder="09000000001"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div class="row">
                                <div class="col-sm-12 col-lg-12 col-md-12">
                                  <div class="form-group">
                                    <label class="form-label">Email</label>
                                    <input
                                      type="email"
                                      class="form-control post-ad-input"
                                      placeholder="Email Address"
                                    />
                                  </div>
                                </div>
                                <div class="col-sm-12 col-lg-12 col-md-12">
                                  <div class="form-group mb-0">
                                    <label class="form-label text-dark"
                                      >Address</label
                                    >
                                    <textarea
                                      class="form-control"
                                      name="example-textarea-input"
                                      rows="4"
                                      placeholder="Address Line 1"
                                      style="padding-top: 10px"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div> -->

                      <!-- Ad Post Package -->
                      <div class="row" style="margin-top: 30px;">
                        <div class="col-md-12">
                          <!-- <form action="" class="form-horizontal"> -->
                          <div class="row">
                            <div class="col-md-12 col-sm-12 col-lg-12">
                              <!-- AD details -->

                              <div class="ad-information ">
                                <div class="ad-section-title">
                                  <img
                                    src="../../assets/images/ad-post.svg"
                                    style="width: 32px;"
                                  />
                                  Ad Post Package
                                </div>
                              </div>

                              <p class="explanatory-text">
                                Boosted ads help sellers promote their product
                                or service by getting their ads more visibility
                                with more buyers and sell what they want faster.
                              </p>

                              <div class="row regular-ad-bg">
                                <div
                                  class="col-md-12"
                                  style="padding-right: 0px; padding-left: 0px;"
                                >
                                  <ul class="ad-post-details">
                                    <li
                                      class="list-ad-package"
                                      style="padding-right: 0.75rem; padding-left: 0.75rem;"
                                    >
                                      <label
                                        class="custom-control custom-radio mb-2 mr-4"
                                      >
                                        <input
                                          type="radio"
                                          class="custom-control-input"
                                          name="example"
                                          v-model="ads.adType"
                                          value="1"
                                          checked=""
                                        />
                                        <span class="custom-control-label">
                                          <b>Regular List</b>
                                          <span
                                            class=""
                                            style="float: right; font-size: 18px;"
                                          >
                                            <span style="font-size: 14px;"
                                              >(Free)
                                            </span>
                                            &#8358; 0.00</span
                                          >
                                        </span>
                                      </label>
                                    </li>
                                    <li
                                      class="list-ad-package"
                                      style="padding-right: 0.75rem; padding-left: 0.75rem;"
                                    >
                                      <label
                                        class="custom-control custom-radio  mb-2 mr-4"
                                      >
                                        <input
                                          type="radio"
                                          class="custom-control-input"
                                          name="example"
                                          v-model="ads.adType"
                                          value="2"
                                        />
                                        <span class="custom-control-label">
                                          <b>Urgent Ad</b>
                                          <span
                                            class=""
                                            style="float: right; font-size: 18px;"
                                            >&#8358; 500</span
                                          >
                                        </span>
                                      </label>
                                    </li>
                                    <li
                                      class="list-ad-package"
                                      style="padding-right: 0.75rem; padding-left: 0.75rem;"
                                    >
                                      <label
                                        class="custom-control custom-radio  mb-2 mr-4"
                                      >
                                        <input
                                          type="radio"
                                          class="custom-control-input"
                                          name="example"
                                          v-model="ads.adType"
                                          value="3"
                                        />
                                        <span class="custom-control-label">
                                          <b>Top Ad</b>
                                          <span
                                            class=""
                                            style="float: right; font-size: 18px;"
                                            >&#8358; 1000</span
                                          >
                                        </span>
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <!-- <div class="link-to-senior-ads">
                                <span class="explanatory-text"
                                  >Make your ad PREMIUM
                                </span>
                                <a
                                  href=""
                                  style="color: #000; margin: 12px 0px; border-bottom: 1px solid #000;"
                                >
                                  Click here</a
                                >
                              </div> -->

                              <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-12">
                                  <div class="senior-ads form-group">
                                    <div
                                      class="senior-ads-header gold"
                                      style="background-color:  #f0ad4e;"
                                    >
                                      <div class="post-package-title gold">
                                        <span>Gold</span>
                                      </div>
                                      <span>&#8358;</span>
                                      <h4
                                        style="text-align: center; font-size: 48px!important; font-weight: 500; color: #fff;"
                                      >
                                        3000
                                      </h4>
                                      <div class="package-value">
                                        <span> <i></i> </span>
                                      </div>
                                    </div>
                                    <div class="senior-ads-body">
                                      <ul class="package-details-list">
                                        <li>
                                          <i class="fa fa-check-circle-o"></i>
                                          30 days ad boost
                                        </li>
                                        <li>
                                          <i class="fa fa-check-circle-o"></i>
                                          30 days ad boost
                                        </li>
                                        <li>
                                          <i class="fa fa-check-circle-o"></i>
                                          30 days ad boost
                                        </li>
                                        <li>
                                          <i class="fa fa-check-circle-o"></i>
                                          30 days ad boost
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="select-senior-ad">
                                      <label>
                                        <input
                                          type="radio"
                                          class="option-input radio"
                                          name="example"
                                          v-model="ads.adType"
                                          value="4"
                                        />
                                        Gold
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12">
                                  <div class="senior-ads">
                                    <div
                                      class="senior-ads-header premium"
                                      style="background-color: #27c781;"
                                    >
                                      <!-- <img src="../../assets/images/ad-premium.svg " width="24px"> -->
                                      <div class="post-package-title">
                                        <span>Premium</span>
                                      </div>
                                      <span>&#8358;</span>
                                      <h4
                                        style="text-align: center; font-size: 48px!important; font-weight: 500; color: #fff;"
                                      >
                                        5000
                                      </h4>
                                      <div class="package-value">
                                        <span> <i>Most Popular</i> </span>
                                      </div>
                                    </div>
                                    <div class="senior-ads-body">
                                      <ul class="package-details-list">
                                        <li>
                                          <i class="fa fa-check-circle-o"></i>
                                          30 days ad boost
                                        </li>
                                        <li>
                                          <i class="fa fa-check-circle-o"></i>
                                          30 days ad boost
                                        </li>
                                        <li>
                                          <i class="fa fa-check-circle-o"></i>
                                          30 days ad boost
                                        </li>
                                        <li>
                                          <i class="fa fa-check-circle-o"></i>
                                          30 days ad boost
                                        </li>
                                      </ul>
                                    </div>

                                    <div class="select-senior-ad">
                                      <label>
                                        <input
                                          type="radio"
                                          class="option-input radio"
                                          name="example"
                                          v-model="ads.adType"
                                          value="5"
                                        />
                                        Premium
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12">
                                  <div class="senior-ads">
                                    <div
                                      class="senior-ads-header hot"
                                      style="background-color: #4CAF50;"
                                    >
                                      <!-- <img src="../../assets/images/ad-premium.svg " width="24px"> -->
                                      <div class="post-package-title hot">
                                        <span>Hot Sellers</span>
                                      </div>
                                      <span>&#8358;</span>
                                      <h4
                                        style="text-align: center; font-size: 48px!important; font-weight: 500; color: #fff;"
                                      >
                                        9000
                                      </h4>
                                      <div class="package-value">
                                        <span> <i>Best Value</i> </span>
                                      </div>
                                    </div>
                                    <div class="senior-ads-body">
                                      <ul class="package-details-list">
                                        <li>
                                          <i class="fa fa-check-circle-o"></i>
                                          30 days ad boost
                                        </li>
                                        <li>
                                          <i class="fa fa-check-circle-o"></i>
                                          30 days ad boost
                                        </li>
                                        <li>
                                          <i class="fa fa-check-circle-o"></i>
                                          30 days ad boost
                                        </li>
                                        <li>
                                          <i class="fa fa-check-circle-o"></i>
                                          30 days ad boost
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="select-senior-ad">
                                      <label>
                                        <input
                                          type="radio"
                                          class="option-input radio"
                                          name="example"
                                          v-model="ads.adType"
                                          value="6"
                                        />
                                        Hot Sellers
                                      </label>
                                    </div>
                                  </div>
                                </div>

                                <div class="row total-pricing">
                                  <div class="total-pricing-sub-div">
                                    <p><i> Total: &#8358; 0.00</i></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- </form> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="form-box">
                  <div class="form-box-title">
                    <span style="font-size: 18px; margin-left: 10px;"
                      >Payments</span
                    >
                  </div>

                  <div class="row">
                    <div class="col-md-10 offset-md-1">
                      <!-- <form action="" class="form-horizontal"> -->
                      <div class="row">
                        <div class="col-md-12 col-sm-12 col-lg-12">
                          <div class="tab-content card-body border mb-0 b-0">
                            <div class="panel panel-primary">
                              <div
                                class=" tab-menu-heading border-0 pl-0 pr-0 pt-0"
                              >
                                <div class="tabs-menu1 ">
                                  <!-- Tabs -->
                                  <ul class="nav panel-tabs">
                                    <li>
                                      <a
                                        href="#tab5"
                                        class="active"
                                        data-toggle="tab"
                                        @click="addPayment(1)"
                                      >
                                        <img
                                          src="../../assets/images/wallet.svg"
                                          height="20px"
                                          style="margin-top: -4px;"
                                          alt=""
                                          srcset=""
                                        />
                                        Wallet</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        href="#tab6"
                                        data-toggle="tab"
                                        @click="addPayment(2)"
                                      >
                                        <img
                                          src="../../assets/images/master_card.png"
                                          height="20px"
                                          style="margin-top: -4px;"
                                          alt=""
                                          srcset=""
                                        />
                                        Credit/ Debit Card</a
                                      >
                                    </li>
                                    <li>
                                      <a
                                        href="#tab7"
                                        data-toggle="tab"
                                        @click="addPayment(3)"
                                      >
                                        <i class="fa fa-university"></i> Cash</a
                                      >
                                    </li>
                                    <!-- <li><a href="#tab8" data-toggle="tab">Gift Voucher</a></li> -->
                                  </ul>
                                </div>
                              </div>
                              <div
                                class="panel-body tabs-menu-body pl-0 pr-0 border-0"
                                style="padding-top: 0px;"
                              >
                                <div class="tab-content">
                                  <div class="tab-pane active " id="tab5">
                                    <div class="form-group">
                                      <label class="form-label"
                                        >Wallet ID</label
                                      >
                                      <div class="input-group">
                                        <input
                                          type="text"
                                          class="form-control post-ad-input"
                                          placeholder="Wallet ID"
                                          name="wallet_id"
                                        />
                                        <!-- <span class="input-group-append">
                                <button class="btn btn-info" type="button"><i class="fa fa-cc-visa"></i> &nbsp; <i class="fa fa-cc-amex"></i> &nbsp;
                                <i class="fa fa-cc-mastercard"></i></button>
                              </span> -->
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="form-label"
                                        >Wallet PIN</label
                                      >
                                      <input
                                        type="number"
                                        class="form-control post-ad-input"
                                        id="name1"
                                        placeholder="PIN"
                                        name="wallet_pin"
                                      />
                                    </div>
                                    <div
                                      class="col-lg-12"
                                      style="padding-left: 0px!important;"
                                    >
                                      <div class="checkbox checkbox-info">
                                        <label
                                          class="custom-control mt-4 custom-checkbox"
                                        >
                                          <input
                                            type="checkbox"
                                            class="custom-control-input"
                                          />
                                          <span
                                            class="custom-control-label text-dark pl-2"
                                            >I agree with the Terms and
                                            Conditions.</span
                                          >
                                        </label>
                                      </div>
                                    </div>
                                    <!-- <ul class=" mb-b-4 ">
                                      <li>
                                        <a
                                          href="#"
                                          class="btn btn-primary  mb-0 mr-2"
                                          style="padding: 8px 48px!important; font-weight: 500; font-size: 14px;"
                                          >Pay</a
                                        >
                                      </li>
                                    </ul> -->
                                  </div>
                                  <div class="tab-pane " id="tab6">
                                    <div class="form-group">
                                      <label class="form-label"
                                        >CardHolder Name</label
                                      >
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="name2"
                                        placeholder="First Name"
                                        name="card_name"
                                      />
                                    </div>
                                    <div class="form-group">
                                      <label class="form-label"
                                        >Card number</label
                                      >
                                      <div class="input-group">
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Card Number"
                                          name="card"
                                        />
                                        <span class="input-group-append">
                                          <button
                                            class="btn btn-info"
                                            type="button"
                                          >
                                            <i class="fa fa-cc-visa"></i> &nbsp;
                                            <i class="fa fa-cc-amex"></i> &nbsp;
                                            <i class="fa fa-cc-mastercard"></i>
                                          </button>
                                        </span>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-sm-8">
                                        <div class="form-group mb-sm-0">
                                          <label class="form-label"
                                            >Expiration</label
                                          >
                                          <div class="input-group">
                                            <input
                                              type="number"
                                              class="form-control"
                                              placeholder="MM"
                                              name="expiremonth"
                                            />
                                            <input
                                              type="number"
                                              class="form-control"
                                              placeholder="YY"
                                              name="expireyear"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-sm-4 ">
                                        <div class="form-group mb-0">
                                          <label class="form-label"
                                            >CVV
                                            <i
                                              class="fa fa-question-circle"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              title="Please Enter last 3 digits"
                                            ></i
                                          ></label>
                                          <input
                                            type="number"
                                            class="form-control"
                                            name="terms"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="col-lg-12"
                                      style="padding-left: 0px!important;"
                                    >
                                      <div class="checkbox checkbox-info">
                                        <label
                                          class="custom-control mt-4 custom-checkbox"
                                        >
                                          <input
                                            type="checkbox"
                                            class="custom-control-input"
                                          />
                                          <span
                                            class="custom-control-label text-dark pl-2"
                                            >I agree with the Terms and
                                            Conditions.</span
                                          >
                                        </label>
                                      </div>
                                    </div>
                                    <!-- <ul class=" mb-b-4 ">
                                      <li>
                                        <a
                                          href="#"
                                          class="btn btn-primary  mb-0 mr-2"
                                          style="padding: 8px 48px!important; font-weight: 500; font-size: 14px;"
                                          >Pay</a
                                        >
                                      </li>
                                    </ul> -->
                                  </div>
                                  <div class="tab-pane " id="tab7">
                                    <div class="cash-info">
                                      <h4>Cash payment procedure:</h4>

                                      <p>
                                        Go to any bank teller and provide the
                                        following information:
                                      </p>
                                      <ul>
                                        <li>Bank: <b>Zenith</b></li>
                                        <li>Merchant: <b>Tradexplora</b></li>
                                        <li>Invoice: <b>42101992863</b></li>
                                        <li>Amount: <b>&#8358;9,000</b></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- </form> -->
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 mb-5"
              >
                <div class="post-ad-submit-button">
                  <button class="btn btn-primary bt-block">Post Your Ad</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-4 col-md-12 mobile-hidden">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Benefits Of Premium Ad</h3>
            </div>
            <div class="card-body pb-2">
              <ul class="list-unstyled widget-spec vertical-scroll mb-0">
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium Ads Active
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads are displayed on top
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads will be Show in Google results
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium Ads Active
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads are displayed on top
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads will be Show in Google results
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium Ads Active
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads are displayed on top
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads will be Show in Google results
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium Ads Active
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads are displayed on top
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads will be Show in Google results
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium Ads Active
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads are displayed on top
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads will be Show in Google results
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Terms And Conditions</h3>
            </div>
            <div class="card-body">
              <ul class="list-unstyled widget-spec  mb-0">
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Money Not Refundable
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i>You
                  can renew your Premium ad after experted.
                </li>
                <li>
                  <i class="fa fa-check text-success" aria-hidden="true"></i
                  >Premium ads are active for depend on package.
                </li>
                <li class="ml-5 mb-0">
                  <a href="tips.html"> View more..</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card mb-0">
            <div class="card-header">
              <h3 class="card-title">Ads</h3>
            </div>
            <div class="card-body">
              <div class="ads">
                <img src="../../assets/images/gloads.jpg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/Section-->
</template>
<script>
/* eslint-disable no-undef */
// require("../../assets/plugins/fancyuploder/fancy_fileupload.css");
// require("../../assets/css/style.css");

import VueUploadMultipleImage from "vue-upload-multiple-image";
import axios from "axios";

export default {
  name: "postad",
  data() {
    return {
      selectedImages: [],
      errors: null,
      selected: 1
    };
  },
  props: {
    categories: [Object, Array],
    ads: [Object, Array],
    images: Array,
    items: [Array, Object]
  },
  components: {
    VueUploadMultipleImage
  },
  mounted() {
    let extScript = document.createElement("script");
    // extScript.setAttribute('src', 'https://code.jquery.com/jquery-latest.min.js')
    extScript.setAttribute(
      "src",
      "../../assets/plugins/fancyuploder/jquery.ui.widget.js"
    );
    extScript.setAttribute(
      "src",
      "../../assets/plugins/fancyuploder/jquery.fileupload.js"
    );
    extScript.setAttribute(
      "src",
      "../../assets/plugins/fancyuploder/jquery.iframe-transport.js"
    );
    extScript.setAttribute(
      "src",
      "../../assets/plugins/fancyuploder/jquery.fancy-fileupload.js"
    );
    extScript.setAttribute(
      "src",
      "../../assets/plugins/fancyuploder/fancy-uploader.js"
    );
    document.head.appendChild(extScript);
  },
  methods: {
   
    selectImageSuccess(formData, index, fileList) {
      // console.log("data", formData, index, fileList);
      // store images to data object
      this.selectedImages = fileList;
    },
    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      var r = confirm("remove image");
      if (r == true) {
        done();
      } else {
        return;
      }
    },
    // editImage(formData, index, fileList) {
    //   // console.log("edit data", formData, index, fileList);
    // },
    // dataChange(data) {
    //   console.log(data);
    // },
    processForm() {
      // upload photo
<<<<<<< HEAD
      const images = this.selectedImages;
      for (let image of images) {
        const form = new FormData();
        form.append("file", image.path);
        form.append("upload_preset", "khieqxha");
        form.append("api_key", "291355523372857");
        axios
          .post("https://api.cloudinary.com/v1_1/coderoute/image/upload", form)
          .then(response => {
            this.ads.photos.push(response.data.secure_url);
          })
          .catch(error => {
            this.errors = error.response.data;
          });
      }
      // send event to create ads
      // console.log("before create ads");
      setTimeout(this.$emit("create-ads"), 300000);
=======
      return new Promise((resolve, reject) => {
        const images = this.selectedImages;
        for (let image of images) {
          const form = new FormData();
          form.append("file", image.path);
          form.append("upload_preset", "khieqxha");
          form.append("api_key", "291355523372857");
          axios
            .post("https://api.cloudinary.com/v1_1/coderoute/image/upload", form)
            .then(response => {
              this.ads.photos.push(response.data.secure_url);
            })
            .catch(error => {
              this.errors = error.response.data;
              reject(this.error)
            });
        }
        // send event to create ads
        // console.log("before create ads");
        // setTimeout(this.$emit("create-ads"), 360000);
        resolve(this.$emit("create-ads"));
      })
>>>>>>> 8d2e3f59351aa87496c7d3168b3adafb45d095bb
    },
    addPayment(value) {
      this.ads.paymentType = value;
    },
    sync() {
      $("#demo").FancyFileUpload({
        params: {
          action: "fileuploader"
        },
        maxfilesize: 1000000
      });
      $(".vertical-scroll").bootstrapNews({
        newsPerPage: 4,
        autoplay: true,
        pauseOnHover: true,
        navigation: false,
        direction: "down",
        newsTickerInterval: 2500,
        onToDo: function() {
          //console.log(this);
        }
      });
      $(".vertical-scroll1").bootstrapNews({
        newsPerPage: 2,
        autoplay: true,
        pauseOnHover: true,
        navigation: false,
        direction: "down",
        newsTickerInterval: 2500,
        onToDo: function() {
          //console.log(this);
        }
      });
    }
  },
  watch: {
    $route: "sync"
  },
  created() {
    this.sync();
  }
};
</script>

<style>
@media (max-width: 768px) {
  .panel-tabs > li {
    width: 100%;
  }
  .panel-tabs > li > a {
    width: 100%;
    display: inline-block;
  }
}

.tab-pane .form-group,
.tab-pane .cash-info {
  margin-top: 20px;
}

.mobile-hidden {
  display: none;
}
.hidden-desktop {
  display: block;
}

@media (min-width: 769px) {
  .mobile-hidden {
    display: block;
  }
  .hidden-desktop {
    display: none !important;
  }
}
@keyframes click-wave {
  0% {
    height: 40px;
    width: 40px;
    opacity: 0.35;
    position: relative;
  }
  100% {
    height: 200px;
    width: 200px;
    margin-left: -80px;
    margin-top: -80px;
    opacity: 0;
  }
}

.option-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  top: 13.33333px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 40px;
  transition: all 0.15s ease-out 0s;
  background: #cbd1d8;
  border: none; 
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;
}
.option-input:hover {
  background: #9faab7;
}
.option-input:checked {
  background: #4caf50;
}
.option-input:checked::before {
  height: 40px;
  width: 40px;
  position: absolute;
  content: "✔";
  display: inline-block;
  font-size: 26.66667px;
  text-align: center;
  line-height: 40px;
}
.option-input:checked::after {
  -webkit-animation: click-wave 0.65s;
  -moz-animation: click-wave 0.65s;
  animation: click-wave 0.65s;
  background: #4caf50;
  content: "";
  display: block;
  position: relative;
  z-index: 100;
}
.option-input.radio {
  border-radius: 50%;
}
.option-input.radio::after {
  border-radius: 50%;
}
</style>
