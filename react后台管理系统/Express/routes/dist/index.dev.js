"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../db/db.js'),
    find = _require.find,
    insert = _require.insert,
    update = _require.update,
    del = _require.del;

router.post('/login', function _callee(req, res, next) {
  var _req$body, username, password;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*'); //解决跨域问题

          _req$body = req.body, username = _req$body.username, password = _req$body.password;
          console.log(req.body);
          _context.next = 5;
          return regeneratorRuntime.awrap(find('login', {
            username: username
          }).then(function (data) {
            if (data.length >= 1) {
              if (data[0].password == password) {
                res.send('0'); //登录成功
              } else {
                res.send('1'); //登录失败
              }
            } else {
              res.send('2'); //用户未注册，不存在
            }
          }));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get('/login', function _callee2(req, res, next) {
  var _req$query, username, password;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*'); //解决跨域问题

          _req$query = req.query, username = _req$query.username, password = _req$query.password;
          _context2.next = 4;
          return regeneratorRuntime.awrap(find('login', {
            username: username
          }).then(function (data) {
            if (data.length >= 1) {
              if (data[0].password == password) {
                res.send('0'); //登录成功
              } else {
                res.send('1'); //登录失败
              }
            } else {
              res.send('2'); //用户未注册，不存在
            }
          }));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // 修改密码

router.get('/newpassword', function _callee3(req, res, next) {
  var _req$query2, username, password, newPassword;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*'); //解决跨域问题

          _req$query2 = req.query, username = _req$query2.username, password = _req$query2.password, newPassword = _req$query2.newPassword;
          console.log(username);
          _context3.next = 5;
          return regeneratorRuntime.awrap(find('login', {
            username: username,
            password: password
          }).then(function (data) {
            if (data.length >= 1) {
              update('login', {
                username: username
              }, {
                password: newPassword
              }).then(function (data) {
                console.log(data);

                if (data.result.ok == 1) {
                  res.send('0'); //修改成功
                } else {
                  res.send('1'); //修改失败
                }
              });
            } else {
              res.send('2'); //账号密码错误，修改失败
            }
          }));

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // 请求用户列表

router.get('/userlist', function _callee4(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*'); //解决跨域问题

          _context4.next = 3;
          return regeneratorRuntime.awrap(find('login'));

        case 3:
          data = _context4.sent;
          console.log(data);
          res.send(data);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // 用户分布

router.get('/yonghu', function _callee5(req, res, next) {
  var data, data1, data2, data3, data4, data5, data6, fen;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*'); //解决跨域问题

          _context5.next = 3;
          return regeneratorRuntime.awrap(find('login', {
            address: '北京'
          }));

        case 3:
          data = _context5.sent;
          _context5.next = 6;
          return regeneratorRuntime.awrap(find('login', {
            address: '广州'
          }));

        case 6:
          data1 = _context5.sent;
          _context5.next = 9;
          return regeneratorRuntime.awrap(find('login', {
            address: '黑龙江'
          }));

        case 9:
          data2 = _context5.sent;
          _context5.next = 12;
          return regeneratorRuntime.awrap(find('login', {
            address: '南宁'
          }));

        case 12:
          data3 = _context5.sent;
          _context5.next = 15;
          return regeneratorRuntime.awrap(find('login', {
            address: '深圳'
          }));

        case 15:
          data4 = _context5.sent;
          _context5.next = 18;
          return regeneratorRuntime.awrap(find('login', {
            address: '成都'
          }));

        case 18:
          data5 = _context5.sent;
          _context5.next = 21;
          return regeneratorRuntime.awrap(find('login', {
            address: '上海'
          }));

        case 21:
          data6 = _context5.sent;
          fen = {
            bj: data.length,
            gz: data1.length,
            hlj: data2.length,
            nn: data3.length,
            sz: data4.length,
            cd: data5.length,
            sh: data6.length
          };
          res.send(fen);

        case 24:
        case "end":
          return _context5.stop();
      }
    }
  });
});
module.exports = router;