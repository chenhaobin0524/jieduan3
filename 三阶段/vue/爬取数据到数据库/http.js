const https = require('https')
const jQuery = require('jquery')
const {
    JSDOM
} = require('jsdom')
// 写入数据库
const {
    insert,
} = require('./db')
const mock = (html) => {
    const {
        window
    } = new JSDOM(html);
    let $ = jQuery(window);
    return $
}
https.get('https://b2capigateway.yiguo.com/api/commodityapi/Commodity/GetAllCategory', {
    headers: {
        // 请求体，必须在域名为'www.umei.cc发送请求
        'appName': '3000025',//破解反爬虫,
      
       
    }
}, (res, req) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        console.log(rawData);

        // let entries = JSON.parse(rawData)[0].entries
        // entries.forEach(async (element, index) => {
        //     // await insert('ele', [{
        //     //     name: element.name,
        //     // }])
        // });


    })
})