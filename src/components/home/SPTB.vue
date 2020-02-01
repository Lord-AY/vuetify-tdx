<template>
  <!--Section-->
  <section class="sptb">
    <div class="container">
      <div class="section-title center-block text-center mobile-hidden">
        <h2
          style="display: inline-block; margin-left: 92px"
          class="is-left-small"
        >
          Popular Categories
        </h2>
        <div class="viewall2 mobile-hidden">
          <router-link to="/categories"
            >Show All
            <i class="fa fa-arrow-circle-right"></i
          ></router-link>
        </div>
        <!-- <p>Explore with some of the top categories on our platform</p> -->
      </div>

      <div class="section-title text-left hidden-desktop" style="padding: 0px;">
        <h2 class="is-left-small text-bold" style="font-size: 20px;">
          Categories
        </h2>
      </div>

      <!-- Testing new slickifying technique cause previous was bringing up heavy bugs -->
      <div class="center-text col-md-12 ">
        <CategoryLoader v-show="showLoader(categories)"></CategoryLoader>
      </div>
      <div
        class="slick single-item mobile-hidden"
        data-slick='{"slidesToShow": 4, "slidesToScroll": 1}'
        v-show="!showLoader(categories)"
      >
        <div class="item" v-for="category in categories" :key="category.id">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/categories"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    :src="
                      `https://www.tradexplora.com.ng/media/${category.icon}` ||
                        './assets/images/categories/car.svg'
                    "
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">{{ category.name }}</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">45</p></span
                  >
                </div>
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
import CategoryLoader from "@/components/loaders/Categoryloader";
import ash from "lodash";
export default {
  name: "SPTB",
  props: {
    categories: [Object, Array]
  },
  components: {
    CategoryLoader
  },
  methods: {
    showLoader(data) {
      if (ash.isEmpty(data) || data == undefined || data == null) {
        return true;
      } else {
        return false;
      }
    },
    sync() {
      $(document).ready(function() {
        // $(".small-categories").slick({
        //   slidesToShow: 5,
        //   slidesToScroll: 1,
        //   autoplay: false,
        //   autoplaySpeed: 2000,
        //   mobileFirst: true,
        //   responsive: [
        //     {
        //       breakpoint: 1280,
        //       settings: {
        //         slidesToShow: 5,
        //         slidesToScroll: 1
        //       }
        //     },
        //     {
        //       breakpoint: 992,
        //       settings: {
        //         slidesToShow: 4,
        //         slidesToScroll: 1
        //       }
        //     // },
        //     // {
        //     //   breakpoint: 768,
        //     //   settings: {
        //     //     slidesToShow: 3,
        //     //     slidesToScroll: 1
        //     //   }
        //     // },
        //     // {
        //     //   breakpoint: 360,
        //     //   settings: {
        //     //     slidesToShow: 1,
        //     //     slidesToScroll: 1
        //     //   }
        //     }
        //   ]
        // });

        function slickify() {
          $(".slick").slick({
            autoplay: true,
            autoplaySpeed: 4000,
            delay: 5000,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 992,
                settings: "unslick"
              }
            ]
          });
        }
        slickify();
        $(window).resize(function() {
          var $windowWidth = $(window).width();
          if ($windowWidth >= 992) {
            slickify();
          }
        });
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
.small-categories,
.single-item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

@media (min-width: 481px) {
  .small-categories,
  .single-item {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
}

@media (max-width: 992px) {
  .is-left-small {
    text-align: left;
    /* width: 100%; */
    margin-left: 0 !important;
  }
  .badge-pill {
    display: hidden !important;
  }
}

.horizontal-scroll {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
}

.horizontal-scroll::-webkit-scrollbar {
  display: none;
}

.horizontal-scroll .itemy {
  vertical-align: top;
  display: inline-block;
  /* width: 100px; */
  /* padding: 0px 10px; */
  text-align: center;
}
.horizontal-scroll .itemy .itemy-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0px 10px;
  display: block;
}

.horizontal-scroll .itemy .itemy-icon img {
  width: 40px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.horizontal-scroll .itemy .itemy-title {
  margin-top: 10px;
  display: block;
  max-width: 90px;
  white-space: normal;
  word-wrap: break-word;
}
</style>
