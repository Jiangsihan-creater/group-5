/*
 * @创建文件时间: 2021-06-01 22:41:21
 * @Auther: 猿小天
 * @最后修改人: 猿小天
 * @最后修改时间: 2021-07-04 00:54:41
 * 联系Qq:1638245306
 * @文件介绍: 版本介绍
 */
import util from '@/libs/util.js'

export default {
  namespaced: true,
  mutations: {
    /**
     * @description 显示版本信息
     * @param {Object} state state
     */
    versionShow () {
      // util.log.capsule('D2Admin', `v${process.env.VUE_APP_VERSION}`)
    }
  }
}
