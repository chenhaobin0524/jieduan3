const { createServer } = require('http');
const { querystring } = require('querystring');
const fs = require('fs');
// 创建服务器的方法
// request（req） 请求头和请求体 前端给后端的
// response（res）响应头和响应体 后端给前端的
const server = createServer((req, res) => {
    // 获取请求数据,并把字符串转为对象
    // let urls = querystring.parse(req.url);
    let urls = req.url;
    fs.appendFile('.dd.txt', urls+'/n', (err) => {
        err ? console.error(err) : console.log('写入成功');

    });
    // 编写响应头
    res.writeHead('200');
    // 编写响应体
    res.write('hello');
    // 后端完全写完了
    res.end();
});
// 提供一个端口给前端服务
server.listen(8000);
console.log('启动服务器');
