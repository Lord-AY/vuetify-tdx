<template>
  <!--Section-->
  <section class="sptb" style="background-color: #f6f6f6;">
    <div class="container">
      <div class="section-title center-block text-center">
        <h2 style="display: inline-block; margin-left: 92px">Recent Posts</h2>
        <div class="viewall2">
          <router-link to="/Gridlist"
            >Show All <i class="fa fa-arrow-circle-right"></i
          ></router-link>
        </div>
      </div>
      <ProductLoader v-show="showLoader(comments)"></ProductLoader>
      <!-- <simple-carousel-container loop :watch-it="comments"> -->
        <!-- <simple-carousel-item class="item" v-for="(comment, index) in comments" :key="index"> -->
          <div v-if="comments">
      <slick ref="slick" :options="slickOptions"  v-if="comments">     
          <div class="" v-for="(comment, index) in comments" :key="index">
          <div class="card">
            <div class="item7-card-img">
              <router-link
                  :to="{ path: '/productDetails', query: { id: comment.products.id, cid: comment.products.cid, uid:comment.products.uid }}"
                  >
              </router-link>
              <img
                :src="comment.products.photos[0]"
                alt="img"
                class="cover-image"
              />
            </div>
            <div class="card-body p-4">
              <div class="item7-card-desc d-flex mb-2">
                <a href="#" class="text-muted"
                  ><i class="fa fa-calendar-o text-muted mr-2"></i
                  >{{ format_date(comment.createdAt) }}</a
                >
                <div class="ml-auto">
                  <a href="#" class="text-muted"
                    ><i class="fa fa-comment-o text-muted mr-2"></i>8
                    Comments</a
                  >
                </div>
              </div>
              <router-link
                  class="text-dark"
                  :to="{ path: '/productDetails', query: { id: comment.products.id, cid: comment.products.cid, uid:comment.products.uid }}"
                  >
                <h4 class="font-weight-semibold">
                  {{ comment.products.name }}
                </h4>
              </router-link>
              <p>
                {{ comment.comment }}
              </p>
              <div class="d-flex align-items-center pt-2 mt-auto">
                <img
                  src="@/assets/images/faces/male/6.jpg"
                  class="avatar brround avatar-md mr-3"
                  alt="avatar-img"
                />
                <div>
                  <a href="profile.html" class="text-default">{{ comment.products.creator }}</a>
                  <small class="d-block text-muted">{{ daysago(format_date(comment.createdAt)) }}</small>
                </div>
                <div class="ml-auto text-muted">
                  <a
                    href="javascript:void(0)"
                    class="icon d-none d-md-inline-block ml-3"
                    ><i class="fe fe-heart mr-1"></i
                  ></a>
                  <a
                    href="javascript:void(0)"
                    class="icon d-none d-md-inline-block ml-3"
                    ><i class="fa fa-thumbs-o-up"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </slick>
  </div>
    </div>
  </section>
  <!--Section-->
</template>

<script>
/* eslint-disable no-undef */
import Slick from 'vue-slick';
import ProductLoader from "@/components/loaders/Productloader";
import moment from "moment";
import ash from "lodash";
import { SimpleCarouselContainer, SimpleCarouselItem } from 'vue-simple-carousel';
export default {
  name: "RecentPost",
  data() {
    return {
      slickOptions: {
          //options can be used from the plugin documentation
          slidesToShow: 4,
          infinite: true,
          accessibility: true,
          adaptiveHeight: false,
          arrows: false,
          dots: false,
          draggable: true,
          edgeFriction: 0.30,
          swipe: true,
          autoplay: true,
          nextArrow: '<i class="fa fa-arrow-right"></i>',
          prevArrow: '<i class="fa fa-arrow-left"></i>'
      }
    }
  },
  props: {
    comments: [Object, Array]
  },
  components: {
    ProductLoader,
    Slick
  },
  methods: {
    showLoader(data) {
      if (ash.isEmpty(data) || data == undefined || data == null) {
        return true;
      } else {
        return false;
      }
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },
    daysago(dateago){
      if (dateago){
        return  moment.duration(moment().diff(dateago)).humanize() + " ago";
      }
    },
    sync() {
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      this.sync();
    })
  },
  watch: {
    $route: "sync"
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
  created() {
    this.sync();
    // console.log(this.comments);
  }
};
</script>

<style></style>