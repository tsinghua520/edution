/**
 * 用来做接口list
 * 整改接口地址只需要该baseUrl
 */

// 静态文件地址
switch (process.env.NODE_ENV) {
  case 'production':
    window.__baseUrl = process.env.BASE_API
    break
  default:
    window.__baseUrl = 'http://47.100.46.51:8787/'
}

// api地址// let baseUrl = window.__baseUrl? window.__baseUrl : '//pkufi-perftest.zhongan.io'
let baseUrl = window.__baseUrl
export const getCollegeListApi = baseUrl + 'workvalue/api/collegeData/list'
export const getCollegeDetailApi = baseUrl + 'workvalue/api/collegeData/detail'
