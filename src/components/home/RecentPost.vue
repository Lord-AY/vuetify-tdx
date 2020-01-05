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
      <content-loader
        :height="300"
        :width="856"
        :speed="2"
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        v-show="showLoader2(ads)"
      >
        <rect x="23.37" y="22.27" rx="0" ry="0" width="196.35" height="89.3" />
        <rect
          x="26.22"
          y="133.27"
          rx="0"
          ry="0"
          width="140.28"
          height="12.48"
        />
        <rect
          x="40.22"
          y="160.27"
          rx="0"
          ry="0"
          width="129.49"
          height="11.52"
        />
        <rect x="29.22" y="189.84" rx="0" ry="0" width="143.88" height="12.8" />
        <rect x="98.23" y="269.67" rx="0" ry="0" width="0" height="0" />
        <circle cx="46.14" cy="265.58" r="26.91" />
        <rect
          x="84.23"
          y="253.67"
          rx="0"
          ry="0"
          width="119.28"
          height="11.76"
        />
        <rect x="91.23" y="279.67" rx="0" ry="0" width="61" height="9" />
        <rect
          x="278.88"
          y="21.03"
          rx="0"
          ry="0"
          width="208.13"
          height="86.62"
        />
        <rect
          x="284.49"
          y="120.86"
          rx="0"
          ry="0"
          width="143.09"
          height="12.73"
        />
        <rect
          x="299.69"
          y="150.51"
          rx="0"
          ry="0"
          width="132.08"
          height="11.75"
        />
        <rect
          x="284.51"
          y="181.67"
          rx="0"
          ry="0"
          width="146.76"
          height="12.03"
        />
        <rect x="349.54" y="248.79" rx="0" ry="0" width="127.8" height="12.6" />
        <rect x="356.68" y="273.27" rx="0" ry="0" width="62.22" height="9.18" />
        <circle cx="309.67" cy="265.02" r="27.45" />
        <rect x="544.23" y="19.27" rx="0" ry="0" width="206.17" height="89.3" />
        <rect
          x="548.22"
          y="130.67"
          rx="0"
          ry="0"
          width="150.1"
          height="12.11"
        />
        <rect
          x="562.22"
          y="154.27"
          rx="0"
          ry="0"
          width="116.54"
          height="10.37"
        />
        <rect
          x="548.22"
          y="177.67"
          rx="0"
          ry="0"
          width="156.83"
          height="10.24"
        />
        <rect
          x="603.81"
          y="243.09"
          rx="0"
          ry="0"
          width="129.22"
          height="12.74"
        />
        <rect x="610.23" y="267.67" rx="0" ry="0" width="61" height="11.7" />
        <circle cx="565.14" cy="260.58" r="26.91" />
      </content-loader>
      <div
        id="defaultCarousel"
        class="owl-carousel Card-owlcarousel owl-carousel-icons"
        v-show="!showLoader2(ads)"
      >
      <div class="item" v-for="comment in comments" :key="comment.id">
          <div class="card mb-0">
            <div class="item7-card-img">
              <a href="blog-details.html"></a>
              <img
                src="@/assets/images/products/pictures/ed4.jpg"
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
                  >May-19-2019</a
                >
                <div class="ml-auto">
                  <a href="#" class="text-muted"
                    ><i class="fa fa-comment-o text-muted mr-2"></i>8
                    Comments</a
                  >
                </div>
              </div>
              <a href="blog-details.html" class="text-dark"
                ><h4 class="font-weight-semibold">3 Bedroom Apartment</h4></a
              >
              <p>
                A 3 bedroom penthouse seated on a 600 sqm land located inside
                Good Heart estate (new site lugbe) is up for sale.
              </p>
              <div class="d-flex align-items-center pt-2 mt-auto">
                <img
                  src="@/assets/images/faces/male/6.jpg"
                  class="avatar brround avatar-md mr-3"
                  alt="avatar-img"
                />
                <div>
                  <a href="profile.html" class="text-default">Loyd Nolf</a>
                  <small class="d-block text-muted">15 days ago</small>
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
export default {
  name: "RecentPost",
  props: {
    comments: Object
  },
  components: {
    ContentLoader
  },
  methods: {
    showLoader2(data) {
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
  }
};
</script>

<style></style>
