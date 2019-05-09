import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import login from './views/login.vue'
import goodlist from './views/goodlist.vue'
import goodcart from './views/goodcart.vue'
import goodetails from './views/goodetails.vue'
import personal from './views/personal.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: index},
    {path: '/index',component: index},
    {path: '/login',component: login},
    {path: '/goodlist',component: goodlist},
    {path: '/goodcart',component: goodcart},
    {path: '/goodetails/:pid',component: goodetails,props:true},
    {path: '/personal',component:  personal},
    ]
})
