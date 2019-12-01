<template>
  <div class="page__bd">
    <div :class="['weui-search-bar',
    { 'weui-search-bar_focusing': istrue }]" id="searchBar">
      <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input
            v-model="searchText"
            type="search"
            class="weui-search-bar__input"
            id="searchInput"
            placeholder="搜索"
            required
          />
          <a v-on:click="clear" href="javascript:" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label
          @click="search"
          class="weui-search-bar__label"
          id="searchText"
          style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
        >
          <i class="weui-icon-search"></i>
          <span>搜索</span>
        </label>
      </form>
      <a @click="cancel" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
    </div>
  </div>
</template>
<script>
import store from '../store/state'
export default {
  data() {
    return {
      searchText: "",
      istrue: false
    };
  },
  methods: {
    search() {
      this.istrue = true;
    },
    cancel() {
      this.istrue = false;
      this.searchText = "";
    },
    clear() {
      this.searchText = "";
    }
  },
  watch: {
    searchText(val) {
      store.setSearchText(val);
    }
  }
};
</script>
