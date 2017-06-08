// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

/*vuex*/
import store from './store'
/*router*/ 
import router from './routers'


new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})

