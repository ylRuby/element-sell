// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'

import './common/stylus/index.styl'

// 引入的对象进行全局注册
Vue.use(VueRouter)
Vue.use(VueResource)

// 1、定义路由组件
// 2、定义路由
const routes = [
  {
    path: '/',
    component: goods
  },
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/seller',
    component: seller
  }
]
// 3、创建router实例
const router = new VueRouter({
  routes,
  linkActiveClass: 'active' /* 设置激活class类名 */
})
// 4、创建和挂载根实例
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App) /* h对应一个creatElement函数，把App组件传入并渲染 */
})
