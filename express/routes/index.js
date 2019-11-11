var express = require('express');
// 路由
var router = express.Router();
//引入数据库
const {
  find,
  insert,
  updata,
  del
} = require('./db.js');

/* GET home page. */
router.get('/news', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let page = req.query.page;
  let num = 5;
  let pages = (page - 1) * num;
  (async () => {
    // 查,第二个参数不写是查询全部
    let data = await find('news', {}, pages, num);
    res.send(data);
  })();
});

router.get('/grid', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let page = req.query.page;
  // 查,第二个参数不写是查询全部
  let data = await find('ele', null, 0, 10);
  res.send(data);
  // res.json(data);
});

router.get('/restaurants', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题

  // 查,第二个参数不写是查询全部
  let data1 = await find('restaurants', null, 0, 10);
  res.send(data1);
});

// 主页商品表一
router.get('/list1', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  // 查,第二个参数不写是查询全部
  let data2 = await find('test1', null, 0, 8);
  res.send(data2);
});

// 主页商品表二
router.get('/list2', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let page = req.query.page;
  let num = 10;
  let pages = (page - 1) * num;
  // 查,第二个参数不写是查询全部
  let data3 = await find('test2', null, pages, num);
  res.send(data3);
});
// 分类页商品表
router.get('/shoplist', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  // 查,第二个参数不写是查询全部
  let data3 = await find('feilei', null, 0, 8);
  res.send(data3);
});
// 吃饭吧数据
router.get('/showlist', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let page = req.query.page;
  let num = 10;
  let pages = (page - 1) * num;
  let data4 = await find('chifanba', null, pages, num);
  res.send(data4);
});
// 登录
router.get('/login', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let { username, password } = req.query;
  await find('login', { username }, 0, 1000).then(function (data) {
    if (data.length >= 1) {
      if (data[0].password == password) {
        res.send("0")//登录成功
      } else {
        res.send("1")//登录失败
      }
    } else {
      res.send("2")//用户未注册，不存在
    }
  })
});
// 详情页
router.get('/getdata', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let id = req.query.ids;
  let data = await find('test1', { ids: id }, 0, 1000);
  res.send(data);
});
// 加入购物车
router.get('/addcat', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let { ids, count } = req.query;
  count = parseInt(count);
  let data2 = await find('goodsCar', { uid: ids }, 0, 1000);
  if (data2.length >= 1) {
    newcounts = data2[0].counts + count;
    let a = await updata('goodsCar', { uid: ids }, { counts: newcounts })
    res.send('更新成功');
  } else {
    let data = await find('test1', { ids: ids }, 0, 1000);
    uid = data[0].ids;
    let imgurl = data[0].imgurl;
    let counts = count;
    let name = data[0].name;
    let price = data[0].price;
    await insert('goodsCar', [{
      uid,
      imgurl,
      counts,
      name,
      price
    }])
    res.send('加入成功');
  }
});
// 购物车商品数量
router.get('/num', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let data = await find('goodsCar', null, 0, 1000);
  let sum = 0;
  data.forEach((i) => {
    sum += i.counts;
  });
  sum = sum.toString();
  res.send(sum);
});
//渲染购物车页
router.get('/showCar', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let data = await find('goodsCar', null, 0, 1000);
  res.send(data);
});
// 删除商品
router.get('/delCar', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let { ids } = req.query;
  await del('goodsCar', { uid: ids });
  res.send('删除成功');
});
// 购物车更改数量
router.get('/changnum', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let { ids, count } = req.query;
  count = parseInt(count);
  let data2 = await find('goodsCar', { uid: ids }, 0, 1000);
  if (data2.length >= 1) {
    await updata('goodsCar', { uid: ids }, { counts: count })
    res.send('更新成功');
  } else {
    let data = await find('test1', { ids: ids }, 0, 1000);
    uid = data[0].ids;
    let imgurl = data[0].imgurl;
    let counts = count;
    let name = data[0].name;
    let price = data[0].price;
    await insert('goodsCar', [{
      uid,
      imgurl,
      counts,
      name,
      price
    }])
    res.send('加入成功');
  }
});
module.exports = router;
