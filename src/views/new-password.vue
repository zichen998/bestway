<template>
  <div class="htmlBox">
    <div class="logo-con">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <div class="login-inp" data-index=1>
      <div class="inp-block-1">
        <input data-index=1 ref="password" class="password" type="password" placeholder="Your new password">
        <img class="eyes" src="../assets/images/eyes.png" alt="">
      </div>
      <div class="inp-block-1">
        <input data-index=1 ref="passwordRe" class="password" type="password" placeholder="Reinput new password">
        <img class="eyes" src="../assets/images/eyes.png" alt="">
      </div>
      <div class="login-btn" @click="newBtn()">newPassword</div>
      <div class="login-change">
        <span class="mes-inf"></span>
        <span class="forget">problem</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'newPassword',
  components: {
  },
  data () {
    return {
      indValue: 0,
      newpassword: null,
      newpasswordRe: null,
      onlineUser: null
    }
  },
  created: function () {
    this.getInf()
  },
  methods: {
    newBtn: function () {
      this.newpassword = this.$refs.password.value
      this.newpasswordRe = this.$refs.passwordRe.value
      var that = this
      if (this.newpassword === this.newpasswordRe) {
        that.$http.post('http://localhost:8088/api/newPassword', {
          account: this.onlineUser,
          password: this.newpassword
        }).then(function (response) {
          alert('new password set success!')
          setTimeout(function () {
            that.$router.push({name: 'login'})
          }, 200)
        }, function (err) {
          console.log(err)
        })
      }
    },
    getInf: function () {
      var that = this
      that.$http.get('http://localhost:8088/api/getInf').then(({data}) => {
        this.onlineUser = data.onName
      })
    }
  }
}
</script>
<style scoped>
  .htmlBox{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    background-color: #ffffff;
  }
</style>
