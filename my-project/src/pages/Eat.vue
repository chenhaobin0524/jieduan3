<template>
  <div class="eat">
    <div class="title-icon">
      <i class="iconBack" @click="go"></i>
      <ul class="title-pad">
        <li v-for="(i, index) in list" :key="index">
          <img :src="i.img" />
          <div v-text="i.name"></div>
        </li>
      </ul>
    </div>
    <van-list
      :offset="50"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多内容了"
      @load="Show"
    >
      <div class="open-article" v-for="(i,index) in showlist " :key="index">
        <div class="title-in">
          <div class="img-box">
            <span class="txt" v-if="i.txt==='生活家'" v-text="i.txt"></span>
            <span class="txt" v-else v-text="i.txt" style="background:#58bc58"></span>
            <span class="num">
              <i class="icon icon5"></i>
              {{i.num}}
            </span>
            <img class="lazy" :src="i.imgurl" :alt="i.name" style="display: block;" />
          </div>
          <p class="tit1" v-text="i.name"></p>
          <div class="time">
            <img
              class="lazy"
              src="http://img13.yiguoimg.com/d/albums/2019/190829/153403927062423325_640.jpg"
              alt="易果君"
              style="display: block;"
            />
            <span class="name">易果君&nbsp;</span>
            <span class="time-new" v-text="i.time"></span>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import Vue from "vue";
import { List } from "vant";
Vue.use(List);
export default {
  data() {
    return {
      list: [
        {
          img:
            "http://img13.yiguoimg.com/e/ad/2016/161020/586030925119660372_120x96.png",
          name: "做美食"
        },
        {
          img:
            "http://img13.yiguoimg.com/e/ad/2016/161020/586030925119693140_120x96.png",
          name: "涨知识"
        },
        {
          img:
            "http://img12.yiguoimg.com/e/ad/2016/161020/586030925119725908_120x96.png",
          name: "生活家"
        },
        {
          img:
            "http://img09.yiguoimg.com/e/ad/2017/170117/586030927703745073_120x96.png",
          name: "爱试吃"
        }
      ],
      loading: false,
      finished: false,
      showlist: [],
      page: 1
    };
  },
  methods: {
    Show() {
      this.$axios
        .get("http://localhost:3000/showlist", {
          params: { page: this.page }
        })
        .then(({ data }) => {
          this.showlist = this.showlist.concat(data);
          this.loading = false;
          this.page++;
          if (this.showlist.length >= 20) {
            this.finished = true;
          }
        });
    },
    go(){
      this.$router.push('/main/home');
    }
  }
};
</script>
<style lang="css" scoped>
.title-icon{
  position: relative;
}
.iconBack {
  position: absolute;
  top: 0.4rem;
  left: 0.4rem;
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  background: url(//img06.yiguoimg.com/d/web/180530/01261/141440/goback.png)
    no-repeat;
  background-size: 100% 100%;
  z-index: 100;
}
</style>