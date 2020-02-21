<template>
  <div class="main-content-area clearfix">
    <section class="section-padding  compare-detial gray ">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-xs-12 col-sm-12">
            <div class="table-responsives">
              <table class="selection-list">
                <tbody>
                  <tr>
                    <td>Select Product&#039;s You Want To Compare Against</td>
                    <td>
                      <div class="form-group">
                        <input type="text" class="form-control make" v-model="pname" disabled="this field is not editable" />
                      </div>
                    </td>
                    <td>
                      <div class="form-group">
                        <select
                          id="keyword2"
                          name="keyword2"
                          class="form-control make"
                          @change="setCompare($event)"
                        >
                          <option value="">Select</option>
                          <option
                            v-for="result in getComparedProduct"
                            :key="result.id"
                            :value="result.id"
                            >{{ result.name }}</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td colspan="2">
                      <button
                        :disabled="selected === ''"
                        type="button"
                        class="btn btn-block btn-theme"
                        id="comparison_button"
                        @click.prevent="sendCompare"
                      >
                        <span class="spinner-border" v-show="submitSpinner"></span>
                        Compare
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div id="populate_data" v-if="comparedResult">
                <table id="reviews-data">
                  <tbody>
                    <tr>
                      <td>Images</td>
                      <td>
                        <img
                          class="img-responsive"
                          alt=""
                          :src="singleProduct.photos[0]"
                        />
                        <h4>{{ singleProduct.name }}</h4>
                      </td>
                      <td>
                        <img
                          class="img-responsive"
                          alt=""
                          :src="comparedSingleProduct.photos[0]"
                        />
                        <h4>{{ comparedSingleProduct.name }}</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <ul class="accordion">
                  <li id="first_accor" class="open">
                    <h3 class="accordion-title">
                      <a href="#" class="accord-title-link">General</a>
                    </h3>
                    <div class="accordion-content" style="display: block;">
                      <table>
                        <tbody>
                          <tr v-for="(props, index) in properties(getSingleCategory.inputFields)" :key="index">
                            <td>{{props}}</td>
                            <td>{{singleProduct.inputFields[index]}}  </td>
                            <td>{{ comparedResult.inputFields[index]}} </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                  <li id="first_accor" v-for="(props, index) in properties(getSingleCategory.checkFields)"  :key="index">
                    <h3 class="accordion-title" >
                      <a href="javascript:void(0);">{{ props }}</a>
                      <a>{{singleProduct.checkFields[index]}}</a>
                      <a>{{ comparedResult.checkFields[index]}} </a>
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ash from "lodash";
export default {
  name: "compare",
  data(){
    return{
       pname:null,
       comparedResult: null,
       selected: '',
       isdisabled: true,
       submitSpinner: false,
    }
  },
  methods: {
    ...mapActions("product", ["fetchComparedProducts", "comparedProduct","fetchSingleCategory"]),
    properties(string){
      let splicted =  ash.split(string, ",");
      return splicted;
    },
    singleCategory() {
      this.isLoading = true;
      const payload = {
        cid: this.$route.query.cid
      };
      this.fetchSingleCategory(payload);
    },
    compareProduct(){
      let payload = {
        cid:this.$route.query.cid,
        uid:this.$route.query.uid,
        name:this.$route.query.name,
      }
      this.fetchComparedProducts(payload);
    },
    setCompare(ev){
      this.selected = ev.target.value;
      this.isdisabled = false;
      this.singleCategory();
    },
    sendCompare(){
      this.submitSpinner = true;
      const payload = {
        id: this.selected
      };
      // console.log(ev.target.value)
      this.comparedProduct(payload).then(data =>{
        this.comparedResult = this.comparedSingleProduct;
        this.submitSpinner = false;
        this.selected = '';
      });
    }
  },
  computed: {
    //getComparedProduct stands for dropdown
    ...mapGetters("product", ["getComparedProduct", "comparedSingleProduct", "singleProduct", "getSingleCategory"])
  },
  beforeMount() {
  },
  created() {
  },
  mounted: function(){
    this.pname = this.$route.query.name;
    this.compareProduct();
  }
};
</script>

<style></style>
