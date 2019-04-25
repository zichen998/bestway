<template>
  <div class="htmlBox" style="padding-top: 100px;">
    <div class="login-inp" data-index=1>
      <div class="inp-block-1">
        <input data-index=1 ref="username" class="username" type="text" placeholder="Your username">
      </div>
      <div class="inp-block-1">
        <input data-index=1 ref="password" class="password" type="password" placeholder="Your password">
        <img class="eyes" src="../assets/images/eyes.png" alt="">
      </div>
      <div class="inp-block-1">
        <input data-index=1 ref="passwordRe" class="password" type="password" placeholder="Reinput password">
        <img class="eyes" src="../assets/images/eyes.png" alt="">
      </div>
      <div class="login-btn login-btn-pc" @click="registerBtn()">Register</div>
      <div class="login-change">
        <span class="mes-inf"></span>
        <span class="forget">problem</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'register-pc',
  components: {
  },
  data () {
    return {
      indValue: 0,
      username: null,
      password: null,
      passwordRe: null
    }
  },
  methods: {
    registerBtn: function () {
      this.username = this.$refs.username.value
      this.password = this.$refs.password.value
      this.passwordRe = this.$refs.passwordRe.value
      var that = this
      that.$http.post('http://localhost:8088/api/login/registerAccount', {
        account: this.username,
        password: this.password
      }).then(function (response) {
        if (this.password === this.passwordRe && this.password !== '' && this.username !== '') {
          alert('Successed!')
          setTimeout(function () {
            that.$router.push({name: '/login-pc'})
          }, 200)
        } else {
          alert('Please reinput!')
        }
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
