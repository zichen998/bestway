<template>
  <swiper class="s-contorl" :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item,index) in items" :key="index">
      <img v-bind:src="item.src" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'loop',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      msg: '',
      items: [
        { src: require('../assets/images/Waterford1.jpg') },
        { src: require('../assets/images/IRELAND1.jpg') },
        { src: require('../assets/images/IRELAND2.jpg') }
      ],
      swiperOption: {
        loop: true,
        notNextTick: true,
        mousewheelControl: true,
        autoplayDisableOnInteraction: false,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        paginationClickable: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        // observer: true,
        speed: 300,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(3, 1000, false)
  }
}

</script>
