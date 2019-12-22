<template>
  <div class="icon-bar">
    <!-- <router-link to="/" class="active">
            <span><i class="fa fa-home"></i></span><span>Home</span>
    </router-link>-->
    <a class="active" href="#">
      <i class="fa fa-home"></i>
    </a>
    <a href="#">
      <i class="fa fa-star"></i>
    </a>
    <a href="#">
      <i class="fa fa-envelope"></i>
    </a>
    <a href="#">
      <i class="fa fa-user"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "BNav"
};
</script>

<style>
.icon-bar {
  width: 100%;
  background-color: #eef2f4;
  overflow: auto;
  position: fixed;
  bottom: 0;
  z-index: 10001;
  /* experimental */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 60px;
}

.icon-bar a {
  /* float: left; */
  /* width: 20%; */
  text-align: center;
  padding: 12px 0;
  transition: all 0.3s ease;
  color: #000;
}

.icon-bar a i {
  font-size: 24px;
}

.icon-bar a:hover {
  background-color: #000;
}

.icon-bar .active {
  /* background-color: #4CAF50; */
  border-top: 3px solid #4caf50;
}
</style>
