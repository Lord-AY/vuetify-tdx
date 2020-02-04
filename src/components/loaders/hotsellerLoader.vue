<script>
import { ContentLoader } from "vue-content-loader";

export default {
  components: { ContentLoader }
};
</script>

<template>
  <content-loader
    :width="1240"
    :height="300"
    :speed="2"
    primaryColor="#a5a3a3"
    secondaryColor="#ecebeb"
  >
    <rect x="266" y="185" rx="5" ry="3" width="109" height="11" />
    <rect x="238" y="214" rx="5" ry="3" width="167" height="36" />
    <circle cx="324" cy="111" r="56" />
    <rect x="487" y="185" rx="5" ry="3" width="109" height="11" />
    <rect x="459" y="218" rx="5" ry="3" width="167" height="36" />
    <circle cx="542" cy="109" r="56" />
    <rect x="696" y="185" rx="3" ry="3" width="109" height="11" />
    <rect x="668" y="220" rx="3" ry="3" width="167" height="36" />
    <circle cx="753" cy="107" r="56" />
    <rect x="908" y="185" rx="3" ry="3" width="109" height="11" />
    <rect x="880" y="220" rx="3" ry="3" width="167" height="36" />
    <circle cx="960" cy="108" r="56" />
    <rect x="1121" y="185" rx="3" ry="3" width="109" height="11" />
    <rect x="1093" y="220" rx="3" ry="3" width="167" height="36" />
    <circle cx="1169" cy="104" r="56" />
  </content-loader>
</template>
