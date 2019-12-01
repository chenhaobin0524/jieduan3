const querystring = require('querystring');
// 字符串转对象
// let string = "foo=bar&abc=xyz&abc=123";
// let obj = querystring.parse(string,);
// console.log(obj);

// 对象转字符串
let obj = { foo: 'bar', abc: 'xyz', abcd: '123' };
let str = querystring.stringify(obj, '&', '=');
console.log(str);
