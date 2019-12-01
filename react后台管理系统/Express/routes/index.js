var express = require('express');
var router = express.Router();
const {
  find,
  insert,
  update,
  del
} = require('../db/db.js');
router.post('/login', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let { username, password } = req.body;
  console.log(req.body);
  await find('login', { username }).then(function (data) {
    if (data.length >= 1) {
      if (data[0].password == password) {
        res.send('0')//登录成功
      } else {
        res.send('1')//登录失败
      }
    } else {
      res.send('2')//用户未注册，不存在
    }
  })
});
router.get('/login', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let { username, password } = req.query;
  await find('login', { username }).then(function (data) {
    if (data.length >= 1) {
      if (data[0].password == password) {
        res.send('0')//登录成功
      } else {
        res.send('1')//登录失败
      }
    } else {
      res.send('2')//用户未注册，不存在
    }
  })
});
// 修改密码
router.get('/newpassword', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let { username, password, newPassword } = req.query;
  console.log(username);
  await find('login', { username, password }).then(function (data) {
    if (data.length >= 1) {
      update('login', { username }, { password: newPassword }).then((data) => {
        console.log(data);
        if (data.result.ok == 1) {
          res.send('0')//修改成功
        } else {
          res.send('1')//修改失败
        }
      })
    } else {
      res.send('2')//账号密码错误，修改失败
    }
  })
});
// 请求用户列表
router.get('/userlist', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let data = await find('login')
  console.log(data);
  res.send(data)

});
// 用户分布
router.get('/yonghu', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
  let data = await find('login', { address: '北京' })
  let data1 = await find('login', { address: '广州' })
  let data2 = await find('login', { address: '黑龙江' })
  let data3 = await find('login', { address: '南宁' })
  let data4 = await find('login', { address: '深圳' })
  let data5 = await find('login', { address: '成都' })
  let data6 = await find('login', { address: '上海' })
  let fen = {
    bj: data.length,
    gz: data1.length,
    hlj: data2.length,
    nn: data3.length,
    sz: data4.length,
    cd: data5.length,
    sh: data6.length,
  }
  res.send(fen)

});



module.exports = router;
