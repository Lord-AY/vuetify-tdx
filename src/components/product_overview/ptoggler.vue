<template>
  <!--Start Section-->
  <div class="col-md-9 col-lg-9 col-xs-12">
    <!-- Row -->
    <div class="row">
      <div class="col-md-12 col-xs-12 col-md-search-tx col-sm-12 col-lg-12">
        <div class="clearfix"></div>
        <div class="listingTopFilterBar">
          <div class="col-md-7 col-xs-12 col-sm-6 no-padding">
            <ul class="filterAdType">
              <li class="active">
                <a
                  href="javascript:void(0)"
                  style="background-color: #e0e0e0; color: #232323;"
                >
                  Found Ads
                  <small>(12)</small>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-5 col-xs-12 col-sm-6 no-padding">
            <div class="header-listing">
              <h6>Sort by:</h6>
              <div class="custom-select-box">
                <form method="get">
                  <select name="sort" id="order_by" class="select2 custom-select">
                    <option value="id-desc">Newest To Oldest</option>
                    <option value="id-asc">Oldest To New</option>
                    <option value="title-asc">Alphabetically [a-z]</option>
                    <option value="title-desc">Alphabetically [z-a]</option>
                    <option value="price-desc">Highest price</option>
                    <option value="price-asc">Lowest price</option>
                  </select>
                </form>
              </div>
              <div class="grid-list">
                <i
                  class="switch grid fa fa-th product-arrangement-icon"
                  @click="switchComponent('paginatedGrid')"
                  :disabled="currentComp === 'paginatedGrid'"
                ></i>
                <i
                  class="switch list fa fa-list product-arrangement-icon"
                  @click="switchComponent('listprops')"
                  :disabled="currentComp === 'listprops'"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="clearfix"></div>
      <!-- Ads Archive -->
      <!-- Ads Archive End -->
      <div class="clearfix"></div>
    </div>
  </div>
  <!--/Section-->
</template>

<script>
require("../../../public/assets/plugins/select2/select2.min.css");
import { bus } from "../../main.js";
export default {
  name: "ptoggler",
  props: {
    currentComp: {
      type: String,
      required: true
    }
  },

  methods: {
    switchComponent(comp) {
      bus.$emit("switchComp", comp);
    }
  }
};
</script>

<style scoped>
.col-md-12.col-xs-12.col-md-search-tx.col-sm-12.col-lg-12 {
    padding-right: 0px!important;
    padding-left: 0px!important;
}
small {
  font-size: 85%;
}
i.switch {
  background: none;
  border: 0px solid black;
  margin: 0;
  cursor: pointer;
}
i.switch[disabled="disabled"] {
  color: lightgray;
  border-color: lightgray;
}

i.switch:not([disabled="disabled"]):hover {
  background-color: black;
  border-color: gray;
  color: lightgray;
}
i.list {
  border-color: red;
  color: red;
}
i.grid {
  border-color: green;
  color: green;
}
.select2 .select2-container .select2-container--default {
  width: 160px!important;
}

</style>
