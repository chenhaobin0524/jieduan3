
// 在文件操作的过程中，都必须使用物理路径（绝对路径），
// path模块提供了一系列与路径相关的 API
const path = require('path');

// 获取路径中的文件名
path.basename('C:\\temp\\myfile.html');

// path.dirname() 方法返回 path 的目录名,即当前文件的目录名
path.dirname('/foo/bar/baz/asdf/quux');

// 获取一个路径中最后的扩展名
path.extname('C:\\temp\\myfile.html')
// 返回: '.html'

// 路径合并处理
path.resolve('/foo/bar', './baz');
// 返回: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// 返回: '/tmp/file'

let paths = path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
//../表示去掉上一层目录，这里是去掉png
// 如果当前工作目录是 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
console.log(paths);

// 算出一个绝对路径
console.log(__dirname);//获取当前目录路径
// 路径模块
console.log(path.resolve(__dirname, './path.js'));

// join用于拼接多个路径部分，并转化为正常格式
const temp = path.join(__dirname, './', 'test/heh/', 'test.js');