<script>
import { ContentLoader } from "vue-content-loader";

export default {
  components: { ContentLoader }
};
</script>

<template>
  <content-loader
    :width="1920"
    :height="1080"
    :speed="2"
    primaryColor="#bebdbd"
    secondaryColor="#d2d3d2"
  >
    <rect x="202" y="117" rx="3" ry="3" width="228" height="25" />
    <rect x="90" y="278" rx="3" ry="3" width="290" height="836" />
    <circle cx="132" cy="142" r="56" />
    <rect x="209" y="159" rx="3" ry="3" width="157" height="22" />
    <rect x="11" y="15" rx="3" ry="3" width="1904" height="58" />
    <rect x="459" y="119" rx="3" ry="3" width="126" height="53" />
    <rect x="619" y="121" rx="3" ry="3" width="774" height="50" />
    <rect x="1435" y="121" rx="3" ry="3" width="136" height="53" />
    <rect x="1614" y="114" rx="3" ry="3" width="78" height="65" />
    <rect x="1703" y="121" rx="3" ry="3" width="167" height="15" />
    <rect x="1715" y="150" rx="3" ry="3" width="115" height="21" />
    <rect x="519" y="280" rx="3" ry="3" width="1384" height="836" />
  </content-loader>
</template>
