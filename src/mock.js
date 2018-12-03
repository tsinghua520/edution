import collegelist from './mock/getCollegeList.json'
// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
// 获取首页城市列表接口
const college = function () {
  return {
    collegelist: collegelist
  }
}
Mock.mock('/getCollegeList', 'post', college)
