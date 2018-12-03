# edution

> Edution project
> node

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
├── build                              // webpack配置文件
├── config                             // 项目打包路径
├── dist                                 // 上线项目文件，放在服务器即可正常访问
├── src                                // 源码目录
│   ├── api                    	    	// 项目接口地址目录
│   │   ├── index.js                  // 接口地址文件
│   ├── assets                    		// 项目静态资源目录
│   │   ├── css                    		// 样式目录
│   │   ├── images                    // 图片目录
│   │   ├── js                    		// js目录
│   ├── components                    //组件
│   │   ├── common                    // 基础组件
│   │   ├── error				              // 404页面
│   │   ├── index				              // index页面
│   │   ├── main				              // main页面
│   ├── mock                      //mock数据 模拟接口数据
│   ├── router
│   │   └── router.js                 // 路由配置
│   ├── App.vue                      // 入口vue/根
│   ├── main.js                      //主入口函数
├── favicon.ico                           // 图标
├── index.html                            // 入口html文件

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
