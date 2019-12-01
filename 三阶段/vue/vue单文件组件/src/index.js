import Vue from 'vue'
import 'weui'
import './assets/style.scss'
import App from './app.vue'
new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
})