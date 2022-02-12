<!--
 * @Author: Allyn
 * @Description: 购物车页面
 * @Date: 2022-02-12 15:49:53
 * @LastEditTime: 2022-02-12 18:03:06
 * @FilePath: \hmYouGou\pages\gouWu\gouWu.vue
-->
<template>
  <view class="gouwu-page">

    <!-- 收货地址 -->
    <view @click="getAddress" class="address-container">
      <button class="cu-btn block bg-brown margin-tb-sm lg"
              type="">收货地址</button>
    </view>
    <!-- 线条 -->
    <view class="line"></view>
    <!-- 列表 -->
    <view class="list-container">
      <listTem></listTem>
    </view>
    <!-- 结算组件 -->
  </view>
</template>

<script>
import listTem from '@/components/shopListItem/shopList.vue'
export default {
  components: {
    listTem
  },
  data() {
    return {

    }
  },
  methods: {
    /**
     * @event: 获取收获地址
     * @arguments: 
     * @description: 
     */

    getAddress() {
      uni.chooseAddress({
        success: (e) => {
          console.log(e);
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import './gouWu.scss';

</style>
