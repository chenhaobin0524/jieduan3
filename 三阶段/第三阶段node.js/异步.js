
// console.log(1);
// fs.readFile('./bb.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });
// console.log(2);
// 读取文件
const fs = require("fs");
const fn1 = () => {
    console.log(1);

};
const fn2 = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('bb.txt',data, (err) => {
            // if (err) throw err;
            // console.log('文件已写入');

            err ? reject(err) : resolve('文件已写入');
        });
    })
}
const fn3 = () => {
    console.log(2);

};

fn1();
(async () => {
    try {
        const data1 = await fn2('nishi');
        console.log(data1);

    } catch (error) {
        console.log(error);

    }
})();
fn3();

