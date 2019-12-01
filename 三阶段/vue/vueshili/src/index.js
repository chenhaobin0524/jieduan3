
import Vue from 'vue/dist/vue';
import 'weui';
import './assets/style.css';
import './assets/style.scss';
// 视图层
import header from './view/header.html';
import search from './view/search.html';
import panel from './view/panel.html';
import footer from './view/footer.html';

import headerModel from './model/header';
import searchModel from './model/search';
import panelModel from './model/panel';
import footerModel from './model/footer';
new Vue({
    //V view 视图层
    el: '#app',
    // M 数据层
    data: {
        headerModel: headerModel.data,
        searchModel: searchModel.data,
        panelModel: panelModel.data,
        footerModel: footerModel.data,

    },
    methods: {
        ...searchModel.methods,//...表示解析，直接可以调用方法
        ...panelModel.methods,
        ...footerModel.methods,
    },
    computed: {
        // 被筛选过
        newsComputed() {
            // 如果有搜索的值就计算结果
            // 否则使用原来数据
            let _this = this;
            console.log(this);
            
            if (this.searchModel.searchText) {
                // 搜索的值
                // this.searchModel.searchText
                // 新闻原数据
                // this.panelModel.news
                return this.panelModel.news.filter(function (item) {
                    if (item.title.indexOf(_this.searchModel.searchText) >= 0) {
                        return item
                    }
                })
            } else {
                return _this.panelModel.news
            }
        }
    },
    template: `
    <div>
       ${header}
       ${search}
       ${panel}
       ${footer}
    </div>
    `
})