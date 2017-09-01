import axios from 'axios';
import {md5, querystring} from 'vux';




/*axios.defaults.baseURL                      = 'http://demo-api-muc.mvc.pub/';*/
axios.defaults.baseURL                      = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

var instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.data = querystring.stringify(config.data);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default axios;