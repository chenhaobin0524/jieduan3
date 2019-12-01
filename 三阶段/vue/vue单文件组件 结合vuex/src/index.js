import Vue from 'vue';
import 'weui';
import './assets/style.scss';
import App from './app.vue';
import store from './store/vuex';//引入vuex
new Vue({
  el: '#app',
  store,//作用在全局下
  render(h) {
    return h(App)
  }
})