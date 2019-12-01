const express = require('express');
// 实例化一个路由对象
const router = express.Router();
// 路由的模块化
router.post('/mine', (req, res) => {
    console.log(req.body)
    res.send('hi')
})
router.get('/mine', (req, res) => {
    res.send('aaa');
})
router.get('/mine2', (req, res) => {
    res.send('敏')
})
// 导出路由对象
module.exports = router