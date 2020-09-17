/* 
向外暴露路由器对象模块
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

// 声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({

  mode: 'history',  // 路径中没有#
  
  // 项目中所有的路由
  routes
})