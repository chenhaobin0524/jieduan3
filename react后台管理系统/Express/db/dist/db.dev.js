"use strict";

var MongoClient = require('mongodb').MongoClient; // 连接路径（默认）


var url = 'mongodb://localhost:27017'; // 数据库名称

var dbName = 'chen'; // 连接到服务器

var connect = function connect() {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, {
      useUnifiedTopology: true
    }, function (err, client) {
      err ? reject(err) : resolve(client);
      console.log('连接成功');
    });
  });
}; //查


var find = function find(col, query) {
  return new Promise(function _callee(resolve, reject) {
    var client, db, collection;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context.sent;
            db = client.db(dbName); // 操作选中的表

            collection = db.collection(col);
            collection.find(query ? query : {}).toArray(function (err, docs) {
              err ? reject(err) : resolve(docs);
              console.log('查找成功');
            });
            client.close();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  });
}; //插入、增


var insert = function insert(col, query) {
  return new Promise(function _callee2(resolve, reject) {
    var client, db, collection;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context2.sent;
            db = client.db(dbName); // 操作选中的表

            collection = db.collection(col); // 插入数据，参数是数组json类

            collection.insertMany(query, function (err, result) {
              err ? reject(err) : resolve(result);
              console.log('插入成功');
            });
            client.close();

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
}; //改


var update = function update(col, query, query2) {
  return new Promise(function _callee3(resolve, reject) {
    var client, db, collection;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context3.sent;
            db = client.db(dbName); // 操作选中的表

            collection = db.collection(col);
            collection.updateOne(query //条件
            , {
              $set: query2
            }, //更改的值
            function (err, result) {
              err ? reject(err) : resolve(result);
              console.log('更改成功');
            });
            client.close();

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
}; //删除


var del = function del(col, query) {
  return new Promise(function _callee4(resolve, reject) {
    var client, db, collection;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context4.sent;
            db = client.db(dbName); // 操作选中的表

            collection = db.collection(col);
            collection.deleteMany(query ? query : {}, function (err, result) {
              err ? reject(err) : resolve(result);
              console.log('删除成功');
            });
            client.close();

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    });
  });
};

module.exports = {
  find: find,
  insert: insert,
  update: update,
  del: del
};