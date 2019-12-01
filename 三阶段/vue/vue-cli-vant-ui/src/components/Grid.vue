<template>
  <van-grid :column-num="5">
    <van-grid-item v-for="(item,index) in grids" :key="index" :icon="item.scr" :text="item.name" />
  </van-grid>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";
const axios = require("axios");
Vue.use(Grid).use(GridItem);
export default {
  data() {
    return {
      grids: []
    };
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      axios.get("http://localhost:3000/grid").then(({ data }) => {
        this.grids = data;
      });
    }
  }
};
</script>