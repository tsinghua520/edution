<template>
  <div class="footer">
    <div class="footer_inner">
      <router-link to="/"><img class="footer_logo" src="../../assets/images/logo.png" alt="logo"></router-link>
      <ul class="footer_list">
        <div class="footer_list_line"></div>
        <router-link to="/" class="footer_list_title">资源及信息</router-link>
        <li>
          <a href="http://www.bestucareer.com/cn/">资源中心</a>
        </li>
        <li>
          <a href="http://www.bestucareer.com/cn/source.html">资源中心</a>
        </li>
        <li>
          <a href="http://www.bestucareer.com/cn/about.html">机构介绍</a>
        </li>
        <li>
          <a href="http://www.bestucareer.com/cn/contact.html">联系我们</a>
        </li>
      </ul>
      <ul class="footer_list">
        <div class="footer_list_line"></div>
        <a href="/" class="footer_list_title">专业服务</a>
        <li>
          <a href="http://www.bestucareer.com/cn/via.html">VIA优势认知</a>
        </li>
        <li>
          <a href="http://www.bestucareer.com/cn/bestU.html">BestU生涯</a>
        </li>
      </ul>
      <ul class="footer_list footer_list01 ">
          <div class="footer_list_line"></div>
          <a href="/" class="footer_list_title">联系方式</a>
          <li>
            <i class="icon01"></i>
            <a target="_blank">021-80158819  </a>
          </li>
          <li>
            <i class="icon02"></i>
            <a target="_blank">info@bestucareer.com</a>
          </li>
          <li>
            <i class="icon03"></i>
            <a target="_blank">上海: 杨浦区军工路100号380栋</a>
          </li>
          <li>
            <i class="icon04"></i>
            <a href="/">隐私保护说明</a>
          </li>
        </ul>
      <div class="footer_ewm">
        <img src="../../assets/images/ewm.jpg" alt="ewm">
        <p>优想公众号</p>
      </div>
    </div>
    <div class="footer_copy">
      <a href="http://www.miitbeian.gov.cn/" target="_blank">沪ICP备18012464号</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  width: 100%;
  min-width: 1200px;
  background: #F8F8F8;
  overflow: hidden;
}

.footer_inner {
  width: 1000px;
  margin: auto;
  padding-top: 50px;
  overflow: hidden;
}
.footer_inneren{
  width: 1200px;
}

.footer_logo {
  /* width: 170px; */
  height: 30px;
  float: left;
  margin-right: 100px;
}

.footer_list {
  float: left;
  margin-right: 100px;
  overflow: hidden;
}

.footer_list_line {
  width: 24px;
  height: 2px;
  background: #636262;
}

.footer_list_title {
  display: block;
  font-size: 16px;
  color: #636262;
  margin: 16px 0 24px;
}

.footer_list_title:hover {
  color: #F3650F;
}

.footer_list>li>a {
  display: block;
  margin-bottom: 10px;
  font-size: 12px;
  color: #A1A1A1;
}
.footer_list01>li>a{
  margin-left: 20px;
}
.icon01{
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url(../../assets/images/phone.png) no-repeat;
  position: absolute;
}
.icon02{
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url(../../assets/images/mail.png) no-repeat;
  position: absolute;
}
.icon03{
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url(../../assets/images/address.png) no-repeat;
  position: absolute;
}
.icon04{
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url(../../assets/images/privacy.png) no-repeat;
  position: absolute;
}

.footer_list>li>a:hover {
  color: #F3650F;
}

.footer_ewm {
  float: right;
  text-align: center;
  font-size: 12px;
  color: #A1A1A1;
}

.footer_ewm>img {
  width: 80px;
  height: 80px;
}

.footer_copy {
  width: 1000px;
  margin: 80px auto 24px;
  clear: both;
  text-align: center;
}

.footer_copy a {
  font-size: 12px;
  color: #A0A0A0;
}

.link_btn {
  display: inline-block;
  height: 28px;
  overflow: hidden;
  border-radius: 14px;
  background: #FD8228;
  padding: 0 20px;
  font-size: 14px;
  color: #fff;
  line-height: 28px;
}
.link_btn:hover {
  background: #F36611;
}
</style>
