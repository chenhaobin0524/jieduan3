const fs = require('fs');
// 读取
const read = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            err ? reject(err) : resolve(data.toString());
        });
    });
};
// 写入
const write = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            err ? reject(err) : resolve('文件已写入');
        });
    });
};
// 删除注释
const removeConsole = (code) => {
    let output = code.replace(/(\/{2,}.*?(\r|\n))|(\/\*(\n|.)*?\*\/)/g, '')
    return output
}
    ; (async () => {//加;是为了防止跟上文混在一起，变成调用函数
        let code = await read('./src/index.js');
        code = removeConsole(code);
        let wr = await write('./dist/text.js', code);
        console.log(wr);

    })();
