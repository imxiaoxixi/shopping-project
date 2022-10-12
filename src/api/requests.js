import store from '@/store';
import axios from 'axios'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
let requests = axios.create({
    baseURL:'/api',
    timeout:5000
})
//请求拦截器 在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
  if(store.state.user.token){
    config.headers.token = store.state.user.token;
  }
if(store.state.detail.uuid_token){
  //请求头添加一个字段，和后台老师商量好了
  config.headers.userTempId = store.state.detail.uuid_token;
}
  nprogress.start();
  return config;
});
//相应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
  },
  (err) => {
    alert(err.message);
    return new Promise;
    }
    );
export default requests;