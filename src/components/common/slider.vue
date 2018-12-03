<template>
  <div>
    <div class="block">
      <el-carousel
        :interval="interval"
        :loop="isLoop">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from 'element-ui'
export default {
  name: 'Slider',
  data () {
    return {
      isLoop: false,
      interval: 5000
    }
  },
  components: {
    Carousel,
    CarouselItem
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
