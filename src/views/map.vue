<template>
  <div class="mapdiv">
    <div id="allmap" :style="clientH"></div>
    <router-link :to="{path:'/home'}">
      <div class="new-back-btn">
        <span>Home</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import google from 'google'
export default {
  name: 'googleMap',
  data () {
    return {
      clientH: {
        height: ''
      },
      lat: null,
      lng: null
    }
  },
  created: function () {},
  mounted () {
    if (navigator.geolocation) { } else {
      alert('Your browser does not support Geolocation!')
    }
    this.getXY()
    // this.initMaps()
    this.newHeight()
    console.log(localStorage.getItem('Ip'))
  },
  methods: {
    getXY: function () {
      var that = this
      that.$http.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAcYWst1lhQztk5Wk__bW5NGwK1PLPRcrM').then(function (response) {
        this.lat = response.data.location.lat
        this.lng = response.data.location.lng
        that.initMaps()
      }, function (err) {
        console.log(err)
      })
    },
    initMaps: function () {
      this.maps = new google.maps.Map(document.getElementById('allmap'), {
        zoom: 14,
        center: { lng: this.lng, lat: this.lat }
      })
    },
    newHeight: function () {
      this.clientH.height = document.documentElement.clientHeight + 'px'
    }
  }
}

</script>
