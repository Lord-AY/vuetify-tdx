<template>
  <div class="messaging">
    <div id="wrapper" style="height: 100vh;">
      <!-- LEFT SIDEBAR -->
      <dsidebar></dsidebar>
      <!-- MAIN -->
      <div class="main dashboard-main">
        <!-- MAIN CONTENT -->
        <div class="main-content">
        <div class="container" v-if="showMessage">
          <div class="row">
            <div class="col-md-12">
              <div class="text-center">
                <img src="assets/images/chat.jpg" alt="" class="img-responsive chat-img">
                <h3>Please come back when you have messages</h3>
                <p>To use this tab, chat up a seller first...</p>
              </div>
            </div>
          </div>
      </div>
          <div class="container-fluid" v-if="!showMessage">
            <!-- OVERVIEW -->
            <div class="row">
              <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div class="panel  panel-headline">
                  <div class="panel-heading">
                    <h3 class="panel-title">Messaging Panel</h3>
                    <!-- <a href="#" data-target="#myModal" data-toggle="modal">Change Password</a> -->
                    <p class="panel-subtitle">Online</p>
                  </div>
                  <div
                    class="panel-body panel-body-settings panel-body-settings-messaging"
                  >
                    <div class="row">
                      <div class="col-md-12 col-xs-12 col-sm-12 ">
                        <div class="message-body">
                          <div class="col-md-4 col-sm-5 col-xs-12">
                            <div class="message-inbox">
                              <div class="message-header">
                                <h4>Inbox</h4>
                                <ul class="tabs-menu nav">
  <!--                                 <span>
                                    <div
                                      v-bind:class="{ active: tab1 }"
                                      class="selector"
                                      @click="toggle('all')"
                                    >
                                      <small>All Offers</small>
                                    </div>
                                  </span> -->
                                  <!-- <div style="width:10px"></div> -->
                                  <span>
                                    <div
                                      v-bind:class="{ active: tab2 }"
                                      class="selector"
                                      @click="toggle('received')"
                                    >
                                      <small>Recevied Offers</small>
                                    </div>
                                  </span>
                                  <div style="width:10px"></div>
                                  <span>
                                    <div
                                      v-bind:class="{ active: tab3 }"
                                      class="selector"
                                      @click="toggle('sent')"
                                    >
                                      <small>Sent Offers </small>
                                    </div>
                                  </span>
                                </ul>
                              </div>
                              <div class="">
  <!--                               <div class="" v-if="tab1">
                                  <div
                                    class="list-wrap ps-container ps-active-y"
                                  >
                                    <ul class="message-history">
                                      <li
                                        class="message-grid"
                                        v-for="(message,
                                        index) in getMessagesUserTo"
                                        :key="index"
                                      >
                                        <a href="#">
                                          <div class="image img-square">
                                            <img
                                              src="../../public/assets/images/profile-product-details.jpg"
                                              alt=""
                                            />
                                          </div>
                                          <div class="user-name">
                                            <div class="author">
                                              <span>{{ message.from }}</span>
                                              <div class="user-status"></div>
                                            </div>
                                            <p>
                                              Honda Civic 2017 Sports Edition
                                            </p>
                                            <div class="time">
                                              <span
                                                ><i class="icon-envelope"></i
                                              ></span>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div> -->
                                <div class="tab-pane" v-if="tab2">
                                  <div
                                    class="list-wrap ps-container ps-active-y"
                                  >
                                    <ul class="message-history">
                                      <!-- LIST ITEM -->
                                      <li
                                        class="message-grid"
                                        v-for="(user,
                                        index) in unique"
                                        :key="index"
                                      >
                                        <a
                                          @click.prevent="
                                            getSelectedUserConversations(
                                              user.senderId
                                            )
                                          "
                                        >
                                          <div class="image img-square">
                                            <img
                                              :src="
                                                `https://www.tradexplora.com.ng/media/${user.senderAvatar}`
                                              "
                                              alt=""
                                            />
                                          </div>
                                          <div class="user-name">
                                            <div class="author">
                                              <span
                                                >{{ user.senderName }}</span
                                              >
                                              <div class="user-status"></div>
                                            </div>
                                            <p></p>
                                            <div class="time">
                                              <span
                                                ><i class="icon-envelope"></i
                                              ></span>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <!-- END / LIST ITEM -->
                                      <!-- LIST ITEM -->
                                    </ul>
                                  </div>
                                </div>
                                <div class="tab-pane" v-if="tab3">
                                  <div
                                    class="list-wrap ps-container ps-active-y"
                                  >
                                    <ul class="message-history">
                                      <!-- LIST ITEM -->
                                      <li
                                        class="message-grid"
                                        v-for="(user, index) in unique2"
                                        :key="index"
                                      >
                                        <a
                                          href="#"
                                          @click.prevent="
                                            getSelectedUserConversations(
                                              user.recieverId
                                            )
                                          "
                                        >
                                          <div class="image img-square">
                                            <img
                                              :src="
                                                `https://www.tradexplora.com.ng/media/${user.recieverAvatar}`
                                              "
                                              alt=""
                                            />
                                          </div>
                                          <div class="user-name">
                                            <div class="author">
                                              <span
                                                >{{ user.recieverName }}</span
                                              >
                                              <div class="user-status"></div>
                                            </div>
                                            <p></p>
                                            <div class="time">
                                              <span
                                                ><i class="icon-envelope"></i
                                              ></span>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <!-- END / LIST ITEM -->
                                      <!-- LIST ITEM -->
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-md-8 clearfix col-sm-5 col-xs-12 message-content"
                          >
                            <div class="list-wraps ps-container ps-active-y" id="over" style="position:absolute; width:100%; height:100%" v-if="noselected">
                              <div class="empty-state-content">
                                <img src="../../public/assets/images/chatshow.png" />
                              </div>
                            </div>

                            <div class="message-details" v-if="isSelected">
                              <!-- {{ selectedUser[0].avatar }} -->
                              <div
                                class="author"
                                :key="index"
                              >
                                <div class="image">
                                  <img
                                    v-if="selectedUser[0].avatar"
                                    :src="
                                      `https://www.tradexplora.com.ng/media/${selectedUser[0].avatar}`
                                    "
                                    :alt="selectedUser[0].name"
                                  />
                                  <img
                                    v-else
                                    src="../../public/assets/images/profile-product-details.jpg"
                                    alt=""
                                  />
                                </div>
                                <span class="author-name">{{ selectedUser[0].name }}</span>
                                <!-- <em>5 days ago</em> -->
                              </div>
                              <h2>
                                <!--  <a href="single-page-listing.html"
                                  >2017 Audi A4 sport Auto MY17 For Sale</a
                                > -->
                              </h2>
                              <div class="list-wraps ps-container ps-active-y" >
                                <ul class="messages" style="overflow-y: auto; max-height: 400px;" v-chat-scroll>
                                  <li
                                    class="friend-message clearfix"
                                    v-for="(message, index) in recievedMessages"
                                    :key="index"
                                  >
                                     <figure class="profile-picture" v-if="message.recieverAvatar">
                                      <img
                                        :src="'https://www.tradexplora.com.ng/media/'+message.recieverAvatar"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      {{ message.message }}
                                      <div class="time">
                                        <!-- <i class="fa fa-clock-o"></i> Today 8:53
                                        AM -->
                                      </div>
                                    </div>
                                  </li>
                                  <li
                                    class="my-message clearfix"
                                    v-for="(message, index) in sentMessages"
                                    :key="index"
                                  >
                                    <figure class="profile-picture" v-if="message.senderAvatar">
                                      <img
                                        :src="'https://www.tradexplora.com.ng/media/'+message.senderAvatar"
                                        class="img-circle img-circle-messaging"
                                        alt="Profile Pic"
                                      />
                                    </figure>
                                    <div class="message">
                                      {{ message.message }}
                                      <div class="time">
                                        <!--  <i class="fa fa-clock-o"></i> Today 8:55
                                        AM -->
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <div
                                  class="ps-scrollbar-x-rail"
                                  style="width: 672px; display: none; left: 0px;"
                                >
                                  <div
                                    class="ps-scrollbar-x"
                                    style="left: 0px; width: 0px;"
                                  ></div>
                                </div>
                                <div
                                  class="ps-scrollbar-y-rail"
                                  style="top: 0px; height: 590px; display: inherit; right: 0px;"
                                >
                                  <div
                                    class="ps-scrollbar-y"
                                    style="top: 0px; height: 150px;"
                                  ></div>
                                </div>
                              </div>
                              <div class="chat-form ">
                                <form role="form" class="form-inline">
                                  <div class="form-group">
                                    <input
                                      style="width: 100%"
                                      @keydown.enter="sendNewMessage"
                                      @keydown.space="preventLeadingSpace"
                                      placeholder="Type a message here..."
                                      v-model="message"
                                      class="form-control"
                                      type="text"
                                    />
                                  </div>
                                  <!-- <p v-if="testing">Hey You got the error</p> -->
                                  <button
                                    class="btn btn-theme"
                                    type="submit"
                                    :class="disabled ? 'disabled' : ''"
                                    @click.prevent="sendNewMessage"
                                    :disabled="disabled"
                                  >
                                    <i class="fa fa-paper-plane-o"></i>
                                  </button>
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
          </div>
          <div id="myModal" class="modal fade change-psw" role="dialog">
            <div class="modal-dialog">
              <!-- Modal content-->
              <div class="modal-content">
                <div class="modal-header rte">
                  <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true"> ✕ </span>
                  </button>
                  <h2 class="modal-title">Password Change</h2>
                </div>
                <form id="sb-change-password">
                  <div class="modal-body">
                    <div class="form-group">
                      <label>Current Password</label>
                      <input
                        placeholder="Current Password"
                        class="form-control"
                        type="password"
                        name="current_pass"
                        id="current_pass"
                      />
                    </div>
                    <div class="form-group">
                      <label>New Password</label>
                      <input
                        placeholder="New Password"
                        class="form-control"
                        type="password"
                        name="new_pass"
                        id="new_pass"
                      />
                    </div>
                    <div class="form-group">
                      <label>Confirm New Password</label>
                      <input
                        placeholder="Confirm Password"
                        class="form-control"
                        type="password"
                        name="con_new_pass"
                        id="con_new_pass"
                      />
                    </div>

                    <div class="form-group">
                      <span
                        class="tooltip-disabled pull-left"
                        data-toggle="tooltip"
                        title="Disabled in demo"
                      >
                        <button
                          class="btn btn-theme btn-block"
                          type="button"
                          disabled=""
                        >
                          Reset My Password
                        </button>
                      </span>
                    </div>
                  </div>
                </form>
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
// require("../../public/assets/skins/color-skins/color15.css");
// require("../../public/assets/plugins/horizontal-menu/horizontal.css");
// require("../../public/assets/carspot-css/wp-includes/css/dist/block-library/style.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/stylea1ec.css");
// require("../../public/assets/carspot-css/wp-content/plugins/contact-form-7/includes/css/styles58e0.css");
// require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
// require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreenf43b.css");
// require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet-search.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/style4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/video_player4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/bootstrap4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/star-rating4d2c.css");
// // require("../../public/assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/jquery-confirm4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/datepicker.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/et-line-fonts4d2c.css");
// require("../../public/assets/carspot-css/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesome.min52c7.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/line-awesome.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/animate.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon24d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom_icons4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/select2.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/nouislider.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.carousel4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.theme4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/toastr.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/woocommerce4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/skins/minimal/minimal4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/jquery.fancybox.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/slider4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/carspot-menu4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/responsive-media4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css");
// require("../../public/assets/carspot-css/wp-content/plugins/add-to-any/addtoany.min9be6.css");
// require("../../public/assets/carspot-css/wp-includes/css/dist/block-library/style.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/stylea1ec.css");
// require("../../public/assets/carspot-css/wp-content/plugins/contact-form-7/includes/css/styles58e0.css");
// require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
// require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreenf43b.css");
// require("../../public/assets/carspot-css/wp-content/plugins/woocommerce/assets/css/woocommerce-layoutf43b.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/star-rating4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/style.css");
// require("../../public/assets/css/user-dashboard/protip.css");

// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/jquery-confirm4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/assets/leaflet/leaflet-search.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/style4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/video_player4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/bootstrap4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/star-rating4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/jquery-confirm4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/datepicker.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/et-line-fonts4d2c.css");
// require("../../public/assets/carspot-css/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesome.min52c7.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/line-awesome.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/animate.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/flaticon24d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom_icons4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/select2.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/nouislider.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.carousel4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.theme4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/toastr.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/woocommerce4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/skins/minimal/minimal4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/jquery.fancybox.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/slider4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/carspot-menu4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/responsive-media4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.carousel4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/owl.theme4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/custom4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/toastr.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/woocommerce4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/skins/minimal/minimal4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/jquery.fancybox.min4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/slider4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/carspot-menu4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/responsive-media4d2c.css");
// require("../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css");
// require("../../public/assets/carspot-css/wp-content/plugins/add-to-any/addtoany.min9be6.css");
// require("../../public/assets/skins/color-skins/color15.css");
// require("../../public/assets/plugins/horizontal-menu/horizontal.css");
// require("../../public/assets/css/components.css");

import dsidebar from "@/components/Dsidebar";
import { mapActions, mapGetters, mapState } from "vuex";
import ash from "lodash";
export default {
  name: "messaging",
  data() {
    return {
      sentMessages: [],
      recievedMessages: [],
      message: '',
      showMessage: false,
      selectedId: null,
      disabled: true,
      selectedUser: [],
      tab1: false,
      tab2: true,
      tab3: false,
      isValidationAllowed: false,
      testing: false,
      noselected: true,
      isSelected: false,
    };
  },
  components: {
    dsidebar
  },
  computed: {
    unique() {
      if(this.recievedOfferUsers !== null && this.recievedOfferUsers !== undefined) {
        // console.log(this.recievedOfferUsers);
      return this.recievedOfferUsers.reduce((seed, current) => {
        return Object.assign(seed, {
          [current.id]: current
        });
      }, {});
    };
    return 0;
  },
    unique2() {
      if(this.sentOfferUsers !== null && this.sentOfferUsers !== undefined) {
        // console.log("inside unique two");
        // for(let i in this.sentOfferUsers){
        //   console.log(this.sentOfferUsers[i]);
        // }
        // console.log(this.sentOfferUsers);
      return this.sentOfferUsers.reduce((seed, current) => {
        return Object.assign(seed, {
          [current.id]: current
        });
      }, {});
    };
    return 0;
  },
  validated() {
    return this.isValidationAllowed && !this.message
  },
    ...mapGetters("auth", ["getUser"]),
    ...mapGetters("chat", ["sentOfferUsers", "recievedOfferUsers"]),
    ...mapState("chat", ["messages"])
  },
  methods: {
    ...mapActions("chat", [
      "sendMessage",
      "fetchMessages",
      "getAll"
    ]),
    scrollToElement() {
      const el = this.$el.querySelector('.messages');
      // console.log("i am meant to scoll to last" + el)
      if (el) {
        el[el.length - 1].scrollHeight;
      }
    },
    validate() {
      this.isValidationAllowed = true
    },
    noMessages() {
      // console.log(this.messagesFrom);
      // console.log(this.messagesTo);
      if(this.messages.length !== 0 && this.messages.length !== null ) {
         this.showMessage = true;
      } else {
      this.showMessage = false;
    }
    },
    preventLeadingSpace(e) {
      // only prevent the keypress if the value is blank
      if (!e.target.value) e.preventDefault();
      // otherwise, if the leading character is a space, remove all leading white-space
       else if (e.target.value[0] == " ")
        e.target.value = e.target.value.replace(/^\s*/, "");
    },
    sendNewMessage() {
      if(this.message){
        const payload = {
          message: this.message,
          recieverId: this.selectedId,
          senderId: this.getUser.id,
          senderName: this.getUser.firstname + " " + this.getUser.lastname,
          senderAvatar: this.getUser.pictureUrl
        };
        this.sendMessage(payload);
        this.message = null;
        this.fetchAllMessages();
        this.getSelectedUserConversations(this.selectedId);
        let at = this;
        setTimeout(function() {at.getSelectedUserConversations(at.selectedId);}, 2000);
      }else{
        this.testing = true
      }
    },
   async fetchAllMessages() {
     await this.fetchMessages();
    },
    getSelectedUserConversations(userId) {
      this.noselected = false;
      this.isSelected = true;
      let stateMessages = this.messages;
      this.selectedUser = [];
      this.recievedMessages = [];
      this.sentMessages = [];
      this.selectedId = userId;
      for (let user in stateMessages) {
        // loop through to get selected user.
        // if statement checks for the id and makes sure the selected user is empty.
        // before looping and adding new seleceted user to prevent duplicate users
        if (stateMessages[user].senderId == userId || stateMessages[user].recieverId == userId  && ash.isEmpty(this.selectedUser)) {
          this.selectedUser.push({
            name: stateMessages[user].sernderName || stateMessages[user].recieverName,
            avatar: stateMessages[user].senderAvatar || stateMessages[user].recieverAvatar
          });
        }
      }
      // loop through from messages,
      for (let message in stateMessages) {
        // get messages logged in user sent to other chat user
        if (this.getUser.id == stateMessages[message].senderId && userId == stateMessages[message].recieverId) {
          this.sentMessages.push(stateMessages[message]);
        };
        if (this.getUser.id == stateMessages[message].recieverId && userId == stateMessages[message].senderId) {
          this.recievedMessages.push(stateMessages[message]);
        }
      }
    },
    toggle(param) {
      // console.log(param)
      if (param == "all") {
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = false;
      } else if (param == "received") {
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = false;
      } else if (param == "sent") {
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = true;
      } else {
      }
    }
  },
  watch: {
    message: {
      handler: function(message) {
        if (message) {
          // console.log("message is increasing...");
          this.disabled = false;
        } else {
          // console.log("message is reducing...");
          this.disabled = true;
        }
      },
      messages: {
        handler: function() {
          this.fetchAllMessages();
        this.getSelectedUserConversations(this.selecetedId);
        }
      }
    },
    // messagesFrom: {
    //   handler: function() {
    //     // this.fetchAllMessages()
    //     this.getSentWithRecievedOfferUsers()
    //   }
    // },
    //  messagesTo: {
    //   handler: function() {
    //     // this.fetchAllMessages()
    //     this.getSentWithRecievedOfferUsers()
    //   }
    // }

  },
  created() {
    this.fetchAllMessages().then(data => {
    this.noMessages();
    });
    // this.getAllMessages();
  }
};
</script>
<style scoped>
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/user-dashboard/style.css';
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/colors/defualt.css';
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/style4d2c.css';
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/style4d2c.css';
  @import '../../public/assets/carspot-css/wp-content/themes/carspot/css/bootstrap4d2c.css';
</style>
<style>
.selector {
  cursor: pointer;
}
.chat-img {
  width: 30em;
  margin: 0 auto;
}
#over img {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
