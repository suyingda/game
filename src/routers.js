import Vue from 'vue';

import * as types from './store/types.js';
import store from './store';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import header from './components/header.vue';
import Thegoods from './components/Thegoods.vue';
import Activity from './components/Activity.vue';
import GoodsDetail from './views/GoodsDetail.vue';
import GoodsDetail2 from './views/GoodsDetail2.vue';

const routes = [
    {path: '/', component: header},
    {path: '/header', name: 'header', component: header},
    {path: '/Thegoods', name: 'Thegoods', component: Thegoods},
    {path: '/Activity', name: 'Activity', component: Activity, meta: {abcount: false},},
    {path: '/GoodsDetail', name: 'GoodsDetail', component: GoodsDetail},
    {path: '/GoodsDetail2', name: 'GoodsDetail2', component: GoodsDetail2},

];

const router = new VueRouter({
    // mode: 'abstract',
    mode: 'hash',
    routes,
});

router.beforeEach((to, from, next) => {
    let {meta: toMeta} = to;
    if (to.path == '/Activity') {
        store.dispatch('ab', toMeta.abcount);
    } else {
        store.dispatch('ab', true);
    }

    next(); // 确保一定要调用 next()
});

export default router;
   