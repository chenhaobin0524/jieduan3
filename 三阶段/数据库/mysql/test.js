const sql = require('./db');//引入封装的函数
//注意，sql这里是异步的，调用时要写成
// (async () => {
//     let data = await sql();
//     console.log(data);
// })();
// let data = await sql("SELECT * FROM test1 WHERE ?", { id: 9 });
// console.log(data);
(async () => {
    let data = await sql("SELECT * FROM test1 WHERE ?", { id: 9 });
    console.log(data);
})();
