/*
 * @Author: Allyn
 * @Description: 数据管理
 * @Date: 2022-01-29 17:26:50
 * @LastEditTime: 2022-01-30 13:59:06
 * @FilePath: \hmYouGou\store\index.js
 */

import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

import tabBar from './modules/tabBar.js'//tabbar模块
import home from './modules/home.js' //首页模块

export default new vuex.Store({
    modules: {
        tabBar,
        home
    }
})