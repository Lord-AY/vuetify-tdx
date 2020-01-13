<template>
  <div id="categories">
    <section>
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
    </section>
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
                              src="@/assets/images/categories/apartment.png"
                              class="h-5"
                              alt=""
                            />
                            {{ category.name }}
                          </h3></a
                        >
                      </div>
                      <div v-if="category.subcategory">
                      <div class="card-body border">
                        <ul class="list-unstyled widget-spec  p-1 mb-0">
                          <li class="" v-for="subcat in category.subcategory" :Key="subcat.id">
                            <a href="#" class="text-dark"
                              ><i
                                class="typcn typcn-chevron-right text-primary"
                              ></i>
                              {{ subcat.name }} </a
                            >
                          </li>
                          <li class="mb-0">
                            <a href="#" class="text-primary"> View more..</a>
                          </li>
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
    return {};
  },

  computed: {
    ...mapGetters("product", ["categories"]),
    // ...mapState("product", ["categories"])
  },

  methods: {
    ...mapActions("product", ["fetchAllCategories", "fetchSubCategories"]),
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
  }
};
</script>
<style></style>
