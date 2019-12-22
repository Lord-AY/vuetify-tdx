<template>
  <!--Section-->
  <section class="sptb">
    <div class="container">
      <div class="section-title center-block text-center">
        <h2
          style="display: inline-block; margin-left: 92px"
          class="is-left-small"
        >
          Popular Categories
        </h2>
        <div class="viewall mobile-hidden">
          <router-link to="/Gridlist"
            >Show All <i class="fa fa-arrow-circle-right"></i
          ></router-link>
        </div>
        <!-- <p>Explore with some of the top categories on our platform</p> -->
      </div>

      <!-- Testing new slickifying technique cause previous was bringing up heavy bugs -->

      <div
        class="slick single-item"
        data-slick='{"slidesToShow": 4, "slidesToScroll": 1}'
      >
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/car.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Cars</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">45</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/smartphone.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Phones & Tablets</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">23</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/mansion.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Real Estate</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">48</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/electronics.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Electronics</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx" style="">15</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/fashion.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Fashion</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx" style="">12</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/suitcase.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Jobs</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">05</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/bear.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Babies and Kids</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">09</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/agriculture.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Agriculture & Food</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">65</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/animal.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Animals & Pets</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">65</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/handyman.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Handy man</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">65</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="testimonial.html"
        class="btn btn-primary btn-lg text-upppercase mt-5 v-aligin-middle hidden-desktop"
        style="border-radius: 5px; width: 100%;"
        >VIEW ALL CATEGORIES</a
      >

      <!-- OLD SLICK CAROUSEL. <div id="small-categories" class="small-categories">
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/car.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Cars</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">45</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/smartphone.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Phones & Tablets</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">23</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/mansion.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Real Estate</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">48</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/electronics.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Electronics</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx" style="">15</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/fashion.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Fashion</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx" style="">12</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/suitcase.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Jobs</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">05</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/bear.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Babies and Kids</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">09</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/agriculture.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Agriculture & Food</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">65</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/animal.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Animals & Pets</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">65</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card card-cat-tx mb-0 box-shadow-0">
            <div class="item-card item-card-tx">
              <div class="item-card-desc item-card-desc-tx">
                <router-link to="/Gridlist"></router-link>
                <div class="item-card-img item-card-img-tx">
                  <img
                    src="../../assets/images/categories/handyman.svg"
                    alt="img"
                    class="br-tr-7 br-tl-7"
                  />
                </div>
                <div class="item-card-text item-card-text-tx">
                  <h4 class="mb-0">Handy man</h4>
                  <span
                    class="badge badge-pill badge-primary-tx badge-primary w-15"
                    ><p class="badge-tx">65</p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </section>
  <!--/Section-->
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: "SPTB",
  methods: {
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
</style>
