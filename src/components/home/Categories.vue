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
                  <div class="form-group  col-xl-4 col-lg-4 col-md-12 mb-0  ">
                    <input
                      type="text"
                      class="form-control input-lg br-tr-md-0 br-br-md-0 main-search"
                      id="text4"
                      placeholder="What are you looking for?"
                    />
                    <span
                      ><i class="fa fa-bullhorn location-gps mr-1"></i
                    ></span>
                  </div>
                  <div class="form-group col-xl-3 col-lg-3 col-md-12 mb-0  ">
                    <input
                      type="text"
                      class="form-control input-lg br-tr-md-0 br-br-md-0 main-location"
                      id="text4"
                      placeholder="Location"
                    />
                    <span
                      ><i class="fa fa-map-marker location-gps mr-1"></i
                    ></span>
                  </div>
                  <div
                    class="form-group col-xl-4 col-lg-4 col-md-12 select2-lg  mb-0 "
                  >
                    <select
                      class="form-control select2-show-search  border-bottom-0 select-home-page main-category"
                      data-placeholder="Property Type"
                    >
                      <optgroup label="Categories">
                        <option>Category</option>
                        <option value="1">Phones & Tablets</option>
                        <option value="2">Real Estate</option>
                        <option value="3">Electronics</option>
                        <option value="4">Fashion</option>
                        <option value="5">Jobs</option>
                        <option value="6">Health</option>
                        <option value="7">Agriculture</option>
                      </optgroup>
                    </select>
                    <span><i class="fa fa-bars location-gps mr-1"></i></span>
                  </div>

                  <div class="mb-0 main-search-button-container">
                    <a
                      href="#"
                      class="btn btn-lg tx-btn-color br-tl-md-0 br-bl-md-0 main-search-button"
                      ><i class="fa fa-search"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <hr class="search-divider mb-3 mt-3" />
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
                      <h3 class=" mb-0 mt-1 font-weight-bold value-added-tx">
                        Airtime or Data
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
                      <h3 class=" mb-0 mt-1 font-weight-bold value-added-tx">
                        TV Subscription
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
                      <h3 class=" mb-0 mt-1 font-weight-bold value-added-tx">
                        Electricity Units
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
                      <h3 class=" mb-0 mt-1 font-weight-bold value-added-tx">
                        More Services
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <!-- <div class="col-lg-3 col-md-6 col-sm-6  mb-4 mb-lg-0">
                <a href="#">
                  <div class="d-flex d-catmb">
                    <div>
                      <span class=" icon-service1 text-primary">
                        <i
                          class="fa fa-mobile fa-5x"
                          style="color: #4CAF50 !important; font-size: 42px;"
                        ></i>
                      </span>
                    </div>
                    <div class=" mt-1">
                      <h3
                        class=" mb-0 mt-3 font-weight-bold value-added-tx"
                        style="font-weight: 600; font-size: 42px;"
                      >
                        Buy Airtime / Data
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6  mb-4 mb-lg-0">
                <a href="#">
                  <div class="d-flex d-catmb">
                    <div>
                      <span class=" icon-service1 text-warning">
                        <i
                          class="fa fa-television"
                          style="color: #4CAF50 !important; font-size: 32px;"
                        ></i>
                      </span>
                    </div>
                    <div class=" mt-1">
                      <h3 class=" mb-0 mt-3 font-weight-bold value-added-tx">
                        Subscribe TV
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6  mb-4 mb-sm-0">
                <a href="#">
                  <div class="d-flex d-catmb">
                    <div>
                      <span class=" icon-service1 text-secondary">
                        <i
                          class="fa fa-bolt"
                          style="color: #4CAF50 !important; font-size: 32px;"
                        ></i>
                      </span>
                    </div>
                    <div class=" mt-1">
                      <h3 class=" mb-0 mt-3 font-weight-bold value-added-tx">
                        Buy Electricity
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6  mb-4 mb-sm-0">
                <a href="#">
                  <div class="d-flex d-catmb">
                    <div>
                      <span class=" icon-service1 text-warning">
                        <i
                          class="fa fa-ellipsis-h"
                          style="color: #4CAF50 !important; font-size: 32px;"
                        ></i>
                      </span>
                    </div>
                    <div class=" mt-1">
                      <h3 class=" mb-0 mt-3 font-weight-bold value-added-tx">
                        More Services
                      </h3>
                    </div>
                  </div>
                </a>
              </div> -->
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
/* .transparency {
  padding: 15px!important;
    background-color: rgba(255, 255, 255, 0.5)!important;
    position: relative!important;
}*/

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
