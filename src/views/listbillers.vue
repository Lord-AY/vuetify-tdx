<template>
  <div>
    <div id="global-loader" v-show="isLoading">
      <ListBillerLoader
        class="mobile-hidden"
      ></ListBillerLoader>
    </div>
    <div class="list">
      <div class="main-content-area clearfix">
        <section
          class="section-padding gray page-search"
          style="padding-top: 30px;"
        >
          <div class="container">
            <!-- Row -->
            <div class="row">
              <div class="col-md-3 col-sm-12 col-xs-12">
                <div class="sidebar">
                  <div
                    class="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div
                      class="panel panel-default"
                      id="red-title"
                      v-for="(category, index) in getBillerCategories"
                      :key="index"
                    >
                      <!-- Heading -->
                      <div class="panel-heading" role="tab" id="headingFive">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            @click.prevent="showCategoryBillers(category)"
                            role="button"
                          >
                            {{ category }}
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-9 col-lg-9 col-xs-12">
                <!-- Row -->
                <div class="clearfix"></div>
                <transition name="fade">
                  <div
                    class="tab-pane fade in active"
                    v-show="selected"
                    id="tab1default"
                  >
                    <div class="row">
                      <Loading
                        :active.sync="isLoading"
                        :is-full-page="fullPage"
                      ></Loading>
                      <div
                        class="col-md-6 col-lg-3 mb-5"
                        v-show="!isLoading"
                        v-for="(biller, index) in filteredBillers"
                        :key="index"
                      >
                        <div class="card card-cat-tx mb-0 box-shadow-2">
                          <div class="item-card item-card-tx">
                            <div class="item-card-desc item-card-desc-tx">
                              <router-link
                                v-if="biller.mediumImageId"
                                :to="{ path: '/paymentitem', query: { id: biller.billerid, img: biller.mediumImageId, type: 'company' }}"
                              ></router-link>
                              <router-link
                                v-else
                                :to="{ path: '/paymentitem', query: { id: biller.billerid, img: defaultImg, type: 'default' }}"
                              ></router-link>
                              <div class="item-card-img item-card-img-tx">
                                <img
                                  v-if="biller.mediumImageId"
                                  :src="
                                    `https://quickteller.sandbox.interswitchng.com/Content/Images/Downloaded/${biller.mediumImageId}` +
                                      '.png'
                                  "
                                  alt="img"
                                  class="br-tr-7 br-tl-7"
                                />
                                <img
                                  v-else
                                  :src="'img/' + defaultImg + '.png'"
                                  alt="img"
                                  class="br-tr-7 br-tl-7"
                                />
                              </div>
                              <div class="item-card-text item-card-text-tx">
                                <h4 class="mb-0">{{ biller.billername }}</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>

                
                  <!-- This state should show when there is no initial activity 
                  and should go when the user clicks any of the services -->
                <div class="empty-state" v-if="noselected">
                  <div class="empty-state-content">
                    <img src="../../public/assets/images/empty-state.svg" />
                    <h1>Tradexplora Plus</h1>
                    <p>
                      Recharge your phone, pay utility bills, transfer money, 
                      pay for subscription and much more here on Tradexplora plus
                    </p>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </section>
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
  </div>
</template>
<script>

import { mapActions, mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import ListBillerLoader from "@/components/loaders/listBillerLoader";
import ash from "lodash";
export default {
  data() {
    return {
      selected: false,
      filteredBillers: [],
      isLoading: true,
      fullPage: true,
      noselected: true,
      defaultImg: "TRADEXPLORA-V4.1-mini.b55c0fd7"
    };
  },
  components: {
    Loading,
    ListBillerLoader
  },
  computed: {
    ...mapGetters("valueAdded", ["billerListings", "getBillerCategories", "getErrors", "getSuccess"])
  },
  methods: {
    ...mapActions("valueAdded", ["fetchAllBillers"]),
    showCategoryBillers(category) {
      this.noselected = false;
      // console.log(category);
      let billerListings = this.billerListings;
      this.filteredBillers = [];
      for (let biller in billerListings) {
        if (billerListings[biller].categoryname == category) {
          this.filteredBillers.push(billerListings[biller]);
        }
      }
      // console.log(this.filteredBillers);
    },
    nextRoute(image) {
      SET_SERVICE_IMG(image);
      router.push(`paymentitem/${payId}`);
    }
  },
  watch: {
    billerListings: {
      handler: function(billerListings) {
        if (billerListings !== null && billerListings !== undefined) {
          this.isLoading = true;
        }
        this.isLoading = false;
      }
    },
    filteredBillers: {
      handler: function(filteredArray) {
        this.selected = true;
        if (ash.isEmpty(filteredArray)) {
          this.isLoading = true;
        }
        this.isLoading = false;
      }
    },
    getErrors: {
      handler: function(error) {
        if(error !== null && error !== undefined) {
          let title = "Error !!"
          this.showError(error, title)
        }
      }
    }
  },
  created() {
    this.isLoading = true;
    this.fetchAllBillers();
    // console.log(this.getBillerCategories);
  }
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
div.tab-pane.fade.in.active {
  background-color: #fff;
  padding: 20px 10px;
}
// Active class should be on the product services list
a.collapsed.active {
  background-color: #4CAF50!important;
  color: #fff!important;
}
.empty-state {
  display: grid;
  place-items: center;
  height: 100%;
  text-align: center;
  background-color: #fff;

  .empty-state-content {
    width: 75%;
    color: #232323;

    img {
      width: 20em;
    }
    
    h1 {
      font-size: 24px!important;
      font-weight: 500;
      opacity: .7;
      margin-top: 24px;
    }

    p {
      font-size: 18px!important;
      opacity: .7;
    }
  }

  
}
</style>
