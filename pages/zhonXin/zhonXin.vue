<!--
 * @Author: Allyn
 * @Description: 
 * @Date: 2022-02-04 18:47:04
 * @LastEditTime: 2022-02-04 20:41:08
 * @FilePath: \hmYouGou\pages\zhonXin\zhonXin.vue
-->
<template>
  <view
    :style='{backgroundImage: `url(${imageBG})`}'
    class="zhonXin-page"
  >
    <!-- 自定义navbar-->
    <uni-nav-bar
      dark
      :fixed="true"
      background-color="rgba(37, 37, 38,0)"
      status-bar
      title="个人中心"
    />

    <!-- 未登录状态 -->
    <view
      v-if="!isToken"
      class="noLogin"
    >
      <button
        @click="loginBtn"
        class="login-btn cu-btn block bg-blue margin-tb-sm lg"
      >
        一键登录
      </button>
    </view>

    <!-- 登录状态 -->
    <view
      v-else
      class="isLogin"
    >
      <isloginTemplate></isloginTemplate>
    </view>
  </view>
</template>

<script>
/* 项目的store实例 */
import store from '@/store/index.js'
/* 组件：登录状态 */
import isloginTemplate from '@/uni_modules/login-page/index.vue'

export default {
  components: {
    isloginTemplate
  },
  computed: {
    /* 通过连接vuex管理的token，有token代表登录状态 */
    isToken() {
      return store.state.zhonXin.token
    }
  },
  data() {
    return {
      imageBG: store.state.zhonXin.bgImage
    }
  },
  methods: {
    /**
     * @description: 
     * @event: 一键登录
     * @arguments: 
     */
    async loginBtn() {
      try {
        //01 获取用户信息
        let userInfo = await this.getUserInfo()
        //02 登录 获取登录信息
        let loginInfo = await this.login()
        /* 03 信息都获取到了 就可以调用后端接口 */
        /* 看了下信息都是有的  接口是坏的 所以token模拟一个*/
        let token = 'asdfsad1321313werqw'
        /* 拿到token将其保存到后台数据管理vuex */
        store.commit('zhonXin/setUserInfo', userInfo)
        store.commit('zhonXin/setToken', token)
        uni.$myFn.message('登录成功')
      } catch (e) { console.log(e) } finally { }
    },
    /**
     * @description: 
     * @event: 获取用户信息
     * @arguments: //注意：获取用户信息 getUserInfo 已经被替换 现在只能获取到匿名的，要用新的方法getUserProfile
     */
    getUserInfo() {
      return new Promise((resolve, reject) => {
        uni.getUserProfile({
          desc: '获取你的昵称、头像、地区及性别',
          success: (res) => {
            resolve(res)
          },
          fail: (e) => {
            /* 如果取消授权 提示一下 */
            uni.$myFn.message('您取消了授权')
            reject(e)
          }
        })
      })
    },
    /**
     * @description: 
     * @event: 登录
     * @arguments: 
     */
    login() {
      return new Promise((resolve, reject) => {
        uni.login({
          provider: 'weixin',
          success: (res) => {
            resolve(res)
          },
          fail: (e) => {
            reject(e)
          }
        })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import './zhonXin.scss';

</style>
