/*
 * @Author: Allyn
 * @Description: 数据管理  首页
 * @Date: 2022-01-30 13:54:40
 * @LastEditTime: 2022-02-03 15:55:54
 * @FilePath: \hmYouGou\store\modules\home.js
 */

/* 轮播图图片 */
let swiper1='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/swiper/11.jpeg'
let swiper2='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/swiper/22.jpg'
let swiper3='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/swiper/33.jpg'
let swiper5='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/swiper/55.jpg'
let swiper6='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/swiper/66.jpg'
let swiper7='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/swiper/77.jpg'

/* nav导航栏图片 */
let fenlei='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/nav/navFenLei.png'
let miaosha='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/nav/navMiaoSha.png'
let chaoShi='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/nav/navChaoShi.png'
let MuYin='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/nav/navMuYin.png'

/* 楼层当中的图片 */
let louCeng1='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/louCeng/1.jpg'
let louCeng2='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/louCeng/2.jpg'
let louCeng3='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/louCeng/3.jpg'
let louCeng4='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/louCeng/4.jpg'
let louCeng5='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/louCeng/5.jpg'
let louCeng6='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/louCeng/6.jpg'
let louCeng7='https://images.weserv.nl/?url=https://gitee.com/isAllyn/image-depot/raw/master/hmYouGou/louCeng/7.jpg'

export default {
    namespaced: true,
    state: {
        //自己的轮播图片
        swiperImages: [swiper1, swiper2, swiper3, swiper5, swiper6, swiper7],
        //nav导航栏图片
        navImage: [
            {
                name: '分类',
                image: fenlei
            },
            {
                name: '秒杀拍',
                image: miaosha
            },
            {
                name: '超市购',
                image: chaoShi
            },
            {
                name: '母婴品',
                image: MuYin
            },
        ],
        //楼层的图片
        louImage: [louCeng1, louCeng2, louCeng3, louCeng4, louCeng5, louCeng6, louCeng7]
    }
}