<!--
 * @Author: Allyn
 * @Description: 
 * @Date: 2022-02-03 15:19:17
 * @LastEditTime: 2022-02-12 10:59:27
 * @FilePath: \hmYouGou\pages\fenLei\fenLei.vue
-->
<template>
  <view class="fenLei-page">
    <view @click="searchInputClick" class="view-top">
      <uni-icons type="search" color='white' size="30">
      </uni-icons>
      点击进入搜索页面
    </view>
    <view class="view-bottom">
      <!-- 左侧 -->
      <view class="left-container">
        <scroll-view scroll-y :style="{height:'80vh'}">
          <block v-for="item in fenLeiInfo"
                 :key="item.cat_name">
            <view @click="leftItemClick(item.cat_id)"
                  class="left-item"
                  :class="item.cat_id===checkId?'checkItem':''">
              {{item.cat_name}}
            </view>
          </block>
          <!-- 叠底用 -->
          <view class="left-item">
          </view>
        </scroll-view>
      </view>
      <!-- 右侧 -->
      <view class="right-container">
        <scroll-view :scroll-top='scrollTop' scroll-y
                     :style="{height:'80vh'}">
          <block v-for="item in rightInfo"
                 :key="item.cat_name">
            <view class="right-item">
              <!-- 标题 -->
              <view class="right-title">-{{item.cat_name}}-
              </view>
              <!-- 内容 -->
              <view class="right-bd">
                <block v-for="item1 in item.children"
                       :key="item1.cat_name">
                  <view class="bd-item"
                        @click="level3Click(item1.cat_id)">
                    <image :src="item1.cat_icon" />
                    <view class="item-title">
                      {{item1.cat_name}}</view>
                  </view>
                </block>
              </view>
            </view>
          </block>
          <!-- 叠底用 -->
          <view style="height:88px;"></view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import store from '@/store/index.js'
export default {
  data() {
    return {
      //分类数据
      fenLeiInfo: [],
      //被选中的项
      checkId: 0,
      //右侧数据
      rightInfo: [],
      //竖向滚动条位置
      scrollTop: 0
    }
  },
  onLoad() {
    this.getFenLeiInfo()//获取分类数据
  },
  methods: {
    /**
     * @description: 
     * @event: 获取分类数据
     * @arguments: 
     */
    async getFenLeiInfo() {
      try {
        let { data: { message } } = await uni.$http.get('/api/public/v1/categories')
        /* 获取到数据后 首先将图片换掉 */
        let _newArray = store.state.fenLei.images
        message = message.map(v => {
          v.children = v.children.map(v1 => {
            if (v1.children) {
              v1.children = v1.children.map(v2 => {
                let _randomNumber = uni.$myFn.getRandom(0, _newArray.length - 1)//创建一个随机数
                v2.cat_icon = _newArray[_randomNumber]
                return v2
              })
            }
            return v1
          })
          return v
        })

        this.fenLeiInfo = message
        this.checkId = message[0]['cat_id']//默认选中第一项
        this.rightInfo = message[0]['children']
      } catch (e) { console.log(e) } finally { }
    },
    /**
     * @description: 
     * @event: 左侧单个tab被点击
     * @arguments: 
     */
    leftItemClick(id) {
      //右侧刷新时 重新滚动到顶部
      this.scrollTop = this.scrollTop === 0 ? 1 : 0;
      //更改被选中的项
      this.checkId = id
      //处理右侧数据
      let _newArray = this.fenLeiInfo
      this.rightInfo = _newArray.find(v => v.cat_id === id).children || []
    },
    /**
     * @description: 
     * @event: 3级菜单点击事件
     * @arguments: 
     */
    level3Click(id) {
      //跳转到商品列表页面 并传入id
      uni.navigateTo({
        url: `/subpkg/shopList/shopList?id=${id}`
      });
    },
    /**
     * @description: 
     * @event: 搜索框事件:点击进入搜索页面
     * @arguments: 
     */
    searchInputClick() {
      uni.navigateTo({
        url: '/subpkg/search/search'
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import './fenLei.scss';

</style>
