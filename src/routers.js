 
import header from './components/header.vue'
import Thegoods from './components/Thegoods.vue'
import Activity from './components/Activity.vue'
const routers = [
   // {path: '/',component: header},
 {path: '/header',name: 'header',component: header},
  {path: '/Thegoods',name: 'Thegoods',component: Thegoods},
    {path: '/Activity',name: 'Activity',component: Activity},
]
export default routers
 