/*
 * @Author: Allyn
 * @Description: 数据管理 tabbar
 * @Date: 2022-01-29 17:23:06
 * @LastEditTime: 2022-01-29 17:49:24
 * @FilePath: \hmYouGou\store\modules\tabBar.js
 */

import fenlei from '@/static/tabBar/fenLei.png'
import gouWuChe from '@/static/tabBar/gouWuChe.png'
import huiYuan from '@/static/tabBar/huiYuan.png'
import shouYe from '@/static/tabBar/shouYe.png'


export default {
    namespaced: true,
    state: {
        //tabbar数据
        list: [
            {
                icon: shouYe,
                name: '首页',
                page: '/pages/shouYe/shouYe',
                /* 通过这个属性决定是否选中,默认第一个选中 */
                tclass: 'checket'
            }, {
                icon: fenlei,
                name: '分类',
                page: '/pages/fenLei/fenLei',
                tclass: 'nochecket'

            }, {
                icon: gouWuChe,
                name: '购物车',
                page: '/pages/gouWu/gouWu',
                tclass: 'nochecket'
            }, {
                icon: huiYuan,
                name: '个人中心',
                page: '/pages/zhonXin/zhonXin',
                tclass: 'nochecket'
            },
        ]
    },
    mutations: {
        setList(state, num) {
            let newArray = state.list
            state.list = newArray.map((item, index) => {
                /* 相等 说明需要更改的就是他 */
                if (index === num) {
                    item.tclass = 'checket'//改成选中状态
                } else {
                    //否则一律未选中状态
                    item.tclass = 'nochecket'
                }
                return item
            })
        }
    }
}