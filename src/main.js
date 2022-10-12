import Vue from 'vue'
import App from './App'
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
import Carousel from '@/components/Caroutel'
Vue.component(Carousel.name,Carousel)
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)
import router from '@/router'
import store from '@/store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
//全局引入，按需加载
import { Button, MessageBox } from "element-ui";
//注册组件的时候挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.component(Button.name, Button);
//统一接口api文件夹里里面全部请求函数
//统一引入
import * as API from '@/api'
import tupian from '@/assets/1.png'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
Vue.use(VueLazyload,{
  loading:tupian
});
new Vue({
  beforeCreate(){
    Vue.prototype.$bus=this;
    Vue.prototype.$API=API;
  },
  render: h => h(App),
  router,
  store,
}).$mount('#app')
