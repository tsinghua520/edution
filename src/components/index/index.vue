<template>
  <div>
    <NavBar></NavBar>
    <div class="banner">
      <img src="../../assets/images/banner.png" alt="">
    </div>
    <section>
      <div class="filter">
        <div class="best" @click="toDemo">
          <img src="../../assets/images/best.png" alt="">
        </div>
        <div class="filter-content">
          <div class="filter-title">
            筛选条件
          </div>
          <ul>
            <li>
              <div class="tip" v-if="showTip === 1">
                选择National University(全美综合大学)，或者选择Liberal Arts College(全美文理学院)进行学校筛选
              </div>
              <h2 @mouseenter="changeShowTip(1)" @mouseleave="changeShowTip(0)">University of College</h2>
              <div class="College">
                <span :class="{active:searchType === 'university'}" @click="changeCollege('university')">University</span>
                <span :class="{active:searchType === 'college'}" @click="changeCollege('college')">College</span>
              </div>
            </li>
            <li>
              <div class="tip" v-if="showTip === 2">
                根据大学所在的州进行学校筛选
              </div>
              <h2 @mouseenter="changeShowTip(2)" @mouseleave="changeShowTip(0)">Location</h2>
              <el-select v-model="location" filterable placeholder="请选择" @change="changeLocation" :default-first-option="isDefault">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <div class="tip tip3" v-if="showTip === 3">
                【Tuition & Fee】包含本科学习一年的学费、生活费及其他杂费（为学校估算的平均花费），可设定学习花费来进行学校筛选
              </div>
              <h2 @mouseenter="changeShowTip(3)" @mouseleave="changeShowTip(0)">Tuition & Fees</h2>
              <RangeMoney @changeValue='changeFeesHandle' :range="FeesRange"></RangeMoney>
            </li>
            <li>
              <div class="tip" v-if="showTip === 4">
                根据学校最近一年新生录取率来进行学校筛选
              </div>
              <h2 @mouseenter="changeShowTip(4)" @mouseleave="changeShowTip(0)">Acceptance Rate</h2>
              <RangeRate @changeValue='changeRateHandle' :range="rateRange"></RangeRate>
            </li>
            <li>
              <div class="tip" v-if="showTip === 5">
                【Undergraduate Enrollment】指的是本科注册学生人数，通过设定本科注册学生人数来进行学校筛选
              </div>
              <h2 @mouseenter="changeShowTip(5)" @mouseleave="changeShowTip(0)">Undergraguate Enroll</h2>
              <RangeNum @changeValue='changeEnrollHandle' :range="enrollRange"></RangeNum>
            </li>
            <!-- <li>
              <div class="tip" v-if="showTip === 6">
                根据具体本科专业来进行学校筛选
              </div>
              <h2 @mouseenter="changeShowTip(6)" @mouseleave="changeShowTip(0)">Fleld of Study</h2>
              <el-select v-model="fieldStudy" filterable placeholder="请选择" @change="changeFleld" :default-first-option="isDefault">
                <el-option
                  v-for="item in optionsField"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </li> -->
            <li>
              <div class="tip" v-if="showTip === 7">
                根据学校录取考量中最看重的因素进行学校筛选
              </div>
              <h2 @mouseenter="changeShowTip(7)" @mouseleave="changeShowTip(0)">Most Considered Factor</h2>
              <el-select v-model="factor" filterable placeholder="请选择" @change="changeFactor" :default-first-option="isDefault">
                <el-option
                  v-for="item in optionsFactor"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <div class="tip" v-if="showTip === 8">
                选择公立学校，或者选择私立学校进行学校筛选
              </div>
              <h2 @mouseenter="changeShowTip(8)" @mouseleave="changeShowTip(0)">Institution Type</h2>
              <el-select v-model="institutionType" filterable placeholder="请选择" @change="changeType" :default-first-option="isDefault">
                <el-option
                  v-for="item in optionsType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <div class="tip" v-if="showTip === 9">
                根据Usnews最新排名进行学校筛选
              </div>
              <h2 @mouseenter="changeShowTip(9)" @mouseleave="changeShowTip(0)">Ranking</h2>
              <RangeRanking @changeValue='changeRankingHandle' :range="rankingRange"></RangeRanking>
            </li>
          </ul>
        </div>
      </div>
      <div class="list">
        <List :list-data="info.listData" :isloading="isloading"></List>
        <el-pagination
          background
          layout="pager, next"
          v-if="info.total > 0"
          @current-change="changePage"
          :total="info.total">
        </el-pagination>
      </div>
    </section>
    <Foot></Foot>
  </div>
</template>

<script>
import { getCollegeListApi } from 'api/api'
import axios from 'axios'
import NavBar from '../common/navBar.vue'
import Foot from '../common/footer.vue'
// range组件
import RangeMoney from '../range/rangeMoney.vue'
import RangeNum from '../range/RangeNum.vue'
import RangeRanking from '../range/RangeRanking.vue'
import RangeRate from '../range/RangeRate.vue'
// 数据列表组件
import List from './list.vue'
export default {
  name: 'Index',
  data () {
    return {
      isloading: true,
      isDefault: true,
      FeesRange: [15, 80],
      rateRange: [0, 100],
      enrollRange: [0, 55],
      rankingRange: [1, 150],
      options: [
        {value: 'AL', label: 'Alabama'},
        {value: 'AK', label: 'Alaska'},
        {value: 'AZ', label: 'Arizona'},
        {value: 'AR', label: 'Arkansas'},
        {value: 'CA', label: 'California'},
        {value: 'CO', label: 'Colorado'},
        {value: 'CT', label: 'Connecticut'},
        {value: 'DE', label: 'Delaware'},
        {value: 'FL', label: 'Florida'},
        {value: 'GA', label: 'Georgia'},
        {value: 'HI', label: 'Hawaii'},
        {value: 'ID', label: 'Idaho'},
        {value: 'IL', label: 'Illinois'},
        {value: 'IN', label: 'Indiana'},
        {value: 'IA', label: 'Iowa'},
        {value: 'KS', label: 'Kansas'},
        {value: 'KY', label: 'Kentucky'},
        {value: 'LA', label: 'Louisiana'},
        {value: 'ME', label: 'Maine'},
        {value: 'MD', label: 'Maryland'},
        {value: 'MA', label: 'Massachusetts'},
        {value: 'MI', label: 'Michigan'},
        {value: 'MN', label: 'Minnesota'},
        {value: 'MS', label: 'Mississippi'},
        {value: 'MO', label: 'Missouri'},
        {value: 'MT', label: 'Montana'},
        {value: 'NE', label: 'Nebraska'},
        {value: 'NV', label: 'Nevada'},
        {value: 'NH', label: 'New Hampshire'},
        {value: 'NJ', label: 'New Jersey'},
        {value: 'NM', label: 'New Mexico'},
        {value: 'NY', label: 'New York'},
        {value: 'NC', label: 'North Carolina'},
        {value: 'ND', label: 'North Dakota'},
        {value: 'OH', label: 'Ohio'},
        {value: 'OK', label: 'Oklahoma'},
        {value: 'OR', label: 'Oregon'},
        {value: 'PA', label: 'Pennsylvania'},
        {value: 'RI', label: 'Rhode Island'},
        {value: 'SC', label: 'South Carolina'},
        {value: 'SD', label: 'South Dakota'},
        {value: 'TN', label: 'Tennessee'},
        {value: 'TX', label: 'Texas'},
        {value: 'UT', label: 'Utah'},
        {value: 'VT', label: 'Vermont'},
        {value: 'VA', label: 'Virginia'},
        {value: 'WA', label: 'Washington'},
        {value: 'WV', label: 'West Virginia'},
        {value: 'WI', label: 'Wisconsin'},
        {value: 'WY', label: 'Wyoming'}
      ],
      // optionsField: [
      //   {value: 'S1', label: 'Arts and Humanities'},
      //   {value: 'S2', label: 'Multi-/Interdisciplinary Studies'},
      //   {value: 'S3', label: 'Business'},
      //   {value: 'S4', label: 'Health and Medicine'},
      //   {value: 'S5', label: 'Public and Social Services'},
      //   {value: 'S6', label: 'Science, Math, and Technology'},
      //   {value: 'S7', label: 'Social Sciences'},
      //   {value: 'S8', label: 'Trades and Personal Services'}
      // ],
      optionsFactor: [
        {value: 'F1', label: 'Rigor of Secondary School Record'},
        {value: 'F2', label: 'Adademic GPA'},
        {value: 'F3', label: 'Standarized Tests'},
        {value: 'F4', label: 'Class Rank'},
        {value: 'F5', label: 'Recommendations'},
        {value: 'F6', label: 'Essay'},
        {value: 'F7', label: 'Interview'},
        {value: 'F8', label: 'Level of Applicant\'s Interest'},
        {value: 'F9', label: 'Extracurricular Activities'},
        {value: 'F10', label: 'Volunnteer Work'},
        {value: 'F11', label: 'Particular Talent/Ability'},
        {value: 'F12', label: 'Character/Personal Qualities'},
        {value: 'F13', label: 'First Generation to Attend College'},
        {value: 'F14', label: 'Geographic Residence'},
        {value: 'F15', label: 'Relation with Alumnus'},
        {value: 'F16', label: 'Religious Affliation/Commitment'},
        {value: 'F17', label: 'Work Experience'}
      ],
      optionsType: [
        {value: 'Private', label: 'Private'},
        {value: 'Public', label: 'Public'}
      ],
      location: 'AL',
      showTip: 0,
      searchType: 'university',
      // fieldStudy: 'S1',
      factor: 'F1',
      institutionType: 'Private',
      userId: '',
      info: {},
      pageNo: 0
    }
  },
  components: {
    NavBar,
    Foot,
    RangeMoney,
    RangeNum,
    RangeRanking,
    RangeRate,
    List
  },
  created () {
    this.userId = this.$route.query.userId
    console.log(this.userId)
    localStorage.setItem('userId', this.userId)
    // 请求列表
    this.getCollegeList()
  },
  methods: {
    getCollegeList () {
      let params = {
        userId: this.userId,
        pageNo: this.pageNo,
        searchType: this.searchType,
        location: this.location,
        startFee: this.FeesRange[0] * 100,
        endFee: this.FeesRange[1] * 100,
        startRate: this.rateRange[0],
        endRate: this.rateRange[1],
        startEnrollment: this.enrollRange[0] * 100,
        endEnrollment: this.enrollRange[1] * 100,
        startRanking: this.rankingRange[0],
        endRanking: this.rankingRange[1],
        // fieldStudy: this.fieldStudy,
        factor: this.factor,
        institutionType: this.institutionType
      }
      axios.post(getCollegeListApi, params).then(res => {
        this.isloading = false
        this.info = res.data.data
      })
    },
    changeCollege (str) {
      this.searchType = str
      this.getCollegeList()
    },
    changeType (value) {
      this.institutionType = value
      this.getCollegeList()
    },
    changeLocation (value) {
      this.location = value
      this.getCollegeList()
    },
    changeFactor (value) {
      this.factor = value
      this.getCollegeList()
    },
    // changeFleld (value) {
    //   this.fieldStudy = value
    //   this.getCollegeList()
    // },
    changeShowTip (num) {
      this.showTip = num
    },
    changePage (value) {
      this.pageNo = value - 1
      this.getCollegeList()
    },
    // 通过子组件改变父组件的值
    changeCollegeHandle (value) {
      this.collegeRange = value
      this.getCollegeList()
    },
    changeFeesHandle (value) {
      this.FeesRange = value
      this.getCollegeList()
    },
    changeRateHandle (value) {
      this.rateRange = value
      this.getCollegeList()
    },
    changeEnrollHandle (value) {
      this.enrollRange = value
      this.getCollegeList()
    },
    changeRankingHandle (value) {
      this.rankingRange = value
      this.getCollegeList()
    },
    toDemo () {
      location.href = this.info.sampleUrl
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../../assets/css/index.css');
</style>
