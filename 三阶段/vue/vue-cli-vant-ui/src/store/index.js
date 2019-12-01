import Vue from 'vue';
import Vuex from 'vuex';//引入vuex
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        search: {
            searchText: '',
        }
    },
    //存,更新数据
    mutations: {
        setSearch(state, newValue) {
            state.search = newValue;
        }
    },
    //触发mutation
    actions: {
        setSearch(context, newValue) {
            context.commit('setSearch', newValue)
        }
    },
    // 拿，获取数据
    getters: {
        getSearch(state) {
            return state.search
        }
    }
})