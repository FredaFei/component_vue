// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as Global from '@/global/index'

Object.keys(Global).forEach(key=>{
  Vue.use(Global[key])
})

import './modules/style/index.scss'

// 公用组件
import Toast from '@/components/toast/'
import notify from '@/components/notify/'
import loading from '@/components/loading/'
Vue.use(Toast)
Vue.use(notify)
Vue.use(loading)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
