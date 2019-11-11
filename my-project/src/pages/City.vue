<template>
  <div class="city" @click="getEvent($event)">
    <h3>热门城市</h3>
    <div class="hot">
      <span class="line-all">上海</span>
      <span class="line-all">北京</span>
      <span class="line-all">天津</span>
      <span class="line-all">杭州</span>
      <span class="line-all">昆山</span>
      <span class="line-all">南京</span>
      <span class="line-all">宁波</span>
      <span class="line-all">苏州</span>
      <span class="line-all">无锡</span>
      <span class="line-all">东莞</span>
      <span class="line-all">佛山</span>
      <span class="line-all">广州</span>
      <span class="line-all">江门</span>
      <span class="line-all">深圳</span>
      <span class="line-all">珠海</span>
      <span class="line-all">中山</span>
    </div>
    <h4>A</h4>
    <div class="list">
      <span>阿坝藏族羌族自治州</span>
      <span>安阳</span>
      <span>阿拉善</span>
      <span>安顺</span>
      <span>安庆</span>
      <span>鞍山</span>
    </div>
    <h4>B</h4>
    <div class="list clear">
      <span>滨州</span>
      <span>本溪</span>
      <span>白城</span>
      <span>巴中</span>
      <span>北京(郊区)</span>
      <span>巴彦淖尔</span>
      <span>保山</span>
      <span>北海</span>
      <span>白银</span>
      <span>百色</span>
      <span>蚌埠</span>
      <span>毕节</span>
      <span>保定</span>
      <span>北京</span>
      <span>包头</span>
      <span>白山</span>
    </div>
    <h4>C</h4>
    <div class="list clear">
      <span>楚雄彝族自治州</span>
      <span>成都</span>
      <span>承德</span>
      <span>赤峰</span>
      <span>朝阳</span>
      <span>崇明县</span>
      <span>崇左</span>
      <span>常德</span>
      <span>滁州</span>
      <span>郴州</span>
      <span>长治</span>
      <span>重庆</span>
      <span>长春</span>
      <span>常熟</span>
      <span>常州</span>
      <span>池州</span>
      <span>长沙</span>
      <span>沧州</span>
      <span>潮州</span>
    </div>
    <h4>D</h4>
    <div class="list clear">
      <span>大庆</span>
      <span>丹东</span>
      <span>达州</span>
      <span>东莞</span>
      <span>大连</span>
      <span>定西</span>
      <span>东营</span>
      <span>德州</span>
      <span>大同</span>
      <span>迪庆藏族自治州</span>
      <span>德宏傣族景颇族自治州</span>
      <span>大理白族自治州</span>
      <span>大兴安岭</span>
    </div>
    <h4>E</h4>
    <div class="list clear">
      <span>鄂州</span>
      <span>恩施土家族苗族自治州</span>
      <span>鄂尔多斯</span>
    </div>
    <h4>F</h4>
    <div class="list clear">
      <span>佛山</span>
      <span>防城港</span>
      <span>福州</span>
      <span>抚顺</span>
      <span>抚州</span>
      <span>阜新</span>
      <span>阜阳</span>
    </div>
    <h4>G</h4>
    <div class="list clear">
      <span>固原</span>
      <span>广元</span>
      <span>果洛</span>
      <span>桂林</span>
      <span>贵港</span>
      <span>贵阳</span>
      <span>甘南</span>
      <span>甘孜藏族自治州</span>
      <span>赣州</span>
      <span>广州</span>
      <span>广安</span>
    </div>
    <h4>H</h4>
    <div class="list clear">
      <span>惠州</span>
      <span>葫芦岛</span>
      <span>衡水</span>
      <span>淮南</span>
      <span>菏泽</span>
      <span>淮北</span>
      <span>琼海</span>
      <span>贺州</span>
      <span>鹤岗</span>
      <span>黄冈</span>
      <span>海南</span>
      <span>衡阳</span>
      <span>邯郸</span>
      <span>合肥</span>
      <span>黄南</span>
      <span>黑河</span>
      <span>漯河</span>
      <span>呼伦贝尔</span>
      <span>呼和浩特</span>
      <span>黄石</span>
      <span>海北</span>
      <span>黄山</span>
      <span>河池</span>
      <span>哈尔滨</span>
      <span>鹤壁</span>
      <span>红河哈尼族彝族自治州</span>
      <span>杭州</span>
      <span>湖州</span>
      <span>淮安</span>
      <span>河源</span>
      <span>海东</span>
      <span>怀化</span>
      <span>海西</span>
    </div>
    <h4>J</h4>
    <div class="list clear">
      <span>济南</span>
      <span>锦州</span>
      <span>金昌</span>
      <span>焦作</span>
      <span>荆门</span>
      <span>揭阳</span>
      <span>吉林</span>
      <span>晋城</span>
      <span>鸡西</span>
      <span>嘉兴</span>
      <span>佳木斯</span>
      <span>晋中</span>
      <span>景德镇</span>
      <span>江门</span>
      <span>金华</span>
      <span>酒泉</span>
      <span>荆州</span>
      <span>济宁</span>
    </div>
    <h4>K</h4>
    <div class="list clear">
      <span>昆山</span>
      <span>开封</span>
      <span>昆明</span>
    </div>
    <h4>L</h4>
    <div class="list clear">
      <span>临汾</span>
      <span>丽水</span>
      <span>洛阳</span>
      <span>凉山彝族自治州</span>
      <span>临夏</span>
      <span>丽江</span>
      <span>陇南</span>
      <span>柳州</span>
      <span>临沂</span>
      <span>龙岩</span>
      <span>聊城</span>
      <span>兰州</span>
      <span>临沧</span>
      <span>来宾</span>
      <span>六安</span>
      <span>辽阳</span>
      <span>廊坊</span>
      <span>六盘水</span>
      <span>辽源</span>
      <span>连云港</span>
      <span>娄底</span>
      <span>莱芜</span>
      <span>吕梁</span>
    </div>
    <h4>M</h4>
    <div class="list clear">
      <span>梅州</span>
      <span>马鞍山</span>
      <span>牡丹江</span>
      <span>茂名</span>
    </div>
    <h4>N</h4>
    <div class="list clear">
      <span>南宁</span>
      <span>南阳</span>
      <span>南昌</span>
      <span>怒江傈僳族自治州</span>
      <span>南平</span>
      <span>宁德</span>
      <span>南通</span>
      <span>南京</span>
      <span>南充</span>
      <span>宁波</span>
    </div>
    <h4>P</h4>
    <div class="list clear">
      <span>攀枝花</span>
      <span>普洱</span>
      <span>平顶山</span>
      <span>莆田</span>
      <span>平凉</span>
      <span>盘锦</span>
    </div>
    <h4>Q</h4>
    <div class="list clear">
      <span>青岛</span>
      <span>泉州</span>
      <span>秦皇岛</span>
      <span>黔东南苗族侗族自治州</span>
      <span>黔西南布依族苗族自治州</span>
      <span>黔南布依族苗族自治州</span>
      <span>齐齐哈尔</span>
      <span>庆阳</span>
      <span>清远</span>
      <span>钦州</span>
      <span>衢州</span>
      <span>曲靖</span>
      <span>潜江</span>
      <span>七台河</span>
    </div>
    <h4>R</h4>
    <div class="list clear">
      <span>日照</span>
    </div>
    <h4>S</h4>
    <div class="list clear">
      <span>三明</span>
      <span>商丘</span>
      <span>随州</span>
      <span>上海(郊区)</span>
      <span>十堰</span>
      <span>绍兴</span>
      <span>朔州</span>
      <span>宿州</span>
      <span>宿迁</span>
      <span>四平</span>
      <span>三亚</span>
      <span>思茅</span>
      <span>沈阳</span>
      <span>石嘴山</span>
      <span>韶关</span>
      <span>神农架林区</span>
      <span>汕头</span>
      <span>苏州</span>
      <span>上海</span>
      <span>石家庄</span>
      <span>汕尾</span>
      <span>绥化</span>
      <span>邵阳</span>
      <span>三门峡</span>
      <span>松原</span>
      <span>上饶</span>
      <span>双鸭山</span>
      <span>深圳</span>
    </div>
    <h4>T</h4>
    <div class="list clear">
      <span>唐山</span>
      <span>通化</span>
      <span>太原</span>
      <span>台州</span>
      <span>泰安</span>
      <span>通辽</span>
      <span>天津</span>
      <span>铜陵</span>
      <span>铁岭</span>
      <span>天门</span>
      <span>铜仁</span>
      <span>天水</span>
      <span>泰州</span>
    </div>
    <h4>W</h4>
    <div class="list clear">
      <span>乌海</span>
      <span>潍坊</span>
      <span>武威</span>
      <span>武汉</span>
      <span>梧州</span>
      <span>芜湖</span>
      <span>乌兰察布</span>
      <span>威海</span>
      <span>温州</span>
      <span>无锡</span>
      <span>吴忠</span>
      <span>文山壮族苗族自治州</span>
    </div>
    <h4>X</h4>
    <div class="list clear">
      <span>西双版纳傣族自治州</span>
      <span>忻州</span>
      <span>湘西土家族苗族自治州</span>
      <span>宣城</span>
      <span>许昌</span>
      <span>孝感</span>
      <span>邢台</span>
      <span>西安</span>
      <span>仙桃</span>
      <span>兴安</span>
      <span>新乡</span>
      <span>徐州</span>
      <span>厦门</span>
      <span>信阳</span>
      <span>锡林郭勒</span>
      <span>咸宁</span>
      <span>湘潭</span>
      <span>襄阳</span>
      <span>西宁</span>
    </div>
    <h4>Y</h4>
    <div class="list clear">
      <span>永州</span>
      <span>云浮</span>
      <span>玉溪</span>
      <span>岳阳</span>
      <span>濮阳</span>
      <span>扬州</span>
      <span>益阳</span>
      <span>宜昌</span>
      <span>盐城</span>
      <span>玉林</span>
      <span>烟台</span>
      <span>阳江</span>
      <span>阳泉</span>
      <span>燕郊</span>
      <span>银川</span>
      <span>运城</span>
      <span>延边朝鲜族自治州</span>
      <span>伊春</span>
      <span>玉树</span>
    </div>
    <h4>Z</h4>
    <div class="list clear">
      <span>遵义</span>
      <span>漳州</span>
      <span>郑州</span>
      <span>昭通</span>
      <span>张家口</span>
      <span>泸州</span>
      <span>亳州</span>
      <span>珠海</span>
      <span>湛江</span>
      <span>枣庄</span>
      <span>中卫</span>
      <span>张掖</span>
      <span>株洲</span>
      <span>淄博</span>
      <span>中山</span>
      <span>舟山</span>
      <span>镇江</span>
      <span>驻马店</span>
      <span>肇庆</span>
      <span>周口</span>
      <span>张家界</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getEvent(e) {
      if (e.target.tagName == "SPAN") {
        this.$store.dispatch("setCity", {
          CityText: e.target.innerText
        });
        this.$router.push("/main/home");
      }
    }
  }
};
</script>