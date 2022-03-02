<template>
  <MglMap
    container="map"
    :accessToken="accessToken"
    :mapStyle="mapStyle"
    :center="markerCoordinates"
    zoom="10"
  >
    <MglMarker :coordinates.sync="markerCoordinates" color="#9DA882" />
  </MglMap>
</template>

<script>
import { MglMap, MglMarker } from 'vue-mapbox';

export default {
  name: 'App',
  components: { MglMap, MglMarker },
  data() {
    return {
      accessToken:
        'pk.eyJ1IjoidGlmYWluZWsiLCJhIjoiY2t6d3FwbzN2NnhrMjJ1bzEzYmZ0d3c4dyJ9.IrnY3o0lhj9CzsXLjGQ3OQ',
      mapStyle: 'mapbox://styles/tifainek/ckzwqqt0z000i14s0kf0sol3j',
      markerCoordinates: [1.677228, 43.781737],
    };
  },
};
</script>
