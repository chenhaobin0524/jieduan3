<template>
  <div id="app">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!-- keep-alive,设置缓存，频繁切换不用重新刷新页面请求数据 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar";
export default {
  name: "app",
  components: {
    Tabbar
  }
};
</script>
<style>
</style>
