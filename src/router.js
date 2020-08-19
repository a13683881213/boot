import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/home'
import Index from './pages/home/index'
import product from './pages/home/product'
import detail from './pages/home/detail'
import cart from './pages/cart/cart'
import order from './pages/order/order'
import orderlist from './pages/order/orderlist'
import orderpay from './pages/order/orderpay'
import orderconfrim from './pages/order/orderconfrim'
import login from './components/login/login'

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [{
                    path: '/index',
                    name: 'index',
                    component: Index,
                }, {
                    path: '/product/:id',
                    // 动态路由
                    name: 'product',
                    component: product,
                }, {
                    path: '/detail/:id',
                    name: 'detail',
                    component: detail,
                }


            ]
        }, {
            path: '/cart',
            name: 'cart',
            component: cart,
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
        {
            path: '/order',
            name: 'order',
            component: order,
            children: [{
                    path: '/list',
                    name: 'order-list',
                    component: orderlist,
                },
                {
                    path: '/pay',
                    name: 'order-pay',
                    component: orderpay,
                }, {
                    path: '/confirm',
                    name: 'order-confirm',
                    component: orderconfrim,
                }
            ]
        }


    ]
})