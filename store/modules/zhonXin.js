/*
 * @Author: Allyn
 * @Description: 数据管理 个人中心
 * @Date: 2022-02-04 18:57:05
 * @LastEditTime: 2022-02-12 12:30:53
 * @FilePath: \hmYouGou\store\modules\zhonXin.js
 */

const tokenKey = 'admin-token' //token的名称
const userInfoKey = 'admin-userInfo' //userInfo名称

export default {
  namespaced: true,
  state: {
    //个人中心背景图片
    bgImage: 'https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/huiYuan/loginBG.jpg',
    //token
    token: JSON.parse(uni.getStorageSync(tokenKey) || '""'),
    //用户信息
    userInfo: JSON.parse(uni.getStorageSync(userInfoKey) || '{}'),
  },
  mutations: {
    //修改token
    setToken(state, newToken) {
      state.token = newToken
      uni.setStorageSync(tokenKey, JSON.stringify(newToken))
    },
    //修改用户信息
    setUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo
      uni.setStorageSync(userInfoKey, JSON.stringify(newUserInfo))
    },
    //删除token
    removeToken(state) {
      state.token = '' //删除项目上的信息
      uni.removeStorageSync(tokenKey) //删除本地缓存的信息
    },
    //删除用户信息
    removeUserInfo(state) {
      state.userInfo = {}
      uni.removeStorageSync(userInfoKey)
    },
  },
  actions: {
    /* 退出登录 */
    loginOut(content) {
      content.commit('removeToken') //删除token
      content.commit('removeUserInfo') //删除用户信息
      uni.showToast({
        title: '退出成功',
        duration: 1500,
      })
      /* 退出登录要将 缓存过的数据都删除 */
      content.dispatch('storage/removeStorages', [], { root: true })
    },
  },
}
