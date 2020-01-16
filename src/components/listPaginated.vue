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
             
              <div class="col-md-12 col-lg-12 col-xs-12">
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
                        <div class="tab-content">
                          <div
                            class="tab-pane fade in active"
                            id="tab1default"
                            v-for="product in paginatedList"
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
                                    :to="
                                      `/ProductDetails/${product.id}/${product.cid}`
                                    "
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
                                      :to="
                                        `/ProductDetails/${product.id}/${product.cid}`
                                      "
                                    >
                                      {{ product.name }}
                                    </router-link>
                                  </h3>
                                  <!-- Category -->
                                  <div class="category-title">
                                    <span class="padding_cats">
                                      <router-link
                                        :to="
                                          `/ProductDetails/${product.id}/${product.cid}`
                                        "
                                        >{{ product.category }}</router-link
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
                                        :to="
                                          `/ProductDetails/${product.id}/${product.cid}`
                                        "
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
                                        :to="
                                          `/ProductDetails/${product.id}/${product.cid}`
                                        "
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
    <!-- PAGINATION CONTROLS -->
    <div class="pagination-wrapper" v-if="data.length > 5 || currentPage > 1">
      <div class="pagination">
        <button
          class="prev page-numbers"
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
        >
          prev
        </button>
        <button
          class="page-numbers"
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
        >
          First
        </button>

        <!-- Range of pages -->
        <button
          class="page-numbers"
          type="button"
          v-for="(page, index) in pages"
          :key="index"
          @click="onClickPage(page.range.number)"
        >
          {{ page.range.number }}
        </button>
        <!-- End page range-->
        <!-- <span aria-current="page" class="page-numbers current">1</span> -->

        <button
          class="page-numbers"
          type="button"
          @click="onClickNextPage"
          :disabled="isInLastPage"
        >
          Next
        </button>
        <button
          class="next page-numbers"
          type="button"
          @click="onClickLastPage"
          :disabled="isInLastPage"
        >
          Last
        </button>
      </div>
    </div>
    <!-- END PAGINATION CONTROLS -->
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
      fullPage: true
    };
  },
  props: {
    data: {
      type: [Array, Object],
      required: true
    },
    maxVisibleButton: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  components: {
    Loading
  },
  computed: {
    paginatedList() {
      let start = (this.currentPage - 1) * this.perPage,
        end = start + this.perPage;
      return this.data.slice(start, end);
    },
    startPage() {
      //getting first page
      if (this.currentPage === 1) {
        return 1;
      }
      // when on the last page
      if (this.currentPage === this.totalPages) {
        return (
          this.totalPages - this.maxVisibleButton + (this.maxVisibleButton - 1)
        );
      }
      // when at the middle
      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      const range = [];
      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          number: i,
          isDisabled: i === this.currentPage
        });
      }
      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    }
  },
  methods: {
    onClickFirstPage() {
      this.isLoading = true;
      this.$emit("pagechanged", 1);
      this.loading = false;
    },
    onClickPreviousPage() {
      this.isLoading = true;
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.isLoading = true;
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.isLoading = true;
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
    onPageChange(page) {
      this.currentPage = page;
    },
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
  border-radius: 0px!important;
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
