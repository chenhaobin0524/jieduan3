<template>
  <div id="app">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!-- keep-alive,设置缓存，频繁切换不用重新刷新页面请求数据 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {}
};
</script>

