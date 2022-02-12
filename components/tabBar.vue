<!--
 * @Author: Allyn
 * @Description: tabBar组件
 * @Date: 2022-01-29 17:19:00
 * @LastEditTime: 2022-02-12 16:20:35
 * @FilePath: \hmYouGou\components\tabBar.vue
-->
<template>
  <view :style="{backgroundColor:bgColor}"
        class="tab-container">
    <block v-for="(item,index) in list" :key="item.name">
      <view class="item">

        <view @click="tabItemClick(index,item.page)"
              class="item-icon" :class="item.tclass"
              :style="{borderColor:bgColor}">
          <view v-if="index===2" :class="item.tclass"
                class="cu-tag badge">
            <block>{{tagNumber}}</block>
          </view>
          <image :src="item.icon" />
        </view>
        <view class="item-text">
          {{item.name}}
        </view>
      </view>

    </block>
  </view>
</template>

<script>
export default {
  props: {
    /* 自定义背景色 */
    bgColor: {
      type: String,
      default: () => '#6f8da7'
    }
  },
  name: 'HmyougouTabbar',
  created() {
    this.list = this.$store.state.tabBar.list
  },
  computed: {
    shopInfo() {
      return this.$store.state.shop.shopList
    }
  },
  watch: {
    shopInfo: {
      handler(newv, oldv) {
        this.tagNumber = newv.length
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      /* tabBar数据 */
      list: [],
      tagNumber: 0,//角标数据
    };
  },

  mounted() {

  },

  methods: {
    /**
     * @description: 
     * @event: tabbar点击
     * @arguments: 
     */
    tabItemClick(index, url) {
      /* 每次点击先更新后台数目的选中状态 需要传选item所在的索引  index就是 */
      this.$store.commit('tabBar/setList', index)
      uni.switchTab({
        url
      });

      /* 我也不知道为什么created最后是没有执行的 但是dom还是会跟着数据跟新 */
      /* 我的想法是修改完之后 再获取数据 数据改了dom就会跟着更新 但是我还有美誉获取也会更新 */
      /* 还是再写一下这串代码 */
      this.list = this.$store.state.tabBar.list
    }
  },
};
</script>

<style lang="scss" scoped>
@import './tabBar.scss';

</style>