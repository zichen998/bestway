<template>
  <div class="footer-space">
    <header class="headerBtn">
      <p class="hbtn-cancel">Cancel</p>
      <p>Comment</p>
      <p class="hbtn-over" @click="submitComment()">Submit</p>
    </header>
    <section>
      <div class="inp-block">
        <textarea ref="comment" value="" placeholder="What you want to say"></textarea>
        <!-- <span class="inp-limit">0/200</span> -->
      </div>
    </section>
  </div>
</template>
<script>

export default {
  name: 'comment-pc',
  components: {
  },
  data () {
    return {
      comment: null,
      nowId: null
    }
  },
  created: function () {
    this.getInf()
  },
  methods: {
    submitComment: function () {
      this.comment = this.$refs.comment.value
      var that = this
      that.$http.post('http://localhost:8088/api/newComment', {
        uid: this.nowId,
        comment: this.comment
      }).then(function (response) {
        that.$router.push({name: '/pchome'})
      }, function (err) {
        console.log(err)
      })
    },
    getInf: function () {
      var that = this
      that.$http.get('http://localhost:8088/api/getInf').then(({data}) => {
        this.nowId = data.onName
      })
    }
  }
}

</script>
<style scoped>
</style>
