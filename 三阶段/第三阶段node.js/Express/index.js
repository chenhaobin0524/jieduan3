const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mineRouter = require('./router/mine');
const app = express();
// 解析post请求体
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// 这是Express中的内置中间件功能。它使用body解析器解析带有JSON负载的传入请求。
app.use(express.json());
// 全局配置的中间件
app.use((req, res, next) => {
    res.append('cache-control', 'max-age=60')//设置缓存，60秒内如果有缓存，从缓存调，没有再发送请求
    res.append('Set-Cookie', 'name=yao')
    res.append('Host', 'yao.com')//可以反爬虫
    // 全局处理
    res.append('Access-Control-Allow-Origin', '*')//解决跨域问题
    // 因为这里是全局拦截，不触发next就不会往下走了
    next()
});
// 全局设置静态文件夹
app.use(express.static('public'));
app.use('/abcd', mineRouter);

// 静态文件跟这里路径一样时，谁写在前面，执行谁
// app.get('/index.txt', (req, res) => {
//     fs.readFile('./public/index.txt',(err,data)=>{
//         res.send(data.toString())
//     })
// })

http.createServer(app).listen(4000)
console.log('启动服务器')