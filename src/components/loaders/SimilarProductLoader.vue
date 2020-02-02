<script>
import { ContentLoader } from "vue-content-loader";

export default {
  components: { ContentLoader }
};
</script>
<template>
  <content-loader
    :height="160"
    :width="800"
    :speed="2"
    primaryColor="#ece8e8"
    secondaryColor="#ecebeb"
    v-show="showLoader(similarprods)"
  >
    <rect x="98.23" y="269.67" rx="0" ry="0" width="0" height="0" />
    <rect x="22.23" y="21.67" rx="0" ry="0" width="184.61" height="127" />
    <rect x="221.23" y="38.67" rx="0" ry="0" width="189" height="10" />
    <rect x="408.23" y="43.67" rx="0" ry="0" width="0" height="4" />
    <rect x="237.23" y="59.67" rx="0" ry="0" width="161" height="10" />
    <rect x="237.23" y="84.67" rx="0" ry="0" width="80" height="62" />
    <rect x="337.23" y="83.67" rx="0" ry="0" width="80" height="62" />
    <rect x="527.23" y="34.67" rx="0" ry="0" width="126" height="13" />
    <rect x="484.23" y="121.67" rx="0" ry="0" width="94.6" height="19.14" />
    <rect x="588.23" y="122.67" rx="0" ry="0" width="101.2" height="19.14" />
  </content-loader>
</template>
