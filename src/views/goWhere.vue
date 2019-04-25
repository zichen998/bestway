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
  name: 'goWhere',
  data () {
    return {
      clientH: {
        height: ''
      },
      targetLoc: String,
      lat: null,
      lng: null
    }
  },
  created: function () {
    this.getParams()
  },
  watch: {
    '$route': 'getParams'
  },
  mounted () {
    if (navigator.geolocation) { } else {
      alert('Your browser does not support Geolocation!')
    }
    this.getXY()
    this.newHeight()
    console.log(localStorage.getItem('Ip'))
  },
  methods: {
    getParams: function () {
      var routerParams = this.$route.query.targetLoc
      this.targetLoc = routerParams
    },
    getXY: function () {
      var that = this
      that.$http.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAcYWst1lhQztk5Wk__bW5NGwK1PLPRcrM').then(function (response) {
        this.lat = response.data.location.lat
        this.lng = response.data.location.lng
        console.log(this.lat, this.lng)
        that.initMaps()
      }, function (err) {
        console.log(err)
      })
    },
    initMaps: function () {
      var that = this
      var directionsService = new google.maps.DirectionsService()
      var directionsDisplay = new google.maps.DirectionsRenderer()
      var map = new google.maps.Map(document.getElementById('allmap'), {
        zoom: 14,
        center: { lng: this.lng, lat: this.lat }
      })
      directionsDisplay.setMap(map)
      that.lineSet(directionsService, directionsDisplay)
    },
    lineSet: function (directionsService, directionsDisplay) {
      var request = {
        origin: {lat: this.lat, lng: this.lng},
        destination: this.targetLoc,
        travelMode: 'DRIVING'
      }
      directionsService.route(request, function (response, status) {
        console.log(response)
        if (status === 'OK') {
          directionsDisplay.setDirections(response)
        } else {
          alert('Sorry, no route yet')
        }
      })
    },
    newHeight: function () {
      this.clientH.height = document.documentElement.clientHeight + 'px'
    }
  }
}

</script>
