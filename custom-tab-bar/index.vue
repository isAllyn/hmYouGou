<!--
 * @Author: Allyn
 * @Description: 自定义tabbar组件
 * @Date: 2022-01-29 17:15:19
 * @LastEditTime: 2022-01-29 17:19:58
 * @FilePath: \hmYouGou\custom-tab-bar\index.vue
-->
<template>
  <view>
    <view>
      <tabBar></tabBar>
    </view>
  </view>
</template>

<script>
//引入tabbar
import tabBar from '@/components/tabBar.vue'
export default {
  components: {
    tabBar
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
</style>
