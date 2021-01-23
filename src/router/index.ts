import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// 四个路由import 首页 分类 购物车 我的 按序排列
import Home from '../views/Home.vue'
import Category from '@/views/Category.vue'
import Cart from '@/views/Cart.vue'
import User from '@/views/User.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [

  //  name 同级展示可以加入，具体参考VueRouter-命名视图
  {
    path: '/',
    // name: 'Home',
    component: Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/Cart',
    component:Cart
  },
  {
    path:'/User',
    component:User
  }
]

const router = new VueRouter({
  routes
})

export default router
