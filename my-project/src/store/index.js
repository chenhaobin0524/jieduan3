import Vue from 'vue';
import Vuex from 'vuex';//引入vuex
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        search: {
            searchText: '',
            goodsnum: '',
        },
        city: {
            City: ''
        },

    },
    //存,更新数据
    mutations: {
        setSearch(state, newValue) {
            state.search = newValue;
        },
        setCity(state, newValue) {
            state.city = newValue
        },
    },
    //触发mutation
    actions: {
        setSearch(context, newValue) {
            context.commit('setSearch', newValue)
        },
        setCity(context, newValue) {
            context.commit('setCity', newValue)
        }
    },
    // 拿，获取数据
    getters: {
        getSearch(state) {
            return state.search
        },
        getCity(state) {
            return state.city
        }
    }
})