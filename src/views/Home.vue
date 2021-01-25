<template>
  <div class="home">
    <!-- title组件-->
    <title-nav/>
    <!-- content-->
    <div class="show-wrp">
      内容栏
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

}

</script>

<style lang="scss">
  .home{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .show-wrp{
    overflow: auto;
    flex-grow: 1;
    background: red;
  }

</style>
