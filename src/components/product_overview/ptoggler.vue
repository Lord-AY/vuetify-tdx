<template>
  <!--Start Section-->
  <!-- Row -->
  <div class="row">
    <div class="col-md-12 col-xs-12 col-md-search-tx col-sm-12 col-lg-12">
      <div class="clearfix"></div>
      <div class="listingTopFilterBar">
        <div class="col-md-7 col-xs-12 col-sm-6 no-padding">
          <ul class="filterAdType" style="font-size: 12px">
            <li class="active">
              <a href="javascript:void(0)" style="color: #232323;">
                Found Ads
                <small v-if="list.length == 0">({{ ads.length }})</small>
                <small v-else>({{ list.length }})</small>
              </a>
            </li>
            <li class="">
              <a href="javascript:void(0)" style="color: #232323;">
                Most Popular Sellers
                <small v-if="list.length == 0">({{ ads.length }})</small>
                <small v-else>({{ list.length }})</small>
              </a>
            </li>
            <li class="">
              <a href="javascript:void(0)" style="color: #232323;">
                Today
                <small v-if="list.length == 0">({{ ads.length }})</small>
                <small v-else>({{ list.length }})</small>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-5 col-xs-12 col-sm-6 no-padding">
          <div class="header-listing">
            <h6>Sort by:</h6>
            <div class="custom-select-box">
              <form method="get">
                <select
                  name="sort"
                  id="order_by"
                  class="select2 custom-select"
                  @change="filterSelection($event)"
                >
                  <option value="1" v-if="list.length == 0"
                    >Newest To Oldest</option
                  >
                  <option value="2" v-else>Newest To Oldest</option>
                  <option value="2" v-if="list.length == 0"
                    >Oldest To New</option
                  >
                  <option value="1" v-else>Oldest To New</option>
                  <option value="3" v-if="list.length == 0"
                    >Alphabetically [a-z]</option
                  >
                  <option value="4" v-else>Alphabetically [a-z]</option>
                  <option value="4" v-if="list.length == 0"
                    >Alphabetically [z-a]</option
                  >
                  <option value="3" v-else>Alphabetically [z-a]</option>
                  <option value="5" v-if="list.length == 0"
                    >Highest price</option
                  >
                  <option value="6" v-else>Highest price</option>
                  <option value="6" v-if="list.length == 0"
                    >Lowest price</option
                  >
                  <option value="5" v-else>Lowest price</option>
                </select>
              </form>
            </div>
            <div class="grid-list">
              <i
                class="switch grid fa fa-th product-arrangement-icon"
                @click="switchComponent('paginatedGrid')"
                :disabled="currentComp === 'listprops'"
              ></i>
              <i
                class="switch list fa fa-list product-arrangement-icon"
                @click="switchComponent('listprops')"
                :disabled="currentComp === 'paginatedGrid'"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Ads Archive -->
    <!-- Ads Archive End -->
    <div class="clearfix"></div>
  </div>
  <!--/Section-->
</template>

<script>
require("../../../public/assets/plugins/select2/select2.min.css");
import { bus } from "../../main.js";
export default {
  name: "ptoggler",
  data() {
    return {
      filter: null
    };
  },
  props: {
    currentComp: {
      type: String,
      required: true
    },
    ads: [Object, Array],
    list: [Array]
  },

  methods: {
    switchComponent(comp) {
      bus.$emit("switchComp", comp);
    },
    filterSelection(e) {
      // console.log(e.target.value);
      // console.log(e);
      // console.log("function filter called");
      // this.filter = e.target.value;
      if (e.target.value) {
        // console.log("func called");
        if (this.list.length == 0) {
          const payload = {
            type: e.target.value,
            data: this.ads
          };
          // console.log(payload);
          this.$emit("selectedFilter", payload);
        } else {
          const payload = {
            type: e.target.value,
            data: this.list
          };
          // console.log(payload);
          this.$emit("selectedFilter", payload);
        }
      } else {
        // console.log("function called");
        if (this.list.length == 0) {
          const payload = {
            type: e,
            data: this.ads
          };
          // console.log(payload);
          this.$emit("selectedFilter", payload);
        } else {
          const payload = {
            type: e,
            data: this.list
          };
          // console.log(payload);
          this.$emit("selectedFilter", payload);
        }
      }
    },
    mounted() {
      this.filterSelection(1);
      // console.log("function called");
    }
  },
  watch: {
    // filter: {
    //   immediate: true,
    //   handler: function(filter) {
    //     console.log("filter selected");
    //     console.log(filter);
    //     this.filterSelection(filter);
    //   }
    // },
  }
};
</script>

<style scoped>
.col-md-12.col-xs-12.col-md-search-tx.col-sm-12.col-lg-12 {
  padding-right: 0px !important;
  padding-left: 0px !important;
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

i.switch[disabled="disabled"]:hover {
  background-color: green;
  /* border-color: gray; */
  color: white;
  padding: 2px 4px;
}
i.list {
  border-color: #232323;
  color: #232323;
}
i.grid {
  border-color: #232323;
  color: #232323;
}
.select2 .select2-container .select2-container--default {
  width: 160px !important;
}
.grid-list i {
  font-size: 20px;
}
</style>
