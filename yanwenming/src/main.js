import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import Swiper from 'swiper-4.5.0'
import 'swiper-4.5.0/dist/css/swiper.css'
import 'swiper-4.5.0/dist/js/swiper.js'


Vue.config.productionTip = false
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
//完整引入mint-ui组件库
import MintUI from "mint-ui";

import'mint-ui/lib/style.css'
Vue.use(MintUI)

import axios from "axios"
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;
import Vuex from "vuex";
Vue.use(Vuex);
var store=new Vuex.Store({
  state:{
    cartCount:0
  },
  mutations:{
    increment(state){
      state.cartCount++;
    }
  },
  getters:{
    optCartCount:function(state){
      return state.cartCount
    }
  }
})
    
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
