<template>
  <!--Start Section-->
  <section class="" id="banner">
    <div>
    <simple-carousel-container loop :watch-it="images">
        <simple-carousel-item v-for="i in [currentIndex]" :key="i">
          <img :src="currentImg" />
        </simple-carousel-item>
    </simple-carousel-container>
  </div>
  </section>
</template>

<script>
/* eslint-disable no-undef */
// require("../../../public/assets/plugins/animate/animate.css");
import { SimpleCarouselContainer, SimpleCarouselItem } from 'vue-simple-carousel';
export default {
  name: "start",
  components: {
    SimpleCarouselContainer,
    SimpleCarouselItem
  },
  props: {
    isLoading: Boolean
  },
  data() {
    return {
      images: [
        "./assets/images/banners/Sellprods.jpg",
        "./assets/images/banners/getthebest.jpg",
        "./assets/images/banners/buyairtime.jpg"
      ],
      timer: null,
      currentIndex: 0,
    };
  },
  methods: {
    imageLoadedChecker() {
      let imageLoaded = 0;
      for (const imageSrc of this.images) {    
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
          imageLoaded++;
          if (imageLoaded === this.images.length) {
            // this.isLoading = false;
            console.log("Done !");
            this.$emit('stop');
          }
        };
      }
    },
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
  watch: {
    $route: "sync"
  },
  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  },
  created() {
    this.sync();
    this.imageLoadedChecker();
  },
  mounted: function() {
    this.startSlide();
  },
};
</script>

<style>
.owl-carousel .owl-dots {
  position: relative;
  z-index: 10;
  bottom: 50px;
}

.home .owl-carousel button.owl-dot {
  width: 20px !important;
  height: 20px !important;
  background: rgba(66, 131, 68, 0.438) !important;
}

/* .owl-carousel button.owl-dot.active {
    background: #4CAF50 !important;
} */

@media (max-width: 991px) {
  section#banner {
    top: -50px !important;
  }
}
</style>
