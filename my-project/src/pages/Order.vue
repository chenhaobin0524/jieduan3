<template>
  <div class="cart-wrap">
    <div class="headerNav" style="display:none">
      <div class="navBar" style="background: rgb(255, 255, 255);">
        <i class="goBack">
          <van-icon name="arrow-left" />
        </i>
        <p class="title" style="color: rgb(51, 51, 51);">购物车</p>
      </div>
    </div>
    <div class="cart-login line-bottom" v-if="showlogin">
      登录可同步购物车内商品
      <router-link to="/login">
        <a href="javascript:;" class="line-all">登录</a>
      </router-link>
    </div>
    <div class="cart-express" v-if="showlogin">
      全场满100元包邮,还差
      <span class="red">100.00</span>元包邮
    </div>
    <div class="cart-express" v-else style="top:0">
      全场满100元包邮,还差
      <span class="red">100.00</span>元包邮
    </div>
    <div class="toppad" :style="{paddingTop: top +'rem'}"></div>
    <div class="goods" v-if="(goods.length > 0)">
      <div class="group">
        <div class="saleGroup" v-for="(item, index) in goods" :key="index">
          <div class="check">
            <input type="checkbox" :value="item.uid" name="ids" checked />
          </div>
          <div class="img">
            <img :src="item.imgurl" />
          </div>
          <div class="text">
            <h2 class="elli2" v-text="item.name"></h2>
            <div class="tag"></div>
            <p>
              <strong class="red">
                ￥
                <b v-text="item.price.slice(1)"></b>
              </strong>
              <span class="bl" style="display:none">￥69</span>
            </p>
          </div>
          <div class="del" @click="mounted(item.uid)">
            <van-icon name="delete" />
          </div>
          <div class="num">
            <van-stepper
              v-model="item.counts"
              min="1"
              max="30"
              integer
              @change="onChange(item.uid,item.counts)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="nogoods" v-if="goods.length == 0" style="display:block">
      <div class="icon"></div>
      <p>购物车空空的，快去逛逛吧！</p>
      <div class="btn">
        <router-link to="/main/home">
          <a>去逛逛</a>
        </router-link>
      </div>
    </div>
    <div class="guss">
      <div class="title line-top">
        <h2>猜你喜欢</h2>
      </div>
      <div class="list">
        <div class="one" v-for="(item,index) in guss" :key="index">
          <div class="img">
            <img :src="item.imgurl" />
          </div>
          <div class="text">
            <h2 class="elli2" v-text="item.title">原膳南美白虾仁（中)deddd250g</h2>
            <p>
              <strong class="red">
                ￥
                <b v-text="item.price">32.90</b>
              </strong>
            </p>
          </div>
          <div class="btn">
            <van-icon name="add-o" />
          </div>
        </div>
      </div>
    </div>
    <div class="submit">
      <van-submit-bar
        :price="getTotal.totalPrice"
        button-text="去结算"
        @submit="onSubmit"
        label="合计(不含运费):"
      >
        <van-checkbox v-model="all" checked-color="#01B27A">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup, Stepper, Icon, SubmitBar, Toast } from "vant";
import { Dialog } from "vant";
Vue.use(SubmitBar)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Stepper)
  .use(Icon)
  .use(Dialog)
  .use(Toast);
export default {
  data() {
    return {
      show: true, //购物车为空时显示
      count: "",
      guss: [
        {
          imgurl:
            "https://img14.yiguoimg.com/d/items/2017/171130/9288715872871294_300.jpg",
          title: "原膳南美白虾仁（中）250g",
          price: "32.90"
        },
        {
          imgurl:
            "https://img14.yiguoimg.com/d/items/2018/180807/9288727914489095_300.jpg",
          title: "SunMoon泰国金枕头冷冻榴莲果肉300g",
          price: "49.90"
        },
        {
          imgurl:
            "https://img09.yiguoimg.com/d/items/2018/180705/9288725529240805_300.jpg",
          title: "原膳澳洲原切牛肉丝120g",
          price: "18.00"
        },
        {
          imgurl:
            "https://img11.yiguoimg.com/d/items/2018/180423/9288722024637591_300.jpg",
          title: "意大利进口Dolomia多洛米亚天然饮用水经典款1.5L",
          price: "38.00"
        },
        {
          imgurl:
            "https://img12.yiguoimg.com/d/items/2018/180704/9288725486937316_300.jpg",
          title: "原膳新西兰精修带骨牛肋排(含炖料包)400g",
          price: "39.00"
        },
        {
          imgurl:
            "https://img11.yiguoimg.com/d/items/2017/171109/9288714859127657_300.jpg",
          title: "越南冷冻巴沙鱼片280g",
          price: "19.90"
        },
        {
          imgurl:
            "https://img10.yiguoimg.com/d/items/2018/180807/9288727884670215_300.jpg",
          title: "原膳加拿大AAA级谷饲西冷牛排180g",
          price: "59.90"
        },
        {
          imgurl:
            "https://img05.yiguoimg.com/e/web/170224/101004/170224101004668_106110_300.jpg",
          title: "原膳东海带鱼段250g",
          price: "6.60"
        },
        {
          imgurl:
            "https://img14.yiguoimg.com/d/items/2018/180929/9288731968382269_300.jpg",
          title: "澳奎澳洲金钱腱500g",
          price: "89.00"
        },
        {
          imgurl:
            "https://img10.yiguoimg.com/d/items/2017/171204/9288716047164292_300.jpg",
          title: "KONO半壳冷冻青口贝500g",
          price: "29.80"
        }
      ],
      showlogin: true,
      top: 6,
      goods: [],
      checkAll: true,
      totalPrice: ""
    };
  },

  created() {
    let data1 = this.getCookie("username");
    if (data1) {
      this.showlogin = false;
      this.top = 3.2;
      window.console.log(this.goods.length);
    }
    this.getDate();
  },
  computed: {
    // 检测是否全选

    // 获取总价和产品总数
    getTotal: function() {
      let all = 0;
      let num = 0;
      this.goods.forEach(item => {
        all += item.counts * item.price.slice(1);
        num += item.counts;
      });
      return { totalNum: num, totalPrice: all * 100 };
    }
  },
  methods: {
    // 全选与取消全选
    all() {
      this.checkAll = !this.checkAll;
    },
    Car() {
      this.$axios.get("http://localhost:3000/num").then(({ data }) => {
        if (data == 0) {
          this.show = true;
          this.$store.dispatch("setSearch", {
            goodsnum: ""
          });
        } else {
          this.show = false;
          this.$store.dispatch("setSearch", {
            goodsnum: data
          });
        }
      });
    },
    getCookie(key) {
      //获取cookie值
      var cookies = document.cookie; //name=malin; pwd=123456
      var arr = cookies.split("; "); //['name=malin','pwd=123456']
      for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split("="); //['name','malin'
        if (key == arr2[0]) {
          return arr2[1];
        }
      }
    },
    getDate() {
      window.console.log();
      this.$axios.get("http://localhost:3000/showCar").then(({ data }) => {
        this.goods = [...data];
      });
    },

    mounted(sid) {
      Dialog.confirm({
        message: "您确定要删除吗？"
      })
        .then(() => {
          window.console.log(sid);
          this.$axios
            .get("http://localhost:3000/delCar", {
              params: {
                ids: sid
              }
            })
            .then(({ data }) => {
              this.getDate();
              this.Car();
              Toast(data);
            });
        })
        .catch(() => {});
    },
    onChange(ids, counts) {
      window.console.log(ids, counts);
      this.$axios
        .get("http://localhost:3000/changnum", {
          params: {
            ids,
            count: counts
          }
        })
        .then(() => {
          this.Car();
        });
    },
    onSubmit() {
      window.console.log(this);
    }
  }
};
</script>