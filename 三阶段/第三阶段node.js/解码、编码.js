// 解码
// const querystring = require('querystring');
// let str = "name%3D%E7%BD%91%E6%98%93%26age%3D16";
// const encode = querystring.unescape(str);
// console.log(encode);
//编码
const querystring = require('querystring');
let str = "name=网易&age=16";
const encode = querystring.escape(str);
console.log(encode);
