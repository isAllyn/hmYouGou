<!--
 * @Author: Allyn
 * @Description: 商品列表组件
 * @Date: 2022-02-12 16:32:00
 * @LastEditTime: 2022-02-12 17:57:52
 * @FilePath: \hmYouGou\components\shopListItem\shopList.vue
-->
<template>
  <view>
    <block v-for="item in shopList" :key="item.goods_name">
      <view class="shop-item">
        <!-- 单选 -->
        <view class="checkItem">
          <checkbox-group
                          @change='checkboxChange({name:item.goods_name,ischeck:item.ischeck})'>
            <checkbox :checked="item.ischeck" />
          </checkbox-group>
        </view>
        <!-- 图片 -->
        <view class="image">
          <image
                 src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg" />
        </view>
        <!-- 文字 -->
        <view class="text">
          {{item.goods_name}}
        </view>
        <!-- 价格 -->
        <view class="price">
          ${{item.goods_price}}
        </view>
        <!-- 进步器 -->
        <view class="numberBtn">
          <u-number-box showMinus :min='0' integer
                        @change="valChange">
          </u-number-box>
        </view>

      </view>
    </block>
  </view>
</template>

<script>
import store from '@/store/index.js'
export default {
  name: 'HmyougouShoplist',

  data() {
    return {

    };
  },
  computed: {
    /* 购物车列表 */
    shopList() {
      return store.state.shop.shopList
    }
  },
  mounted() {

  },

  methods: {
    /**
     * @event: 步进器变化
     * @arguments: 
     * @description: 
     */
    valChange() {

    },
    /**
     * @event: 复选变化
     * @arguments: 
     * @description: 传一个name 跟 状态
     */
    checkboxChange({ name, ischeck }) {
      if (Object.prototype.toString.call(ischeck) === '[object Null]') {
        ischeck = false
      }
      let _newIsCheck = !ischeck
      store.commit('shop/setCheck', { name, ischeck: _newIsCheck })
    }
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';

</style>