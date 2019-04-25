<template>
  <footer class="tab-footer">
    <div class="tab" v-for="(item,index) in items" v-bind:key="item.id">
      <router-link :to="item.tagPage" class="router-link-c">
        <img :class="item.classW" :src="index == tagFooter ? item.src2 : item.src1" alt="">
        <p :class="{'tab-active':index == tagFooter}">{{ item.text }}</p>
      </router-link>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'footerNav',
  props: {
    tagFooter: Number,
    required: true
  },
  methods: {
  },
  data () {
    return {
      items: [
        { classW: 'tab-1', tagPage: '/Home', text: 'Home', src1: require('../assets/images/footer-1.png'), src2: require('../assets/images/footer-1-active.png') },
        { classW: 'tab-2', tagPage: '/found', text: 'Find', src1: require('../assets/images/footer-2.png'), src2: require('../assets/images/footer-2-active.png') },
        { classW: 'tab-3', tagPage: '/articlePage', text: 'Best', src1: require('../assets/images/footer-3.png'), src2: require('../assets/images/footer-3-active.png') },
        { classW: 'tab-4', tagPage: '/translate', text: 'Translate', src1: require('../assets/images/footer-4.png'), src2: require('../assets/images/footer-4-active.png') },
        { classW: 'tab-5', tagPage: '/my', text: 'My', src1: require('../assets/images/footer-5.png'), src2: require('../assets/images/footer-5-active.png') }
      ]
    }
  }
}

</script>
