<template>
  <!--Start Section-->

  <div class="sidebar">
    <div
      class="panel-group"
      id="accordion1"
      role="tablist"
      aria-multiselectable="true"
    >
      <div class="panel panel-default" id="red-titl">
        <div class="panel-heading red-title" id="headingMain" style="display: flex; justify-content: space-between; align-items: center; padding-right: 15px;">
          <h4 class="panel-title panel-title-side">
            <!-- <i class="more-less glyphicon glyphicon-plus"></i> -->
            Categories
          </h4>
          <span>{{ categories.length }} Categories</span>
        </div>
        <div class="panel-collapse">
          <div class="panel-body">
            <ul class="sub-categories">
               <li
                @click.prevent="resetProductsData"
              >
              <a href="">All Categories</a>
                <span>{{ categories.length }} categories</span>
              </li>
              <li
                v-for="(category, index) in categories"
                :key="index"
                @click.prevent="filterSelection(category)"
              >
                <a href="">{{ category.name }} </a>
                <span> {{ selectCategory(category.id) }} ads</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Heading -->
      <!-- </div> -->
      <!-- </div> -->
      <div
        class="panel-group"
        id="accordion"
        role="tablist"
        aria-multiselectable="true"
      >
        <!-- </div> -->
      </div>
    </div>
  </div>
  <!--/Section-->
</template>

<script>
require("../../../public/assets/plugins/select2/select2.min.css");
import { bus } from "../../main.js";
export default {
  name: "gsidebar",
  data() {
    return {
      categoryCount :null,
      cloneAds: null,
    };
  },
  props: {
    categories: [Object, Array],
    ads: [Object, Array],
    selected: [String, Number],
    list: [Array],
  },

  methods: {
    countEachCategory(){
      var ress = this.ads.reduce(function(obj, v) {
        obj[v.cid] = (obj[v.cid] || 0) + 1;
        return obj;
      }, {})
      this.categoryCount = ress;
    },
    filterSelection(category) {
      const payload = {
        type: category.id,
        data: this.ads,
      };
      // console.log(payload);
      this.$emit("categoryChoice", payload);
    },
    selectCategory(catid){
      if(this.categoryCount[catid]){
        return this.categoryCount[catid];
      }else{
        return 0;
      }
    },
    resetProductsData() {
      this.$emit("reset");
      this.$emit("resetLimit");
    }
  },
  created(){
    this.countEachCategory();
    this.cloneAds = this.ads;
    // console.log(this.categoryCount[1]);
  }
};
</script>

<style scoped>
.panel-title-side {
  padding: 10px 15px;
}
.panel-title-tx {
  margin-top: 12px;
}

.sub-categories li {
  margin: 12px 0;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  /* opacity: 0.7; */
}
.sub-categories li span {
  /* background-color: #232323; */
  color: #232323;
  /* padding: 2px 6px; */
  /* border-radius: 50%; */
  font-size: 14px;
  opacity: 0.5;
  font-weight: 600
}
</style>
