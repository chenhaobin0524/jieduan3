const MongoClient = require('mongodb').MongoClient;
// 连接路径
const url = 'mongodb://localhost:27017';
// 数据库名称
const dbName = 'chen';

// 连接到服务器
MongoClient.connect(url, { useUnifiedTopology: true },
    function (err, client) {
        if (err) throw err;
        console.log("连接成功");
        // 操作选中的数据库
        // db对象用于后面的增删改查 CRUD
        const db = client.db(dbName);
        // 操作选中的表test
        const collection = db.collection('test');
        // Insert some documents
        // 插入数据
        // collection.insertMany([
        //     {
        //         name: 'chenhaobin',
        //         age: 19
        //     }, {
        //         name: 'laoshi',
        //         age: 29
        //     }, {
        //         name: 'laowang',
        //         age: 59
        //     }
        // ], function (err, result) {
        //     console.log(result);
        // });
        // 查找
        // 读取前10条数据：db.age.find().limit(10)

        // db.age.find().limit(数量).skip(数量)
        //skip()方法默认值为0, skip和limit位置交换不影响查询结果

        // db.age.find().limit(10).skip(10)  读取第10条到第20条数据
        // 用short()方法来实现排序功能，1 为升序排列； - 1 为降序排列
        // db.集合名.find().sort({ 键值(属性值): 1 })
        //例如： db.age.find().sort({ "_id": -1 }) ，按id进行降序
        // find({}), 这里面不写数据就是查找所有
        collection.find({}).limit(2).toArray(function (err, docs) {
            console.log(docs);
        });
        // 查询条件为 或 关系时
        // collection.find({
        //     $or: [
        //         { name: "chenhaobin" }, { name: "chen" }
        //     ]
        // }).toArray(function (err, docs) {
        //     console.log(docs);
        // });

        // 按条件查询
        // collection.find({
        //     'name': 'laowang',
        //     // 'age': 59
        // }).toArray(function (err, docs) {
        //     console.log(docs);
        // });

        // // 改
        // collection.updateOne(
        //     { 'name': 'laowang' }//条件
        //     , { $set: { 'age': 1 } },//更改的值
        //     function (err, result) {
        //        
        //     });

        //删,这里可以用deleteOne/deleteMany
        // collection.remove({ 'name': 'laowang' },
        //     function (err, result) {
        //     err?console.log(err):console.log('删除成功');
        //     ; 
        //     });
        // 关闭数据库
        client.close();
    });
