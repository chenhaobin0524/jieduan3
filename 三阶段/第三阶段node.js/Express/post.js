const express = require('express');//实例化
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser') //引入第三方包,用于接收post请求数据
const cors = require('cors')// 跨域插件
const querystring = require('querystring');
const path = require('path');//引入路径path
const url = require('url');//引入地址url解析url

// 创建的app对象，express应用的逻辑会从这个对象开始
const app = express();//创建类
// 解决跨域问题,对象是局部的，有局限性，安全性相对较高(推荐)
app.use(cors(), function (req, res, next) {
    //拦截所有走home的请求
    //在此可做home权限验证 通过则继续执行
    next();//继续执行
});
//使用post，获取客户端传过来的参数通过req.body，需要借助body-parser第三方包
//解析post中的x-www-formdata
app.use(bodyParser.urlencoded({ extended: false }));
//解析post中的json
app.use(bodyParser.json());

//注册功能
app.get('/reg', (req, res) => {
    console.log(url.parse(req.url).search)
    // 获取请求路径req.url
    //url.parse(req.url)解析网址，得到的是拥有很多属性的对象
    //url.parse(req.url).search 解析网址，得到的是拥有很多属性的对象,
    //提取里面search的属性值,即： ?username = dd & password=dd
    //写入文件中，用绝对路径
    //参数一：绝对路径；参数二：存入的数据（用到url解析）；参数三：错误返回
    fs.appendFile(path.join(__dirname, './login.txt'), url.parse(req.url).search, (err) => {
        if (err) {
            res.send('注册失败，请重试')
        }
        res.send('注册ok')
    });

})

//登录功能
app.post('/name', (req, res) => {
    console.log(req.body);
    let { username, password } = req.body;//es6解构赋值写法
    // 获取绝对路径
    let msgurl = path.join(__dirname, './login.txt');
    // 读取文件
    fs.readFile(msgurl, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            // 切割数据
            let tmp = data.split('?');
            let arr = [];
            tmp.forEach((item) => {
                let obj = querystring.parse(item, '&', '=');//字符串转对象
                arr.push(obj);
            });
            console.log(arr);
            // 遍历，匹配
            for (var i = 0; i < arr.length; i++) {
                if (username == arr[i].username && password == arr[i].password) {
                    return res.send('登录成功');
                }
            }
            res.send('登录失败');
        }
    });

});
//以上三个，我们称之为路由，路的来由
http.createServer(app).listen(9000);
console.log('启动服务器');
