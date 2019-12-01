
import Vue from 'vue/dist/vue';
import 'weui';
import './assets/style.css';
import './assets/style.scss';
import Footer from './model/footer';
import Wechat from './pages/wechat';
import Contact from './pages/contact';
new Vue({
    //V view 视图层
    el: '#app',
    // M 数据层
    data: {
        componentName: 0
    },
    template: `
    <div>
      <keep-alive>
      <component :is="componentNameComputed"></component>
    </keep-alive>
      <Footer/>
    </div>
    `,
    // 引入组件
    components: {
        Wechat,
        Contact,
        Footer
    },
    computed: {
        componentNameComputed() {
            return this.componentName === 0 ? 'Wechat' : 'Contact'
        }
    }

})