<template>
  <div class="htmlBox">
    <div class="logo-con">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <div class="login-inp" data-index=1>
      <div class="inp-block-1">
        <input ref="inputUser" value="" data-index=1 class="username" type="text" placeholder="Your username">
      </div>
      <div class="inp-block-1">
        <input data-index=1 ref="inputPassword" class="password" value="" type="password" placeholder="Your password">
        <img class="eyes" src="../assets/images/eyes.png" alt="">
      </div>
      <div class="login-btn" @click="loginBtn()">Login</div>
      <div class="login-change">
        <span class="mes-inf"><router-link :to="{path:'/Register'}" class="font-red">Register</router-link></span>
        <span class="forget">forget password</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  components: {
  },
  data () {
    return {
      indValue: 0,
      username: null,
      password: null
    }
  },
  created: function () {
    // this.getInf()
  },
  methods: {
    // ***数据获取接口****
    loginBtn: function () {
      this.username = this.$refs.inputUser.value
      this.password = this.$refs.inputPassword.value
      var that = this
      that.$http.post('http://localhost:8088/api/login/loginAccount', {
        account: this.username,
        password: this.password
      }).then(function (response) {
        if (response.data.password === this.password) {
          setTimeout(function () {
            that.$router.push({name: 'Home'})
          }, 200)
        } else {
          alert('Failed!')
        }
      }, function (err) {
        console.log(err)
      })
      that.$http.post('http://localhost:8088/api/state', {
        onName: this.username
      }).then(function (response) {
        console.log(response)
      }, function (err) {
        console.log(err)
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
