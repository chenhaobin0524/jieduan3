import Vue from 'vue';//引入vue
import Vuex from 'vuex';//引入vuex
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        gallery: {
            //图片放大是否显示
            status: false,
            // 图片路径
            imgUrl: ''
        },
        toast: {
            // 点击更多，显示加载
            status: false,
        }
    },
    // 存
    mutations: {
        setGallery(state, newValue) {
            state.gallery = newValue
        },
        setToast(state, newValue) {
            state.toast = newValue
        }
    },
    // 触发mutation
    actions: {
        setGallery(context, newValue) {
            context.commit('setGallery', newValue)
        },
        setToast(context, newValue) {
            context.commit('setToast', newValue)
        },
    },
    // 拿
    getters: {
        getGallery(state) {
            return state.gallery
        },
        getToast(state) {
            return state.toast
        },
    }
})