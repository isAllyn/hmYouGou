<!--
 * @Author: Allyn
 * @Description: 搜索页面
 * @Date: 2022-02-12 10:40:20
 * @LastEditTime: 2022-02-12 12:57:14
 * @FilePath: \hmYouGou\subpkg\search\search.vue
-->
<template>
  <view class="search-page">
    <!-- 搜索 -->
    <view class="searchInput">
      <uni-search-bar v-model="searchValue"
                      @confirm="searchInput" :focus='true'
                      placeholder='搜索' @input="changeInput">
      </uni-search-bar>
    </view>
    <!-- 展示 -->
    <view class="view-container">
      <!-- 建议 -->
      <view v-if="searchResultList.length>0"
            class="search-suggest">
        <uni-list>
          <block v-for="item in searchResultList"
                 :key="item.goods_id">
            <uni-list-item @click="shopListItemClick(item.goods_id)"
                           :clickable='true'
                           :show-extra-icon="true"
                           :ellipsis='1'
                           :extra-icon="{type:'info'}"
                           showArrow
                           :title="item.goods_name">
            </uni-list-item>
          </block>
        </uni-list>
      </view>
      <!-- 历史 -->
      <view v-else class="search-history">
        <!-- 头部 -->
        <view class="history-header">
          <view class="text">搜索历史</view>
          <uni-icons @click="clearClick" :size='30'
                     color='white' type='trash'>
          </uni-icons>
        </view>
        <!-- 内容 -->
        <view class="history-content">
          <block v-for="(item,index) in searchHistory"
                 :key="index">
            <uni-tag @click="historyTagClick(item)"
                     type='warning' size='normal'
                     :text="item">
            </uni-tag>
          </block>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',//搜索内容
      shakeFlag: '',//防抖计时器
      searchResultList: [],//搜索结果
      disblaFlag: true,//为false时禁止触发某事件
    }
  },
  computed: {
    /* 搜索历史 借助vuex 跟持久化 */
    searchHistory() {
      return this.$store.state.storage.searchHistory
    }
  },
  mounted() {
  },
  methods: {
    /**
     * @description: 
     * @event: 请求:获取搜索结果
     * @arguments: e|str:传递的参数
     */
    async getSearchResult(e) {
      try {
        let _query = {
          query: e
        }
        let { data: { message } } = await uni.$http.get('/api/public/v1/goods/qsearch', _query)
        this.searchResultList = message
      } catch (e) { console.log(e) } finally {
        this.disblaFlag = true
      }
    },
    /**
     * @description: 
     * @event: 搜索框-回车搜索事件
     * @arguments: e|Obj:输入框的值
     * 处理:回车后禁用changeInput事件 
     * 每次回将值添加到搜索历史
     */
    searchInput(e) {
      this.$store.commit('storage/setHistory', e.value)
      this.disblaFlag = false
      this.getSearchResult(e.value)
    },
    /**
     * @description: 
     * @event: 搜索框-输入变化事件
     * @arguments: e|Str:输入框的值
     * 处理:防抖 每次变化清空搜索结果
     */
    changeInput(e) {
      if (!this.disblaFlag) return;
      if (this.shakeFlag) { clearTimeout(this.shakeFlag) };
      this.shakeFlag = setTimeout(() => {
        this.searchResultList = []
        clearTimeout(this.shakeFlag)
      }, 700);
    },
    /**
     * @description: 
     * @event: 标签点击
     * @arguments: e|Str:内容
     * 内容渲染到输入框 进行搜索
     * 禁用changeInput事件
     */
    historyTagClick(e) {
      this.disblaFlag = false
      this.searchValue = e
      this.getSearchResult(e)
    },
    /**
     * @description: 
     * @event: 清空
     * @arguments: 
     */
    clearClick() {
      uni.showModal({
        title: '注意事项',
        content: '是否清空搜索历史',
        showCancel: true,
        success: ({ confirm }) => {
          if (confirm) {
            this.$store.commit('storage/removeHistory')
          }
        }
      })
    },
    /**
     * @description: 
     * @event: 搜索结果单个item点击
     * @arguments: 
     * 前往商品详情
     */
    shopListItemClick(goods_id) {
      uni.navigateTo({
        url: '/subpkg/xiangQing/xiangQing?goods_id=' + goods_id
      });
    }
  }
}
</script>

<style lang='scss' scoped>
@import './search.scss';

</style>
