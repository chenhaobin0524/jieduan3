const http = require('http')
const fs = require('fs')
const request = require('request')//第三方插件
http.get('http://www.umei.cc/p/gaoqing/cn/', {
    headers: {
        // 请求体，必须在域名为i1.zhiaigou.com发送请求
        'Host': 'www.umei.cc'
    }
}, (res) => {
    // 读取流
    res.pipe(fs.createWriteStream('file.jpg'))
})

// request({
//     url: 'http://www.umei.cc/p/gaoqing/cn/',
//     headers: {
//         // 请求体，必须在域名为i1.zhiaigou.com发送请求
//         'Host': 'www.umei.cc'
//     }
// }).pipe(fs.createWriteStream('doodle.png'))