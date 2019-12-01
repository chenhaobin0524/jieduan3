<template>
  <div class="search">
    <div class="scity">
      <span class="adress" @click="showCity('/city')" v-if="newCity" v-text="newCity"></span>
      <span class="adress" @click="showCity('/city')" v-else>选择城市</span>
      <i class="arrow"></i>
    </div>
    <van-search
      v-model="value"
      placeholder="请输入商品名称"
      shape="round"
      @click="onSearch()"
      background="#39da85"
    ></van-search>
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
  computed: {
    newCity() {
      return this.$store.getters.getCity.CityText;
    }
  },
  methods: {
    // 触发获取数据
    onSearch() {
      this.$router.push("/main/discover");
    },
    showCity(path) {
      this.$router.push(path);
    }
  }
};
</script>
