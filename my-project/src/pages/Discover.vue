<template>
  <div class="sort">
    <Search />
    <SsarchContent />
  </div>
</template>
<script>
import Search from "../components/Search2.vue";
import SsarchContent from "../components/SearchContent.vue";
export default {
  components: {
    Search,
    SsarchContent
  }
};
</script>