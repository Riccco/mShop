<template>
  <div class="nav">
    <router-link class="Item"
                 :style="widthNav"
                 v-for="(items,index) in x"
                 :key="index"
                 :to="items.path">{{items.name}}
    </router-link>
  </div>
</template>

<script lang="ts">

import {Component,Vue} from "vue-property-decorator";
@Component

export default class Nav extends Vue{
// 直接声明 data
// x 接收全部的导航数据，目前是模拟数据
  x = [
    {type:'home',name:'首页',path:'/',images:''},
    {type:'caregory',name:'分类',path:'/category',images:''},
    {type:'cart',name:'购物车',path:'/cart',images:''},
    {type:'User',name:'我的',path:'/user',images:''},
  ]

//  绑定宽度
  widthNav = {
    width:this.WidthNav+'%'
  }

//  计算属性为 getter
  get WidthNav(){
    return 100 / this.x.length
  }


}

</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
/*
CSS结构说明：
*/

    .nav{
      display: flex;
      flex-direction: row;
      .Item{
        display:flex;
        justify-content: center;
        color: red;
      }
    }
</style>