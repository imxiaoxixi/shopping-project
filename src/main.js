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
Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    Vue.prototype.$bus=this;
  },
  render: h => h(App),
  router,
  store,
}).$mount('#app')
