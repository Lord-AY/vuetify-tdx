<template>
  <div id="listbillers">
    list billers
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },

  created() {
    this.fetchAllCategories();
  }
};
</script>
<style>
  
</style>
