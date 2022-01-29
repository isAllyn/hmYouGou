/*
 * @Author: Allyn
 * @Description: 数据管理
 * @Date: 2022-01-29 17:26:50
 * @LastEditTime: 2022-01-29 17:26:50
 * @FilePath: \hmYouGou\store\index.js
 */

import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

import tabBar from './modules/tabBar.js'

export default new vuex.Store({
    modules: {
        tabBar
    }
})