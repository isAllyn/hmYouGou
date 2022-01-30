/*
 * @Author: Allyn
 * @Description: 
 * @Date: 2022-01-29 17:09:52
 * @LastEditTime: 2022-01-30 14:11:14
 * @FilePath: \hmYouGou\main.js
 */
import App from './App'

// #ifndef VUE3
import Vue from 'vue'

/**
 * @description: 
 * @event: 引入vuex数据管理后台
 * @arguments: 
 */
import store from '@/store/index.js'

/**
 * @description: 
 * @event: 引入uview 组件ui
 * @arguments: 
 */
import uView from "uview-ui";
Vue.use(uView);

/**
 * @description: 
 * @event: 引入 数据请求插件
 * @arguments: 
 */
import { $http } from '@escook/request-miniprogram'
uni.$http = $http
$http.baseUrl = 'https://www.escook.cn'
$http.beforeRequest = function () {
  uni.showLoading({
    title: '加载中...'
  })
}
$http.afterRequest = function () {
  uni.hideLoading()
}

/**
 * @description: 
 * @event: 引入自己封装的函数 定到uni实例上
 * @arguments: 
 */
import myFn from '@/utils/selfTool.js'
uni.$myFn = myFn

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  store,
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif