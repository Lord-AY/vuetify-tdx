<template>
  <!--Section-->
  <section class="categories">
    <div class="container">
      <div class="transparency">
        <div
          class="card  mb-0 box-shadow-0 new-search-box"
          style="padding-bottom: 10px;"
        >
          <div class="card-body new-search">
            <div class="row search-row no-padding">
              <div class="col-md-12">
                <div class="form row">
                  <!-- <div class="col-xl-1 col-lg-2"></div> -->
                  <div
                    class="main-search-spacing form-group col-xl-5 col-lg-5 col-md-12 mb-0  "
                  >
                    <input
                      type="text"
                      class="main-search form-control input-lg br-tr-md-0 br-br-md-0 "
                      id="text4"
                      placeholder="What are you looking for?"
                    />
                    <span
                      ><i class="fa fa-bullhorn location-gps mr-1"></i
                    ></span>
                  </div>
                  <div
                    class="main-search-spacing form-group col-xl-3 col-lg-3 col-md-12 mb-0  "
                  >
                    <input
                      type="text"
                      class="main-location form-control input-lg br-tr-md-0 br-br-md-0"
                      id="text3"
                      placeholder="Location"
                    />
                    <span
                      ><i class="fa fa-map-marker location-gps mr-1"></i
                    ></span>
                  </div>
                  <div
                    class="main-search-spacing form-group col-xl-3 col-lg-3 col-md-12 select2-lg  mb-0 "
                  >
                    <select
                      class="main-category form-control select2-show-search  border-bottom-0 select-home-page "
                      data-placeholder="Property Type"
                      style="padding-left: 40px!important; width: 100%!important"
                    >
                      <optgroup label="Categories">
                        <!-- <option>Category</option> -->
                        <option value="1"><a href="#">Phones & Tablets</a></option>
                        <option value="2">Real Estate</option>
                        <option value="3">Electronics</option>
                        <option value="4">Fashion</option>
                        <option value="5">Jobs</option>
                        <option value="6">Health</option>
                        <option value="7">Agriculture</option>
                      </optgroup>
                    </select>
                    <!-- <span><i class="fa fa-bars location-gps mr-1"></i></span> -->
                  </div>

                  <div class="main-search-button-container mb-0">
                    <a
                      href="#"
                      class="main-search-button btn btn-lg tx-btn-color br-tl-md-0 br-bl-md-0 "
                      ><i class="fa fa-search"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <hr class="mb-3 mt-5" />
            <div class="vas-grid">
              <div class="no-padding text-center">
                <a href="#">
                  <div class="d-flex d-catmb row">
                    <div class="col-sm-auto no-padding">
                      <span class=" icon-service1 text-primary">
                        <i
                          class="fa fa-mobile fa-5x"
                          style="color: #4CAF50 !important; font-size: 42px !important;"
                        ></i>
                      </span>
                    </div>
                    <div
                      class="col-sm-auto no-padding vas-text"
                      style="padding: 0px !important;"
                    >
                      <h3 class=" mb-0 font-weight-bold value-added-tx">
                        <router-link to="/listbillers">Airtime or Data</router-link>
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div class="text-center no-padding">
                <a href="#">
                  <div class="d-flex d-catmb row">
                    <div class="col-sm-auto no-padding">
                      <span class=" icon-service1 text-primary">
                        <i
                          class="fa fa-television fa-5x"
                          style="color: #4CAF50 !important; font-size: 42px;"
                        ></i>
                      </span>
                    </div>
                    <div
                      class="col-sm-auto no-padding vas-text"
                      style="padding: 0px !important;"
                    >
                      <h3 class=" mb-0  font-weight-bold value-added-tx">
                        <router-link to="/listbillers">TV Subscription</router-link>
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div class="text-center no-padding">
                <a href="#">
                  <div class="d-flex d-catmb row">
                    <div class="col-sm-auto no-padding">
                      <span class=" icon-service1 text-primary">
                        <i
                          class="fa fa-bolt fa-5x"
                          style="color: #4CAF50 !important; font-size: 42px;"
                        ></i>
                      </span>
                    </div>
                    <div
                      class="col-sm-auto no-padding vas-text"
                      style="padding: 0px !important;"
                    >
                      <h3 class=" mb-0 font-weight-bold value-added-tx">
                       <router-link to="/listbillers">Electricity Units</router-link>
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div class="text-center no-padding mobile-hidden">
                <a href="#">
                  <div class="d-flex d-catmb row">
                    <div class="col-sm-auto no-padding">
                      <span class=" icon-service1 text-primary">
                        <i
                          class="fa fa-ellipsis-h fa-5x"
                          style="color: #4CAF50 !important; font-size: 42px;"
                        ></i>
                      </span>
                    </div>
                    <div
                      class="col-sm-auto no-padding vas-text"
                      style="padding: 0px !important;"
                    >
                      <h3
                        class=" mb-0 font-weight-bold value-added-tx"
                        style=""
                      >
                        <router-link to="/listbillers">More Services</router-link>
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/Section-->
</template>

<script>
export default {
  name: "Categories"
};
</script>

<style>
select + span.select2-container--default, .select2-container--open {
  width: 100%!important;
}
select + .select2.select2-container.select2-container--default.select2-container--below.select2-container--open {
  width: 100%!important;
}
.select2-container .select2-selection--single .select2-selection__rendered {
  padding-left: 40px!important;
}
.select2-container--open, span.select2-container--default {
  width: 100%!important;
}

.select2.select2-container.select2-container--default.select2-container--below.select2-container--open {
  width: 100%!important;
}

span.select2-container--open {
  width: initial!important;
}

.select2-hidden-accessible {
     padding-left: 40px!important
}

.select2-hidden-accessible {
     padding: 0px!important
}
/* .transparency {
  padding: 15px!important;
    background-color: rgba(255, 255, 255, 0.5)!important;
    position: relative!important;
}*/
.main-search-spacing {
  padding-left: 2px !important;
  padding-right: 2px !important;
}

.main-search-button {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
  transition: all ease-in 300ms;
}

.main-search-button:hover {
  color: #fff !important;
  box-shadow: 0 6px 16px -6px rgba(76, 175, 80, 0.9) !important;
}

@media (max-width: 567px) {
  .col-xs-3 {
    -webkit-box-flex: 0;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-sm-auto.no-padding {
    padding-right: 0.75rem !important;
    padding-left: 0.75rem !important;
  }
}
.icon-service1 i {
  font-size: 30px !important;
}

.vas-text {
  display: flex;
  align-items: center;
  /* font-size:  */
}
.vas-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: auto;
}
@media (min-width: 768px) {
  .vas-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    grid-auto-rows: auto;
  }
}
</style>
