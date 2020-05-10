import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {request} from './network/request'
import store from './store'
import toast from 'components/common/toast'

import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

//事件总线
Vue.prototype.$bus = new Vue()
// 安装toast组件
Vue.use(toast)
// 解决移动端300ms延迟
FastClick.attach(document.body)
// 图片懒加载
Vue.use(LazyLoad,{
	loading: require('./assets/img/common/placeholder.jpg')
})
