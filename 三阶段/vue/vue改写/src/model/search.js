import Vue from 'vue/dist/vue';
import Search from '../view/search.html';

export default Vue.extend({
    data() {
        return {
            searchText: '',
            istrue: false,
        }
    },
    template: Search,
    methods: {
        search() {
            this.istrue = true;
        },
        cancel() {
            this.istrue = false;
            this.searchText = '';
        },
        clear() {
            this.searchText = '';
        }
    }
})