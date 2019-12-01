import Vue from 'vue'
import App from './App.vue'
import store from './store/index';//引入vuex
Vue.config.productionTip = false
import axios from 'axios';
Vue.prototype.$axios = axios;//利用原型对象
import router from './routers/indexs'
new Vue({
  store,//作用在全局下
  router,//通过 router 配置参数注入路由， 从而让整个应用都有路由功能
  render: h => h(App),
}).$mount('#app')
