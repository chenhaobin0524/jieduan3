import Vue from 'vue'
import VueRouter from 'vue-router'//引入路由
Vue.use(VueRouter)
import Discover from '../pages/Discover.vue';//引入组件
import Home from '../pages/Home.vue';
import Mine from '../pages/Mine.vue';
import Order from '../pages/Order.vue';
import Details from '../pages/Detail.vue';
import Main from '../pages/Main.vue';
import Eat from '../pages/Eat.vue';
import Login from '../pages/Login.vue';
import City from '../pages/City.vue';
import Address from '../pages/Address.vue';
const routes = [
    // 默认重定向，当页面为http://localhost:8080/#/时，会直接跳转到http://localhost:8080/#/main/home
    { path: '/', redirect: '/main/home' },
    // 定义路由, 每个路由映射一个组件。
    {
        path: '/main',
        name: 'main',//命名路由
        component: Main,
        // 子路由
        children: [
            {
                path: 'discover',//注意这里不能写成/discover
                name: 'discover',
                component: Discover,//引入组件
                //  Discover的别名是 Cover，意味着，当用户访问 Cover 时，URL 会保持为 Cover，
                // 但是路由匹配则为 / Discover，就像用户访问 / Discover 一样。
                alias: 'Cover' // 别名
            },
            // 当页面为http://localhost:8080/home 在<router-view>加载Home组件
            {
                path: 'home',
                name: 'home',
                component: Home,
            },
            {
                path: 'order',
                name: 'order',
                component: Order
            },
            {
                path: 'mine',
                name: 'mine',
                component: Mine,
            }
        ]
    },
    {
        path: '/details/:id',//动态路由
        name: 'details',
        component: Details,
    },
    {
        path: '/eat',
        name: 'eat',
        component: Eat,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    }, {
        path: '/city',
        name: 'city',
        component: City,
    }, {
        path: '/address',
        name: 'address',
        component: Address,
    },
];
// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

// 路由守卫
// 进所有路由之前都要判断，用来登录判断
// router.beforeEach((to, from, next) => {
//     // axios.get('http://localhost:3000/login',{
//     //     params:{
//     //         token: sessionStorage.getItem('token')
//     //     }
//     // })
//     // to 将要进去的路由对象
//     // from 当前导航正要离开的路由
//     // next 函数，如果执行了，那就往下通行
//     window.console.log(to, from, next)
//     // 如果登录信息是正确的，或者你所在登录页，那就触发next放行，否则，回跳到login页面，重新获取登录信息
//     if (window.sessionStorage.getItem('token') === '12345678' || to.name === 'login') {
//         next()
//     } else {
//         // 如果不成功，回跳登录页
//         router.push({
//             name: 'login'
//         })
//     }

// })
export default router;//导出路由
