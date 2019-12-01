import Vue from 'vue/dist/vue';
import Footer from '../view/footer.html';
export default Vue.extend({
    data() {
        return {
            footer: [{
                title: '微信',
                url: 'wechat',
                badge: 8,
                dot: false
            }, {
                title: '通讯录',
                url: 'contact',
                badge: 0,
                dot: false
            }, {
                title: '发现',
                url: 'recover',
                badge: 0,
                dot: true
            }, {
                title: '我',
                url: 'mine',
                badge: 0,
                dot: false
            }],
            offset: 0
        };
    },
    template: Footer,
    methods: {
        show(index) {
            this.offset = index;
        }
    }
})