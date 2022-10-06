import store from '@/store';
import axios from 'axios'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
let requests = axios.create({
    baseURL:'/api',
    timeout:5000
})
//请求拦截器
requests.interceptors.request.use((config) => {
  if(store.state.user.token){
    config.headers.token = store.state.user.token;
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