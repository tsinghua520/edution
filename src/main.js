// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// mock接口数据模拟
// import './mock.js'
// 基础css
import './assets/css/base.css'
import './assets/css/common.css'
// 入口文件引入路由
import router from './router'
// element ui组件按需加载
import {
  Button,
  Carousel,
  CarouselItem,
  Slider,
  Pagination,
  Select,
  Option,
  Tabs,
  TabPane,
  Loading
} from 'element-ui'

Vue.config.productionTip = false
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
Vue.use(Button)
  .use(Carousel)
  .use(CarouselItem)
  .use(Slider)
  .use(Pagination)
  .use(Select)
  .use(Option)
  .use(Tabs)
  .use(TabPane)
  .use(Loading)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
