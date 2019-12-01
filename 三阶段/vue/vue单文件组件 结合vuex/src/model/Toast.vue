<template>
  <div
    id="loadingToast"
    :style="{opacity: toast.status?1:0,
   display:toast.status? 'block':'none'}"
  >
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-loading weui-icon_toast"></i>
      <p class="weui-toast__content">数据加载中</p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    //计算属性 获取数据，固定格式
    toast() {
      return this.$store.getters.getToast;
    }
  }
};
</script>