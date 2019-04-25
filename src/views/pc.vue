<template>
  <div>
    <div class="pc-main">
      <div class="pc-top-bar" style="background:#dddddd">
        <img src="../assets/images/weather.png" class="weather fl" style="margin-left: 10px;" alt="">
        <span class="mgl-10 fl" style="font-size: 20px;margin-top: 8px">26℃</span>
        <input class="fl pc-search" type="text" ref="searchfor1">
        <span class="fl pc-login gradient2" style="margin-left: 20px;" @click="searchBtn()">search</span>
        <router-link :to="{path:'/login-pc'}"><span class="fr pc-login gradient2" style="">{{ onlineUser }}</span></router-link>
      </div>
      <div class="pc-contain">
        <div class="pc-swiper" style="display: inline-block;">
          <loop></loop>
        </div>
        <div class="pc-fun fr">
          <div class="function-con mgt-20">
            <p class="function-h">Everyone is using</p>
            <div class="function-s mgt-30">
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
        </div>
      </div>
      <div class="pc-fun-2">
        <div class="pc-translate">
          <p class="function-h" style='margin-left: 10px;'>Translate</p>
          <div class="pc-tran-area">
            <p style="margin-left: 20px">You want to translate:</p>
            <textarea type="text" ref="inputBlock" value="test"></textarea>
          </div>
          <div class="pc-tran-show">
            <p style="margin-left: 20px;">Result：{{ transResult }}</p>
          </div>
          <div class="pc-login gradient2 pc-translate-btn" @click="translateBtn()">translate</div>
        </div>
        <div class="pc-art fr">
          <section class="comment-block">
            <p class="function-h" style='margin-left: 10px; margin-top: 10px; margin-bottom: 20px; border-top:1px solid #f0f0f0'>Good Article</p>
            <div class="comment-user">
              <div class="u-head"></div>
              <span class="u-name">13112342222</span>
              <span class="u-tag">Recommend</span>
              <p class="u-date">
                <span class="u-date-l">2018.9.18  18:00:00</span>
                <span class="u-class">Boutique</span>
              </p>
            </div>
            <div class="comment-con">
         <p class="comment-h">HOLLYWOOD</p>
          <p class="comment-m mgt-20">Hollywood is a neighborhood in the central region of Los Angeles, California, notable as the home of the U.S. film industry including several of its historic studios. Its name has come to be a shorthand reference for the industry and the people associated with it.</p>
          <div class="p-con mgt-30">
            <div class="p-con-b">
              <img src="../assets/images/hollywood-1.jpg" alt="">
            </div>
            <div class="p-con-b mgl-15">
              <img src="../assets/images/hollywood-2.jpg" alt="">
            </div>
            <div class="p-con-b mgl-15">
              <img src="../assets/images/hollywood-3.jpg" alt="">
            </div>
                    </div>
                    <router-link :to="{path:'/comment-pc'}">
                      <div class="comment-data-new mgt-20">
                        <img src="../assets/images/comment-btn.png" alt="">
            </div>
                    </router-link>
                  </div>
                  <div class="comment-b-new" v-for="(item) in items" :key="item.id">
                    <span class="uid">{{ item.uid }}:</span>
                    <span class="comment-say">{{ item.comment }}</span>
                  </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import loop from '../components/loop'
import art from '../components/art'

export default {
  name: 'pchome',
  components: {
    loop,
    art
  },
  data () {
    return {
      transResult: 'test test',
      transCon: null,
      items: [],
      searchfor: String,
      onlineUser: String
    }
  },
  created: function () {
    this.getComment()
    this.userTest()
  },
  methods: {
    translateBtn: function () {
      var that = this
      this.transCon = this.$refs.inputBlock.value
      console.log(this.transCon)
      that.$http.post('http://localhost:8088/api/translate', {
        textcon: this.transCon
      }).then(function (response) {
        console.log(response)
        this.transResult = response.data.translation
      }, function (err) {
        console.log(err)
      })
    },
    getComment: function () {
      var that = this
      that.$http.get('http://localhost:8088/api/getComment').then(({ data }) => {
        for (let i in data) {
          this.items.push({ uid: data[i].uid, comment: data[i].comment })
        }
      })
    },
    userTest: function () {
      var that = this
      that.$http.get('http://localhost:8088/api/getInf').then(({data}) => {
        if (data.onName === '') {
          this.onlineUser = 'login'
        } else {
          this.onlineUser = data.onName
        }
      })
    },
    searchBtn: function () {
      this.searchfor = this.$refs.searchfor1.value
      this.$router.push({path: 'searchResult-pc', query: {searchInf: this.searchfor}})
    }
  }
}

</script>
