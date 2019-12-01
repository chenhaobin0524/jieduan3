<template>
  <div class="image">
    <img
      class="first-screen"
      src="https://img09.yiguoimg.com/d/items/2019/191030/9710951925983070_1125x344.gif?w=1125&h=344"
    />
    <div class="oi">
      <img
        class="two"
        src="https://img09.yiguoimg.com/d/items/2019/190724/9288738603542264_1125x149.jpg?w=1125&h=149"
      />
      <img
        class="one-image"
        src="https://img13.yiguoimg.com/d/items/2019/191022/9288739390859094_1125x455.jpg?w=1125&h=455"
      />
      <img
        class="one-image"
        src="https://img14.yiguoimg.com/d/items/2019/191022/9288739390498646_1125x455.jpg?w=1125&h=455"
      />
      <img
        class="one-image"
        src="https://img12.yiguoimg.com/d/items/2019/191022/9288739390891862_1125x455.jpg?w=1125&h=455"
      />
      <img
        src="https://img14.yiguoimg.com/d/items/2019/190624/9288738348934872_1125x26.jpg?w=1125&amp;h=26"
      />
    </div>
    <img
      class="four"
      src="https://img09.yiguoimg.com/d/items/2019/191028/9288739422906204_1125x652.jpg?w=1125&h=652"
    />
    <div class="product-list">
      <div class="product-list-in">
        <div class="proitem" v-for="(item,index) in list1" :key="index">
          <div class="pic">
            <a href="javascript:;" class="pic-a">
              <img :src="item.imgurl" />
            </a>
            <div class="saletip" v-if="item.saletip">
              <span v-text="item.saletip"></span>
            </div>
          </div>
          <div class="info">
            <p class="name">
              <a href="javascript:;" v-text="item.title"></a>
            </p>
            <div class="price">
              <strong v-text="item.price"></strong>
              <i class="price-addcart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      class="four"
      src="https://img10.yiguoimg.com/d/items/2019/191030/9288739461572446_1125x652.jpg?w=1125&h=652"
    />
    <div class="product-list">
      <div class="product-list-in">
        <div class="proitem" v-for="(item,index) in list2" :key="index">
          <div class="pic">
            <a href="javascript:;" class="pic-a">
              <img :src="item.imgurl" />
            </a>
            <div class="saletip" v-if="item.saletip">
              <span v-text="item.saletip"></span>
            </div>
          </div>
          <div class="info">
            <p class="name">
              <a href="javascript:;" v-text="item.title"></a>
            </p>
            <div class="price">
              <strong v-text="item.price"></strong>
              <i class="price-addcart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="two-image clear">
      <div class="link-img1">
        <a href="javascript:;" style="height: 7.72947rem;">
          <img
            src="https://img12.yiguoimg.com/d/items/2019/190329/9288737670538877_658x819.jpg?w=658&amp;h=819"
            style="height: 7.72947rem;"
          />
        </a>
      </div>
      <div class="link-img1">
        <a href="javascript:;" style="height: 7.72947rem;">
          <img
            src="https://img14.yiguoimg.com/d/items/2019/190304/9288737492051556_658x819.jpg?w=658&amp;h=819"
            style="height: 7.72947rem;"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list1: [
        {
          imgurl:
            "https://img14.yiguoimg.com/d/items/2019/191018/9288739367888722_300.jpg",
          saletip: "直降100元",
          title: "枝纯青玉特级网纹瓜礼盒装",
          price: "¥198"
        },
        {
          imgurl:
            "https://img09.yiguoimg.com/d/items/2019/190920/9288739212830516_300.jpg",
          saletip: "产地直发",
          title: "福建平和红肉蜜柚",
          price: "¥38"
        },
        {
          imgurl:
            "https://img10.yiguoimg.com/d/items/2019/191025/9288739414386521_300.jpg",
          saletip: "基地发货",
          title: "陕西甜脆柿",
          price: "¥29"
        },
        {
          imgurl:
            "https://img14.yiguoimg.com/d/items/2019/190930/9288739283969854_300.jpg",
          saletip: "基地发货",
          title: "新疆库尔勒精选香梨礼盒装",
          price: "¥86"
        },
        {
          imgurl:
            "https://img13.yiguoimg.com/d/items/2019/190806/9288738754176774_300.jpg",
          saletip: "基地发货",
          title: "红钻突尼斯软籽石榴礼盒装",
          price: "¥88"
        },
        {
          imgurl:
            "https://img10.yiguoimg.com/d/items/2019/191023/9288739400296279_300.jpg",
          saletip: "基地发货",
          title: "川西丑将野生苹果12个礼盒装(果径85mm以上)",
          price: "¥59"
        },
        {
          imgurl:
            "https://img13.yiguoimg.com/d/items/2019/191018/9288739368380242_300.jpg",
          saletip: "基地发货",
          title: "云南冰糖橙5kg礼盒装",
          price: "¥88"
        }
      ],
      list2: [
        {
          imgurl:
            "https://img10.yiguoimg.com/d/items/2019/190507/9288737945101991_300.jpg",
          saletip: "单品包邮",
          title: "梦贝淡干深海野生海参",
          price: "¥299"
        },
        {
          imgurl:
            "https://img12.yiguoimg.com/d/items/2019/190712/9288738496882412_300.jpg",
          saletip: "该商品单独配送",
          title: "网易味央尊享礼盒",
          price: "¥298"
        },
        {
          imgurl:
            "https://img12.yiguoimg.com/d/items/2019/190822/9288738903762710_300.jpg",
          saletip: "",
          title: "阳澄湖大闸蟹",
          price: "¥299"
        },
        {
          imgurl:
            "https://img13.yiguoimg.com/d/items/2019/190808/9288738770429704_300.jpg",
          saletip: "",
          title: "虾妞牛冷冻茴香小龙虾",
          price: "¥139"
        },
        {
          imgurl:
            "https://img10.yiguoimg.com/d/items/2019/190820/9288738874205972_300.jpg",
          saletip: "蟹券特惠",
          title: "清水大闸蟹",
          price: "¥279"
        },
        {
          imgurl:
            "https://img07.yiguoimg.com/e/web/170508/095120/170508095120808_154370_300.jpg",
          saletip: "第2件0元",
          title: "崇明生态乳鸽",
          price: "¥49.9"
        },
        {
          imgurl:
            "https://img11.yiguoimg.com/d/items/2019/190428/9288737867245212_300.jpg",
          saletip: "单品包邮",
          title: "月亮湾淡干冰岛红参",
          price: "¥699"
        }
      ]
    };
  }
};
</script>
