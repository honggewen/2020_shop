import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'

import Header from './components/Header/Header.vue'
import store from './vuex/store'

import 'lib-flexible'

Vue.component('Header', Header)

Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, // 所有组件都能看到 $router 和 $route   <router-link>
}).$mount('#app')
