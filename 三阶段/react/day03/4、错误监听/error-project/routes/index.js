var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/error', function(req, res, next) {
  console.log(req.query)
  res.send('错误接收完毕')
  // 这里一般是把错误日志存到数据库
});

module.exports = router;
