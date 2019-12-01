<template>
  <div class="weui-gallery" :style="{
    display: gallery.status?'block':'none'}">
    <span class="weui-gallery__img" :style="{backgroundImage: `url(${gallery.imgUrl})`}"></span>
    <div @click="hide" class="weui-gallery__opr">
      <a href="javascript:" class="weui-gallery__del">
        <i class="weui-icon-delete weui-icon_gallery-delete"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    // 计算属性，获取公共库的数据
    gallery() {
      return this.$store.getters.getGallery;
    }
  },
  methods: {
    //隐藏图片放大
    hide() {
      this.$store.dispatch("setGallery", {
        status: false,
        imgUrl: ""
      });
    }
  }
};
</script>