/*
 * @Author: Allyn
 * @Description: 编写自己封装的函数
 * @Date: 2022-01-30 14:09:03
 * @LastEditTime: 2022-01-30 14:10:05
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

export default {
    getRandom
}