/* eslint-disable vue/no-parsing-error */ /* eslint-disable
vue/no-parsing-error*/
<template>
  <!--Section-->
  <section class="sptb" style="padding-top: 30px;">
    <Loading
      :active.sync="isLoading"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    ></Loading>
    <!-- <div class="container" style="padding-top: 70px;"> -->
    <div class="container">
      <div class="row ">
        <div class="col-lg-8 col-md-12 col-md-12">
            <form
              action=""
              class="form-horizontal"
              @submit.prevent="processForm"
              novalidate
            >
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
                      <div class="col-md-12  col-sm-12 col-lg-12 ">
                        <!-- Ad Details -->
                        <div class="row">
                          <div class="col-md-12">
                            <div v-if="errors" class="">
                              <div
                                class="alert alert-danger alert-dismissible fade show"
                              >
                                <strong>Error!</strong>
                                {{ errors }}
                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="alert"
                                >
                                  &times;
                                </button>
                              </div>
                            </div>
                            <div v-if="dbErrors && dbErrors.adType" class="">
                              <div
                                class="alert alert-danger alert-dismissible fade show"
                              >
                                <strong>Error!</strong>
                                {{ dbErrors.adType }}
                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="alert"
                                >
                                  &times;
                                </button>
                              </div>
                            </div>
                            <div class="post-ad-content">
                              <!-- <div class="col-md-12 col-sm-12 col-lg-12"> -->
                              <!-- AD details -->
                              <div class="ad-information " style="padding: 0px 15px;">
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
                                        :class="
                                          dbErrors && dbErrors.name
                                            ? 'is-invalid'
                                            : ''
                                        "
                                        placeholder="Ad title"
                                        v-model="ads.name"
                                        required
                                      />
                                  </div>
                                </div>
                              </div>
                              <div class="row form-group-tx form-group">
                                <div class="col-md-6">
                                  <div class="">
                                    <label class="form-label text-dark"
                                      >Category</label
                                    >
                                    <select
                                      class="form-control custom-select"
                                      @change="sendFetchSubCategories($event)"
                                      :class="
                                        dbErrors && dbErrors.cid
                                          ? 'is-invalid'
                                          : ''
                                      "
                                      v-model="tempdata"
                                      required
                                    >
                                      <i
                                        class="fa fa-sort"
                                        aria-hidden="true"
                                      ></i>
                                      <option value=""
                                        >-- Select Category --</option
                                      >
                                      <option
                                        v-bind:value="{ id: category.id, text: category.name }"
                                        v-for="category in categories"
                                        :key="category.id"
                                        >{{ category.name }}</option
                                      >
                                    </select>
                                  </div>
                                </div>
                                <div class="col-md-6"></div>
                              </div>
                              <transition name="isHidden">
                                <div
                                  class="row form-group-tx form-group"
                                  v-show="currentSubCategory.length > 0"
                                >
                                  <div class="col-md-6">
                                    <div class="">
                                      <label class="form-label text-dark"
                                        >Sub Category</label
                                      >
                                      <select
                                        class="form-control custom-select"
                                        :class="
                                          dbErrors && dbErrors.cid
                                            ? 'is-invalid'
                                            : ''
                                        "
                                        v-model="ads.subCatId"
                                        required
                                      >
                                        <option value=""
                                          >-- Select Sub Category --</option
                                        >
                                        <option
                                          v-for="subcategory in currentSubCategory"
                                          :key="subcategory.id"
                                          :value="subcategory.id"
                                          >{{ subcategory.name }}</option
                                        >
                                      </select>
                                    </div>
                                  </div>
                                  <div class="col-md-6"></div>
                                </div>
                              </transition>
                              <!-- Extra fields for category-->
                              <!-- {{ categoryInputFields }} -->
                              <div
                                class="row"
                                v-show="
                                  categoryFields.length > 0 &&
                                    categoryFields[0] !== ''
                                "
                              >
                                <div
                                  class="col-sm-12 col-lg-3 col-md-6"
                                  v-for="(field, index) in categoryFields"
                                  :key="index"
                                >
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
                                        v-model="
                                          ads.checkFields['check_' + index]
                                        "
                                      />
                                      <span
                                        class="custom-control-label text-dark pl-2"
                                        style="font-weight: 500"
                                        >{{ field }}</span
                                      >
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="row form-group-tx form-group"
                                v-show="
                                  categoryInputFields.length > 0 &&
                                    categoryInputFields[0] !== ''
                                "
                              >
                                <div
                                  class="col-md-12 col-sm-12 col-lg-12"
                                  v-for="(field,
                                  index) in categoryInputFields"
                                  :key="index"
                                >
                                  <label class="form-label text-dark">{{
                                    field
                                  }}</label>
                                  <div class="radio">
                                    <input
                                      type="text"
                                      class="form-control post-ad-input"
                                      placeholder="Ad title"
                                      v-model="
                                        ads.inputFields['field_' + index]
                                      "
                                      required
                                    />
                                  </div>
                                </div>
                              </div>

                              <!-- Extra fields for category-->
                              <div class="row form-group-tx form-group">
                                <div class="col-md-6"></div>
                              </div>
                              <div class="row form-group-tx form-group">
                                <div class="col-md-12 col-sm-12 col-lg-12">
                                  <label class="form-label text-dark"
                                    >Description</label
                                  >
                                  <textarea
                                    class="form-control"
                                    :class="
                                      dbErrors && dbErrors.description
                                        ? 'is-invalid'
                                        : ''
                                    "
                                    name="example-textarea-input"
                                    rows="4"
                                    placeholder="Write a short description about the item"
                                    style="padding-top: 10px"
                                    v-model="ads.description"
                                    required
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
                                      :class="
                                        dbErrors && dbErrors.amount
                                          ? 'is-invalid'
                                          : ''
                                      "
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
                                        style="font-weight: 500;"
                                        >Negotiable</span
                                      >
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="row form-group-tx form-group">
                                <div class="col-md-12 col-sm-12 col-lg-12">
                                  <label class="form-label text-dark"
                                    >Address</label
                                  >
                                  <textarea
                                    class="form-control"
                                    :class="
                                      dbErrors && dbErrors.description
                                        ? 'is-invalid'
                                        : ''
                                    "
                                    name="example-textarea-input"
                                    rows="4"
                                    placeholder="Write a short description about the item"
                                    style="padding-top: 10px"
                                    v-model="ads.address"
                                    required
                                  ></textarea>
                                </div>
                              </div>
                              <div class="row form-group-tx form-group">
                                <div class="col-md-12">
                                  <div
                                    class="p-2 border upload-image-box mb-4 form-group"
                                    style="border-radius: 6px!important"
                                  >
                                    <label for="">Upload images</label>
                                    <p>
                                      Ads with photo attracts more customers.
                                      Formats accepted are .jpg, .png and .gif.
                                      Maximum size for uploading files is 5 MB.
                                      Add 1 photo or more for this category.
                                    </p>
                                    <vue-upload-multiple-image
                                      @upload-success="selectImageSuccess"
                                      @before-remove="beforeRemove"
                                      :maxImage="7"
                                      :data-images="images"
                                      dragText="Images must not exceed 2mb for each"
                                      browseText="Browse image"
                                      primaryText="Default Image"
                                      markIsPrimaryText="slide images"
                                      popupText="This image will be used as the default display image, when showing your ads"
                                      required
                                    ></vue-upload-multiple-image>
                                    <p style="margin-top: 16px;">
                                      <b>Note:</b> The first photo is used as
                                      the main photo that the customers see.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <!-- </div> -->
                            </div>
                          </div>
                        </div>
                        <!-- Personal Information -->
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
                                      src="@/assets/images/ad-post.svg"
                                      style="width: 32px;"
                                    />
                                    Ad Post Package
                                  </div>
                                </div>
                                <p class="explanatory-text">
                                  Boosted ads help sellers promote their product
                                  or service by getting their ads more
                                  visibility with more buyers and sell what they
                                  want faster.
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
                                            v-model="adType"
                                            value="1"
                                            checked=""
                                          />
                                          <span class="custom-control-label">
                                            <b>Regular List</b>
                                            <span
                                              class="price-tag-regular-packages"
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
                                            v-model="adType"
                                            value="2"
                                          />
                                          <span class="custom-control-label">
                                            <b>Urgent Ad</b>
                                            <span
                                              class="price-tag-regular-packages"
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
                                            v-model="adType"
                                            value="3"
                                          />
                                          <span class="custom-control-label">
                                            <b>Top Ad</b>
                                            <span
                                              class="price-tag-regular-packages"
                                              style="float: right; font-size: 18px;"
                                              >&#8358; 1000</span
                                            >
                                          </span>
                                        </label>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="link-to-senior-ads">
                                  <span
                                    class="explanatory-text"
                                    style="display:inline-block;"
                                    >Make your ad PREMIUM
                                  </span>
                                  <div
                                    class="cusbutton"
                                    href=""
                                    style="display:inline-block; color: #000; margin: 12px 8px; border-bottom: 1px solid #000;"
                                    v-on:click="isHidden = !isHidden"
                                  >
                                    Click here
                                  </div>
                                </div>
                                <transition name="isHidden">
                                  <div
                                    class="row"
                                    style="margin-top: 20px;"
                                    v-if="isHidden"
                                  >
                                    <div
                                      class="col-lg-4 col-md-6 col-sm-12 top-notch-ad-package-gold"
                                    >
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
                                              <i
                                                class="fa fa-check-circle-o"
                                              ></i>
                                              30 days ad boost
                                            </li>
                                            <li>
                                              <i
                                                class="fa fa-check-circle-o"
                                              ></i>
                                              30 days ad boost
                                            </li>
                                            <li>
                                              <i
                                                class="fa fa-check-circle-o"
                                              ></i>
                                              30 days ad boost
                                            </li>
                                            <li>
                                              <i
                                                class="fa fa-check-circle-o"
                                              ></i>
                                              30 days ad boost
                                            </li>
                                          </ul>
                                        </div>
                                        <div class="select-senior-ad">
                                          <button
                                            class="btn btn-block btn-primary"
                                            style="background-color: #f7dbb4; border-color: #f7dbb4; color: #D37E04;"
                                            @click.prevent="
                                              setPayment('4', 3000)
                                            "
                                          >
                                            Select
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="col-lg-4 col-md-6 col-sm-12 top-notch-ad-package-premium"
                                    >
                                      <div class="senior-ads">
                                        <div
                                          class="senior-ads-header premium"
                                          style="background-color: #27c781;"
                                        >
                                          <!-- <img src="@/assets/images/ad-premium.svg " width="24px"> -->
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
                                              <i
                                                class="fa fa-check-circle-o"
                                              ></i>
                                              30 days ad boost
                                            </li>
                                            <li>
                                              <i
                                                class="fa fa-check-circle-o"
                                              ></i>
                                              30 days ad boost
                                            </li>
                                            <li>
                                              <i
                                                class="fa fa-check-circle-o"
                                              ></i>
                                              30 days ad boost
                                            </li>
                                            <li>
                                              <i
                                                class="fa fa-check-circle-o"
                                              ></i>
                                              30 days ad boost
                                            </li>
                                          </ul>
                                        </div>
                                        <div class="select-senior-ad">
                                          <button
                                            class="btn btn-block btn-primary"
                                            style="background-color: rgba(39, 199, 129, 0.3); border-color: rgba(39, 199, 129, 0.3); color: rgb(21, 152, 95);"
                                            @click.prevent="
                                              setPayment('5', 5000)
                                            "
                                          >
                                            Select
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="col-lg-4 col-md-6 col-sm-12 top-notch-ad-package-hot"
                                    >
                                      <div class="senior-ads">
                                        <div
                                          class="senior-ads-header hot"
                                          style="background-color: #4CAF50;"
                                        >
                                          <!-- <img src="@/assets/images/ad-premium.svg " width="24px"> -->
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
                                              <i
                                                class="fa fa-check-circle-o"
                                              ></i>
                                              30 days ad boost
                                            </li>
                                            <li>
                                              <i
                                                class="fa fa-check-circle-o"
                                              ></i>
                                              30 days ad boost
                                            </li>
                                            <li>
                                              <i
                                                class="fa fa-check-circle-o"
                                              ></i>
                                              30 days ad boost
                                            </li>
                                            <li>
                                              <i
                                                class="fa fa-check-circle-o"
                                              ></i>
                                              30 days ad boost
                                            </li>
                                          </ul>
                                        </div>
                                        <div class="select-senior-ad">
                                          <button
                                            class="btn btn-block btn-primary"
                                            style="background-color: rgb(168, 243, 171); border-color: rgb(168, 243, 171); color: rgb(76, 175, 80);"
                                            @click.prevent="
                                              setPayment('6', 9000)
                                            "
                                          >
                                            Select
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row total-pricing">
                                      <div class="total-pricing-sub-div">
                                        <p>
                                          <i>
                                            Total: &#8358; {{ adAmount }}.00</i
                                          >
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </transition>
                              </div>
                              <!-- </form> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <transition name="isHidden">
                  <div
                    class="col-sm-12 col-md-12 col-lg-12"
                    v-show="adAmount !== 0"
                  >
                    <div class="form-box">
                      <div class="form-box-title">
                        <span style="font-size: 18px; margin-left: 10px;"
                          >Payments</span
                        >
                      </div>
                      <!-- <div class="row">
                  <div class="col-md-12">
                    <div class="row"> -->
                      <div class="card-body">
                        <div class="tab-content card-body border mb-0 b-0">
                          <div class="panel panel-payment panel-primary">
                            <div
                              class=" tab-menu-heading border-0 pl-0 pr-0 pt-0"
                            >
                              <div class="tabs-menu1 ">
                                <!-- Tabs -->
                                <ul class="nav panel-tabs">
                                  <li>
                                    <div
                                      v-bind:class="{ active: tab1 }"
                                      data-toggle="tab"
                                      @click.prevent="addPayment(1)"
                                      class="payment-tab"
                                    >
                                      <img
                                        src="@/assets/images/wallet.svg"
                                        style="margin-top: -4px min-width:20px; height:20px"
                                        alt=""
                                        srcset=""
                                      />
                                      Wallet
                                    </div>
                                  </li>
                                  <li>
                                    <div
                                      v-bind:class="{ active: tab2 }"
                                      data-toggle="tab"
                                      @click.prevent="addPayment(2)"
                                      class="payment-tab"
                                    >
                                      <img
                                        src="@/assets/images/master_card.png"
                                        style="margin-top: -4px min-width:20px; height:20px"
                                        alt=""
                                        srcset=""
                                      />
                                      Credit/ Debit Card
                                    </div>
                                  </li>
                                  <li>
                                    <div
                                      v-bind:class="{ active: tab3 }"
                                      data-toggle="tab"
                                      @click.prevent="addPayment(3)"
                                      class="payment-tab"
                                    >
                                      <i class="fa fa-university"></i> Cash
                                    </div>
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
                                <div class="tab-pane active " v-if="tab1">
                                  <div class="form-group">
                                    <label class="form-label">Wallet ID</label>
                                    <div class="input-group">
                                      <input
                                        type="text"
                                        class="form-control post-ad-input"
                                        placeholder="userWallet"
                                        disabled
                                        v-model="userWallet"
                                        
                                      />
                                      <!-- <span class="input-group-append">
                                        <button class="btn btn-info" type="button"><i class="fa fa-cc-visa"></i> &nbsp; <i class="fa fa-cc-amex"></i> &nbsp;
                                        <i class="fa fa-cc-mastercard"></i></button>
                                      </span> -->
                                    </div>
                                  </div>
                                  
                                  <!-- <div class="form-group">
                                    <label class="form-label">Wallet PIN</label>
                                    <input
                                      type="number"
                                      class="form-control post-ad-input"
                                      id="name1"
                                      placeholder="PIN"
                                      name="wallet_pin"
                                    />
                                  </div> -->
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
                                          style="font-weight: 500!important"
                                          >I agree with the Terms and
                                          Conditions.</span
                                        >
                                      </label>
                                    </div>
                                  </div>
                                  <div class="pay-with-wallet">
                                    <button class="btn btn-theme">
                                      Pay with Wallet
                                    </button>
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
                                <div v-if="tab2">
                                  <div @click.prevent="validateForn">
                                  <paystack
                                    :amount="adAmount"
                                    :email="getUser.email"
                                    :paystackkey="paystackkey"
                                    :reference="reference"
                                    :callback="callback"
                                    :close="close"
                                    :embed="false"
                                    class="btn btn-success"
                                  >
                                    <i class="fas fa-money-bill-alt"></i>
                                    Make Payment With Paystack
                                  </paystack>
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
                                <div class="" v-if="tab3">
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
                                      <li>
                                        Amount: <b>&#8358;{{ adAmount }}.00</b>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- </div>
                    
                  </div>
                </div> -->
                    </div>
                  </div>
                </transition>
                <div
                  class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 mb-5"
                >
                  <div class="post-ad-submit-button">
                    <button
                      class="btn btn-primary bt-block"
                      v-show="adAmount == 0"
                    >
                      Post Your Ad
                    </button>
                  </div>
                </div>
              </div>
            </form>
        </div>
        <div class="col-lg-4 col-md-12 mobile-hidden">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title" style="font-size: 14px; font-weight: 600;" >Benefits Of Premium Ad</h3>
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
              <h3 class="card-title" style="font-size: 14px; font-weight: 600;">Terms And Conditions</h3>
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
              <h3 class="card-title" style="font-size: 14px; font-weight: 600;">Ads</h3>
            </div>
            <div class="card-body">
              <div class="ads">
                <img src="@/assets/images/gloads.jpg" alt="" srcset="" />
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
import VueUploadMultipleImage from "vue-upload-multiple-image";
import paystack from "vue-paystack";
import axios from "axios";
import ash from "lodash";
// Import component
import Loading from "vue-loading-overlay";
import { mapState, mapActions, mapGetters } from "vuex";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "postad",
  data() {
    return {
      selectedImages: [],
      paystackkey: "pk_live_468f27ac1557a8dcdae2301a2376464b8e31c0dd", //paystack public key
      // paystackkey: "pk_test_b9c529f4da742bbae2e19746ed9b9914f4e1f17c", //paystack public key
      email: null, // paystack customer email
      showPayment: false,
      adType: null,
      sample: null,
      disabledBtn: true,
      uploaded: [],
      errors: null,
      selected: 1,
      isLoading: false,
      fullPage: true,
      isHidden: false,
      selectedCategory: null,
      currentSubCategory: [],
      categoryFields: [],
      categoryInputFields: [],
      tab1: false,
      tab2: true,
      tab3: false,
      adAmount: 0,
      tempdata: null,
      payments: null,
      userWallet: null
    };
  },
  props: {
    categories: [Object, Array],
    ads: [Object, Array],
    images: Array,
    items: [Array, Object],
    itemExists: Boolean,
    loading: Boolean,
    dbErrors: [Object, Array, String],
    success: [Object, Array, String],
    subcategories: [Object, Array]
  },
  components: {
    VueUploadMultipleImage,
    Loading,
    paystack
  },
  mounted() {},
  computed: {
    ...mapGetters("product", ["getErrors", "fullCategories"]),
    ...mapGetters("auth", ["getUser"]),
    ...mapGetters("transactions", ["getwalletData"]),
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
  },
  methods: {
    ...mapActions("product", ["fetchSubCategories"]),
    ...mapActions("transactions", ["saveTransactions"]),
    validateForn() {
      // console.log("clicked a div");
    },
    callback: function(response) {
      this.payments = response;
      // let customdata = {
      //   source: "postad",
      //   amount: this.adAmount / 100
      // };
      // const transactionResponse = Object.assign(customdata, response);
      // this.saveTransactions(response, this.ads);
      // console.log(transactionResponse);
    },
    close: function() {
      // console.log("Payment closed");
    },
    addPayment(type) {
      // console.log(type);
      if (type == "1") {
        this.ads.paymentype = "1";
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = false;
      } else if (type == "2") {
        this.ads.paymentype = "2";
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = false;
      } else if (type == "3") {
        this.ads.paymentype = "3";
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = true;
      } else {
      }
    },
    selectImageSuccess(formData, index, fileList) {
      // console.log("data", formData, index, fileList);
      // store images to data object
      this.selectedImages = fileList;
    },
    sendFetchSubCategories(cid) {
      this.selectedCategory = this.tempdata.id;
      this.ads.cid = this.tempdata.id;
      this.ads.category = this.tempdata.text;
      // console.log(this.selectedCategory);
      const payload = {
        cid: cid.target.value
      };
      this.fetchSubCategories(payload);
      this.selectCategoryFields();
      // console.log(this.ads);
    },
    selectCategoryFields() {
      let categories = this.fullCategories;
      this.categoryFields = [];
      for (let i in categories) {
        // console.log("entered method");
        if (this.selectedCategory == categories[i].id) {
          const fieldsArr = ash.split(categories[i].checkFields, ",", 10);
          // console.log(fieldsArr);
          this.categoryFields = fieldsArr;
          // console.log(this.categoryFields);
        }
        if (this.selectedCategory == categories[i].id) {
          const fieldsArr = ash.split(categories[i].inputFields, ",", 10);
          // console.log(fieldsArr);
          this.categoryInputFields = fieldsArr;
          // console.log(this.categoryFields);
        }
      }
      let fields = this.categoryFields;
      for (let i in fields) {
        const concat = "check_" + i;
        this.ads.checkFields[concat] = false;
      }
      // console.log(this.ads.checkFields);
    },
    filterSubCategories(subcategories) {
      // console.log("Entered this function");
      this.currentSubCategory = [];
      // console.log(subcategories);
      for (let subcategory in subcategories) {
        if (
          Number(this.selectedCategory) == subcategories[subcategory].parent
        ) {
          // console.log(subcategories[subcategory]);
          this.currentSubCategory.push(subcategories[subcategory]);
        }
      }
    },
    beforeRemove(index, done, fileList) {
      // console.log("index", index, fileList);
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
      if (this.selectedImages.length < 1) {
        this.loading = false;
        this.errors = "Please select images for your ads.";
      } else {
        this.isLoading = true;
        // upload photo
        const images = this.selectedImages;
        for (let image of images) {
          const form = new FormData();
          form.append("file", image.path);
          form.append("upload_preset", "khieqxha");
          form.append("api_key", "291355523372857");
          axios
            .post(
              "https://api.cloudinary.com/v1_1/coderoute/image/upload/",
              form
            )
            .then(({ data }) => {
              // let new_url = ash.replace(data.secure_url, ".", "#");
              // let new_url_sec = ash.replace(new_url, ".", "#");
              // let new_url_secure = ash.replace(new_url_sec, ".", "#");
              this.uploaded.push(data.secure_url);
              // console.log(this.uploaded);
            })
            .catch(() => {
              this.isLoading = false;
              this.errors =
                "Network Error, Uploading your images, please try again";
            });
        }
      }
    },
     handlePostAds(paymentResponse) {
      // save transaction response
      //  let customdata = {
      //   source: "postad",
      //   amount: this.adAmount / 100
      // };
      paymentResponse.amount = this.adAmount /100;
      paymentResponse.source ='postad';
       this.saveTransactions(paymentResponse);
       this.processForm();
    },
    sendFormRequest(images) {
      // console.log("send form Function called");
      let selected = this.selectedImages;
      // check if uploaded images are equals to selected images
      if (selected.length == images.length) {
        // console.log("arrays are equal");
        this.$emit("create-ads", images);
      } else {
        // console.log("arrays not yet equal");
      }
    },
    show() {
      this.$notify({
        group: "notify",
        title: "Important message",
        text: "Hello user! This is a notification!"
      });
    },
    setPayment(value, price) {
      this.ads.adtype = value;
      this.adAmount = price * 100;
    },
    onCancel() {
      // console.log("User cancelled the loader.");
    },
    showError() {
      this.$notify({
        group: "errors",
        type: "error",
        title: "Error Creating Ads",
        width: "100%",
        text: this.getErrors,
        classes: "error",
        duration: 10000,
        speed: 1000,
        position: "top right"
      });
    },
      formErrors(errors) {
        for(let err in errors) {
          this.$notify({
        group: "errors",
        type: "error",
        title: "Form Error",
        width: "100%",
        text: err,
        classes: "error",
        duration: 10000,
        speed: 1000,
        position: "top right"
      });
        }
    },
    sync() {}
  },
  created() {
    this.sync();
    let as = this;
    setTimeout(function(){    
      as.userWallet = as.getwalletData.walletid; }, 300);
    // console.log(this.userWallet);
    this.ads.paymentype = "1";
  },
  watch: {
    $route: "sync",
    getwalletData: {
      handler: function(walletData) {
        // console.log(walletData);
          this.userWallet = this.getwalletData.walletid;
        }
    },
    uploaded: {
      handler: function(uploaded) {
        // console.log("uploaded watcher");
        this.sendFormRequest(uploaded);
      },
    },
    ads: {
        handler: function(ads) {
          // console.log("change happened");
          if (
            ads.title !== "" &&
            ads.cid !== "" &&
            ads.country !== "" &&
            ads.description !== "" &&
            ads.address !== "" &&
            ads.amount !== ""
          ) {
            this.disabledBtn = false;
          } else {
            this.disabledBtn = true;
          }
        }
      },
      payments: {
        handler: function(payments) {
          this.handlePostAds(payments);
        }
      },
    getErrors: {
      handler: function(errors) {
        if (errors === null || errors === undefined) {
          return;
        }
        this.showError(errors);
      }
    },
    errors: {
      handler: function(errors) {
        if (errors === null || errors === undefined) {
          return;
        }
        this.formErrors(errors);
      }
    },
    loading: {
      handler: function(loading) {
        if (loading) {
          this.show();
          this.isLoading = true;
        } else {
          this.isLoading = false;
        }
      }
    },
    subcategories: {
      handler: function(subcategories) {
        this.filterSubCategories(subcategories);
      }
    },
    adType: {
      handler: function(type) {
        if (type == 1) {
          this.setPayment(type, 0);
        } else if (type == 2) {
          this.setPayment(type, 500);
        } else if (type == 3) {
          this.setPayment(type, 1000);
        }
      }
    }
  }
};
</script>
<style>
.payment-tab {
  padding: 6px;
  margin-right: 8px;
}
.payment-tab:hover {
  cursor: pointer;
}

.pay-with-wallet .btn {
  color: #fff!important;
  font-weight: 600;
  border-radius: 6px;
  margin-top: 4px;
}

.payButton {
    background-color: #4caf50!important;
    border-color: #4caf50!important;
    border-radius: 6px!important;
}
.payButton:hover {
    background-color: #367e38!important;
    border-color: #367e38!important;
}

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
.top-notch-ad-package-gold {
  padding-right: 8px !important;
  padding-left: 0px !important;
}
.top-notch-ad-package-premium {
  padding: 0px 4px !important;
}
.top-notch-ad-package-hot {
  padding-right: 0px !important;
  padding-left: 8px !important;
}
.upload-image-box p {
  color: #232323;
}
.image-container {
  /* background-image: purple!important; */
  width: 100% !important;
  border: 2px dashed #4caf50 !important;
  background-color: #e8ebf3 !important;
  /* height: 100px!important; */
}
.image-container:hover {
  background-color: #fff !important;
}
select {
  padding: 0px 15px !important;
}
textarea {
  resize: none;
}
.total-pricing-sub-div i {
  font-size: 24px !important;
  color: #232323;
}
.card-body {
  padding: 1.5rem 1.5rem !important;
}
.panel-payment {
  padding-top: 20px !important;
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
.row.form-group-tx.form-group {
  margin-bottom: 1rem !important;
}
.price-tag-regular-packages {
  color: #777 !important;
  font-weight: 400 !important;
}
.cusbutton {
  cursor: pointer;
  position: relative;
}
.cusbutton .hover {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
}
.cusbutton:hover .hover {
  display: block;
}
.cusbutton:hover .original {
  display: none;
}
.isHidden-enter-active {
  animation: bounce-in 0.5s;
}
.isHidden-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
