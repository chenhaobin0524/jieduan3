<template>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/discover" icon="search">发现</van-tabbar-item>
    <van-tabbar-item @click=" gotolink('/order')" icon="friends-o">订单</van-tabbar-item>
    <van-tabbar-item @click=" gotolink('/mine')" icon="setting-o">我的</van-tabbar-item>
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
      path: "/home"
    };
  },
  methods: {
    gotolink(path) {
      //点击跳转至上次浏览页面
      // this.$router.go(-1)
      //指定跳转地址
      this.$router.replace(path);
    }
  }
};
</script>