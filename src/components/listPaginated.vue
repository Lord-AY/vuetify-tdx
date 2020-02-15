<template>
  <div>
    <div class="list">
      <Loading :active.sync="isLoading" :is-full-page="fullPage"></Loading>
      <div class="main-content-area clearfix">
        <section
          class="section-padding gray page-search"
          style="padding-top: 0px;"
        >
          <div class="container">
            <!-- Row -->
            <div class="row">
              <div class="col-md-9 col-lg-9 col-xs-12">
                <!-- Row -->
                <div class="row">
                  <div class="clearfix"></div>
                  <div class="list-style-1">
                    <div class="panel with-nav-tabs panel-default">
                      <div class="panel-heading">
                        <ul class="nav nav-tabs">
                          <li class="active">
                            <a href="#tab1default" data-toggle="tab"
                              >Latest Ads</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="panel-body">
                        <div class="tab-content" v-if="list.lenght == 0">
                          <div
                            class="tab-pane fade in active"
                            id="tab1default"
                            v-for="product in toggleLimit"
                            :key="product.id"
                          >
                            <div class="ads-list-archive featured_ads">
                              <!-- Image Block -->
                              <div
                                class="col-lg-4 col-md-4 col-sm-4 no-padding"
                              >
                                <!-- Img Block -->
                                <div class="ad-archive-img">
                                  <router-link
                                    :to="{ path: '/productDetails', query: { id: product.id, cid: product.cid, uid:product.uid }}"
                                  >
                                    <img
                                      :src="product.photos[0]"
                                      :alt="product.name"
                                      class="img-responsive"
                                      style="max-height: 210px;min-height: 210px;"
                                    />
                                  </router-link>
                                  <div
                                    class="arrow-ribbon bg-primary bg-tag-tx"
                                  >
                                    Premium
                                  </div>
                                </div>
                                <!-- Img Block -->
                              </div>
                              <!-- Ads Listing -->
                              <div class="clearfix visible-xs-block"></div>
                              <!-- Content Block -->
                              <div
                                class="col-lg-8 col-md-8 col-sm-8 no-padding"
                              >
                                <!-- Ad Desc -->
                                <div class="ad-archive-desc">
                                  <!-- Price -->
                                  <div class="ad-price">
                                    &#8358; {{ product.amount }}
                                    <span class v-if="product.negotiable"
                                      >(Negotiable)</span
                                    >
                                    <span class v-else>(Fixed)</span>
                                  </div>
                                  <!-- Title -->
                                  <h3>
                                    <router-link
                                      :to="{ path: '/productDetails', query: { id: product.id, cid: product.cid, uid:product.uid }}"
                                    >
                                      {{ product.name }}
                                    </router-link>
                                  </h3>
                                  <!-- Category -->
                                  <div class="category-title">
                                    <span class="padding_cats">
                                      <router-link
                                      :to="{ path: '/productDetails', query: { id: product.id, cid: product.cid, uid:product.uid }}"
                                    >
                                      {{ product.category }}</router-link
                                      >
                                    </span>
                                  </div>
                                  <!-- Short Description -->
                                  <div class="clearfix visible-xs-block"></div>
                                  <p class="hidden-sm">
                                    {{ product.description }}
                                  </p>
                                  <!-- Ad Features -->
                                  <ul class="add_info">
                                    <li>
                                      <router-link
                                      :to="{ path: '/productDetails', query: { id: product.id, cid: product.cid, uid:product.uid }}"
                                    >

                                        <img
                                          :src="product.photos[1]"
                                          :alt="product.name"
                                        />
                                      </router-link>
                                    </li>
                                  </ul>
                                  <!-- Ad History -->
                                  <div class="clearfix archive-history">
                                    <div class="last-updated">
                                      Posted : January 24, 2019
                                    </div>
                                    <div class="ad-meta">
                                      <a
                                        href="javascript:void(0);"
                                        data-adid="1375"
                                        class="btn btn-list-tx save-ad"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                        Favourite
                                      </a>
                                      <router-link
                                        :to="{ path: '/productDetails', query: { id: product.id, cid: product.cid, uid:product.uid }}"
                                        class="btn2 btn-list-tx btn-success"
                                      >

                                        <i class="fa fa-eye"></i> View Details
                                      </router-link>
                                    </div>
                                  </div>
                                </div>
                                <!-- Ad Desc End -->
                              </div>
                              <!-- Content Block End -->
                            </div>
                          </div>
                        </div>
                        <div class="tab-content" v-else>
                          <div
                            class="tab-pane fade in active"
                            id="tab1default"
                            v-for="product in toggleLimit"
                            :key="product.id"
                          >
                            <div class="ads-list-archive featured_ads">
                              <!-- Image Block -->
                              <div
                                class="col-lg-4 col-md-4 col-sm-4 no-padding"
                              >
                                <!-- Img Block -->
                                <div class="ad-archive-img">                                 
                                  <router-link
                                        :to="{ path: '/productDetails', query: { id: product.id, cid: product.cid, uid:product.uid }}"
                                  >
                                    <img
                                      :src="product.photos[0]"
                                      :alt="product.name"
                                      class="img-responsive"
                                      style="max-height: 210px;min-height: 210px;"
                                    />
                                  </router-link>
                                  <div
                                    class="arrow-ribbon bg-primary bg-tag-tx"
                                  >
                                    Premium
                                  </div>
                                </div>
                                <!-- Img Block -->
                              </div>
                              <!-- Ads Listing -->
                              <div class="clearfix visible-xs-block"></div>
                              <!-- Content Block -->
                              <div
                                class="col-lg-8 col-md-8 col-sm-8 no-padding"
                              >
                                <!-- Ad Desc -->
                                <div class="ad-archive-desc">
                                  <!-- Price -->
                                  <div class="ad-price">
                                    &#8358; {{ product.amount }}
                                    <span class v-if="product.negotiable"
                                      >(Negotiable)</span
                                    >
                                    <span class v-else>(Fixed)</span>
                                  </div>
                                  <!-- Title -->
                                  <h3>
                                    <router-link
                                        :to="{ path: '/productDetails', query: { id: product.id, cid: product.cid, uid:product.uid }}"
                                      >

                                      {{ product.name }}
                                    </router-link>
                                  </h3>
                                  <!-- Category -->
                                  <div class="category-title">
                                    <span class="padding_cats">
                                      <router-link
                                        :to="{ path: '/productDetails', query: { id: product.id, cid: product.cid, uid:product.uid }}"
                                        class="btn2 btn-list-tx btn-success"
                                      >
                                      {{ product.category }}</router-link
                                      >
                                    </span>
                                  </div>
                                  <!-- Short Description -->
                                  <div class="clearfix visible-xs-block"></div>
                                  <p class="hidden-sm">
                                    {{ product.description }}
                                  </p>
                                  <!-- Ad Features -->
                                  <ul class="add_info">
                                    <li>
                                      <router-link
                                        :to="{ path: '/productDetails', query: { id: product.id, cid: product.cid, uid:product.uid }}"
                                      >

                                        <img
                                          :src="product.photos[1]"
                                          :alt="product.name"
                                        />
                                      </router-link>
                                    </li>
                                  </ul>
                                  <!-- Ad History -->
                                  <div class="clearfix archive-history">
                                    <div class="last-updated">
                                      Posted : January 24, 2019
                                    </div>
                                    <div class="ad-meta">
                                      <a
                                        href="javascript:void(0);"
                                        data-adid="1375"
                                        class="btn btn-list-tx save-ad"
                                      >
                                        <i class="fa fa-heart-o"></i>
                                        Favourite
                                      </a>
                                      <router-link
                                        :to="{ path: '/productDetails', query: { id: product.id, cid: product.cid, uid:product.uid }}"
                                        class="btn2 btn-list-tx btn-success"
                                      >

                                        <i class="fa fa-eye"></i> View Details
                                      </router-link>
                                    </div>
                                  </div>
                                </div>
                                <!-- Ad Desc End -->
                              </div>
                              <!-- Content Block End -->
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
<div
                          class="viewall-similar mb-5 mt-5"
                          id="show-more-details"
                          v-if="
                            data &&
                              data.length !== limit &&
                              list.length == 0
                          "
                        >
                          <a @click="limit += 10" v-show="limitBtn">
                            Show More
                            <i
                              class="fa fa-arrow-circle-right"
                              style="color: #4caf50;"
                            ></i
                          ></a>
                        </div>
                        <div
                          class="viewall-similar mb-5 mt-5"
                          id="show-more-details"
                          v-if="list && list.length > limit"
                        >
                          <a @click="limit += 10" v-show="limitBtn">
                            Show More
                            <i
                              class="fa fa-arrow-circle-right"
                              style="color: #4caf50;"
                            ></i
                          ></a>
                        </div>
                      </div>
                  <div class="clearfix"></div>
                  <!-- <div class="text-center margin-top-30 margin-bottom-20">
                  <ul class="pagination pagination-lg">
                    <li class="active">
                      <a href="index23c2.html?carspot_layout_type=1">1</a>
                    </li>
                    <li>
                      <a href="page/2/index23c2.html?carspot_layout_type=1"
                        >2</a
                      >
                    </li>
                    <li>
                      <a href="page/2/index23c2.html?carspot_layout_type=1"
                        >Next Page &raquo;</a
                      >
                    </li>
                  </ul>
                </div> -->
                </div>
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
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      limitBtn: true,
      limit: 10
    };
  },
  props: {
    data: {
      type: [Array, Object],
      required: true
    },
    baseLimit: {
      type: [Number]
    },
    list: [Array, Object],
    loading: Boolean
  },
  components: {
    Loading
  },
  computed: {
    paginatedList() {
      return this.data.slice(0, 10);
    },
    toggleLimit() {
      if (this.list.length == 0) {
        if (this.limit !== this.data.length) {
          // this.limit += 10;
          return this.limit ? this.data.slice(0, this.limit) : this.data;
        }
      } else {
        if (this.limit !== this.list.length) {
          // this.limit += 10;
          return this.limit ? this.list.slice(0, this.limit) : this.list;
        }
      }
      return this.data;
    }
  },
  methods: {
    sync() {
      $("html,body").animate({ scrollTop: 0 }, "slow");
    }
  },
  watch: {
    isLoading: {
      handler: function(loading) {
        this.sync();
        this.isLoading = false;
      }
    },
    limit: {
      handler: function(limit) {
        if (limit == this.data.lenght || limit == this.list.length) {
          this.limitBtn = false;
        } else {
          this.limitBtn = true;
        }
      }
    },
    list: {
      handler: function(list) {
        if (list.length !== 0) {
          this.limit = 10;
        }
      }
    },
    baseLimit: {
      handler: function(limit) {
        if (limit !== 0) {
          this.limit = 10;
        }
      }
    }
  }
};
</script>
<style scoped lang="scss">
//----------  responsive breakpoints
//------------------------------------------------------------------------------
@mixin breakpoint($value) {
  @if $value == "phone" {
    @media only screen and (min-width: 120px) and (max-width: 767px) {
      @content;
    }
  } @else if $value == "tablet" {
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      @content;
    }
  } @else if $value == "touch" {
    @media only screen and (min-width: 120px) and (max-width: 1024px) {
      @content;
    }
  } @else if $value == "desktop" {
    @media only screen and (min-width: 1025px) {
      @content;
    }
  } @else {
    @media only screen and (max-width: $value) {
      @content;
    }
  }
}
// Colors
$white: #fff;
$black: #000;
$grey: #595959;
$grey-dark: #2b2b2b;
$grey-light: #eee;
$green: #86c023;
$blue: #017ac7;
// Transition
$duration: 400ms;
$easing: ease;
//----------  reset
//------------------------------------------------------------------------------
htm,
body {
  font-family: sans-serif;
}
a {
  text-decoration: none;
}
button {
  text-decoration: none;
  border: none;
  cursor: pointer;
}
.btn-list-tx {
  border-radius: 0px !important;
}
//----------  pagination
//------------------------------------------------------------------------------
.pagination-wrapper {
  text-align: center;
  margin: 40px 0;
}
.pagination {
  display: inline-block;
  height: 70px;
  margin-top: 70px;
  padding: 0 25px;
  border-radius: 35px;
  background-color: $grey-light;
  @include breakpoint(1199px) {
    height: 50px;
    margin-top: 50px;
    padding: 0 10px;
    border-radius: 25px;
  }
}
.page-numbers {
  display: block;
  padding: 0 25px;
  float: left;
  transition: $duration $easing;
  color: $grey;
  font-size: 20px;
  letter-spacing: 0.1em;
  line-height: 70px;
  &:hover,
  &.current {
    background-color: $green;
    color: $white;
  }
  &.prev:hover,
  &.next:hover {
    background-color: transparent;
    color: $green;
  }
  @include breakpoint(1199px) {
    padding: 0 15px;
    font-size: 16px;
    line-height: 50px;
  }
  @include breakpoint(touch) {
    padding: 0 14px;
    display: none;
    &:nth-of-type(2) {
      position: relative;
      padding-right: 50px;
      &::after {
        content: "...";
        position: absolute;
        font-size: 25px;
        top: 0;
        left: 45px;
      }
    }
    &:nth-child(-n + 3),
    &:nth-last-child(-n + 3) {
      display: block;
    }
    &:nth-last-child(-n + 4) {
      padding-right: 14px;
      &::after {
        content: none;
      }
    }
  }
}
</style>
