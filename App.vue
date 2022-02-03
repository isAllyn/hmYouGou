<!--
 * @Author: Allyn
 * @Description:
 * @Date: 2022-01-30 13:26:00
 * @LastEditTime: 2022-01-30 13:38:31
 * @FilePath: \hmYouGou\App.vue
-->
<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang='scss'>
/* colorUI 组件库样式 */
@import "~@/colorUI/main.css";
@import "~@/colorUI/icon.css";

/*每个页面公共css */
/* uview ui 基础样式 */
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import 'uview-ui/index.scss';

/* 引入字体图标样式 */
@import '~@/static/font/iconfont.css';

</style>
