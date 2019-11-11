<template>
  <van-list :offset="100" v-model="loading" :finished="finished" finished-text @load="onLoad">
    <van-card
      v-for="(r,index) in restaurants"
      :key="index"
      :title="r.name"
      :thumb="r.imgurl"
      @click="navToDetal(index)"
    >
      <div slot="tags">
        <span class="danger" v-if="r.saletip" v-text="r.saletip"></span>
        <span class="desc" v-text="r.sub"></span>
      </div>
      <div slot="footer">
        <span class="price">
          <strong v-text="r.price"></strong>
          {{r.strong}}
        </span>
        <van-button size="mini" @click="goodcar($event, index)">加入购物车</van-button>
      </div>
    </van-card>
  </van-list>
</template>
<script>
import Vue from "vue";
import { Card, Tag, Button, List, Toast } from "vant";
Vue.use(Card)
  .use(Tag)
  .use(Button)
  .use(List)
  .use(Toast);
export default {
  data() {
    return {
      loading: false,
      finished: false,
      restaurants: []
    };
  },
  computed: {
    newrestaurants() {
      return this.$store.getters.getSearch; //触发获取数据
    }
  },
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/list1").then(({ data }) => {
        this.restaurants = this.restaurants.concat(data);
        // this.restaurants = [...this.restaurants, ...data];
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.restaurants.length >= 8) {
          this.finished = true;
        }
      });
    },
    goodcar(e, id) {
      this.$axios
        .get("http://localhost:3000/addcat", {
          params: {
            ids: id,
            count: 1
          }
        })
        .then(() => {
          let newnum = this.$store.getters.getSearch.goodsnum;
          this.$store.dispatch("setSearch", {
            goodsnum: newnum + 1
          });
          Toast("已加入购物车");
        });

      e.stopPropagation();
    },
    navToDetal(index) {
      // 注意 如果提供了 path，params 会被忽略
      // this.$router.push({
      //   // 命名的路由名
      //   name: "details",
      //   // 等同于
      //   // path:'/details',
      //   query: { id: index } // /details?id=0
      // });
      // push这个方法会向 history 栈添加一个新的记录，
      // 所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

      // 建议用这种
      this.$router.push({
        name: "details",
        params: { id: index }
        // 拿值
        // this.$router.params.id
      });
      // replace方法跟push一样，不会向 history 添加新记录，
      // 而是跟它的方法名一样 —— 替换掉当前的 history 记录。
      // this.$router.replace({
      //   // 命名的路由名
      //   name: "details",
      //   // 等同于
      //   // path:'/details',
      //   query: { id: index } // /details?id=0
      // });

      // 在浏览器记录中前进一步，等同于 history.forward()
      // this.$router.go(1);

      // 后退一步记录，等同于 history.back()
      // this.$router.router.go(-1);

      // 前进 3 步记录
      // this.$router.router.go(3);
    }
  }
};
</script>