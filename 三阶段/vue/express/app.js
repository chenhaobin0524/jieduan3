// 创建错误 404,502错误
var createError = require('http-errors');
var express = require('express');
// 解析cookie的
var path = require('path');
var cookieParser = require('cookie-parser');
// 打印的模块 打印一些请求结果在终端上 打印日志
var logger = require('morgan');
// 路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// 中间件
// 设置视图文件夹
app.set('views', path.join(__dirname, 'views'));
// 设置html预编译语言为jade，还有其他语言的 sass less
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());//转成json对象
// 解析post请求体
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());//解析cookie值
// 设置应用程序目录中的“公共”目录为应用程序提供静态内容。静态文件
app.use(express.static(path.join(__dirname, 'public')));
//路由，将要进入的目录
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // 如果上面的中间件全部都找不到结果，那向前端返回404
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // 服务器错误
  res.status(err.status || 500);
  res.render('error');
});
// 导出到app
module.exports = app;
