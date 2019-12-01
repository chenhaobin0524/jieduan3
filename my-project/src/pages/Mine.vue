<template>
  <div class="my">
    <div class="loginNot">
      <div class="header">
        <div class="headerImg">
          <span class="imgBorder">
            <img alt=" 用户头像" src="https://img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg" />
          </span>
          <a href="javascript:;">
            <router-link to="/login">
              <p class="name" v-text="show"></p>
              <p class="upgrade" v-if="user">再积累3000.00实付金额可升至银卡会员</p>
            </router-link>
          </a>
        </div>
        <i class="setting" @click="clear"></i>
        <div v-if="user">
          <p class="signIn">
            <a href="https://h5appweb.yiguo.com/SignIn/SignInActivity">
              <i class="gift"></i>签到送好礼
              <i class="goBack"></i>
            </a>
          </p>
        </div>
        <div class="grandTotal" v-if="user">
          <a href="javascript:;">当前累计商品实付金额 0.00</a>
        </div>
        <div class="account">
          <p class="list">
            <span class="num">-</span>
            <span class="txt">卡包余额</span>
          </p>
          <p class="list">
            <span class="num">-</span>
            <span class="txt">悠币</span>
          </p>
        </div>
      </div>
      <div class="listtab">
        <ul class="line-bottom">
          <li class="lineList" v-for="(i,index) in list1" :key="index">
            <img :src="i.imgurl" alt />
            <p class="name" v-text="i.name"></p>
          </li>
        </ul>
      </div>
      <div class="testList">
        <ul class="line-bottom">
          <li class="list" v-for="(i,index) in list2" :key="index" @click="goAddress">
            <img :src="i.imgurl" alt />
            <p class="name" v-text="i.name"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: "登录/注册",
      list1: [
        {
          imgurl:
            "https://img07.yiguoimg.com/d/web/180608/01261/105825/unpaid.png",
          name: "待支付"
        },
        {
          imgurl:
            "https://img07.yiguoimg.com/d/web/180608/01261/105825/take.png",
          name: "待收货"
        },
        {
          imgurl:
            "https://img05.yiguoimg.com/d/web/180608/01261/105825/evaluate.png",
          name: "评价送悠币"
        },
        {
          imgurl:
            "https://img06.yiguoimg.com/d/web/180608/01261/105825/changing.png",
          name: "在线退换货"
        },
        {
          imgurl:
            "https://img06.yiguoimg.com/d/web/180608/01261/105825/changing.png",
          name: "全部订单"
        }
      ],
      list2: [
        {
          imgurl:
            "https://img07.yiguoimg.com/d/web/181029/00591/155051/coupons.png",
          name: "优惠券"
        },
        {
          imgurl:
            "https://img06.yiguoimg.com/d/web/181029/00591/155051/yellowcard.png",
          name: "充值卡"
        },
        {
          imgurl:
            "https://img07.yiguoimg.com/d/web/181029/00591/155051/delivery.png",
          name: "礼品兑换券"
        },
        {
          imgurl:
            "https://img07.yiguoimg.com/d/web/181029/00591/155051/address.png",
          name: "收货地址"
        },
        {
          imgurl:
            "https://img06.yiguoimg.com/d/web/181029/00591/155051/help.png",
          name: "帮助中心"
        },
        {
          imgurl:
            "https://img02.yiguo.com/e/web/130101/app/icon/usercenter/box@3x.png",
          name: "我的团购"
        },
        {
          imgurl:
            "https://img06.yiguoimg.com/d/web/181121/00591/143839/account-icon.png",
          name: "账户余额"
        },
        {
          imgurl:
            "https://img07.yiguoimg.com/d/web/181029/00591/155051/service.png",
          name: "在线客服"
        }
      ],
      user: false
    };
  },

  activated() {
    if (this.getCookie("username")) {
      this.show = this.getCookie("username");
      this.user = true;
    } else {
      this.show = "登录/注册";
      this.user = false;
    }
  },
  methods: {
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
    goAddress() {
      this.$router.push("/address");
    },
    clear() {}
  }
};
</script>
<style lang="scss" scoped>
.upgrade {
  margin-left: 1rem;
  position: absolute;
  max-width: 14rem;
  bottom: 0;
  left: 5.4rem;
  display: inline-block;
  height: 1rem;
  font-size: 0.64rem;
  line-height: 1.1rem;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.signIn {
  position: absolute;
  right: 0;
  bottom: 8rem;
  height: 1.8rem;
  background: #c5f9e5;
  border-radius: 3px 0 0 3px;
  color: #12b67c;
  font-size: 0.64rem;
}
.signIn a {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #12b67c;
  line-height: 1.2rem;
  padding: 0.3rem 1.2rem 0.3rem 1.6rem;
  box-sizing: border-box;
}
.signIn a .gift {
  position: absolute;
  left: 0.6rem;
  top: 50%;
  margin-top: -0.9rem;
  display: inline-block;
  width: 0.9rem;
  height: 1.6rem;
  background: url(//img07.yiguoimg.com/d/web/180517/01261/134523/gift.png)
    center no-repeat;
  background-size: 0.9rem 1rem;
}
.signIn a .goBack {
  position: absolute;
  top: 0;
  right: 0.6rem;
  display: inline-block;
  width: 0.3rem;
  height: 1.8rem;
  background: url(//img05.yiguoimg.com/d/web/180517/01261/134523/gopage3.png)
    center no-repeat;
  background-size: 0.3rem 0.5rem;
}
.grandTotal {
  position: absolute;
  width: 100%;
  left: 0;
  box-sizing: border-box;
  bottom: 3.5rem;
  font-size: 0.64rem;
  background: rgba(0, 0, 0, 0.1);
}
.grandTotal a {
  display: block;
  position: relative;

  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  padding: 0.6rem 1.8rem;
}
.grandTotal a::before {
  content: " ";
  display: inline-block;
  position: absolute;
  top: 0.8rem;
  left: 0.64rem;
  width: 0.8rem;
  height: 0.8rem;
  background: url(//img05.yiguoimg.com/d/web/181026/00591/104416/grandtotal-icon.png)
    center no-repeat;
  background-size: 100%;
}
.grandTotal a::after {
  content: " ";
  display: inline-block;
  position: absolute;
  transform: rotate(-90deg);
  top: 0.9rem;
  right: 0.7rem;
  width: 0.64rem;
  height: 0.64rem;
  background: url(//img05.yiguoimg.com/e/web/161222/01858/110628/arrow.png)
    center no-repeat;
  background-size: 100%;
}
</style>