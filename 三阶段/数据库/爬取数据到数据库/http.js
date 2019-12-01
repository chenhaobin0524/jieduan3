const https = require('https')
const jQuery = require('jquery')
const {
    JSDOM
} = require('jsdom')
// 写入数据库
const sql = require('./db')
const mock = (html) => {
    const {
        window
    } = new JSDOM(html);
    let $ = jQuery(window);
    return $
}
https.get('https://h5homepage.yiguo.com/?channel=5&appName=3000025', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        console.log(rawData);

        let $ = mock(rawData)
        $(".one-title").each((index, element) => {
            let title = $(element).text();
            console.log(title);

            // sql("INSERT INTO `test1` (`url`, `title`) VALUES ('" + src + "', '" + title + "')")
        })
    })
})