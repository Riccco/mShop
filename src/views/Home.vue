<template>
  <div class="home">
    <!-- title组件-->
    <title-nav />
    <!-- 导航栏  -->
    <Nav/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TitleNav from '@/components/home/TitleNav.vue';

@Component({

  // 局部引入组件的方法
  components:{
    TitleNav
  }
})

export default class Home extends Vue{

}

</script>

<style lang="scss">


</style>
