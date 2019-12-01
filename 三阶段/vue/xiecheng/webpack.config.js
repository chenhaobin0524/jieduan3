// node内置模块，专门去处理路径
const path = require('path');
const webpack = require('webpack'); // 用于访问内置插件
// 引入插件,这个插件就是帮你自动生成dist文件夹里里面的index.html
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 开发模式development，生产模式 production
    // 开发环境会自动匹配非压缩的jquery.js
    // 生产环境会匹配压缩版本
    mode: 'development',
    // 入口  入口是可以包含所有的模块(.css.sass.js.html fs http jquery request)
    entry: './src/index.js',
    // 出口
    output: {
        // 输出的文件名为 bundle打包后的模块文件
        filename: 'bundle.js',
        // 输出的位置
        path: path.resolve(__dirname, 'dist')
    },
    //加载器
    module: {
        // loader = 非JS文件转为JS模块
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'//将txt文件转为js文件
            }, {
                test: /\.ts$/,
                use: 'ts-loader'//将 TypeScript 转为 JavaScript
            }, {
                test: /\.css$/, //将css转js文件
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" //将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            }, {
                test: /\.html$/,
                use: 'html-loader'//将html文件转为js文件
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,//排除这里面的文件
                // 安装 npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack
                // npm install babel-loader babel-core babel-preset-env webpack
                use: {
                    loader: 'babel-loader',//es6转es5
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'//JSON文件转js文件
            }
        ]
    },
    // 插件
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    // 服务器 npm install webpack-dev-server -g 全局安装
    devServer: {
        // 服务器文件夹位置
        contentBase: path.join(__dirname, "dist"),
        // 压缩
        compress: true,
        // 端口
        port: 8000
    }
};