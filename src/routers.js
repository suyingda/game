 
import Vue from 'vue'
 
import VueRouter from 'vue-router'
Vue.use(VueRouter)
 
import header from './components/header.vue'
import Thegoods from './components/Thegoods.vue'
import Activity from './components/Activity.vue'
const routes = [
   // {path: '/',component: header},
 {path: '/header',name: 'header',component: header},
  {path: '/Thegoods',name: 'Thegoods',component: Thegoods},
  {path: '/Activity',name: 'Activity',component: Activity},
]

 const router = new VueRouter({
 // mode: 'abstract',
  mode: 'hash',
   routes
})
 
/*routers.beforeEach((to, from, next) => {
	alert(1)
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   // this route requires auth, check if logged in
  //   // if not, redirect to login page.
  //   if (!auth.loggedIn()) {
  //     next({
  //       path: '/login',
  //       query: { redirect: to.fullPath }
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next() // 确保一定要调用 next()
  // }
})*/

export default router
 