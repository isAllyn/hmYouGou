<!--
 * @Author: Allyn
 * @Description: 商品详情页面
 * @Date: 2022-02-12 14:03:44
 * @LastEditTime: 2022-02-12 16:13:52
 * @FilePath: \hmYouGou\subpkg\xiangQing\xiangQing.vue
-->
<template>
  <view class="page-xiangQing">
    <!-- 轮播 -->
    <view class="swiper-container">
      <swiper @change='swiperChange' class="screen-swiper"
              :circular="true" :autoplay="true"
              interval="1500" duration="500">
        <swiper-item v-for="(item,index) in swiperList"
                     :key="index">
          <image :src="item.url" mode="aspectFill"
                 v-if="item.type=='image'"></image>
        </swiper-item>
      </swiper>
      <!-- 指示点 -->
      <view class="swiper-lineDot">
        <block v-for="item in swiperList" :key="item.id">
          <span
                :class="[current===item.id?'check':'']"></span>
        </block>
      </view>
    </view>
    <!-- 介绍 -->
    <view class="referral-container">
      <view class="left">
        <view class="pri">{{xiangQinInfo.goods_price}}
        </view>
        <view class="text">
          {{xiangQinInfo.goods_name}}
        </view>
      </view>
      <view class="right">
        <uni-icons @click="favClick" size='60'
                   :type='checked?"star-filled":"star"'>
        </uni-icons>
        <view class="text">收藏</view>
      </view>
    </view>
    <!-- 图片 -->
    <view class="iamges-container">
      <block v-for="item in 5" :key="item">

        <view class="image-item">
          图片
        </view>
      </block>

    </view>
    <!-- 购物 -->
    <view class="shopin-container">
      <uni-goods-nav :fill="true" :options="options"
                     :buttonGroup="buttonGroup"
                     @click="ShopIconClick"
                     @buttonClick="shopingClick" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      /* 购物车部分 */
      options: [{
        icon: 'headphones',
        text: '客服'
      }, {
        icon: 'shop',
        text: '店铺',
      }, {
        icon: 'cart',
        text: '购物车',
      }],
      buttonGroup: [{
        text: '加入购物车',
        backgroundColor: '#ff0000',
        color: '#fff'
      },
      {
        text: '立即购买',
        backgroundColor: '#ffa200',
        color: '#fff'
      }
      ],
      checked: false,//是否已收藏
      cardCur: 0,
      /* 轮播图部分 */
      current: 0,//当前选中的轮播
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
      }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
      }, {
        id: 3,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      }, {
        id: 4,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
      }, {
        id: 5,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
      }, {
        id: 6,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
      }],
      dotStyle: false,
      towerStart: 0,
      direction: '',
      xiangQinInfo: {},//详情数据
    }
  },
  onLoad(opt) {
    this.TowerSwiper('swiperList');// 初始化towerSwiper 传已有的数组名即可
    this.getXiangQinInfo(opt.goods_id)//获取详情数据
  },
  computed: {
    shopInfo() {
      return this.$store.state.shop.shopList
    }
  },
  watch: {
    shopInfo: {
      handler(newv, oldv) {
        this.options[2].info = newv.length
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    /**
     * @event: 购物导航图案点击
     * @arguments: 
     * @description: 
     */
    ShopIconClick({ index }) {
      if (index === 2) {
        uni.switchTab({
          url: '/pages/gouWu/gouWu'
        });
        this.$store.commit('tabBar/setList', 2)
      }
    },
    /**
     * @event: 加入购物车与立即购买
     * @arguments: 
     * @description: 
     */
    shopingClick({ index }) {
      let { goods_name, goods_price } = this.xiangQinInfo
      if (index === 0) {
        this.$store.commit('shop/addShopList', { goods_name, goods_price })
      }
    },
    /**
     * @event: 收藏按钮
     * @arguments: 
     * @description: 
     */
    favClick() {
      this.checked = !this.checked
    },
    /**
     * @event: 获取详情数据
     * @arguments: id
     * @description: 
     */
    async getXiangQinInfo(id) {
      try {
        let { data: { message } } = await uni.$http.get(`/api/public/v1/goods/detail?goods_id=${id}`)
        this.xiangQinInfo = message
      } catch (e) { console.log(e); } finally { }
    },
    /**
     * @event: 轮播图变化
     * @arguments: 
     * @description: 
     */
    swiperChange({ detail: { current } }) {
      this.current = current
    },
    /**
     * @event: 
     * @arguments: 轮播图部分
     * @description: 不需要改动
     */
    DotStyle(e) {
      this.dotStyle = e.detail.value
    },
    // cardSwiper
    cardSwiper(e) {
      this.cardCur = e.detail.current
    },
    // towerSwiper
    // 初始化towerSwiper
    TowerSwiper(name) {
      let list = this[name];
      for (let i = 0; i < list.length; i++) {
        list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
        list[i].mLeft = i - parseInt(list.length / 2)
      }
      this.swiperList = list
    },
    // towerSwiper触摸开始
    TowerStart(e) {
      this.towerStart = e.touches[0].pageX
    },
    // towerSwiper计算方向
    TowerMove(e) {
      this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
    },
    // towerSwiper计算滚动
    TowerEnd(e) {
      let direction = this.direction;
      let list = this.swiperList;
      if (direction == 'right') {
        let mLeft = list[0].mLeft;
        let zIndex = list[0].zIndex;
        for (let i = 1; i < this.swiperList.length; i++) {
          this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
          this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
        }
        this.swiperList[list.length - 1].mLeft = mLeft;
        this.swiperList[list.length - 1].zIndex = zIndex;
      } else {
        let mLeft = list[list.length - 1].mLeft;
        let zIndex = list[list.length - 1].zIndex;
        for (let i = this.swiperList.length - 1; i > 0; i--) {
          this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
          this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
        }
        this.swiperList[0].mLeft = mLeft;
        this.swiperList[0].zIndex = zIndex;
      }
      this.direction = ""
      this.swiperList = this.swiperList
    },
  }
}
</script>

<style lang='scss' scoped>
@import './xiangQing.scss';

</style>
