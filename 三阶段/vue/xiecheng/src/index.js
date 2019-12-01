
import Vue from 'vue/dist/vue';
import './assets/style.css';
import './assets/swiper.css';
import header from './template/header.html';
import main from './template/main.html';
import main2 from './template/main2.html';
import main3 from './template/main3.html';

new Vue({
    //V view 视图层
    el: '#xiecheng',
    // M 数据层
    data: {
        city: "关东"
    },
    template: `
    <div>
       ${header}
       ${main}
       ${main2}
       ${main3}
    </div>
    `
})