export default {
    data: {
        searchText: '',
        istrue: false,
    },
    methods: {
        search() {
            this.searchModel.istrue = true;
        },
        cancel() {
            this.searchModel.istrue = false;
            this.searchModel.searchText = '';
        },
        clear() {
            this.searchModel.searchText = '';
        }
    }
}