<template>
  <div class="block">
    <el-slider
      v-model="value"
      range
      @change="changeValue"
      :format-tooltip="formatTooltip"
      :min="min"
      :max="max">
    </el-slider>
    <div class="kd">
      <span v-for="item in 21" :style="{left:( item - 1 ) * 5 +'%'}" :key="item"></span>
    </div>
    <div class="value">
      <span v-for="item in 5" :style="{left:item * 25 - 25 +'%'}" :key="item">{{ Math.round((item - 1) * 25)}}%</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: [0, 100],
      max: 100,
      min: 0
    }
  },
  methods: {
    formatTooltip (value) {
      return value + '%'
    },
    changeValue () {
      console.log(this.value)
      this.$emit('changeValue', this.value)
    }
  },
  props: ['range']
}
</script>

<style scoped>

.kd,.value{
  width: 100%;
  height: 10px;
  margin-top: 2px;
  position: relative
}
.kd span{
  display: inline-block;
  width: 1px;
  height: 4px;
  top: 0;
  position: absolute;
  background-color: #cccccc;
}
.kd span:nth-child(5n + 1){
  height: 8px;
}
.value span{
  display: inline-block;
  width: 30px;
  text-align: center;
  transform: translateX(-50%);
  height: 10px;
  bottom: 0;
  position: absolute;
  font-size: 12px;
  color: #666;
}
</style>
