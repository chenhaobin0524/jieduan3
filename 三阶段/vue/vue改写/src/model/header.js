import Vue from 'vue/dist/vue';
import Header from '../view/header.html';

export default Vue.extend({
    // props:['color'],
    props: {
        // 规范传入的类型
        color: String,
    },

    data() {
        return {
            title: '今日头条'
        }
    },
    template: Header,
    methods: {
    }
})