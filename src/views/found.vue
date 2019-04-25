<template>
  <div style="padding-bottom: 100px;">
    <div class="function-con-new">
      <p class="function-h-new gradient2 pdl-20">Nearby attractions</p>
      <section class="comment-block mgt-20">
        <div class="comment-user">
          <div class="u-head"></div>
          <span class="u-name">Travel boy</span>
          <span class="u-tag">Recommend</span>
          <p class="u-date">
            <span class="u-date-l">2018.9.18  18:00:00</span>
            <span class="u-class">Boutique</span>
          </p>
        </div>
        <div class="comment-con">
          <p class="comment-h">Glenveagh National Park</p>
          <p class="comment-m mgt-20">Glenveagh National Park is a remote and hauntingly beautiful wilderness of rugged mountains, pristine lakes, tumbling waterfalls and enchanted native oak woodland in the heart of the Derryveagh Mountains in the north west of County Donegal.</p>
          <div class="p-con mgt-30">
            <div class="p-con-b">
              <img src="../assets/images/glenveagh1.png" alt="">
            </div>
            <div class="p-con-b mgl-15">
              <img src="../assets/images/glenveagh2.png" alt="">
            </div>
            <div class="p-con-b mgl-15">
              <img src="../assets/images/glenveagh3.png" alt="">
            </div>
          </div>
        </div>
        <div class="comment-b">
          <router-link :to="{path:'direction'}">
          <div class="comment-data mgt-20">
            <img src="../assets/images/map-new.png" alt="">
              Go here
            </div>
          </router-link>
          </div>
      </section>
      <section class="comment-block mgt-20">
        <div class="comment-user">
          <div class="u-head"></div>
          <span class="u-name">Travel boy</span>
          <span class="u-tag">Recommend</span>
          <p class="u-date">
            <span class="u-date-l">2018.9.18  18:00:00</span>
            <span class="u-class">Boutique</span>
          </p>
        </div>
        <div class="comment-con">
          <p class="comment-h">Buckingham Palace</p>
          <p class="comment-m mgt-20">Buckingham Palace  is the London residence and administrative headquarters of the monarch of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality. It has been a focal point for the British people at times of national rejoicing and mourning.</p>
          <div class="p-con mgt-30">
            <div class="p-con-b">
              <img src="../assets/images/Buckingham Palace1.jpg" alt="">
            </div>
            <div class="p-con-b mgl-15">
              <img src="../assets/images/Buckingham Palace2.jpg" alt="">
            </div>
            <div class="p-con-b mgl-15">
              <img src="../assets/images/Buckingham Palace3.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="comment-b">
          <router-link :to="{path:'direction'}">
            <div class="comment-data mgt-20">
              <img src="../assets/images/map-new.png" alt="">
              Go here
            </div>
          </router-link>
        </div>
      </section>
      <section class="comment-block mgt-20">
        <div class="comment-user">
          <div class="u-head"></div>
          <span class="u-name">Travel boy</span>
          <span class="u-tag">Recommend</span>
          <p class="u-date">
            <span class="u-date-l">2018.9.18  18:00:00</span>
            <span class="u-class">Boutique</span>
          </p>
        </div>
        <div class="comment-con">
          <p class="comment-h">Waterford Institute of Technology</p>
          <p class="comment-m mgt-20">Waterford Institute of Technology (WIT) is the major provider of higher education in the South East region of Ireland and one of the largest IOT's in Ireland. The range of academic programmes is exceptionally extensive, from Higher Certificate to post-doctoral research, covering the Humanities, Health and Nursing, Science and Informatics, Engineering and Architecture, Business and Education. </p>
          <div class="p-con mgt-30">
            <div class="p-con-b">
              <img src="../assets/images/WIT1.jpg" alt="">
            </div>
            <div class="p-con-b mgl-15">
              <img src="../assets/images/WIT2.jpg" alt="">
            </div>
            <div class="p-con-b mgl-15">
              <img src="../assets/images/WIT3.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="comment-b">
          <router-link :to="{path:'direction'}">
            <div class="comment-data mgt-20">
              <img src="../assets/images/map-new.png" alt="">
              Go here
            </div>
          </router-link>
        </div>
      </section>
    </div>
    <footerNav :tagFooter="footerVal"></footerNav>
  </div>
</template>

<script>
// import art from '../components/art'
import footerNav from '../components/footer-nav'

export default {
  name: 'found',
  components: {
    footerNav
  },
  data () {
    return {
      msg: '',
      footerVal: 1
    }
  }
}

</script>
