import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false

//全局导航栏
import Nav from '@/components/Nav.vue'
Vue.component('Nav',Nav);
Vue.component('Icon', Icon);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
