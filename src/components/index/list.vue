<template>
  <div class="box">
    <ul v-cloak>
      <li v-for="(item, index) in listData" :key="index" >
        <div class="img" @click="toDetail(item.schoolId)">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="info">
          <h3 @click="toDetail(item.schoolId)">{{ item.name }}</h3>
          <p>{{ item.state }}</p>
          <span><span>Ranking</span><br />No.{{ item.ranking }}</span>
          <!-- <ul>
            <li v-if="item.isFavorite === 'N'">
              <img src="../../assets/images/icon_collection_normal.png" alt="">
              <p>收藏</p>
            </li>
            <li v-else class="active2">
              <img src="../../assets/images/icon_collection_selected.png" alt="">
              <p>取消收藏</p>
            </li>
            <li v-if="item.isFavorite === 'N'">
              <img src="../../assets/images/icon_dream_normal.png" alt="">
              <p>标记梦想</p>
            </li>
            <li v-else class="active2">
              <img src="../../assets/images/icon_dream_selected.png" alt="">
              <p>取消梦想</p>
            </li>
            <li @click="toDetailW(item.detailUrl)">
              <img src="../../assets/images/icon_detail_normal.png" alt="">
              <p>查看详情</p>
            </li>
          </ul> -->
        </div>
      </li>
    </ul>
    <h2 v-if="listData && listData.length === 0">该条件下暂无数据</h2>
  </div>
</template>

<script>
export default {
  name: 'list',
  methods: {
    toDetail (schoolId) {
      this.$router.push({path: 'detail', query: {schoolId: schoolId}})
    },
    toDetailW (url) {
      location.href = url
    }
  },
  props: ['listData']
}
</script>

<style scoped>
.box{
  width: 100%;
  height: auto;
}
.box > ul{
  width: 100%;
  height: auto;
  overflow: hidden;
}
.box > ul > li{
  width: 280px;
  height: 300px;
  float: left;
  margin-right: 20px;
  margin-bottom: 24px;
  position: relative;
  cursor: pointer;
}
.box li.active:before{
  content: '';
  display: block;
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0;
  left: 0;
  background-image: url('../../assets/images/icon_hot.png');
  background-size: 100% 100%;
  z-index: 999;
}
.box li > .img{
  width: 100%;
  overflow: hidden;
}
.box li > .img img {
  width: 100%;
  height: 198px;
  transition: all .3s;
}
.box li > .img img:hover{
  transform: scale(1.2)
}
.box li:nth-child(3n) {
  margin-right: 0;
}
.box li > .info{
  width: 100%;
  border: 1px solid #ddd;
  height: 102px;
  border-top: 0;
  padding: 18px 20px;
  position: relative;
}
.box li > .info > span{
  position: absolute;
  color: #f36611;
  right: 20px;
  top: 18px;
  font-size: 22px;
  line-height: 22px;
  /* text-align: right; */
}
.box li > .info > span > span{
  font-size: 18px
}
.box li > .info > h3{
  color: #333;
  width: 181px;
  font-size: 18px;
  line-height: 22px;
}
.box li > .info > p{
  color: #666;
  font-size: 12px;
  margin-top: 10px;
}
.box li > .info > ul{
  position: absolute;
  bottom: 0;
  left: 20px;
  width: 240px;
  height: 54px;
  overflow: hidden;
}
.box li > .info > ul li{
  width: 80px;
  float: left;
  text-align: center;
}
.box li > .info > ul li.active2 p{
  color: #f36611;
}
.box li > .info > ul li img{
  width: 14px;
  margin-bottom: 6px;
}
.box li > .info > ul li p{
  font-size: 12px;
  color: #666;
}
.box li > .info > ul li p.active{
  color: #f36611;
}
</style>
