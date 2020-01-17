<template>
  <div id="categories">
    <!-- <section>
      <div
        class="bannerimg cover-image bg-background3"
        data-image-src="@/assets/images/banners/banner2.jpg"
      >
        <div class="header-text mb-0">
          <div class="container">
            <div class="text-center text-white">
              <h1 class="">Categories</h1>
              <ol class="breadcrumb text-center">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                <li
                  class="breadcrumb-item active text-white"
                  aria-current="page"
                >
                  Categories
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!--/Breadcrumb-->

    <!--Section-->
    <section class="sptb">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card mb-0">
              <div class="card-header">
                <h3 class="card-title">Categories</h3>
              </div>
              <div class="card-body">
                <div class="row">
                  <div
                    class="col-lg-4 col-md-6"
                    v-for="category in categories"
                    :Key="category.id"
                  >
                    <div class=" mb-5">
                      <div class="card-header border border-bottom-0 bg-light">
                        <a href="#" class="text-dark"
                          ><h3 class="card-title">
                            <img
                              :src="
                                `https://www.tradexplora.com.ng/media/${category.icon}` ||
                                  './assets/images/categories/car.svg'
                              "
                              alt="img"
                              class="h-5"
                            />
                            <span class="category">{{ category.name }}</span>
                            
                          </h3></a
                        >
                      </div>
                      <div v-if="category.subcategory">
                        <div class="card-body border">
                          <ul class="list-unstyled widget-spec sub-category p-1 mb-0">
                            <!-- {{ category.subcategory }} -->
                            <li class="" v-for="subcategory in category.subcategory" :Key="subcategory.id">
                              <a href="#" class="text-dark"
                                ><i
                                  class="typcn typcn-chevron-right text-primary"
                                ></i>
                                {{ subcategory.name }}</a
                              >
                            </li>
                            <!--                        
                              <li class="mb-0">
                                <a href="#" class="text-primary"> View more..</a>
                              </li>
                            -->                        
                            <div  class="selector" v-if="catego.length > 2">
                              <li class="mb-0" @click="limit2 = null" v-show="limitBtn2">
                                View more
                              </li>
                              <li class="mb-0" @click="limit2 = 3" v-show="!limitBtn2"
                                >Show Less
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                      <div v-else>There are no subcategories...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/Section-->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      limit2: 2,
      limitBtn2: true,
      catego: Object,
    };
  },
  computed: {
    ...mapGetters("product", ["categories"]),
    toggleCategory() {
      return this.limit2
        ? this.catego.slice(0, this.limit2)
        : this.catego;
    },
  },
  watch: {
    $route: "sync",
    limit2: {
      handler: function(limit) {
        if (limit == null) {
          this.limitBtn2 = false;
        } else {
          this.limitBtn2 = true;
        }
      }
    },
  },
  methods: {
    ...mapActions("product", ["fetchAllCategories", "fetchSubCategories"]),
    sync() {
    },
    sendFetchSubCategories() {
      let categories = this.categories
      for(let category in categories) {
         const payload =  {
            cid: categories[category].id
          }
        this.fetchSubCategories(payload);
      }
    }
  },
  created() {
    this.fetchAllCategories();
    this.sendFetchSubCategories();
    this.catego = this.categories;
  }
};
</script>
<style>
  .selector {
    cursor: pointer
  }
  .sub-category a{
    font-size: 16px;
  }
  .card-title span.category {
    padding-left: 10px;
  }
</style>
