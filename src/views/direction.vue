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
  name: 'googleDirection',
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
    this.newHeight()
    console.log(localStorage.getItem('Ip'))
  },
  methods: {
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
      that.lineSet1(directionsService, directionsDisplay)
      that.lineSet2(directionsService, directionsDisplay)
    },
    lineSet: function (directionsService, directionsDisplay) {
      var request = {
        origin: {lat: this.lat, lng: this.lng},
        destination: 'Glenveagh National Park',
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
    lineSet1: function (directionsService, directionsDisplay) {
      var request = {
        origin: {lat: this.lat, lng: this.lng},
        destination: 'Buckingham Palace',
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
    lineSet2: function (directionsService, directionsDisplay) {
      var request = {
        origin: {lat: this.lat, lng: this.lng},
        destination: 'Waterford Institute of Technology',
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
