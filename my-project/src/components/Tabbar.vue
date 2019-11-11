<template>
  <van-tabbar v-model="active" active-color="#11b57c">
    <van-tabbar-item to="/main/home" icon="wap-home">首页</van-tabbar-item>
    <van-tabbar-item to="/main/discover" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item to="/eat" icon="search">吃饭吧</van-tabbar-item>
    <van-tabbar-item to="/main/order" icon="cart-o" :info="goods">购物车</van-tabbar-item>
    <van-tabbar-item to="/main/mine" icon="contact">我的易果</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0,
      path: "/home",
      goodsnum: ""
    };
  },
  created() {
    this.Car();
  },
  computed: {
    goods() {
      return this.$store.getters.getSearch.goodsnum;
    }
  },
  methods: {
    gotolink(path) {
      this.$router.replace(path);
    },
    Car() {
      this.$axios.get("http://localhost:3000/num").then(({ data }) => {
        if (data == 0) {
          this.$store.dispatch("setSearch", {
            goodsnum: ""
          });
        } else {
          this.$store.dispatch("setSearch", {
            goodsnum: data
          });
        }
      });
    }
  }
};
</script>
<style scoped>
.van-tabbar .van-tabbar-item .van-icon::before {
  width: 1.875rem;
  width: 1.3125rem;
}
</style>