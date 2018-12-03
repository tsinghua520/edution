import Vue from 'vue'
import Router from 'vue-router'
// 引入需要去的页面
import Index from '@/components/index/index'
import Detail from '@/components/detail/detail'
import Error from '@/components/error/error'

Vue.use(Router)
// 这里是路由 定位到具体的页面
let router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '优想教育'
      }
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      meta: {
        title: '详情介绍'
      }
    },
    // 找不到路由的错误页面
    {
      path: '/*',
      name: 'Error',
      component: Error,
      meta: {
        title: '404'
      }
    }
  ]
})
// 路由钩子函数 用来渲染网页的title
router.afterEach((route) => {
  if (route.meta.title) {
    document.title = route.meta.title
  }
  window.scrollTo(0, 0)
})

export default router
