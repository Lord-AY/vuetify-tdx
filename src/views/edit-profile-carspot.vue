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
                                        href="#"
                                      >
                                        <img
                                           :src="'https://www.tradexplora.com.ng/media/'+user.pictureUrl"
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
                              @submit.prevent="updateUserDetails"
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
                                      v-model="form.firstname"
                                      :placeholder="user.firstname"
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
                                      :placeholder="user.lastname"
                                      v-model="form.lastname"
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
                                      :placeholder="user.email"
                                      v-model="form.email"
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
                                      :placeholder="user.phone"
                                      v-model="form.phone"
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
                                    :placeholder="user.address"
                                    v-model="form.address"
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
                                <div
                                  class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                                >
                                  <div class="form-group">
                                    <label
                                      class="control-label control-label-dashboard"
                                      >City</label
                                    >
                                    <select
                                      class="form-control form-control-dashboard select2-show-search border-bottom-0 w-100 select2-show-search"
                                      data-placeholder="Select"
                                    >
                                      <optgroup label="Categories">
                                        <option>-- Select City --</option>
                                        <option value="1">Germany</option>
                                        <option value="2">USA</option>
                                        <option value="3">Canada</option>
                                        <option value="4">Usa</option>
                                        <option value="5">Afghanistan</option>
                                        <option value="6">Albania</option>
                                        <option value="7">China</option>
                                        <option value="8">Denmark</option>
                                        <option value="9">Finland</option>
                                        <option value="10">India</option>
                                        <option value="11">Kiribati</option>
                                        <option value="12">Kuwait</option>
                                        <option value="13">Mexico</option>
                                        <option value="14">Pakistan</option>
                                      </optgroup>
                                    </select>
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                                >
                                  <div class="form-group">
                                    <label
                                      class="control-label control-label-dashboard protip"
                                      >Country</label
                                    >
                                    <select
                                      class="form-control form-control-dashboard select2-show-search border-bottom-0 w-100 select2-show-search"
                                      data-placeholder="Select"
                                    >
                                      <optgroup label="Categories">
                                        <option>-- Select Country --</option>
                                        <option value="1">Germany</option>
                                        <option value="2">USA</option>
                                        <option value="3">Canada</option>
                                        <option value="4">Usa</option>
                                        <option value="5">Afghanistan</option>
                                        <option value="6">Albania</option>
                                        <option value="7">China</option>
                                        <option value="8">Denmark</option>
                                        <option value="9">Finland</option>
                                        <option value="10">India</option>
                                        <option value="11">Kiribati</option>
                                        <option value="12">Kuwait</option>
                                        <option value="13">Mexico</option>
                                        <option value="14">Pakistan</option>
                                      </optgroup>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div
                                  class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                                >
                                  <div class="form-group">
                                    <label
                                      class="control-label control-label-dashboard"
                                      >Facebook</label
                                    >
                                    <input
                                      class="form-control form-control-dashboard"
                                      type="text"
                                      name="sb_user_name"
                                      value="https://www.facebook.com/"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                                >
                                  <div class="form-group">
                                    <label
                                      class="control-label control-label-dashboard protip"
                                      >Twitter</label
                                    >
                                    <input
                                      class="protip form-control form-control-dashboard"
                                      type="email"
                                      name="user_email"
                                      value="https://www.twitter.com/"
                                      readonly=""
                                      data-pt-title=" You can not edit email address"
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
                                      class="control-label control-label-dashboard"
                                      >Whatsapp</label
                                    >
                                    <input
                                      class="form-control form-control-dashboard"
                                      type="text"
                                      name="sb_user_name"
                                      value="https://www.whatsapp.com/"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 col-lg-6 col-xs-12 col-sm-12"
                                >
                                  <div class="form-group">
                                    <label
                                      class="control-label control-label-dashboard protip"
                                      >Google</label
                                    >
                                    <input
                                      class="protip form-control form-control-dashboard"
                                      type="email"
                                      name="user_email"
                                      value="https://www.google.com/"
                                      readonly=""
                                      data-pt-title=" You can not edit email address"
                                      data-pt-position="top"
                                      data-pt-scheme="dark-transparent"
                                      data-pt-size="small"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6  col-xs-12 col-sm-6"></div>
                                <div class="col-md-6 col-sm-12 col-sm-6 ">
                                  <div class="form-group">
                                    <span
                                      class="tooltip-disabled pull-right"
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
      value=""
    />
    <input
      type="hidden"
      id="static_sb_logo_url"
      value=""
    />
    <input type="hidden" id="msg_notification_on" value="1" />
    <input type="hidden" id="msg_notification_time" value="1000000000" />
    <input type="hidden" id="is_unread_msgs" value="0" />
    <a href="#0" class="cd-top">Top</a>
    <!-- Email verification and reset password -->
  </div>
</template>
<style scoped>
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/style.css';
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css';
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/bcustom2.css';
</style>

<script>

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
      imageFile: null,
      form: {},
    };
  },
  components: {
    dsidebar
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapGetters("auth", ["getUser"]),
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
        image: this.selectedFile
      };
      this.uploadProfileImage(payload);
    },
    updateUserDetails() {
      const payload = {
        data: this.form,
      };
      this.updateUser(payload);
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
          this.showLoadingAlert();
          // console.log(this.isLoading);
        }
        // console.log(this.isLoading);
      }
    },
    getUpdateErrors: {
      handler: function(errors) {
        if (errors) {
          this.showErrorMsg(errors);
          // console.log("errors just changed");
        }
      }
    },
    getUpdateSuccess: {
      handler: function(success) {
        if (success) {
          this.showSuccess(success);
          // console.log("success just changed");
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
textarea {
  resize: none;
}
.form-control:focus {
  color: #232323!important;
}
input[data-value=""] {
  color: #232323!important;
}
.tooltip-disabled {
  padding-right: 0px !important;
}
@media (max-width: 1023px) and (min-width: 768px) {
  .dashboard-main .profile-details li i {
    display: inline-block;
  }
}
</style>
