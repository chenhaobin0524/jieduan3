const fs = require('fs');
const http = require('http');
//引入jq，可以进行DOM操作
const jQuery = require('jquery');
// 模拟DOM
const { JSDOM } = require('jsdom');
const mock = (html) => {
    // 模拟出一个window
    const { window } = new JSDOM(html);
    let $ = jQuery(window);
    return $;
}
http.get('http://www.umei.cc/p/gaoqing/cn/', {
    headers: {
        // 请求体，必须在域名为'www.umei.cc发送请求
        'Host': 'www.umei.cc'//破解反爬虫
    }
}, (res) => {
    // res响应请求回来的是以流的形式传回来
    res.setEncoding('utf8');
    // 定义一个变量来接收流
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    // 响应结束
    res.on('end', () => {

        fs.appendFile('index.html', rawData, (err) => {
            err ? console.error(err) : console.log('网页写入成功');
        });
        let $ = mock(rawData);
        // 用$去获取图片信息
        $("img").each((index, element) => {
            let imgurl = $(element).attr('src')
            fs.appendFile('./aa.txt', imgurl + '\n', (err) => {
                err ? console.error(err) : console.log('写入成功');
            })
        })
    })
})
// gulp.src('./xxx').pipe().pipe(gulp.dest('./')) 文件流

// http.get(img,(res)=>{
//     // 将读取流，写入file.jpg文件中
//     res.pipe(fs.createWriteStream('file.jpg'))
// })
