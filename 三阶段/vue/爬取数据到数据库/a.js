let arr = [{
    "imgurl": "https://img14.yiguoimg.com/d/items/2018/180807/9288727914489095_300.jpg",
    "saletip": "", "sub": "就像现剥的榴莲肉一样绵糯香甜", "name": "泰国金枕头冷冻榴莲果肉", "price": "¥49.9", "strong": "/300g"
}, {
    "imgurl": "https://img13.yiguoimg.com/d/items/2019/190927/9288739260180283_300.jpg",
        "saletip": "基地发货", "sub": "基地发货 不支持合单 色泽红艳 脆甜味美", "name": "清谷田园嘎啦苹果手提箱礼盒装", "price": "¥49", "strong": "/2.5kg"
    }, {
        "imgurl": "https://img14.yiguoimg.com/d/items/2017/171130/9288715872871294_300.jpg",
        "saletip": "2件59元", "sub": "饱满弹嫩，营养低脂", "name": "原膳南美白虾仁", "price": "¥32.9", "strong": "/0.25kg"
    }, {
        "imgurl": "https://img09.yiguoimg.com/d/items/2017/171024/9288714211664728_300.jpg",
        "saletip": "下单8折", "sub": "去骨去刺，丰腴鲜香，适煎烤", "name": "美威欧式三文鱼排", "price": "¥62.9", "strong": "/250g"
    }, {
        "imgurl": "https://img11.yiguoimg.com/d/items/2019/190911/9288739115640619_300.jpg",
        "saletip": "", "sub": "活蟹 不支持合单 下单后48小时内发货", "name": "丰收蟹庄金奖太湖蟹", "price": "¥258", "strong": "/2对"
    }, {
        "imgurl": "https://img12.yiguoimg.com/d/items/2018/180704/9288725486937316_300.jpg",
        "saletip": "第2件半价", "sub": "PS级牛肋骨原切 搭配炖料包轻松做出美味牛肋排", "name": "新西兰精修带骨牛肋排", "price": "¥39", "strong": "/400g"
    }, {
        "imgurl": "https://img14.yiguoimg.com/d/items/2019/190611/9288738214061771_300.jpg",
        "saletip": "第2件9.9", "sub": "紧实香软，肥瘦相间，口感丰腴，鲜美多汁", "name": "澳洲雪花牛腩块", "price": "¥45.9", "strong": "/500g"
    }, {
        "imgurl": "https://img06.yiguoimg.com/e/web/170118/150345/170118150345180_154370_300.jpg",
        "saletip": "第2件0元", "sub": "肉质柔嫩不醒 鲜香细腻", "name": "崇明生态乳鸽", "price": "¥49.9", "strong": "/300g"
    }]
const {
    insert,
} = require('./db');
insert('test1', arr)