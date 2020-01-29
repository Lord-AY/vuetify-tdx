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
    <rect x="0" y="0" rx="0" ry="0" width="1520" height="50" /> 
    <circle cx="196" cy="120" r="54" /> 
    <rect x="266" y="91" rx="6" ry="6" width="111" height="24" /> 
    <rect x="266" y="131" rx="6" ry="6" width="88" height="16" /> 
    <rect x="409" y="93" rx="6" ry="6" width="101" height="48" /> 
    <rect x="542" y="93" rx="6" ry="6" width="534" height="48" /> 
    <rect x="1092" y="93" rx="6" ry="6" width="101" height="48" /> 
    <rect x="1225" y="93" rx="6" ry="6" width="48" height="48" /> 
    <rect x="1289" y="93" rx="6" ry="6" width="109" height="24" /> 
    <rect x="1289" y="123" rx="6" ry="6" width="69" height="16" /> 
    <rect x="0" y="196" rx="0" ry="0" width="1520" height="560" /> 
    <rect x="142" y="776" rx="6" ry="6" width="373" height="48" /> 
    <rect x="523" y="776" rx="6" ry="6" width="373" height="48" /> 
    <rect x="1285" y="776" rx="6" ry="6" width="48" height="48" /> 
    <rect x="904" y="776" rx="6" ry="6" width="373" height="48" /> 
    <rect x="191" y="860" rx="6" ry="6" width="242" height="24" /> 
    <rect x="477" y="860" rx="6" ry="6" width="242" height="24" /> 
    <rect x="763" y="860" rx="6" ry="6" width="242" height="24" /> 
    <rect x="1043" y="860" rx="6" ry="6" width="242" height="24" />
  </content-loader>
</template>
