import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

// 四个路由import 首页 分类 购物车 我的 按序排列
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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
