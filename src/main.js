import Vue from 'vue'
import App from './App.vue'
//三级联动组件---注册为全局组件
import TypeNav from '@/components/TypeNav'

Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false
import router from '@/router'
import store from '@/store'
import "@/mock/mockServe.js"

new Vue({
  render: h => h(App),
  //注册路由
  router,
  //注册仓库
  store
}).$mount('#app')
