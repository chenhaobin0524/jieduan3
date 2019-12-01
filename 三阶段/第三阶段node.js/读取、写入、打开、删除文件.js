const fs = require('fs');
// fs.open('./ccc.txt', 'rs', (err, FormData) => {
//     if (err) {
//         return console.error(err);
//     };
//     console.log('文件打开成功')
// });
// fs.writeFile('ccc.txt', '这是写入的', (err) => {
//     if (err) {
//         return console.error(err);
//     };
//     console.log('写入成功');
//     fs.readFile('bb.txt', (err, data) => {
//         err ? console.log(err) : console.log(data.toString());
//     })
// })
// const { unlink } = require('fs');
// unlink('ccc.txt', (err) => {
//     err ? console.log(err) : console.log('删除成功');
// });
const fn1=() => {
    console.log('准备读取文件');
    
}
let read = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            err ? reject(err) : resolve(data.toString());
        });
    });
};
let write = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            err ? reject(err) : resolve('文件已写入' + data);
        });
    });
};
const fn2 = () => {
    console.log('写入成功');
    
};
// 异步标准写法，效率高，不阻塞代码运行
fn1();
;(async () => {//加；是为了防止跟上文混在一起，变成调用函数
    let code = await read('./bb.txt');
    let wr = await write('./cc.txt', code);
    console.log(wr);
    
})();
fn2();