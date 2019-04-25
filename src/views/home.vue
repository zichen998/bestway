<template>
<div style="padding-bottom: 100px;">
  <div class="header-top home-head">
    <span>{{ wText }}</span>
    <span class="mgl-10">{{ temperature }}F</span>
    <input class="search mgl-10" ref="searchfor" type="text" value="" placeholder="search">
    <img src="../assets/images/icon-search1.png" @click="searchBtn()" class="message mgl-10" alt="">
  </div>
  <loop></loop>
  <div class="function-con mgt-20">
    <p class="function-h">Everyone is using</p>
    <div class="function-s">
      <div class="function-b">
        <img src="../assets/images/top-icon-1.png" alt="">
        <p>Hotels</p>
      </div>
      <div class="function-b">
        <img src="../assets/images/top-icon-2.png" alt="">
        <p>Food</p>
      </div>
      <router-link :to="{path:'/map'}">
        <div class="function-b">
          <img src="../assets/images/top-icon-3.png" alt="">
          <p>Map</p>
        </div>
      </router-link>
      <div class="function-b">
        <img src="../assets/images/top-icon-1.png" alt="">
        <p>Banks</p>
      </div>
      <div class="function-b">
        <img src="../assets/images/top-icon-5.png" alt="">
        <p>More</p>
      </div>
    </div>
  </div>
  <div class="function-con mgt-20">
    <p class="function-h-2">Everyone is looking for</p>
    <div class="all-con">
      <div class="fun-tag">
        <p class="tag-h1">Top sushi</p>
        <p class="tag-h2">Tokyo Sushi</p>
      </div>
      <div class="fun-tag">
        <p class="tag-h1">Top steak</p>
        <p class="tag-h2">Best Restaurant</p>
        <div class="best gradient2">Boutique</div>
      </div>
      <div class="fun-tag">
        <p class="tag-h1">Jiefangbei</p>
        <p class="tag-h2">ChongQing</p>
      </div>
      <div class="fun-tag">
        <p class="tag-h1">steamboat</p>
        <p class="tag-h2">ChongQing</p>
      </div>
      <div class="fun-tag">
        <p class="tag-h1">Beijing steamboat</p>
        <p class="tag-h2">Capital of China</p>
      </div>
      <div class="fun-tag">
        <p class="tag-h1">Hulunberer</p>
        <p class="tag-h2">Beautiful grassland</p>
        <div class="best gradient2">Boutique</div>
      </div>
    </div>
  </div>
  <div class="function-con mgt-20" style="padding-left:0;padding-right: 0">
    <p class="function-h-2 mgl-20">Everyone is watching</p>
    <art></art>
  </div>
  <footerNav :tagFooter="footerVal"></footerNav>
</div>
</template>

<script>
import loop from '../components/loop'
import footerNav from '../components/footer-nav'
import art from '../components/art'

export default {
  name: 'home',
  components: {
    loop,
    footerNav,
    art
  },
  data () {
    return {
      searchfor: String,
      footerVal: 0,
      dataAll: null,
      wText: null,
      temperature: Number
    }
  },
  created: function () {
    this.weather().then(value => {
      this.dataAll = value
      let a = JSON.parse(this.dataAll)
      console.log(a)
      this.temperature = a.current_observation.condition.temperature
      this.wText = a.current_observation.condition.text
    })
  },
  methods: {
    searchBtn: function () {
      this.searchfor = this.$refs.searchfor.value
      this.$router.push({
        path: 'searchResult',
        query: {
          searchInf: this.searchfor
        }
      })
    },
    weather: function () {
      return new Promise(function (resolve) {
        var OAuth = require('oauth')
        var header = {
          'X-Yahoo-App-Id': 'YBSamT42'
        }
        var request = new OAuth.OAuth(
          null,
          null,
          'dj0yJmk9TFBFYjVhVDI3M0RLJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTYz',
          'bfdf7b18b22107e99666f637d36f01377913cd50',
          '1.0',
          null,
          'HMAC-SHA1',
          null,
          header
        )
        request.get(
          'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json',
          null,
          null,
          function (err, data, result) {
            if (err) {
              console.log(err)
            } else {
              resolve(data)
            }
          })
      })
    }

  }

}
</script>
