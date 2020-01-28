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
    :height="896"
    :width="1520"
    :speed="2"
    primaryColor="#bebdbd"
    secondaryColor="#d2d3d2"
  >
    <rect x="0" y="0" rx="0" ry="0" width="1520" height="105" /> 
    <rect x="0" y="105" rx="0" ry="0" width="260" height="896" /> 
    <rect x="300" y="131" rx="6" ry="6" width="1195" height="386" /> 
    <rect x="610" y="471" rx="6" ry="6" width="242" height="24" /> 
    <rect x="301" y="542" rx="6" ry="6" width="741" height="156" /> 
    <rect x="300" y="720" rx="6" ry="6" width="743" height="154" /> 
    <rect x="1067" y="539" rx="6" ry="6" width="427" height="156" /> 
    <rect x="1068" y="722" rx="6" ry="6" width="431" height="145" />

  </content-loader>
</template>
