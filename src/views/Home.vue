<template>
  <div class="home">
    <!-- title组件-->
    <title-nav/>
    <!-- content-->
    <div class="show-wrp">
<!-- swiper -->
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="banner" v-for="banner in banners">
            <img
                class="swiper-img"
                :src="banner">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div>11111111111222222221111111</div>
<!--      -->
    </div>

    <!-- 导航栏  -->
    <Nav/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TitleNav from '@/components/home/TitleNav.vue';

@Component({

  // 局部引入组件的方法
  components: {
    TitleNav
  }
})

export default class Home extends Vue {
  banners = [
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c76b786d60231575d463fbbdebe83973.jpg?w=2452&h=920',
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8fae9c15f54acb2b18748982148b53d.jpg?thumb=1&w=720&h=360'
  ]
  swiperOption = {
    pagination:{
      el:'.swiper-pagination'
    }
  }

  // mounted() {
  //   console.log('Current Swiper instance object', this.mySwiper)
  //   this.mySwiper.slideTo(2, 1000, false)
  // }
}

</script>

<style lang="scss">
@import "~@/assets/style/preload.scss";
.swiper-img{
  width: 100%;
  object-fit: cover;
  height:height(180);
}
  .home{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .show-wrp{
    overflow: auto;
    flex: 1;
    background: red;
  }

</style>
