/*
 * @Author: Allyn
 * @Description: 数据管理  首页
 * @Date: 2022-01-30 13:54:40
 * @LastEditTime: 2022-01-30 15:49:44
 * @FilePath: \hmYouGou\store\modules\home.js
 */

import swiper1 from '@/static/home/swiper/11.jpeg'
import swiper2 from '@/static/home/swiper/22.jpg'
import swiper3 from '@/static/home/swiper/33.jpg'
import swiper5 from '@/static/home/swiper/55.jpg'
import swiper6 from '@/static/home/swiper/66.jpg'
import swiper7 from '@/static/home/swiper/77.jpg'

import fenlei from '@/static/home/nav/navFenLei.png'
import miaosha from '@/static/home/nav/navMiaoSha.png'
import chaoShi from '@/static/home/nav/navChaoShi.png'
import MuYin from '@/static/home/nav/navMuYin.png'

import louCeng1 from '@/static/home/louceng/1.jpg'
import louCeng2 from '@/static/home/louceng/2.jpg'
import louCeng3 from '@/static/home/louceng/3.jpg'
import louCeng4 from '@/static/home/louceng/4.jpg'
import louCeng5 from '@/static/home/louceng/5.jpg'
import louCeng6 from '@/static/home/louceng/6.jpg'
import louCeng7 from '@/static/home/louceng/7.jpg'

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