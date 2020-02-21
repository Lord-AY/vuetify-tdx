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
        <ProductLoader v-show="showLoader(categories)"></ProductLoader>
      </div>
      <slick ref="slick" :options="slickOptions"  v-if="categories">
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
                  <p class="badge badge-pill badge-primary-tx badge-primary " style="padding: 0 4px!important; border-radius: 20px!important;font-size: 14px!important; line-height: 1!important">
                  <span class="badge-tx" style="margin: 4px 12px !important; font-size: 14px!important; line-height: 1!important">{{ selectCategory(category.id) }}</span>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slick>
      <!-- </div> -->
    </div>
  </section>
  <!--/Section-->
</template>

<script>
/* eslint-disable no-undef */
import Slick from 'vue-slick';
import './../../../node_modules/slick-carousel/slick/slick.css';
import ProductLoader from "@/components/loaders/Productloader";
import ash from "lodash";
export default {
  name: "SPTB",
  data() {
    return {
      categoryCount :null,
      slickOptions: {
          //options can be used from the plugin documentation
          slidesToShow: 4,
          infinite: true,
          accessibility: true,
          adaptiveHeight: false,
          arrows: true,
          dots: false,
          draggable: true,
          edgeFriction: 0.30,
          swipe: true,
          cssEase: "ease",
          autoplay: true,
          nextArrow: '<i class="fa fa-arrow-right nextArrowBtn"></i>',
          prevArrow: '<i class="fa fa-arrow-left prevArrowBtn"></i>'
      }
    }
  },
  props: {
    categories: [Object, Array],
    ads: [Object, Array]
  },
  components: {
    ProductLoader,
    Slick
  },
  methods: {
    countEachCategory(){
      var ress = this.ads.reduce(function(obj, v) {
        obj[v.cid] = (obj[v.cid] || 0) + 1;
        return obj;
      }, {})
      this.categoryCount = ress;
    },
    selectCategory(catid){
      if(this.categoryCount[catid]){
        return this.categoryCount[catid];
      }else{
        return 0;
      }
    },
    showLoader(data) {
      if (ash.isEmpty(data) || data == undefined || data == null) {
        return true;
      } else {
        return false;
      }
    },
    sync() {

    },
    next() {
      this.$refs.slick.next()
    },
    prev() {
      this.$refs.slick.prev()
    },
  },
  watch: {
    $route: "sync"
  },
  created() {
    this.countEachCategory();
    // console.log(this.categories);
    this.sync();
  },
  beforeUpdate() {
      if (this.$refs.slick) {
          this.$refs.slick.destroy();
      }
  },
  updated() {
      this.$nextTick(function () {
          if (this.$refs.slick) {
              this.$refs.slick.create(this.slickOptions);
          }
      });
  },
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

<style scoped>
  .fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:600px;
  width:100%
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

.nextArrowBtn{
    position: absolute;
    z-index: 1000;
    top: 50%;
    right: 0;
    color: black;
}
.prevArrowBtn{
    position: absolute;
    z-index: 1000;
    top: 50%;
    left: 0;
    color: black;
}

</style>
