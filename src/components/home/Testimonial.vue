<template>
  <section class="sptb position-relative ">
    <!-- <div class="container"> -->
      <div class="section-title center-block text-center">
        <h1 class="text-white position-relative" style="color: #000!important;">
          Testimonials
        </h1>
      </div>
      <!-- <div class="row"> -->
        <!-- <div class="col-md-12"> -->
          <simple-carousel-container loop :watch-it="data">
            <SimpleCarouselItem class="item text-center">
              <div class="row">
                <div class="col-xl-8 col-md-12 d-block mx-auto">
                  <div class="testimonia">
                    <div class="owl-controls clickable">
                      <div class="owl-pagination">
                        <div class="owl-page active">
                          <span class=""></span>
                        </div>
                        <div class="owl-page ">
                          <span class=""></span>
                        </div>
                        <div class="owl-page">
                          <span class=""></span>
                        </div>
                      </div>
                    </div>
                    <p class="text-white-80" style="color: #000!important;">
                      <i class="fa fa-quote-left text-muted-tx"></i> My experience with Tradexplora has been awesome, with Tradexplora I started my making more sales than I used to. I get to make money more easily.
                    </p>
                    <h3 class="title" style="color: #000!important;">
                      Elizabeth
                    </h3>
                    <div class="rating-stars mb-3">
                      <input
                        type="number"
                        readonly="readonly"
                        class="rating-value star"
                        name="rating-stars-value"
                        value="4"
                      />
                      <div class="rating-stars-container">
                        <div class="rating-star sm ">
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="rating-star sm ">
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="rating-star sm ">
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="rating-star sm">
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="rating-star sm">
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="testimonial btn btn-primary btn-lg"
                      >View all Testimonials</a
                    >
                  </div>
                </div>
              </div>
            </SimpleCarouselItem>
            <SimpleCarouselItem class="item text-center">
              <div class="row">
                <div class="col-xl-8 col-md-12 d-block mx-auto">
                  <div class="testimonia">
                    <div class="owl-controls clickable">
                      <div class="owl-pagination">
                        <div class="owl-page ">
                          <span class=""></span>
                        </div>
                        <div class="owl-page active">
                          <span class=""></span>
                        </div>
                        <div class="owl-page">
                          <span class=""></span>
                        </div>
                      </div>
                    </div>
                    <p class="text-white-80" style="color: #000!important;">
                      <i class="fa fa-quote-left"></i> I love the ease of transactions on this platform. I also love the simple interface. The green colour is definitely a hit!
                    </p>
                    <div class="testimonia-data">
                      <h3 class="title" style="color: #000!important;">
                        williamson
                      </h3>
                      <div class="rating-stars">
                        <input
                          type="number"
                          readonly="readonly"
                          class="rating-value star"
                          name="rating-stars-value"
                          value="3"
                        />
                        <div class="rating-stars-container mb-3">
                          <div class="rating-star sm">
                            <i class="fa fa-star"></i>
                          </div>
                          <div class="rating-star sm">
                            <i class="fa fa-star"></i>
                          </div>
                          <div class="rating-star sm">
                            <i class="fa fa-star"></i>
                          </div>
                          <div class="rating-star sm">
                            <i class="fa fa-star"></i>
                          </div>
                          <div class="rating-star sm">
                            <i class="fa fa-star"></i>
                          </div>
                        </div>
                        <a
                          href="#"
                          class="testimonial btn btn-primary btn-lg"
                          >View all Testimonials</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleCarouselItem>
            <SimpleCarouselItem class="item text-center">
              <div class="row">
                <div class="col-xl-8 col-md-12 d-block mx-auto">
                  <div class="testimonia">
                    <div class="owl-controls clickable">
                      <div class="owl-pagination">
                        <div class="owl-page ">
                          <span class=""></span>
                        </div>
                        <div class="owl-page">
                          <span class=""></span>
                        </div>
                        <div class="owl-page active">
                          <span class=""></span>
                        </div>
                      </div>
                    </div>
                    <p class="text-white-80" style="color: #000!important;">
                      <i class="fa fa-quote-left"></i> It's been great so far. The user experience has been so smooth as it has been easy for me to navigate my way to do what i want to do. Very cool.
                    </p>
                    <div class="testimonia-data">
                      <h3 class="title" style="color: #000!important;">
                        Sophie Carr
                      </h3>
                      <div class="rating-stars">
                        <input
                          type="number"
                          readonly="readonly"
                          class="rating-value star"
                          name="rating-stars-value"
                          value="3"
                        />
                        <div class="rating-stars-container mb-3">
                          <div class="rating-star sm">
                            <i class="fa fa-star"></i>
                          </div>
                          <div class="rating-star sm">
                            <i class="fa fa-star"></i>
                          </div>
                          <div class="rating-star sm">
                            <i class="fa fa-star"></i>
                          </div>
                          <div class="rating-star sm">
                            <i class="fa fa-star"></i>
                          </div>
                          <div class="rating-star sm">
                            <i class="fa fa-star"></i>
                          </div>
                        </div>
                        <a
                          href="#"
                          class="testimonial btn btn-primary btn-lg"
                          >View all Testimonials</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleCarouselItem>
          </simple-carousel-container>
        <!-- </div> -->
      <!-- </div> -->
    <!-- </div> -->
  </section>
</template>

<script>
/* eslint-disable no-undef */
import { SimpleCarouselContainer, SimpleCarouselItem } from 'vue-simple-carousel';
export default {
  name: "Testimonial",
  components: {
    SimpleCarouselContainer,
    SimpleCarouselItem
  },
   data() {
    return {
      data: [
        "first",
        "second",
        "third"
      ],
      timer: null,
      currentIndex: 0
    };
  },
  
  methods: {
    sync() {
    },
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },
  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  },

  watch: {
    $route: "sync"
  },
  created() {
    this.sync();
  },
  mounted: function() {
    this.startSlide();
  },
};
</script>

<style></style>