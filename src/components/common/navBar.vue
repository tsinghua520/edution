<template>
  <header>
    <router-link class="logo" to="/">
      <img src="../../assets/images/logo.png" alt="">
    </router-link>
    <span class="welcome">欢迎回来</span>
    <div class="title">
        <p><span class="pointer" @click="toIndex">优想教育-首页</span>大学数据库</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    toIndex () {
      location.href = 'http://www.bestucareer.com/cn/'
    }
  }
}
</script>

<style scoped>
header{
  height: 70px;
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  /* border-bottom: 2px solid #f80; */
}
header > span{
  display: block;
  float: left;
  height: 70xp;
  line-height: 70px;
  color: #F36611;
  font-size: 18px;
  margin-left: 40px;
}
.logo{
  display: block;
  height: 30px;
  float: left;
  margin-left: 20px;
  margin-top: 20px;
}
.logo img{
  height: 100%;
}
.title{
  float: right;
  height: 70px;
  line-height: 70px;
  color: #999;
  font-size: 14px;
}
.title span{
  color: #F36611;
  margin-right: 30px;
  position: relative;
  /* cursor: pointer; */
}
.title span:before{
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 3px;
  right: -20px;
  background-image: url('../../assets/images/icon_right.png');
  background-size: 100% 100%;
}
</style>
