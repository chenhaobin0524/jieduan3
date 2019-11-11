<template>
  <div class="shoplist">
    <ul>
      <van-list
        :offset="100 "
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <li class="list" v-for="(r,index) in newsComputed" :key="index">
          <div class="pic">
            <img :src="r.imgurl" />
            <div class="saletip">
              <span v-if="r.saletip" v-text="r.saletip"></span>
            </div>
          </div>
          <div class="info">
            <p class="name">
              <a href="javascript:;" v-text="r.name"></a>
            </p>
            <div class="price">
              <strong v-text="r.price"></strong>
              {{r.strong}}
              <i class="price-addcart"></i>
            </div>
          </div>
        </li>
      </van-list>
    </ul>
    <div class="pagefooter">
      <p>沪IPC备09008015号</p>
      <p>上海易果电子商务有限公司</p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { List } from "vant";
Vue.use(List);
export default {
  data() {
    return {
      loading: false,
      finished: false,
      page: 1,
      restaurants: []
    };
  },
  computed: {
    newrestaurants() {
      return this.$store.getters.getSearch; //触发获取数据
    },
    newsComputed() {
      // 如果有搜索的值就计算结果;
      // 否则使用原来数据;
      if (this.newrestaurants.searchText) {
        return this.restaurants.filter(item => {
          if (item.name.indexOf(this.newrestaurants.searchText) >= 0) {
            return item;
          }
        });
      } else {
        return this.restaurants;
      }
    }
  },
  methods: {
    onLoad() {
      this.$axios
        .get("http://localhost:3000/list2", {
          params: {
            page: this.page
          }
        })
        .then(({ data }) => {
          this.restaurants = this.restaurants.concat(data);
          this.page++;
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.restaurants.length >= 20) {
            this.finished = true;
          }
        });
    },
    navToDetal(index) {
      this.$router.push({
        name: "details",
        params: { id: index }
      });
    }
  }
};
</script>