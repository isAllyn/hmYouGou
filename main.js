/*
 * @Author: Allyn
 * @Description: 
 * @Date: 2022-01-29 17:09:52
 * @LastEditTime: 2022-01-29 17:28:18
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