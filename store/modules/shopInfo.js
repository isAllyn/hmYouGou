/*
 * @Author: Allyn
 * @Description:购物车数据
 * @Date: 2022-02-12 15:53:30
 * @LastEditTime: 2022-02-12 18:00:03
 * @FilePath: \hmYouGou\store\modules\shopInfo.js
 */
const shopInfoKey = 'admin-shopInfo'
export default {
  namespaced: true,
  state: {
    shopList: JSON.parse(uni.getStorageSync(shopInfoKey) || '[]'), //购物车内容
  },
  mutations: {
    /**
     * @event: 添加商品
     * @arguments:
     * @description:
     */
    addShopList(state, newInfo) {
      if (!newInfo) return
      state.shopList.push(newInfo)
      uni.setStorageSync(shopInfoKey, JSON.stringify(state.shopList))
    },
    /**
     * @event: 删除商品缓存的数据
     * @arguments:
     * @description:
     */
    removeShopInfo(state) {
      state.shopList = []
      uni.removeStorageSync(shopInfoKey)
    },
    /**
     * @event: 修改选中状态
     * @arguments:
     * @description:
     */
    setCheck(state, { name, ischeck }) {
      let _newArray = state.shopList
      let _index = _newArray.findIndex((v) => v.goods_name === name)
      if (_index < 0) return
      _newArray[_index].ischeck = ischeck
      uni.setStorageSync(shopInfoKey, JSON.stringify(state.shopList))
    },
  },
}
