<template>
    <div>
      <el-container style="height: 100%; border: 1px solid #eee">
        <el-aside width="" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-menu" ></i>挂号缴费</template>
              <el-menu-item-group >
                <el-menu-item index="1-1" @click="change(1)" :class="{ newStyle:0===number}">现场挂号</el-menu-item>
                <el-menu-item index="1-2" disabled>退号</el-menu-item>
                <el-menu-item index="1-3" @click="change(2)" :class="{ newStyle:0===number}">缴费</el-menu-item>
                <el-menu-item index="1-4" disabled>退费</el-menu-item>
                <el-menu-item index="1-5" disabled>发票补打</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-header style="text-align: right; font-size: 20px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="registerexit">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>{{ registerName }}</span>
          </el-header>

          <el-main>
            <div v-show="1===number">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="现场挂号" name="first">
                  <el-row>挂号信息</el-row>
                  <el-row>
                    <el-col>
                      <div class="grid-content flexbox">
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>病历号：</div>
                          <div class="demo-input-size">
                            <el-tooltip class="item" effect="dark" content="第一次挂号，请填写完前两行其他信息后，点击自动生成病历号；已有病历号，请输入病历号后点确认" placement="top">
                              <el-input size="mini" placeholder="请输入病历号" v-model="registerinformation.medicalrecordno"></el-input>
                            </el-tooltip>
                          </div>
                          <div><el-button size="mini" style="margin: 0 10px" @click="autoGet">自动生成病历号</el-button></div>
                          <div><el-button size="mini" @click="getInformation">确认</el-button></div>
                        </div>
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>姓名：</div>
                          <div><el-input size="mini" placeholder="请输入姓名" v-model="registerinformation.name"></el-input></div>
                        </div>
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>姓别：</div>
                          <div>
                            <el-select size="mini" v-model="registerinformation.sex" placeholder="请选择性别">
                              <el-option v-for="item in optionsex" :key="item.value" :label="item.label" :value="item.label"></el-option>
                            </el-select>
                          </div>
                        </div>
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>年龄：</div>
                          <div><el-input size="mini" placeholder="请输入年龄" v-model="registerinformation.age"></el-input></div>
                          <div>岁</div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col>
                      <div class="grid-content flexbox">
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>出生日期：</div>
                          <div class="block demo-input-size">
                            <el-date-picker size="mini" v-model="registerinformation.birthdate" type="date" placeholder="选择日期"></el-date-picker>
                          </div>
                        </div>
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>身份证号：</div>
                          <div><el-input size="mini" placeholder="请输入身份证号" v-model="registerinformation.identifyid"></el-input></div>
                        </div>
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>手机号码：</div>
                          <div><el-input size="mini" placeholder="请输入手机号码" v-model="inputphone"></el-input></div>
                        </div>
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>家庭住址：</div>
                          <div><el-input size="mini" placeholder="请输入家庭住址" v-model="registerinformation.address"></el-input></div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col>
                      <div class="grid-content flexbox">
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>结算类型：</div>
                          <div>
                            <el-select size="mini" v-model="registerinformation.payway" placeholder="请选择结算类型">
                              <el-option v-for="item in optiontype" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                          </div>
                        </div>
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>看诊日期：</div>
                          <div class="block">
                            <el-date-picker size="mini" v-model="registerinformation.date" type="date" placeholder="选择日期"></el-date-picker>
                          </div>
                        </div>
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>挂号科室：</div>
                          <div>
                            <el-select size="mini" v-model="valueoffice" placeholder="请选择挂号科室">
                              <el-option v-for="office in optionoffice" :key="office.depid" :label="office.depname" :value="office.depid"></el-option>
                            </el-select>
                          </div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col>
                      <div class="grid-content flexbox">
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>号别：</div>
                          <div>
                            <el-select size="mini" v-model="registerinformation.rlid" placeholder="请选择号别">
                              <el-option v-for="item in optionlevel" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                          </div>
                        </div>
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>看诊医生：</div>
                          <div>
                            <el-select size="mini" v-model="valuedoctor" placeholder="请选择看诊医生">
                              <el-option v-for="doctor in optiondoctor" :key="doctor.username" :label="doctor.name" :value="doctor.username"></el-option>
                            </el-select>
                          </div>
                        </div>
                        <div class="flexbox1">
                          <div>初始号额：</div>
                          <div><el-input size="mini" v-model="inputininum" disabled></el-input></div>
                        </div>
                        <div class="flexbox1">
                          <div>已用号额：</div>
                          <div><el-input size="mini" v-model="inputusednum" disabled></el-input></div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col>
                      <div class="grid-content flexbox">
                        <div class="flexbox1">
                          <div><el-checkbox v-model="registerinformation.medicalrecordbook">病历本</el-checkbox></div>
                        </div>
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>应收金额：</div>
                          <div><el-input size="mini" v-model="registerinformation.fee"></el-input></div>
                        </div>
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>收费方式：</div>
                          <div>
                            <el-select size="mini" v-model="valueway" placeholder="请选择收费方式">
                              <el-option v-for="item in optionway" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                          </div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row><el-col><div class="grid-content"></div></el-col></el-row>
                  <el-row>
                    <el-col>
                      <div class="grid-content" style="display: flex;align-content: center;justify-content: center">
                        <el-button size="small" slot="reference" @click="registration">确认挂号</el-button>
                      </div>
                    </el-col>
                  </el-row>
                </el-tab-pane>
              </el-tabs>
            </div>
            <div v-show="2===number">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="缴费" name="first">
                  <el-row>患者信息查询</el-row>
                  <el-row>
                    <el-col>
                      <div class="grid-content flexbox">
                        <div class="flexbox1">
                          <div style="color: red">*</div>
                          <div>病历号：</div>
                          <div class="demo-input-size">
                            <el-input size="mini" placeholder="请输入病历号" v-model="inputBLH2"></el-input>
                          </div>
                          <div><el-button size="mini" type="primary" icon="el-icon-search" style="margin: 0 10px" @click="search(inputBLH2)">搜索</el-button></div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>患者信息确认</el-row>
                  <el-row>
                    <el-col>
                      <div class="grid-content flexbox">
                        <div class="flexbox1">
                          <div class="flexbox1">
                            <div>姓名：</div>
                            <div><el-input size="mini" v-model="paypatient.inputname2"></el-input></div>
                          </div>
                          <div class="flexbox1">
                            <div>身份证号：</div>
                            <div><el-input size="mini" v-model="paypatient.inputID2"></el-input></div>
                          </div>
                          <div class="flexbox1">
                            <div>家庭住址：</div>
                            <div><el-input size="mini" v-model="paypatient.inputaddress2"></el-input></div>
                          </div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>患者消费信息</el-row>
                  <el-row>
                    <el-col>
                      <el-table
                        :data="tableData"
                        tooltip-effect="dark"
                        style="width: 100%" height="195">
                        <el-table-column
                          prop="medicalrecordno"
                          label="病历号"
                          width="120">
                        </el-table-column>
                        <el-table-column
                          prop="registerid"
                          label="挂号ID"
                          width="150">
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="项目名称"
                          width="120">
                        </el-table-column>
                        <el-table-column
                          prop="fee"
                          label="价格"
                          width="120">
                        </el-table-column>
                        <el-table-column
                          label="开立时间"
                          width="250">
                          <template slot-scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                          prop="paystate"
                          label="状态"
                          width="120">
                        </el-table-column>
                      </el-table>
                      <div style="margin-top: 20px">
                        <el-button @click="pay" type="primary">收费结算</el-button>
                      </div>
                    </el-col>
                  </el-row>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
    export default {
      name: "Register",
      data() {
        return {
          registerName: null,
          number: 0,
          activeName: 'first',
          first: '',
          /*
          挂号
           */
          optionsex: [{
            value: '选项1',
            label: '男'
          }, {
            value: '选项2',
            label: '女'
          }],
          optiontype: [{
            value: '自费',
            label: '自费'
          }, {
            value: '医保',
            label: '医保'
          }],
          optionoffice: [],
          office:{},
          optionlevel: [{
            value: 'rl1',
            label: '普通号'
          }, {
            value: 'rl2',
            label: '专家号'
          }, {
            value: 'rl3',
            label: '急诊号'
          }],
          optiondoctor: [],
          doctor:{},
          optionway: [{
            value: '现金',
            label: '现金'
          }, {
            value: '微信',
            label: '微信'
          }, {
            value: '支付宝',
            label: '支付宝'
          }],
          /*
          缴费
           */
          paypatient:{
            inputname2: null,
            inputID2:null,
            inputaddress2: null,
          },
          tableData: null,
          form: {
            invoiceID: null,
            BLH: null,
            name: null,
            payway: null,
            pay: null,
            paying: null,
            change: null
          },
          inputBLH2: null,
          /*
          挂号数据
           */
          registerinformation: {
            medicalrecordno: null,
            registerid: null,
            name: null,
            sex: null,
            age: null,
            birthdate: null,
            payway: null,
            identifyid: null,
            address: null,
            rlid: null,
            opdoctorid: null,
            depid: null,
            medicalrecordbook: false,
            fee: 0,
            patientstate: 'ready',
            date: null,
          },
          valueoffice: null,
          valuedoctor: null,
          valueway: null,
          inputphone: null,
          inputininum: null,
          inputusednum: null,
          patient: {
            name: null,
            sex: null,
            identifyid: null,
            birthdate: null,
            cellphone: null,
            medicalrecordno: null,
            address: null
          },
          invoice:{
            invoiceid:null,
            registerid: null,
            date:null,
            name:'挂号',
            fee:null,
            paystate:'n',
            medicalrecordno:null
          }
        }
      },
      methods: {
        change: function (index) {
          this.number = index; //重要处
        },
        handleClick(tab, event) {
          console.log(tab, event);
        },
        registerexit(){
          this.$router.push("/")
        },
        registration(){
          const _this = this
          if (_this.registerinformation.name!=null && _this.registerinformation.medicalrecordno!=null && _this.registerinformation.sex!=null
            && _this.registerinformation.age!=null && _this.registerinformation.identifyid!=null && _this.inputphone!=null
            && _this.registerinformation.address!=null && _this.registerinformation.rlid!=null && _this.registerinformation.payway!=null
            && _this.valueoffice!=null && _this.valuedoctor!=null && _this.valueway!=null && _this.registerinformation.birthdate!=null
            && _this.registerinformation.date!=null){
            axios.post('http://localhost:8181/registerinformation/registration',_this.registerinformation).then(function (resp) {
              if(resp.data === 'registersuccess'){
                alert('挂号成功！')
                _this.invoice.date = _this.registerinformation.date
                _this.invoice.fee = _this.registerinformation.fee
                _this.invoice.medicalrecordno = _this.registerinformation.medicalrecordno
                axios.get('http://localhost:8181/registerinformation/findRegisterid/'+_this.registerinformation.medicalrecordno).then(function (response) {
                  _this.invoice.registerid = response.data
                  axios.post('http://localhost:8181/invoice/save',_this.invoice).then(function (response1) {
                    console.log(_this.invoice)
                  })
                })
                _this.registerinformation.opdoctorid = null
                _this.registerinformation.date = null
                _this.registerinformation.birthdate = null
                _this.registerinformation.medicalrecordno = null
                _this.registerinformation.identifyid = null
                _this.registerinformation.address = null
                _this.registerinformation.name = null
                _this.registerinformation.medicalrecordbook = false
                _this.registerinformation.age = null
                _this.registerinformation.fee = 0
                _this.registerinformation.registerid = null
                _this.registerinformation.rlid = null
                _this.registerinformation.sex = null
                _this.registerinformation.payway = null
                _this.registerinformation.depid = null
                _this.valueoffice = null
                _this.valuedoctor = null
                _this.inputphone = null
                _this.valueway = null
                _this.inputininum = null
                _this.inputusednum = null
              }else if(resp.data === 'registerrepeat'){
                alert('该病人当前日期已挂号，无法重复挂号！')
                _this.registerinformation.opdoctorid = null
                _this.registerinformation.date = null
                _this.registerinformation.birthdate = null
                _this.registerinformation.medicalrecordno = null
                _this.registerinformation.identifyid = null
                _this.registerinformation.address = null
                _this.registerinformation.name = null
                _this.registerinformation.medicalrecordbook = false
                _this.registerinformation.age = null
                _this.registerinformation.fee = 0
                _this.registerinformation.registerid = null
                _this.registerinformation.rlid = null
                _this.registerinformation.sex = null
                _this.registerinformation.payway = null
                _this.registerinformation.depid = null
                _this.valueoffice = null
                _this.valuedoctor = null
                _this.inputphone = null
                _this.valueway = null
                _this.inputininum = null
                _this.inputusednum = null
              }else {
                  alert('挂号失败，请重新操作！')
              }
            })
          }else{
            alert('必填项未填完！')
          }
        },
        getInformation(){
          const _this = this
          axios.get('http://localhost:8181/patient/getInformation/'+_this.registerinformation.medicalrecordno).then(function (response) {
            _this.patient = response.data
            _this.registerinformation.name = _this.patient.name
            _this.registerinformation.sex = _this.patient.sex
            _this.registerinformation.birthdate = _this.patient.birthdate
            _this.registerinformation.address = _this.patient.address
            _this.registerinformation.identifyid = _this.patient.identifyid
            _this.inputphone = _this.patient.cellphone
          })
        },
        autoGet(){
          const _this = this
          axios.get('http://localhost:8181/patient/autoGet/' + _this.registerinformation.identifyid).then(function (resp) {
            if(resp.data !== 'fail'){
              _this.patient.medicalrecordno = resp.data
              _this.patient.name = _this.registerinformation.name
              _this.patient.identifyid = _this.registerinformation.identifyid
              _this.patient.cellphone = _this.inputphone
              _this.patient.address = _this.registerinformation.address
              _this.patient.sex = _this.registerinformation.sex
              _this.patient.birthdate = _this.registerinformation.birthdate
              axios.post('http://localhost:8181/patient/save',_this.patient).then(function (response) {
                if (response.data === 'savesuccess'){
                  _this.registerinformation.medicalrecordno = resp.data
                  alert('病历号自动生成成功，病人信息已录入数据！')
                }else {
                  alert('病历号自动生成失败，请重新进行操作！')
                }
              })
            }else {
              alert('该身份证号已绑定病历号！')
              axios.get('http://localhost:8181/patient/findBLH/' + _this.registerinformation.identifyid).then(function (response) {
                _this.registerinformation.medicalrecordno = response.data
              })
            }
          })
        },
        search(medicalrecordno){
          const _this = this
          axios.get('http://localhost:8181/patient/findById/' + medicalrecordno).then(function (response) {
            _this.paypatient.inputID2 = response.data.identifyid
            _this.paypatient.inputaddress2 = response.data.address
            _this.paypatient.inputname2 = response.data.name
            axios.get('http://localhost:8181/invoice/findByBLH/' + medicalrecordno).then(function (resp) {
              _this.tableData = resp.data
            })
          })
        },
        pay(){
          const _this = this
          axios.post('http://localhost:8181/invoice/update',_this.tableData).then(function (response) {
            if(response.data === 'paysuccess'){
              alert('支付成功！')
            }else{
              alert('没有可以支付的项目！')
            }
            axios.get('http://localhost:8181/invoice/findByBLH/' + _this.inputBLH2).then(function (resp) {
              _this.tableData = resp.data
            })
          })
        }
      },
      created() {
        const _this = this
        axios.get('http://localhost:8181/client/findById/' + this.$route.query.username).then(function (resp) {
          _this.registerName = resp.data.name
        })
        axios.get('http://localhost:8181/department/findAll').then(function (response) {
          _this.optionoffice = response.data
        })
      },
      watch: {
        valueoffice:function() {
          const _this = this
          if (_this.valueoffice !== null){
            axios.get("http://localhost:8181/client/findname/" + _this.valueoffice).then(function (response) {
              _this.optiondoctor = response.data
            })
            _this.registerinformation.depid = _this.valueoffice
          }
        },
        valuedoctor:function(){
          const _this = this
          if (_this.registerinformation.rlid !== null){
            axios.get("http://localhost:8181/registrationlevel/getlimit/" + _this.registerinformation.rlid).then(function (response) {
              _this.inputininum = response.data
            })
            axios.get("http://localhost:8181/registerinformation/getusednum/" + _this.registerinformation.rlid).then(function (resp) {
              _this.inputusednum = resp.data
            })
            axios.get('http://localhost:8181/outpatientdoctor/getId/' +_this.valuedoctor).then(function (response) {
              _this.registerinformation.opdoctorid = response.data
            })
          }
        },
        valueway:function(){
          const _this = this
          if (_this.registerinformation.rlid !== null){
            axios.get("http://localhost:8181/registrationlevel/getmoney/" + _this.registerinformation.rlid).then(function (response) {
              if (_this.registerinformation.medicalrecordbook === true){
                _this.registerinformation.fee = response.data + 1
              }else{
                _this.registerinformation.fee = response.data
              }
            })
          }
        }
      }
    }
</script>

<style scoped>
  .flexbox1{
    display: flex;
    align-content: center;
    margin: 0 10px;
  }
  .flexbox{
    display: flex;
    align-content: center;
    font-size: 14px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .last-child {
     margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
