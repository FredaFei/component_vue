import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

import HelloWorld from '@/components/HelloWorld'
import base from '@/example/base.vue'
import tabs from '@/example/tabs.vue'

Vue.use(Router)
export default new Router({routes})

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       component: HelloWorld
//     },
//     {
//       path: '/base',
//       name: 'base',
//       component: base
//     },
//     {
//       path: '/tabs',
//       name: 'tabs',
//       component: tabs
//     }
//   ]
// })
