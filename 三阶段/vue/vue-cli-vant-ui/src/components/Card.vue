<template>
  <van-list
    :offset="50"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-card
      v-for="(r,index) in newsComputed"
      :key="index"
      num="2"
      price="2.00"
      desc="描述信息"
      :title="r.name"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    >
      <div slot="tags">
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </div>
    </van-card>
  </van-list>
</template>
<script>
import Vue from "vue";
import { Card, Tag, Button, List } from "vant";
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(List);
export default {
  data() {
    return {
      loading: false,
      finished: false,
      restaurants: []
    };
  },
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/restaurants").then(({ data }) => {
        this.restaurants = this.restaurants.concat(data);
        // this.restaurants = [...this.restaurants, ...data];
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.restaurants.length >= 10) {
          this.finished = true;
        }
      });
    }
  },
  computed: {
    newrestaurants() {
      return this.$store.getters.getSearch; //触发获取数据
    },
    newsComputed() {
      // 如果有搜索的值就计算结果;
      // 否则使用原来数据;
      if (this.newrestaurants.searchText) {
        return this.restaurants.filter(item => {
          if (item.name.indexOf(this.newrestaurants.searchText) >= 0) {
            return item;
          }
        });
      } else {
        return this.restaurants;
      }
    }
  }
};
</script>