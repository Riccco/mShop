<template>
  <div class="nav">
    <div class="nav-wrp"
         :style="widthNav"
         v-for="(items,index) in x.navdata"
         :key="index"
    >
      <router-link exact-active-class="active-router" class="Item"
      :to="items.path">
        <icon class="icon" :name="items.images"></icon>
        <div>
          {{items.name}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">

import {Component,Vue} from "vue-property-decorator";
@Component({

})

export default class Nav extends Vue{
// 直接声明 data
// x 接收全部的导航数据，目前是模拟数据
  icon = [
    'home',
    'classification',
    'shoppingcart',
    'PersonalCenter'
  ]
  x = {
    totalSwitch:true,
    navdata:[
      {type:'home',name:'首页',path:'/',images:'home'},
      {type:'caregory',name:'分类',path:'/category',images:'classification'},
      {type:'cart',name:'购物车',path:'/cart',images:'shoppingcart'},
      {type:'User',name:'我的',path:'/user',images:'PersonalCenter'},
    ]
  }

//  绑定宽度
  widthNav = {
    width:this.WidthNav+'%'
  }

//  计算属性为 getter
  get WidthNav(){
    return 100 / this.x.navdata.length
  }


}

</script>

<style lang="scss">
@import "~@/assets/style/preload.scss";
$text-color:#999;
.active-router{
  color: red;
}
    .icon{
      width: px2vw(48);
      height: px2vw(48);
      margin-bottom: px2vw(8);
    }
    .nav-wrp{
      display: flex;
      color: $text-color;
      font-size: px2vw(22);
      flex-direction: column;
      align-items: center;
    }
    .nav{
      padding: px2vw(8) 0;
      display: flex;
    }
</style>