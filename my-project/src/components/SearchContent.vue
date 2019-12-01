<template>
  <div class="searchContent">
    <div class="nav">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(item,index) in navlist"
          :key="index"
          :title="item"
          @click="List(index)"
        />
      </van-sidebar>
    </div>
    <div class="listContent">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="(value,i) in shoplist[0][list]"
          :key="i"
          :icon="value.imgurl"
          :text="value.name"
        />
      </van-grid>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Sidebar, SidebarItem } from "vant";
import { Grid, GridItem } from "vant";
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Grid).use(GridItem);
export default {
  data() {
    return {
      activeKey: 0,
      navlist: [
        "进口水果",
        "国产水果",
        "精选肉类",
        "禽类蛋品",
        "海鲜水产",
        "即烹美食",
        "乳品糕点",
        "新鲜蔬菜",
        "方便速食",
        "粮油杂货",
        "食品饮料",
        "礼品礼券"
      ],
      shoplist: [],
      list: "list1",
      searchText: ""
    };
  },
  created() {
    this.$axios.get("http://localhost:3000/shoplist").then(({ data }) => {
      this.shoplist = data;
    });
  },
  computed: {
    newsComputed() {
      // 如果有搜索的值就计算结果;
      // 否则使用原来数据;
      window.console.log(this.$store.getters.getSearch.searchText);
      if (this.$store.getters.getSearch.searchText) {
        window.console.log(this.shoplist[0].list1);
        return this.shoplist[0].list1.filter(item => {
          if (
            item.name.indexOf(this.$store.getters.getSearch.searchText) >= 0
          ) {
            return item;
          }
        });
      } else {
        return this.shoplist;
      }
    }
  },
  // 切换左边导航栏
  methods: {
    List(index) {
      this.list = "list" + (index + 1);
    }
  }
};
</script>