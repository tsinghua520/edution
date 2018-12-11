<template>
  <div class="box" v-loading="loading">
    <NavBar v-if="summary1.name" :college-name="summary1.name"></NavBar>
    <div class="banner" >
      <img :src="allInfo.headImgUrl || '' " alt="">
    </div>
    <section class="clearfix" v-if="allInfo.headImgUrl">
      <div class="desc">
        <div class="ranking">
          <h2>{{ summary1.name }}</h2>
          <p>{{ summary1.state }}</p>
          <span>Ranking No.{{ summary1.ranking }}</span>
        </div>
        <div class="baseinfo">
          <h3>Basic Info</h3>
          <ul>
            <li>Website: </li>
            <li> <a :href="summary2.website" target="_blank">{{ summary2.website }}</a></li>
            <li>Institution Type：</li>
            <li>{{ summary2.type }}</li>
            <li>Students:</li>
            <li>{{ summary2.students }}</li>
            <li>Admission rate：</li>
            <li>{{ summary2.admissionRate }}</li>
            <li>Location：</li>
            <li>{{ summary2.location }}</li>
          </ul>
        </div>
        <div class="baseinfo">
          <h3>Quick Facts</h3>
          <ul>
            <li>Regular Admission Deadline: </li>
            <li>{{ summary3.deadline }}</li>
            <!-- <li>Overall Admission Rate：</li>
            <li>{{ summary3.admissionRate }}</li> -->
            <li>Average GPA(Enrolled Freshmen):</li>
            <li>{{ summary3.gpa }}</li>
            <li>Cost of Attendance：</li>
            <li>{{ summary3.attendance }}</li>
            <li>International Students:</li>
            <li>{{ summary3.intelStudents }}</li>
          </ul>
        </div>
      </div>
      <div class="content">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="大学介绍及本科专业" name="first">
            <h4  class="title">Brief Introduction</h4>
            <div class="majors">
              <p class="firstDesc">{{ tab1.desc }}</p>
            </div>
            <h4 class="title">Undergraduate Majors</h4>
            <table class="tab1">
              <tr>
                <td valign="top">
                  <ul>
                    <li v-for="(item, index) in tab1.majors" v-if="index < tab1.majors.length/2" :key="index">
                      <!-- <a href="javascript:void(0)">{{ item.name }}</a> -->
                      <a :href="item.linkAddr" v-if="item.linkAddr"  target="_blank">{{ item.name }}</a>
                      <span v-else>{{ item.name }}</span>
                    </li>
                  </ul>
                </td>
                <td valign="top">
                  <ul>
                    <li v-for="(item, index) in tab1.majors" v-if="index > tab1.majors.length/2" :key="index">
                      <!-- <a href="javascript:void(0)">{{ item.name }}</a> -->
                      <a :href="item.linkAddr" v-if="item.linkAddr"  target="_blank">{{ item.name }}</a>
                      <span v-else>{{ item.name }}</span>
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="录取考量因素" name="second">
            <table class="second">
              <tr>
                <th>Factor</th>
                <th>Very Important</th>
                <th>Important</th>
                <th>Considered</th>
                <th>Not Considered</th>
              </tr>
              <tr v-for="(item, index) in yuny" :key="index">
                <td>{{ item.name }}</td>
                <td :class="{error: item.important === 1}"></td>
                <td :class="{error: item.important === 2}"></td>
                <td :class="{error: item.important === 3}"></td>
                <td :class="{error: item.important === 4}"></td>
              </tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="录取情况" name="third">
            <table class="second">
              <tr><td style="width:45%">Entrance Difficulty</td><td>{{ tab3.entrance1 }}</td></tr>
              <tr><td>Overall Admission Rate</td><td>{{ tab3.entrance2 }}</td></tr>
              <tr><td>Early Action Offered</td><td>{{ tab3.entrance3 }}</td></tr>
              <tr><td>Early Decision Offered</td><td>{{ tab3.entrance4 }}</td></tr>
              <tr><td>Regular Admission Deadline</td><td>{{ tab3.entrance5 }}</td></tr>
            </table>
            <h4 class="title">Qualifications of Enrolled Freshmen</h4>
            <table class="second mt0">
              <tr><td style="width:45%">Average GPA</td><td>{{ tab3.entrance6 }}</td></tr>
              <tr><td>SAT Math</td><td>{{ tab3.entrance7 }}</td></tr>
              <tr><td>SAT Critical Reading</td><td>{{ tab3.entrance8 }}</td></tr>
              <tr><td>SAT Writing</td><td>{{ tab3.entrance9 }}</td></tr>
              <tr><td>ACT Composite</td><td>{{ tab3.entrance10 }}</td></tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="高中准备" name="fourth">
            <h4 class="title">High School Preparation</h4>
            <table class="second mt0">
              <tr>
                <td style="width:35%">High School Graduation</td>
                <td>{{ tab4.prepare1 }}</td>
              </tr>
              <tr>
                <td>High School Program</td>
                <td>{{ tab4.prepare2 }}</td>
              </tr>
            </table>
            <h4 class="title">High School Units Required or Recommended</h4>
            <table class="second mt0">
              <tr><td style="width:35%">Subject</td><td>{{ tab4.prepare31 }}</td><td>{{ tab4.prepare32 }}</td></tr>
              <tr><td>English</td><td>{{ tab4.prepare41 }}</td><td>{{ tab4.prepare42 }}</td></tr>
              <tr><td>Mathematics</td><td>{{ tab4.prepare51 }}</td><td>{{ tab4.prepare52 }}</td></tr>
              <tr><td>Science</td><td>{{ tab4.prepare61 }}</td><td>{{ tab4.prepare62 }}</td></tr>
              <tr><td>Foreign Language</td><td>{{ tab4.prepare71 }}</td><td>{{ tab4.prepare72 }}</td></tr>
              <tr><td>Social Studies</td><td>{{ tab4.prepare81 }}</td><td>{{ tab4.prepare82 }}</td></tr>
              <tr><td>History</td><td>{{ tab4.prepare91 }}</td><td>{{ tab4.prepare92 }}</td></tr>
              <tr><td>Academic Electives</td><td>{{ tab4.prepare101 }}</td><td>{{ tab4.prepare102 }}</td></tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="学费及相关" name="fifth">
             <table class="second">
              <tr><td style="width:50%">Cost of Attendance</td><td>{{ tab5.fee1 }}</td></tr>
              <tr><td>Tuition and Fees</td><td>{{ tab5.fee2 }}</td></tr>
              <tr><td>Room and Board</td><td>{{ tab5.fee3 }}</td></tr>
              <tr><td>Average Percent of Need Met (For American students)</td><td>{{ tab5.fee4 }}</td></tr>
              <tr><td>Average Freshman Award</td><td>{{ tab5.fee5 }}</td></tr>
              <tr><td>Graduates Pursuing Advanced Study Directly</td><td>{{ tab5.fee6 }}</td></tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="学生多样性" name="sixth">
            <table class="second">
              <tr><td style="width:50%">Ethnicity of Students from U.S.</td><td v-html="tab6.more1"></td></tr>
              <tr><td style="width:50%">International Students</td><td v-html="tab6.more2"></td></tr>
              <tr><td style="width:50%">First-Year Students Returning</td><td v-html="tab6.more3"></td></tr>
              <tr><td style="width:50%">Students Graduating Within 4 Years</td><td v-html="tab6.more4"></td></tr>
              <tr><td style="width:50%">Graduates Offered Full-Time Employment Within 6 Months</td><td v-html="tab6.more5"></td></tr>
              <tr><td style="width:50%">Graduates Pursuing Advanced Study Directly</td><td v-html="tab6.more6"></td></tr>
            </table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </section>
    <Foot></Foot>
  </div>
</template>

<script>
import { getCollegeDetailApi } from 'api/api'
import axios from 'axios'
import NavBar from '../common/navBar2.vue'
import Foot from '../common/footer.vue'
export default {
  name: 'Detail',
  data () {
    return {
      id: '',
      activeName: 'first',
      loading: false,
      yuny: [
        {name: 'Rigor of Secondary School Record'},
        {name: 'Academic GPA'},
        {name: 'Standardized Tests'},
        {name: 'Class Rank'},
        {name: 'Recommendations'},
        {name: 'Essay'},
        {name: 'Interview'},
        {name: 'Level of Applicant\'s Interest'},
        {name: 'Extracurricular Activities'},
        {name: 'Volunteer Work'},
        {name: 'Particular Talent/Ability'},
        {name: 'Character/Personal Qualities'},
        {name: 'First Generation to Attend College'},
        {name: 'State Residency'},
        {name: 'Geographic Residence'},
        {name: 'Relation with Alumnus'},
        {name: 'Religious Affiliation/ Commitment'},
        {name: 'Ethnicity'},
        {name: 'Work Experience'}
      ],
      allInfo: {},
      summary1: {},
      summary2: {},
      summary3: {},
      tab1: {},
      tab2: {},
      tab3: {},
      tab4: {},
      tab5: {},
      tab6: {},
      userId: ''
    }
  },
  created () {
    this.id = this.$route.query.schoolId
    this.userId = localStorage.getItem('userId')
    this.getCollegeDetail()
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    getCollegeDetail (id) {
      let params = {userId: this.userId, schoolId: this.id}
      axios.post(getCollegeDetailApi, params).then(res => {
        this.allInfo = res.data.data
        this.summary1 = res.data.data.summary1
        this.summary2 = res.data.data.summary2
        this.summary3 = res.data.data.summary3
        this.tab1 = res.data.data.tab1
        this.tab2 = res.data.data.tab2
        this.tab3 = res.data.data.tab3
        this.tab4 = res.data.data.tab4
        this.tab5 = res.data.data.tab5
        this.tab6 = res.data.data.tab6
        this.yuny.forEach((v, i) => {
          v.important = this.tab2['important' + (i + 1)]
        })
        console.log(this.allInfo)
      })
    }
  },
  components: {
    NavBar,
    Foot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../../assets/css/detail.css');
</style>
