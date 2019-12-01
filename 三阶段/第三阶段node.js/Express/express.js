const express = require('express');//实例化
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser') //引入第三方包,用于接收post请求数据
const cors = require('cors')// 跨域插件
// 创建的app对象，express应用的逻辑会从这个对象开始
const app = express();//创建类
// 解决跨域问题,对象是局部的，有局限性，安全性相对较高(推荐)
app.use(cors(), function (req, res, next) {
    //拦截所有走home的请求
    //在此可做home权限验证 通过则继续执行
    next();//继续执行
});

//另一种方法,对象是全局都可以实现，安全性不高
// app.all('*', function (req, res, next) {
//设为指定的域
// res.header('Access-Control-Allow-Origin', "*");
// res.header("Access-Control-Allow-Headers", "X-Requested-With");
// res.header('Access-Control-Allow-Headers', 'Content-Type');
// res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// res.header('Access-Control-Allow-Credentials', true);
// res.header("X-Powered-By", ' 3.2.1');
// next();
// });
app.get('/index', (req, res) => {
    console.log(req.query);//get请求获取数据的方法
    let { username, password } = req.query;//es6解构赋值写法
    res.send('你好，师姐');
});
app.get('/home', (req, res) => {

    res.send('hello');
});
//使用post，获取客户端传过来的参数通过req.body，需要借助body-parser第三方包
//解析post中的x-www-formdata
app.use(bodyParser.urlencoded({ extended: false }));
//解析post中的json
app.use(bodyParser.json());
app.post('/name', (req, res) => {
    console.log(req.body);
    let { username, password } = req.body;//es6解构赋值写法
    if (username == 'chen' && password == '111') {
        let data = {
            code: 0,//错误码
            msg: '登录成功',//返回提示信息
            data: { 'username': username }//返回数据
        }
        res.send(data);
    } else {
        let data = {
            code: -1,//错误码
            msg: '登录失败',//返回提示信息
            data: { 'username': username }//返回数据
        }
        res.send(data);
    }
});
//以上三个，我们称之为路由，路的来由
http.createServer(app).listen(8000);
console.log('启动服务器');
