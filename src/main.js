// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

 import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)



import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routers from './routers'
 
const router = new VueRouter({
 mode: 'abstract',
 routes: routers
})
 
 
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
 
