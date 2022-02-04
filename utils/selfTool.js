/*
 * @Author: Allyn
 * @Description: 编写自己封装的函数
 * @Date: 2022-01-30 14:09:03
 * @LastEditTime: 2022-02-04 19:25:03
 * @FilePath: \hmYouGou\utils\selfTool.js
 */

/**
 * @description: 
 * @event: 生成一个指定范围的随机数
 * @arguments: min最小  max最大
 */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * @description: 
 * @event: 提示框
 * @arguments: 
 * @param {*} title 提示内容
 * @param {*} duration 多久消失
 */
function message(title = '操作失败', duration = 1500) {
    uni.showToast({
        title,
        duration,
        icon: 'none'
    });
}

export default {
    getRandom,
    message
}