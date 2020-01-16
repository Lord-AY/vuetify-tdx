<template>
  <div class="editprofilecarspot">
    <!--/Horizontal-main -->
    <div id="wrapper" style="height: 100vh;">
      <!-- LEFT SIDEBAR -->
      <dsidebar></dsidebar>
      <!-- END LEFT SIDEBAR -->

      <!-- MAIN -->
      <div class="main dashboard-main">
        <!-- MAIN CONTENT -->
        <div class="main-content">
          <div class="container-fluid">
            <!-- OVERVIEW -->
            <div class="row">
              <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div class="panel panel-headline">
                  <div class="panel-heading">
                    <h3 class="panel-title">Edit Profile</h3>
                    <!-- <a href="#" data-target="#myModal" data-toggle="modal">Change Password</a> -->
                    <p class="panel-subtitle">Last logged in 2 hours Ago</p>
                  </div>
                  <div class="row">
                    <div
                      class="panel-body col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-sm-12 col-xs-12"
                      style="padding: 30px;"
                    >
                      <div class="row">
                        <div
                          class="col-md-12 col-lg-12 col-sm-12 col-xs-12 profile-summary-dashboard"
                        >
                          <div class="col-md-12 col-lg-6 col-sm-12 col-xs-12">
                            <div
                              class="panel panel-dashbaord-edit panel-headline"
                            >
                              <div class="profile-card">
                                <div class="profile-card-body">
                                  <div class="contact-box">
                                    <div
                                      class="contact-box-bg"
                                      id="store-image"
                                    ></div>
                                    <div class="contact-img">
                                      <a
                                        href="https://carspot.scriptsbundle.com/individual/oyink7/"
                                      >
                                        <img
                                          src="https://carspot.scriptsbundle.com/wp-content/uploads/2018/04/6.png"
                                          class="img-responsive"
                                          id="profile-image"
                                          alt="Profile Picture"
                                        />
                                      </a>
                                    </div>
                                    <div class="contact-caption">
                                      <h4>
                                        {{ user.firstname }} {{ user.lastname }}
                                      </h4>

                                      <div class="clearfix"></div>
                                      <div class="upload-btn-wrapper">
                                        <button
                                          class="btn btn-success-outline"
                                          v-show="current"
                                          @click="current = !current"
                                        >
                                          Upload Photo
                                        </button>
                                      </div>
                                    </div>
                                    <div class="" v-show="!current">
                                      <div class="custom-file">
                                        <input
                                          type="file"
                                          class="custom-file-input"
                                          id="customFile"
                                          @change="selectedFile"
                                        />
                                        <label
                                          class="custom-file-label"
                                          for="customFile"
                                          >Choose file</label
                                        >
                                      </div>
                                      <button
                                        class="btn btn-success btn-sm mt-5"
                                        v-show="!current"
                                        @click="onUpload(user)"
                                      >
                                        Upload Image
                                      </button>
                                      <button
                                        class="btn btn-success btn-sm mt-5 ml-5"
                                        v-show="!current"
                                        @click="current = !current"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12 col-lg-6 col-sm-12 col-xs-12">
                            <div
                              class="panel panel-dashbaord-edit panel-headline"
                              style="margin-bottom: 0px;"
                            >
                              <div class="panel-heading">
                                <h3 class="panel-title">Profile Details</h3>
                              </div>
                              <div
                                class="panel-body"
                                style="padding-bottom: 0px;"
                              >
                                <ul class="profile-details">
                                  <li>
                                    <i class="la la-user"></i>
                                    <div class="profile-meta">
                                      <h6>Full Name</h6>
                                      <span
                                        >{{ user.firstname }}
                                        {{ user.lastname }}</span
                                      >
                                    </div>
                                  </li>
                                  <li>
                                    <i class="la la-envelope"></i>
                                    <div class="profile-meta">
                                      <h6>Email</h6>
                                      <span>{{ user.email }}</span>
                                    </div>
                                  </li>
                                  <li>
                                    <i class="la la-mobile-phone"></i>
                                    <div class="profile-meta">
                                      <h6>Phone number</h6>
                                      <span>{{ user.phone }}</span>
                                    </div>
                                  </li>
                                  <li>
                                    <i class="la la-users"></i>
                                    <div class="profile-meta">
                                      <h6>Account Type</h6>
                                      <span>individual</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-md-12 col-lg-12 col-sm-12 col-xs-12"
                          style="margin-top: 24px;"
                        >
                          <div class="edit-profile-form">
                            <form
                              id="sb_update_profile"
                              class="sb_update_profile"
                              @submit.prevent="updateUser(user)"
                            >
                              <div class="row">
                                <div
                                  class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                                >
                                  <div class="form-group">
                                    <label
                                      class="control-label control-label-dashboard"
                                      >First Name</label
                                    >
                                    <input
                                      class="form-control form-control-dashboard"
                                      type="text"
                                      name="first_name"
                                      :value="user.firstname"
                                      :readonly="loading"
                                      :data-pt-title="
                                        loading
                                          ? 'You can not edit First Name'
                                          : 'First Name'
                                      "
                                      data-pt-position="top"
                                      data-pt-scheme="dark-transparent"
                                      data-pt-size="small"
                                    />
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                                >
                                  <div class="form-group">
                                    <label
                                      class="control-label control-label-dashboard protip"
                                      >Last Name</label
                                    >
                                    <input
                                      class="protip form-control form-control-dashboard"
                                      type="text"
                                      name="last_name"
                                      :value="user.lastname"
                                      :readonly="loading"
                                      :data-pt-title="
                                        loading
                                          ? 'You can not edit Last Name'
                                          : 'Last Name'
                                      "
                                      data-pt-position="top"
                                      data-pt-scheme="dark-transparent"
                                      data-pt-size="small"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div
                                  class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                                >
                                  <div class="form-group">
                                    <label
                                      class="control-label control-label-dashboard protip"
                                      >Email Address</label
                                    >
                                    <input
                                      class="protip form-control form-control-dashboard"
                                      type="email"
                                      name="user_email"
                                      :value="user.email"
                                      :readonly="loading"
                                      :data-pt-title="
                                        loading
                                          ? 'You can not edit email address'
                                          : 'email'
                                      "
                                      data-pt-position="top"
                                      data-pt-scheme="dark-transparent"
                                      data-pt-size="small"
                                    />
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                                >
                                  <div class="form-group">
                                    <label
                                      class="control-label control-label-dashboard"
                                      >Mobile No</label
                                    >
                                    <input
                                      class="form-control form-control-dashboard"
                                      data-parsley-type="number"
                                      type="text"
                                      name="sb_user_contact"
                                      :value="user.phone"
                                      :readonly="loading"
                                      :data-pt-title="
                                        loading
                                          ? 'You can not edit Phone Number'
                                          : 'Phone Number'
                                      "
                                      data-pt-position="top"
                                      data-pt-scheme="dark-transparent"
                                      data-pt-size="small"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-md-12 col-lg-12 col-xs-12 col-sm-12"
                              >
                                <div class="form-group">
                                  <label
                                    class="control-label control-label-dashboard"
                                    >Address</label
                                  >
                                  <input
                                    class="form-control form-control-dashboard"
                                    data-parsley-type="number"
                                    type="text"
                                    name="sb_user_contact"
                                    :value="user.address"
                                    :readonly="loading"
                                    :data-pt-title="
                                      loading
                                        ? 'You can not edit Address'
                                        : 'Shipping address or contact address'
                                    "
                                    data-pt-position="top"
                                    data-pt-scheme="dark-transparent"
                                    data-pt-size="small"
                                  />
                                </div>
                              </div>

                              <div class="row">
                                <!-- <div
                                  class="col-md-6 col-lg-6 col-xs-12 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"
                                > -->
                                <div
                                  class="col-md-6 offset-md-9 col-lg-6 offset-lg-9 col-sm-12 col-xs-12"
                                >
                                  <div class="form-group">
                                    <span
                                      class="tooltip-disabled"
                                      data-toggle="tooltip"
                                      title="Disabled in demo"
                                    >
                                      <input
                                        class="btn btn-theme"
                                        type="submit"
                                        value="Update profile"
                                        style="border-radius: 8px;"
                                      />
                                    </span>
                                  </div>
                                </div>
                                <!-- <div
                                  class="col-md-6 col-lg-6 col-xs-12 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6"
                                ></div> -->
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END MAIN CONTENT -->
      </div>
      <!-- END MAIN -->
      <div class="clearfix"></div>
    </div>

    <!--Sticky header logic-->
    <input type="hidden" id="header_style" value="transparent" />
    <input type="hidden" id="is_sticky_header" value="0" />
    <input
      type="hidden"
      id="sticky_sb_logo_url"
      value="https://carspot.scriptsbundle.com/wp-content/uploads/2017/06/logo-2.png"
    />
    <input
      type="hidden"
      id="static_sb_logo_url"
      value="https://carspot.scriptsbundle.com/wp-content/uploads/2018/04/logo-1.png"
    />
    <input type="hidden" id="msg_notification_on" value="1" />
    <input type="hidden" id="msg_notification_time" value="1000000000" />
    <input type="hidden" id="is_unread_msgs" value="0" />
    <a href="#0" class="cd-top">Top</a>
    <!-- Email verification and reset password -->
  </div>
</template>
<script>
require("../../public/assets/skins/color-skins/color15.css");
require("../../public/assets/plugins/horizontal-menu/horizontal.css");
require("../../public/assets/carspot-css/wp-includes/css/dist/block-library/style.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/stylea1ec.css");
require("../../public/assets/carspot-css/wp-content/plugins/contact-form-7/includes/css/styles58e0.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreenf43b.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet-search.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/style4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/video_player4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/bootstrap4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/star-rating4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/jquery-confirm4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/datepicker.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/et-line-fonts4d2c.css");
require("../../public/assets/carspot-css/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesome.min52c7.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/line-awesome.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/animate.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon24d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom_icons4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/select2.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/nouislider.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.carousel4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.theme4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/toastr.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/woocommerce4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/skins/minimal/minimal4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/jquery.fancybox.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/slider4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/carspot-menu4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/responsive-media4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css");
require("../../public/assets/carspot-css/wp-content/plugins/add-to-any/addtoany.min9be6.css");
require("../../public/assets/carspot-css/wp-includes/css/dist/block-library/style.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/stylea1ec.css");
require("../../public/assets/carspot-css/wp-content/plugins/contact-form-7/includes/css/styles58e0.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreenf43b.css");
require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/star-rating4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/style.css");
require("../../public/assets/css/user-dashboard/protip.css");

require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/jquery-confirm4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet-search.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/style4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/video_player4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/bootstrap4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/star-rating4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/jquery-confirm4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/datepicker.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/et-line-fonts4d2c.css");
require("../../public/assets/carspot-css/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesome.min52c7.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/line-awesome.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/animate.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon24d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom_icons4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/select2.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/nouislider.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.carousel4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.theme4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/toastr.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/woocommerce4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/skins/minimal/minimal4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/jquery.fancybox.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/slider4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/carspot-menu4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/responsive-media4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.carousel4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.theme4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/toastr.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/woocommerce4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/skins/minimal/minimal4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/jquery.fancybox.min4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/slider4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/carspot-menu4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/responsive-media4d2c.css");
require("../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css");
require("../../public/assets/carspot-css/wp-content/plugins/add-to-any/addtoany.min9be6.css");
require("../../public/assets/skins/color-skins/color15.css");
require("../../public/assets/plugins/horizontal-menu/horizontal.css");
require("../../public/assets/css/components.css");

import dsidebar from "@/components/Dsidebar";
import Vue from "vue";
import FileUpload from "v-file-upload";
import { mapState, mapActions, mapGetters } from "vuex";
Vue.use(FileUpload);
// import dheader from "@/components/Dheader";
export default {
  name: "editProf",
  data() {
    return {
      current: true,
      imageFile: null
    };
  },
  components: {
    dsidebar
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapGetters("user", ["getUpdateErrors", "getUpdateSuccess"]),
    loading() {
      return this.$store.getters["auth/loading"];
    }
  },
  methods: {
    ...mapActions("user", ["updateUser", "uploadProfileImage"]),
    selectedFile(event) {
      this.imageFile = event.target.files[0];
    },
    onUpload(user) {
      const payload = {
        user,
        image: this.selectedFile
      };
      this.uploadProfileImage(payload);
    },
    showLoadingAlert() {
      this.$notify({
        group: "notify",
        type: "success",
        title: "LOADING...",
        text: "Sending your updates...",
        position: "top right",
        duration: 10000,
        speed: 1000
      });
    },
    showErrorMsg(errorMsg) {
      this.$notify({
        group: "errors",
        type: "error",
        title: "Error Message",
        width: "100%",
        text: errorMsg,
        classes: "error",
        duration: 10000,
        speed: 1000,
        position: "top right"
      });
    },
    showSuccess(successMsg) {
      this.$notify({
        group: "notify",
        type: "success",
        title: "Success",
        text: successMsg,
        position: "top right",
        duration: 10000,
        speed: 1000
      });
    }
  },
  watch: {
    $route: "sync",
      loading: {
      handler: function(loading) {
        if (loading) {
          this.showLoadingAlert()
          // console.log(this.isLoading);
        }
        // console.log(this.isLoading);
      }
    },
   getUpdateErrors: {
      handler: function(errors) {
        if(errors) {
        this.showErrorMsg(errors);
        console.log("errors just changed");
      }
      }
    },
    getUpdateSuccess: {
      handler: function(success) {
        if(success) {
        this.showSuccess(success);
        console.log("success just changed");
      }
      }
    }
  }
};
</script>

<style>
.panel-body-settings {
  width: auto !important;
}
@media (max-width: 1023px) and (min-width: 768px) {
  .dashboard-main .profile-details li i {
    display: inline-block;
  }
}
</style>
