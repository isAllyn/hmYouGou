<!--
 * @Author: Allyn
 * @Description: 首页
 * @Date: 2022-01-30 13:26:00
 * @LastEditTime: 2022-01-30 13:34:10
 * @FilePath: \hmYouGou\pages\shouYe\shouYe.vue
-->
<template>
  <view class="shouYe-page">
    <view class="top-container">
      <!-- 轮播图 -->
      <u-swiper :list="list3"
        previousMargin="30"
        nextMargin="30"
        @click="swiperClick"
        :circular='true'
        :autoplay="true"
        :interval="1500"
        indicator
        indicatorMode='dot'
        radius="5"
        bgColor="#6f8da7">
      </u-swiper>

      <!-- 搜索框 -->
      <view class="search-container">
        <view @click="searchClick"
          class="search-box">搜索从这里开始
          <view class="ticon-box">
            <i class="icon-a-youjiantouzhixiangyoujiantou"></i>
          </view>
        </view>
      </view>
    </view>

    <view class="bottom-container">
      <!-- nav导航 -->
      <view class="nav-container">

        <block v-for="item in navList"
          :key="item.name">
          <view @click="goToClick"
            class="nav-item">
            <view class="item-image">
              <image :src="item.image_src" />
            </view>
            <view class="item-text">{{item.name}}</view>
          </view>
        </block>
      </view>

      <!-- 楼层列表 -->
      <view class="list-container">
        <block v-for="item in louCengInfo"
          :key="item.floor_title.name">
          <view class="list-item">
            <!-- 标题 -->
            <view class="item-title">{{item.floor_title.name}}</view>
            <!-- 内容 卡片 -->
            <view class="item-bd">
              <block v-for="item1 in item.product_list"
                :key="item1.name">
                <view class="bd-item"
                  @click="cardClick">
                  <image :src="item1.image_src" />
                  <!-- 卡片标题 纸条-->
                  <view class="card-title">
                    {{item1.name}}
                  </view>
                  <view class="card-tip">
                    点击前往
                  </view>
                </view>
              </block>
            </view>
          </view>
        </block>
      </view>
      <!-- 因为底部有tabbar挡住了 这里放个box 用来撑高 -->
      <view class="floor-box">--到底了！同学--</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      //轮播图
      list3: [],
      //nav导航数据
      navList: [],
      //楼层数据
      louCengInfo: []
    }
  },
  created() {
    this.getSwiperList()//获取轮播数据
    this.getNavList()//获取导航数据
    this.getLouCengInfo()//获取楼层数据
  },
  methods: {
    /**
     * @description: 
     * @event: 获取轮播数据
     * @arguments: 
     */
    async getSwiperList() {
      try {
        let selfImageArray = this.$store.state.home.swiperImages
        let { data: { message } } = await uni.$http.get('/api/public/v1/home/swiperdata')
        /* 拿到数据后将数据里面不能用的图片 替换成自己的 替换image_src属性*/
        this.list3 = message.map(item => {
          //随机再selfImageArray中抽取一张图片
          let _random = uni.$myFn.getRandom(0, selfImageArray.length - 1)
          item.image_src = selfImageArray[_random]
          return item.image_src
        })
      } catch (e) { console.log(e) } finally { }
    },
    /**
     * @description: 
     * @event: 获取分类导航数据
     * @arguments: 
     */
    async getNavList() {
      try {
        let { data: { message } } = await uni.$http.get('/api/public/v1/home/catitems')
        /* 将接口不能用的图片替换掉 */
        let _imageArray = this.$store.state.home.navImage
        this.navList = message.map(v => {
          let _obj = _imageArray.find(v1 => v1.name === v.name) || _imageArray[0]//名字符合的那对数据 找不到默认给第一个
          v.image_src = _obj.image
          return v
        })
      } catch (e) { console.log(e) } finally { }
    },
    /**
     * @description: 
     * @event: 获取楼层数据
     * @arguments: 
     */
    async getLouCengInfo() {
      try {
        let _infoImage = this.$store.state.home.louImage
        let { data: { message } } = await uni.$http.get('/api/public/v1/home/floordata')
        /* 将接口响应的数据中不能用的图片替换掉 */
        this.louCengInfo = message.map(v => {
          v.product_list.map(v1 => {
            let _randomNumber = uni.$myFn.getRandom(0, _infoImage.length - 1)
            v1.image_src = _infoImage[_randomNumber] || _infoImage[0] //没有就指定第一张
            return v1
          })
          return v
        })
      } catch (e) { console.log(e) } finally { }
    },
    /**
     * @description: 
     * @event: 轮播图点击
     * @arguments: 
     */
    swiperClick() {
      uni.navigateTo({
        url: '/subpkg/xiangQing/xiangQing'
      });
    },
    /**
     * @description: 
     * @event:事件 导航栏点击
     * @arguments: 
     */
    goToClick() {
      /* 这里跳转的因为是tabbar页面 用switchtab   */
      //跳转完但是tabbar被选中的没有改变
      //通过修改后台store数据改变被选中的项
      //原有我也不知道
      uni.switchTab({
        url: '/pages/fenLei/fenLei'
      });
      this.$store.commit('tabBar/setList', 1)
    },
    /**
     * @description: 
     * @event: 列表部分单个商品列表被点击
     * @arguments: 
     */
    cardClick() {
      uni.navigateTo({
        url: '/subpkg/shopList/shopList'
      });
    },
    /**
     * @description: 
     * @event: 搜索框被点击
     * @arguments: 
     */
    searchClick() {
      uni.navigateTo({
        url: '/subpkg/search/search'
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import './shouYe.scss';

</style>
