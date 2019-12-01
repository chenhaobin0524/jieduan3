// 集群模块
// 集群和系统模块，最大化利用cpu的硬件性能
cluster = require('cluster');
// http模块 创建服务器
const http = require('http');
// os.cpus() 方法返回一个对象数组，包含每个逻辑 CPU 内核的信息。
const numCPUs = require('os').cpus().length;//cpu个数
// 判断是否是主进程
if (cluster.isMaster) {
    console.log(`主进程 ${process.pid} 正在运行`);

    // 衍生工作进程。
    for (let i = 0; i < numCPUs; i++) {//遍历
        //  拷贝numCPUs8次
        cluster.fork();//衍生出一个新的工作进程。这只能通过主进程调用。
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`工作进程 ${worker.process.pid} 已退出`);
    });
    // 工作进程 子进程
} else {
    // 工作进程可以共享任何 TCP 连接。
    // 在本例子中，共享的是 HTTP 服务器。
    // 负载均衡
    http.createServer((req, res) => {
        //设置编码类型
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.writeHead(200);
        res.end('你好世界\n');
    }).listen(8000);

    console.log(`工作进程 ${process.pid} 已启动`);
}