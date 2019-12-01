// 运行需要先安装mysql包 cnpm install mysql
const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',//数据库地址
    password: 'root',//数据库密码
    database: 'myku'//需要连接的数据库
})

const getConnection = () => {
    return new Promise((resolve, reject) => {
        // 池连接
        pool.getConnection(function (err, connection) {
            err ? reject(err) : resolve(connection);
        });
    })
}

const sql = (sql, query) => {
    return new Promise(async (resolve, reject) => {
        let connection = await getConnection();

        connection.query(sql, [query], function (err, results) {
            connection.release();
            err ? reject(err) : resolve(results)
        });
    })
}

module.exports = sql;