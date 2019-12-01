// 解析网址
const url = require("url");
let string = 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string&name=wangyi#hash'
let string2 = "//www.baidu.com:8080/index"
let result = url.parse(string, true, true);
//url.parse	将url解析成对象的形式
//参数二：将url从字符串解析转为对象
//参数三：能解析以//开头的url
console.log(result);