<template>
  <div class="search">
    <van-search
      v-model="value"
      placeholder="请输入商品名称"
      show-action
      shape="round"
      @search="onSearch()"
    >
      <div slot="action" @click="onSearch()">搜索</div>
    </van-search>
  </div>
</template>
<script>
import Vue from "vue";
import { Search, Icon } from "vant";
Vue.use(Search).use(Icon);
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    // 触发获取数据
    onSearch() {
      this.$store.dispatch("setSearch", {
        searchText: this.value,
      });
    }
  }
};
</script>