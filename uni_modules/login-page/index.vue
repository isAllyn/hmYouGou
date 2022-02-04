<!--
 * @Author: Allyn
 * @Description: 个人中心 登录状态组件
 * @Date: 2022-02-04 19:39:43
 * @LastEditTime: 2022-02-04 20:38:30
 * @FilePath: \hmYouGou\uni_modules\login-page\index.vue
-->

<template>
  <view class="login-template">
    <!-- 上部分 -->
    <view class="top-container">
      <view class="touXiang">
        <!-- 头像 -->
        <view
          class="userTouxiang cu-avatar xl round margin-left"
          style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"
        ></view>
        <!-- 名称 -->
        <view class="userName">
          <view class="userName-top">
            我的名字
          </view>
        </view>
      </view>
      <!-- 钱包 -->
      <view class="qianBao">
        <!-- 金币 -->
        <view class="item">
          <view class="number">999999个</view>
          <view class="text">我的金币</view>
        </view>
        <!-- 消费卷 -->
        <view class="item">
          <view class="number">99999张</view>
          <view class="text">我的消费卷</view>
        </view>
        <!-- 余额 -->
        <view class="item">
          <view class="number">￥99999...</view>
          <view class="text">我的余额</view>
        </view>
      </view>
      <!-- 卡片 -->
      <view class="cu-list grid col-5">
        <view
          class="cu-item"
          v-for="(item,index) in cardList"
          :key="index"
        >
          <view class="cuIcon-cardboardfill text-red">
            <view class="cu-tag badge">
              <block></block>
            </view>
          </view>
          <text style="color:black;">{{item.name}}</text>
        </view>
      </view>
    </view>

    <!-- 下部分 -->
    <view class="bottom-container">
      <view class="loginOut">
        <button
          @click="loginOut"
          class="cu-btn bg-red margin-tb-sm lg"
        >退出登录</button>
      </view>
    </view>
</template>

<script>
export default {
  name: 'HmyougouIndex',

  data() {
    return {
      //卡片数据
      cardList: [
        {
          name: '待付款'
        },
        {
          name: '待发货'
        },
        {
          name: '待收货'
        },
        {
          name: '待评价'
        },
        {
          name: '我的订单'
        },
      ]
    };
  },

  mounted() {

  },

  methods: {
    /**
     * @description: 
     * @event: 退出登录
     * @arguments: 
     */
    loginOut() {
      uni.showModal({
        title: '温馨提示',
        content: '请确认是否退出登录',
        success: (res) => {
          if (res.confirm) {
            /* 调用store后台退出登录方法 */
            this.$store.dispatch('zhonXin/loginOut')
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';

</style>