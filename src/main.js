import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import VueCookie from 'vue-cookie'
import store from './store'

import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(VueCookie);
Vue.use(VueAxios, axios);


Vue.prototype.$message = Message;
// const mock = false;
// // mock开关
// if (mock) {
//     require('./mock/api')
//         //  不同于import ，它有可能不会被加载
// }
axios.defaults.timeout = 8000;
axios.defaults.baseURL = '/api';
// // 这里用接口'/api'
// // vue提供了代理 在vue.config.js中
// 你可以指定将被用在各个请求的配置默认值
// 全局的 axios 默认值


const mock = true;
if (mock) {
    require('./mock/api')
}
// 本地集成mock，不会发送请求，它会在这之前被拦截



axios.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    let res = response.data
    console.log(res);
    let path = location.hash
    if (res.status == 0) {
        return res.data
    } else if (res.status == 10) {
        alert('我还没有登录');
        if (path != '#/index') {
            window.location.href = "/#/login";
            return Promise.reject(res)
        }
    } else {

        alert(res.msg);
        return Promise.reject(res)
    }
});



new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')