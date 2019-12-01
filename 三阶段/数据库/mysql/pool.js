// 连接池
// 数据池没有关闭和连接，但是也可以有的，
// 数据池用于频繁使用的数据，它会缓存起来， 在第二次读的时候会加快
let mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    // 需要连接的库
    database: 'myku'
});
pool.query('UPDATE test1 SET ? WHERE ?', [{
    title: '大哥'
}, {
    id : 1
}], function (error, results, fields) {
    error ? console.error(error) : console.log(results);

});