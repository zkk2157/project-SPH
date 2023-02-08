import Vue from 'vue'
import App from './App.vue'
//三级联动组件---注册为全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)

Vue.config.productionTip = false
import router from '@/router'
import store from '@/store'
import "@/mock/mockServe.js"
import "swiper/css/swiper.css"

new Vue({
  render: h => h(App),
  //注册路由
  router,
  //注册仓库
  store
}).$mount('#app')
