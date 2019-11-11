<template>
  <div class="login">
    <van-tabs
      v-model="active"
      line-width="30px"
      line-height="4px"
      color="#01b27a"
      title-active-color="#01b27a"
      title-inactive-color="#ccc"
    >
      <div class="loginForm">
        <van-tab title="手机快捷登录">
          <van-cell-group>
            <van-field
              v-model="username"
              placeholder="请输入手机号码"
              maxlength="11"
              type="number"
              clearable
              error-message
            />
            <van-field
              v-model="sms"
              center
              size="large"
              clearable
              placeholder="请输入短信验证码"
              type="number"
            >
              <van-button slot="button" size="small" type="primary">获取验证码</van-button>
            </van-field>
          </van-cell-group>
          <p class="hint">未注册过的手机将自动注册易果生鲜账户</p>
        </van-tab>
        <van-tab title="账号密码登录">
          <van-cell-group>
            <van-field
              v-model="username"
              placeholder="手机号/账号/邮箱"
              maxlength="11"
              clearable
              error-message
            />
            <van-field v-model="password" center size="large" clearable placeholder="请输入密码"></van-field>
          </van-cell-group>
          <p class="forget">忘记密码</p>
        </van-tab>
      </div>
    </van-tabs>
    <button
      class="loginBtnNo"
      v-if="(username && password)"
      @click="Login"
      style="background: linear-gradient(90deg,#39da85,#01b27a)"
    >登录</button>
    <button class="loginBtnNo" @click="Login" v-else>登录</button>
    <div class="logon">
      <img src="//img05.yiguoimg.com/d/web/190916/00191/161811/greylogo.png" />
    </div>
    <div class="bottomProtocol">
      <label for="label">
        <input type="checkbox" id="label" checked="checked" />我已阅读并同意
        <a class="green">《易果服务协议》</a>和
        <a class="green">《隐私条款》</a>
      </label>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs, CellGroup, Field, Dialog, Toast } from "vant";
Vue.use(Field)
  .use(CellGroup)
  .use(Tab)
  .use(Tabs)
  .use(Dialog)
  .use(Toast);
export default {
  data() {
    return {
      active: 0,
      username: "",
      sms: "",
      password: ""
    };
  },
  methods: {
    Login() {
      let cookie = this.getCookie(this.username);
      let _this = this;
      if (!cookie) {
        if (this.username && this.password) {
          var reg = /^[1][3,4,5,7,8][0-9]{9}$/; //注意这里不能用let声明变量
          let isok = reg.test(this.username); //返回布尔值
          if (isok) {
            this.$axios
              .get("http://localhost:3000/login", {
                params: {
                  username: this.username,
                  password: this.password
                }
              })
              .then(function(response) {
                //  成功之后
                if (response.data == 0) {
                  // 设置cookie值
                  _this.setCookie("username", _this.username, 2);
                  // 本地存储的方法 存值
                  // localStorage.username = _this.username;
                  // 取值
                  // let user = localStorage.username;

                  // 跳回上次浏览页面
                  _this.$router.go(-1);
                  _this.username = "";
                  _this.password = "";
                } else if (response.data == 2) {
                  Toast("账户未注册");
                  _this.username = "";
                  _this.password = "";
                } else if (response.data == 1) {
                  Toast("密码错误，登录失败");
                  _this.username = "";
                  _this.password = "";
                }
              })
              .catch(function(error) {
                Toast(error);
              });
          } else {
            Toast("手机号码格式有误");
          }
        } else if (this.username) {
          Toast("请输入密码");
        } else {
          Toast("请输入用户名");
        }
      } else {
        Toast("您已登录过了");
      }
    },
    setCookie(key, val, iDay) {
      //设置cookie值
      //key：键名(字符串)；val：键值；iDay：失效时间
      var now = new Date();
      now.setDate(now.getDate() + iDay);
      document.cookie =
        key + "=" + val + ";expires=" + now.toUTCString() + ";path=/"; //设置一个站点内的文件可以共享此cookie
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
    }
  }
};
</script>