const {
    find,
    insert,
    updata,
    del
} = require('./db.js');
// 那边封装是异步，这里要写成异步的

(async () => {
    // 插入，第一个参数是表名，第二个插入数据，是数组的格式
    // await insert('test', [
    //     {
    //         name: 'chen',
    //         age: 19
    //     }, {
    //         name: 'chenhaobin',
    //         age: 20
    //     }
    // ]);

    // 查,第二个参数不写是查询全部
    let data = await find('test',{});
    console.log(data);

    // 改 ，第一个参数是表名，第二个是查询条件，第三个是更改值
    // await updata('test', { name: 'chen' }, { age: 30 });

    //删
    // await del('test', {name:'chen'});

})();