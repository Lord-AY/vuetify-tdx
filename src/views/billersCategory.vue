<template>
  <div id="billercategory">
    <div class="section-padding  gray page-search">
      <div class="container">
          <!-- Row -->
          
          <div class="row">
              <div class="col-md-12 col-lg-12 col-xs-12">
                  <!-- Row -->
                  <br>
                  <div class="row">
                      <div class="clearfix"></div>
                      <div class="list-style-1">
                          <div class="panel with-nav-tabs panel-default">
                              <div class="panel-body">
                                  <div class="tab-content">
                                      <div class="tab-panel active">
                                          billers Category name
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex';
import Loading from "vue-loading-overlay";

export default {
  data() {
    return {};
  },
computed: {
  // ...mapGetters("valueadded", []),
},
methods: {
  ...mapActions("valueAdded", ["getbillercategory"]),
  sendBillerCategory() {
    const payload = {
      categoryId: this.$route.params.category
    }
    this.getbillercategory(payload);
  }
},
  created() {
    this.sendBillerCategory();
  }
};
</script>
<style>
  
</style>
