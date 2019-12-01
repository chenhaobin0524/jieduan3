<template>
  <div>
    <Header color="green">微信</Header>
    <Search />
    <Panel />
    <Gallery />
    <Toast />
  </div>
</template>
<script>
import Header from "../model/Header.vue";
import Search from "../model/Search.vue";
import Panel from "../model/Panel.vue";
import Gallery from "../model/Gallery.vue";
import Toast from "../model/Toast.vue";
export default {
  components: {
    Header,
    Search,
    Panel,
    Gallery,
    Toast
  }
};
</script>