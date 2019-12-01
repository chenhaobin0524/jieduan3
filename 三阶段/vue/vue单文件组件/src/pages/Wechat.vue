<template>
  <div>
    <Header color="green">微信</Header>
    <Search />
    <Panel />
  </div>
</template>
<script>
import Header from "../model/Header.vue";
import Search from "../model/Search.vue";
import Panel from "../model/Panel.vue";
export default {
  components: {
    Header,
    Search,
    Panel
  }
};
</script>