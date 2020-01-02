<template>
  <!--Start Section-->
  <!-- <section class="owl-carousel" id="banner"> -->
  <section class="owl-carousel" id="banner">
    <div
      class="banner-1 cover-image sptb-2 sptb-tab bg-background2"
      data-image-src="../assets/images/banners/buyairtime.jpg"
    >
      <div class="header-text mb-0">
        <div class="container">
          <div class="text-center text-white mb-7"></div>
          <div class="row">
            <div class="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
              <div class="search-background bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- /header-text -->
    </div>
    <div
      class="banner-1 cover-image sptb-2 sptb-tab bg-background2"
      data-image-src="../assets/images/banners/getthebest.jpg"
    >
      <div class="header-text mb-0">
        <div class="container">
          <div class="text-center text-white mb-7"></div>
          <div class="row">
            <div class="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
              <div class="search-background bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- /header-text -->
    </div>
    <div
      class="banner-1 cover-image sptb-2 sptb-tab bg-background2"
      data-image-src="../../assets/images/banners/Sellprods.jpg"
    >
      <div class="header-text mb-0">
        <div class="container">
          <div class="text-center text-white mb-7"></div>
          <div class="row">
            <div class="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
              <div class="search-background bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- /header-text -->
    </div>
  </section>
  <!--/Section-->
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: "start",
  methods: {
    sync() {
      $(document).ready(() => {
        // ______________ Cover-image
        $(".cover-image").each(function() {
          var attr = $(this).attr("data-image-src");
          if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css("background", "url(" + attr + ") center center");
          }
        });
        $("#banner").owlCarousel({
          navigation: false, // Show next and prev buttons
          loop: true,
          nav: false,
          autoplay: true,
          dots: true,
          animateOut: "fadeOut",
          smartSpeed: 450,
          items: 1
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
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
  .owl-carousel .owl-dots {
    position: relative;
    z-index: 10;
    bottom: 50px;
  }

  .owl-carousel button.owl-dot {
    width: 20px  !important;
    height: 20px !important;
    /* border: 1px solid #fff!important; */
  }

  /* .owl-carousel button.owl-dot.active {
    background: #4CAF50 !important;
} */
</style>
