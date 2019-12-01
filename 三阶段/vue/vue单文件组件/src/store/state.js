export default {
    state: {
        searchText: '',
        type: 0
    },
    setSearchText(newValue) {
        this.state.searchText = newValue;
    },
    setType(newValue) {
        this.state.type = newValue;
    }
}