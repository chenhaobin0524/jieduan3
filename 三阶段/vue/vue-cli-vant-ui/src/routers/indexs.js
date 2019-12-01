import Vue from 'vue'
import VueRouter from 'vue-router'//引入路由
Vue.use(VueRouter)
import Discover from '../pages/Discover.vue';//引入组件
import Home from '../pages/Home.vue';
import Mine from '../pages/Mine.vue';
import Order from '../pages/Order.vue';
const routes = [
    // 定义路由, 每个路由映射一个组件。
    {
        path: '/discover',
        component: Discover,
    },
    // 当页面为http://localhost:8080/home 在<router-view>加载Home组件
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '/mine',
        component: Mine,
    }
];
// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

export default router;//导出路由
