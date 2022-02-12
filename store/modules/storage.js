/*
 * @Author: Allyn
 * @Description:数据管理 所有需要持久化处理的数据
 * @Date: 2022-02-12 12:11:01
 * @LastEditTime: 2022-02-12 12:28:45
 * @FilePath: \hmYouGou\store\modules\storage.js
 */

/* 搜索历史 key */
const historyKey = 'admin-searchHistory'

export default {
  namespaced: true,
  state: {
    /* 搜索历史 */
    searchHistory: uni.getStorageSync(historyKey) || [],
  },
  mutations: {
    /**
     * @description:
     * @event: 修改搜索历史数据
     * @arguments:
     * 数据去重处理
     */
    setHistory(state, newInfo) {
      state.searchHistory.unshift(newInfo)
      let _newArray = new Set(state.searchHistory)
      let _newArray1 = Array.from(_newArray)
      state.searchHistory = _newArray1
      uni.setStorageSync(historyKey, _newArray1) //持久化
    },
    /**
     * @description:
     * @event: 删除搜索历史
     * @arguments:
     */
    removeHistory(state) {
      state.searchHistory = []
      uni.removeStorageSync(historyKey)
    },
  },
  actions: {
    /**
     * @description:
     * @event: 删除所有缓存的数据
     * @arguments:
     */
    removeStorages(content) {
      content.commit('removeHistory')
    },
  },
}
