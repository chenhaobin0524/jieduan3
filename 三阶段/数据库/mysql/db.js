// 连接池
let mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    // 需要连接的库
    database: 'myku'
});

const getConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            err ? reject(err) : resolve(connection);
        });
    });
};
//注意，sql这里是异步的，调用时要写成
// (async () => {
//     let data = await sql();
//     console.log(data);
// })();
const sql = (sql, query) => {
    return new Promise(async (resolve, reject) => {
        let connection = await getConnection();
        connection.query(sql, [query], function (err, results) {
            connection.release();
            err ? reject(err) : resolve(results);
            // console.log(results);      
        });
    });
};

module.exports = sql;

