
    
<script>
import { ContentLoader } from "vue-content-loader";

export default {
  components: {
    ContentLoader
  }
};
</script>
<template>
  <content-loader
    :height="160"
    :width="856"
    :speed="2"
    primaryColor="#bbb7b7"
    secondaryColor="#d2d3d2"
  >
    <rect x="98.23" y="269.67" rx="0" ry="0" width="0" height="0" />
    <rect x="342.88" y="22.67" rx="0" ry="0" width="175.38" height="112.42" />
    <rect x="587.23" y="22.67" rx="0" ry="0" width="175.38" height="112.42" />
    <rect x="84.23" y="22.67" rx="0" ry="0" width="175.38" height="112.42" />
  </content-loader>
</template>