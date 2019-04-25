<template>
  <div>
    <section class="my-head gradient2">
      <img class="my-head-png mgr-30" src="../assets/images/girl.png" alt="">
      <div class="my-inf">
        <p class="my-name">{{ uid }}</p>
        <p class="my-num">{{ usignature }}</p>
      </div>
      <img @click="logout()" class="set" src="../assets/images/c-f.png" alt="">
    </section>
      <section class="my-option mgt-20">
        <div class="link-block">
          <div class="img-con">
            <img class="link-icon" src="../assets/images/jiangli.png"  alt="">
          </div>
          <div class="text-con pdl-10 pdr-30">
            <p>Gifts</p>
            <img class="right-arrow" src="../assets/images/right-arrow.png" alt="">
          </div>
        </div>
        <div class="link-block">
          <div class="img-con">
            <img class="link-icon" src="../assets/images/drxx88.png"  alt="">
          </div>
          <div class="text-con pdl-10 pdr-30">
            <p>My footprint</p>
            <span class="mValue"></span>
            <img class="right-arrow" src="../assets/images/right-arrow.png" alt="">
          </div>
        </div>
        <div class="link-block">
          <div class="img-con">
            <img class="link-icon" src="../assets/images/gerenshezhi.png"  alt="">
          </div>
          <div class="text-con pdl-10 pdr-30">
            <p>Setting</p>
            <img class="right-arrow" src="../assets/images/right-arrow.png" alt="">
          </div>
        </div>
        <div class="link-block">
          <div class="img-con">
            <img class="link-icon" src="../assets/images/mima.png"  alt="">
          </div>
          <router-link style="width:100%;" :to="{path:'/new-password'}">
            <div class="text-con pdl-10 pdr-30 lastB">
              <p>New Password</p>
              <span class="mValue"></span>
              <img class="right-arrow" src="../assets/images/right-arrow.png" alt="">
            </div>
          </router-link>
        </div>
      </section>
    <footerNav :tagFooter="footerVal"></footerNav>
  </div>
</template>
<script>
import footerNav from '../components/footer-nav'

export default {
  name: 'my',
  components: {
    footerNav
  },
  data () {
    return {
      uid: null,
      usignature: null,
      footerVal: 4
    }
  },
  created: function () {
    this.getInf()
  },
  methods: {
    getInf: function () {
      var that = this
      that.$http.get('http://localhost:8088/api/getInf').then(({data}) => {
        this.uid = data.onName
      })
    },
    logout: function () {
      var that = this
      that.$http.post('http://localhost:8088/api/stateChange').then(function (response) {
        that.$router.push({name: 'login'})
      }, function (err) {
        console.log(err)
      })
    }
  }
}

</script>
