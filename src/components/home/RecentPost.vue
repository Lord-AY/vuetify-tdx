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
      <div
        id="defaultCarousel"
        class="owl-carousel Card-owlcarousel owl-carousel-icons"
        v-show="!showLoader(comments)"
      >
        <div class="item" v-for="comment in comments" :key="comment.id">
          <div class="card mb-0">
            <div class="item7-card-img">
              <router-link
                :to="
                  `/ProductDetails/${comment.products.id}/${comment.products.cid}/${comment.products.uid}`"
              ></router-link>
              <img
                :src="comment.products.photos[0]"
                alt="img"
                class="cover-image"
              />
              <!-- <div class="item7-card-text">
              <span class="badge badge-success">3BHK Flats</span>
            </div> -->
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
                :to="
                  `/ProductDetails/${comment.products.id}/${comment.products.cid}/${comment.products.uid}`"
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
      </div>
    </div>
  </section>
  <!--Section-->
</template>

<script>
/* eslint-disable no-undef */
import ProductLoader from "@/components/loaders/Productloader";
import moment from "moment";
import ash from "lodash";
export default {
  name: "RecentPost",
  props: {
    comments: [Object, Array]
  },
  components: {
    ProductLoader
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
      $(document).ready(() => {
        // ______________Owl-carousel-icons
        var owl = $(".owl-carousel-icons");
        owl.owlCarousel({
          margin: 25,
          loop: true,
          nav: true,
          autoplay: true,
          dots: false,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            1300: {
              items: 3
            }
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
    // console.log(this.comments.products);
  }
};
</script>

<style></style>
