<template>
  <div style="padding-bottom: 100px;">
    <div class="function-con-new">
      <p class="function-h-new gradient2 pdl-20">Good Article</p>
      <section class="comment-block">
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
          <p class="comment-h">Travel community</p>
          <p class="comment-m mgt-20">Traveler's exchange of holy places</p>
          <router-link :to="{path:'/comment'}">
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
    <footerNav :tagFooter="footerVal"></footerNav>
  </div>
</template>

<script>
import footerNav from '../components/footer-nav'

export default {
  name: 'articlePage',
  components: {
    footerNav
  },
  data () {
    return {
      items: [
      ],
      footerVal: 2
    }
  },
  created: function () {
    this.getComment()
  },
  methods: {
    getComment: function () {
      var that = this
      that.$http.get('http://localhost:8088/api/getComment').then(({data}) => {
        for (let i in data) {
          this.items.push({ uid: data[i].uid, comment: data[i].comment })
        }
      })
    }
  }
}

</script>
