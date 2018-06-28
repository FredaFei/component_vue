const routers = [
  {
    path: '/',
    redirect: '/index',
    meta: {
      title: '首页',
      hidden: true
    }
  },
  {
    path: '/index',
    name: 'index',
    component: resolve=>require(['views/index.vue'],resolve),
    meta: {
      title: '首页',
      hidden: true
    }
  },
  {
    path: '/basic',
    name: 'basic',
    meta: {
      title: 'basic'
    },
    component: resolve=>require(['views/basic/index.vue'],resolve),
    children: [
      {
        path: 'button',
        name: 'button',
        component: resolve=>require(['views/basic/button.vue'],resolve),
        meta: {
          title: '按钮'
        }
      },
      {
        path: 'data',
        name: 'data',
        component: resolve=>require(['views/basic/data.vue'],resolve),
        meta: {
          title: '数据'
        }
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    meta: {
      title: 'form'
    },
    component: resolve=>require(['views/form/index'],resolve),
    children: [
      {
        path: 'input',
        name: 'input',
        component: resolve=>require(['views/form/input.vue'],resolve),
        meta: {
          title: '输入框'
        }
      }
    ]
  },
  {
    path: '/nav',
    name: 'nav',
    meta: {
      title: 'nav'
    },
    component: resolve=>require(['views/nav/index'],resolve),
    children: [
      {
        path: 'tab',
        name: 'tab',
        component: resolve=>require(['views/nav/tab.vue'],resolve),
        meta: {
          title: 'tab面板'
        }
      }
    ]
  },
  {
    path: '/toastInfo',
    name: 'toastInfo',
    meta: {
      title: '弹窗提示'
    },
    component: resolve=>require(['views/toastInfo/index'],resolve),
    children: [
      {
        path: 'alert',
        name: 'alert',
        component: resolve=>require(['views/toastInfo/alert.vue'],resolve),
        meta: {
          title: '确认弹出框'
        }
      },
      {
        path: 'confirm',
        name: 'confirm',
        component: resolve=>require(['views/toastInfo/confirm.vue'],resolve),
        meta: {
          title: '操作弹出框'
        }
      },
      {
        path: 'dialog',
        name: 'dialog',
        component: resolve=>require(['views/toastInfo/dialog.vue'],resolve),
        meta: {
          title: '模态框'
        }
      },
      {
        path: 'loading',
        name: 'loading',
        component: resolve=>require(['views/toastInfo/loading.vue'],resolve),
        meta: {
          title: '加载中'
        }
      },
      {
        path: 'toast',
        name: 'toast',
        component: resolve=>require(['views/toastInfo/toast.vue'],resolve),
        meta: {
          title: '消息提示框'
        }
      },
    ]
  }
]
export default routers
