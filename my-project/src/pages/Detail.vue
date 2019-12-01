<template>
  <div class="detail" :key="getdate[0].ids" v-if="show">
    <div class="banner">
      <van-swipe :autoplay="10000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <router-link to="/main/home">
        <i class="iconBack">&lt;</i>
      </router-link>
    </div>
    <div class="productInfor">
      <p class="title">{{getdate[0].name}}</p>
      <p class="subhead">
        <span>{{getdate[0].sub}}</span>
      </p>
      <div class="price">
        <p class="priceIn">
          <span class="priceRed">{{getdate[0].price}}</span>
        </p>
        <p class="area">
          产地：
          <span class="name">泰国</span>
        </p>
      </div>
      <div class="sevenDay line-top backGauge">
        <van-icon name="warning-o" />不支持7天无理由退货
      </div>
    </div>
    <div class="norms">
      <div class="title line-bottom">
        规格
        <span class="choose">{{getdate[0].strong | uppercase}}</span>
      </div>
      <div class="title line-bottom">
        数量
        <div class="num">
          <van-stepper v-model="count" min="1" max="15" integer />
        </div>
      </div>
    </div>
    <div class="address clear">
      <p class="title">送至</p>
      <div class="addressDetail">
        <p class="add">
          <van-icon name="location" />广东 广州市 天河区
        </p>
        <p class="infor">
          <span>有货</span>
          16:00 前完成订单，预计明日(11月6日)送达
        </p>
      </div>
    </div>
    <div class="evaluate">
      <p class="title">
        <span class="count">评价（6898）</span>
        <span class="number">
          查看全部
          <i class="back">&gt;</i>
        </span>
      </p>
      <div class="content">
        <div class="txt">
          <img class="imgHeaer" src="https://img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg" />
          <p class="userName">
            ya***ng
            <br />
            <van-rate v-model="value" :count="5" />
          </p>
          <span class="name">2019-11-05</span>
        </div>
        <p class="text">超时未评价，系统默认好评</p>
      </div>
    </div>
    <div class="details">
      <a href="javascript:;">查看图文详情</a>
    </div>
    <div class="cra">
      <van-goods-action>
        <van-goods-action-icon icon="wap-home-o" text="首页" to="/main/home" />
        <van-goods-action-icon icon="cart-o" text="购物车" :info="goods" to="/main/order" />
        <van-goods-action-button
          type="warning "
          text="加入购物车"
          color="#FB3D3D"
          @click="onClickButton"
        />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Toast,
  Icon,
  Swipe,
  SwipeItem,
  Lazyload,
  Rate,
  Stepper
} from "vant";
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Toast)
  .use(Lazyload)
  .use(Icon)
  .use(Rate)
  .use(Stepper)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
export default {
  data() {
    return {
      count: 1, //购买数量
      value: 3, //评价星星个数
      images: [
        "https://img10.yiguoimg.com/d/items/2018/180807/9288727914423559_500.jpg",
        "https://img10.yiguoimg.com/d/items/2018/180807/9288727914456327_500.jpg",
        "https://img10.yiguoimg.com/d/items/2018/180807/9288727914390791_500.jpg"
      ],
      getdate: [],
      id: this.$route.params.id,
      show: false,
      goodsnum: ""
    };
  },
  //  活跃时
  activated() {
    this.getDate();
    this.Car();
  },
  computed: {
    goods() {
      return this.$store.getters.getSearch.goodsnum;
    }
  },
  methods: {
    onClickButton() {
      let _this = this;
      let ids = this.$route.params.id;
      this.$axios
        .get("http://localhost:3000/addcat", {
          params: {
            ids,
            count: this.count
          }
        })
        .then(() => {
          _this.Car();
          Toast("已加入购物车");
        });
    },
    getDate() {
      let ids = this.$route.params.id;
      this.$axios
        .get("http://localhost:3000/getdata", {
          params: {
            ids
          }
        })
        .then(({ data }) => {
          this.getdate = data;
          this.images = [data[0].imgurl, ...this.images];
          this.show = true;
        });
    },
    Car() {
      this.$axios.get("http://localhost:3000/num").then(({ data }) => {
        window.console.log(data);
        if (data == 0) {    
          this.$store.dispatch("setSearch", {
            goodsnum: ""
          });
        } else {
          this.$store.dispatch("setSearch", {
            goodsnum: data
          });
        }
      });
    }
  },
  //过滤器
  filters: {
    uppercase(num) {
      return num.slice(1);
    }
  }
};
</script>