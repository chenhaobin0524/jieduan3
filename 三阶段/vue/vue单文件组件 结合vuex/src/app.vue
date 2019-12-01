<template>
  <div>
    <keep-alive>
      <component :is="componentNameComputed"></component>
    </keep-alive>
    <Footer />
  </div>
</template>
<script>
import Footer from "./model/Footer.vue";
import Wechat from "./pages/Wechat.vue";
import Contact from "./pages/Contact.vue";
import store from "./store/state"; //引入公共数据
export default {
  data() {
    return {
      state: store.state
    };
  },
  // 引入组件
  components: {
    Wechat,
    Contact,
    Footer
  },
  computed: {
    componentNameComputed() {
      return this.state.type === 0 ? "Wechat" : "Contact";
    }
  }
};
</script>