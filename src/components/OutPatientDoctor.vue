<template>
  <div>
    <el-container>
      <el-header style="text-align: right; font-size: 20px; height: 30px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="outpatientexit">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{ outpatientname }}</span>
      </el-header>

      <el-container style="height: 100%; border: 1px solid #eee">
        <el-aside width="" style="background-color: rgb(238, 241, 246)">
          <el-tabs type="border-card">
            <el-tab-pane label="本人">
              <el-table
                :data="tableData1"
                height="300"
                style="width: 100%; font-size: 10px">
                <el-table-column label="未诊患者">
                  <el-table-column
                    label="病历号"
                    width="70">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.medicalrecordno }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="姓名"
                    width="60">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="性别"
                    width="50">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.sex }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="年龄"
                    width="50">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.age }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        @click="treat( scope.row.name, scope.row.medicalrecordno, scope.row.sex, scope.row.age)">看诊</el-button>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table>
              <el-table
                :data="tableData2"
                height="300"
                style="width: 100%; font-size: 10px">
                <el-table-column label="已诊患者">
                  <el-table-column
                    label="病历号"
                    width="70">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.medicalrecordno }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="姓名"
                    width="60">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="性别"
                    width="50">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.sex }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="年龄"
                    width="50">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.age }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        @click="check( scope.row.name, scope.row.medicalrecordno, scope.row.sex, scope.row.age)">查看</el-button>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="科室">
              <el-table
                :data="tableData3"
                height="300"
                style="width: 100%; font-size: 10px">
                <el-table-column label="未诊患者">
                  <el-table-column
                    label="病历号"
                    width="87.5">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.medicalrecordno }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="姓名"
                    width="93.3">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="性别"
                    width="50">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.sex }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="年龄"
                    width="80">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.age }}</span>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table>
              <el-table
                :data="tableData4"
                height="300"
                style="width: 100%; font-size: 10px">
                <el-table-column label="已诊患者">
                  <el-table-column
                    label="病历号"
                    width="70">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.medicalrecordno }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="姓名"
                    width="60">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="性别"
                    width="50">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.sex }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="年龄"
                    width="50">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.age }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        @click="officecheck( scope.row.name, scope.row.medicalrecordno, scope.row.sex, scope.row.age)">查看</el-button>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-aside>

        <el-container>
          <el-main>
            <div class="flexbox">
              <div class="flexbox">
                <div>姓名：</div>
                <div>{{ patientname }}</div>
              </div>
              <div class="flexbox">
                <div>病历号：</div>
                <div>{{ patientBLH }}</div>
              </div>
              <div class="flexbox">
                <div>年龄：</div>
                <div>{{ patientage }}</div>
              </div>
              <div class="flexbox">
                <div>性别：</div>
                <div>{{ patientsex }}</div>
              </div>
            </div>
            <el-tabs type="border-card">
              <el-tab-pane label="医生诊断">
                <el-row>
                  <el-col :span="24">
                    <div class="grid-content bg-purple-light" style="display: flex; align-content: center; justify-content: center">
                      <el-button :disabled="isAble" size="mini" icon="el-icon-circle-check" style="background-color: unset; border: unset" @click="submit(patientBLH)">提交</el-button>
                      <el-button :disabled="isAble" size="mini" icon="el-icon-delete" style="background-color: unset; border: unset" @click="clear">清空</el-button>
                    </div>
                  </el-col>
                </el-row>
                <div style="margin: 20px;"></div>
                <el-form  label-width="100px">
                  <el-form-item label="主诉：">
                    <el-input :disabled="isAble" type="textarea" :rows="2" v-model="patient.zhusu"></el-input>
                  </el-form-item>
                  <el-form-item label="现病史：">
                    <el-input :disabled="isAble" type="textarea" :rows="2" v-model="patient.xianbingshi"></el-input>
                  </el-form-item>
                  <el-form-item label="既往病史：">
                    <el-input :disabled="isAble" type="textarea" :rows="2" v-model="patient.jiwangbingshi"></el-input>
                  </el-form-item>
                  <el-form-item label="过敏史：">
                    <el-input :disabled="isAble" type="textarea" :rows="2" v-model="patient.guominshi"></el-input>
                  </el-form-item>
                  <el-form-item label="医生诊断：">
                    <el-input :disabled="isAble" type="textarea" :rows="2" v-model="patient.result"></el-input>
                  </el-form-item>
                  <el-form-item label="医嘱：">
                    <el-input :disabled="isAble" type="textarea" :rows="2" v-model="patient.finaldiagostics"></el-input>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="成药处方" :disabled="isAble1">
                <div style="display: flex">
                  <el-tag size="mini" style="margin: 0 10px">门诊诊断：</el-tag>
                  <el-tag size="mini" type="info">{{ patient.result }}</el-tag>
                </div>
                <el-row>
                  <el-col :span="24">
                    <div class="grid-content bg-purple-light" style="display: flex; align-content: center; justify-content: center">
                      <el-button size="mini" icon="el-icon-circle-check" style="background-color: unset; border: unset" @click="save">开立</el-button>
                      <el-button size="mini" icon="el-icon-delete" style="background-color: unset; border: unset" @click="clearmedicine">清空</el-button>
                    </div>
                  </el-col>
                </el-row>
                <div style="display: flex">
                  <div style="display: flex; margin-right: 10px">
                    <el-tag size="mini" style="margin: 0 10px">处方模板：</el-tag>
                    <el-tag size="mini" type="info" :data="medicinedata">{{ modelname }}</el-tag>
                  </div>
                  <div style="display: flex">
                    <el-tag size="mini" style="margin: 0 10px">本处方金额合计：</el-tag>
                    <el-tag size="mini" type="info">{{ totalprice }}</el-tag>
                  </div>
                </div>
                <el-table :data="medicinedata" style="width: 100%" height="150">
                  <el-table-column fixed label="药品名称" width="200">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.medicinename }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="规格" width="180">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.dosage }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="单价" width="150">
                    <template slot-scope="scope">
                      <span style="text-align: center">{{ scope.row.unitprice }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="用法" width="150">
                    <span style="text-align: center">{{ medicinemodel.how }}</span>
                  </el-table-column>
                  <el-table-column label="用量" width="150">
                    <span style="text-align: center">{{  }}</span>
                  </el-table-column>
                  <el-table-column label="频次" width="150">
                    <span style="text-align: center">{{  }}</span>
                  </el-table-column>
                  <el-table-column label="数量" width="120">
                    <span style="text-align: center">{{ medicinemodel.amount }}</span>
                  </el-table-column>
                </el-table>
                <el-tabs type="border-card" style="margin-top: 10px">
                  <el-tab-pane label="处方模板">
                    <div class="flexbox">
                      <div style="margin-right: 50px">
                        <el-table :data="medicinedata2" height="195" style="width: 360px; font-size: 10px">
                          <el-table-column label="模板名称" width="250" >
                            <template slot-scope="scope">
                              <span style="text-align: center">{{ scope.row.prescriptionname }}</span>
                            </template>
                          </el-table-column>
                          <el-table-column label="操作">
                            <template slot-scope="scope">
                              <el-button size="mini" @click="checkmeidcine(scope.row.medicalid, scope.row.prescriptionid)">查看</el-button>
                            </template>
                          </el-table-column>
                        </el-table>
                      </div>
                      <div>
                        <el-table :data="medicinedata1" style="width: 630px; font-size: 8px" height="195">
                          <el-table-column label="处方明细">
                            <el-table-column fixed label="药品名称" width="130">
                              <template slot-scope="scope">
                                <span style="text-align: center">{{ scope.row.medicinename }}</span>
                              </template>
                            </el-table-column>
                            <el-table-column label="规格" width="90">
                              <template slot-scope="scope">
                                <span style="text-align: center">{{ scope.row.dosage }}</span>
                              </template>
                            </el-table-column>
                            <el-table-column label="单价" width="70">
                              <template slot-scope="scope">
                                <span style="text-align: center">{{ scope.row.unitprice }}</span>
                              </template>
                            </el-table-column>
                            <el-table-column label="用法" width="90">
                                <span style="text-align: center">{{ medicinemodel.how }}</span>
                            </el-table-column>
                            <el-table-column label="用量" width="90">
                                <span style="text-align: center">{{  }}</span>
                            </el-table-column>
                          </el-table-column>
                          <el-table-column align="center">
                            <template slot="header" slot-scope="scope">
                              <el-button size="small" type="primary" @click="usemeidcine(medicinedata1)">使用该处方</el-button>
                            </template>
                            <el-table-column label="频次" width="90">
                              <span style="text-align: center">{{  }}</span>
                            </el-table-column>
                            <el-table-column prop="number" label="数量" width="70">
                              <span style="text-align: center">{{ medicinemodel.amount }}</span>
                            </el-table-column>
                          </el-table-column>
                        </el-table>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </el-tab-pane>
            </el-tabs>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
      name: "OutPatientDoctor",
      data() {
        return {
          medicinedata2: [],
          medicinedata1: [],
          medicinedata: [],
          modelname: '',
          totalprice: '',
          searchmedicine: '',
          patientname: '',
          patientBLH: '',
          patientage: '',
          patientsex: '',
          outpatientname: '',
          tableData1: [],
          tableData2: [],
          tableData3: [],
          tableData4: [],
          opdoctorid0:'',
          patient:{
            result:'',
            zhusu:'',
            xianbingshi: '',
            jiwangbingshi: '',
            guominshi: '',
            finaldiagostics: '',
            opdoctorid:'',
            medicalrecordno:'',
            registerid:'',
            date:''
          },
          medicinemodel:{},
          isAble: false,
          isAble1: true,
          medicineprescription:{
            medicalrecordno:'',
            registerid:'',
            medicineid:'',
            prescriptionid:'',
            opdoctorid:'',
            creatdate:''
          },
          invoice:{
            invoiceid:null,
            registerid: null,
            date:null,
            name:null,
            fee:null,
            paystate:'n',
            medicalrecordno:null
          }
        }
      },
      methods: {
        treat(name,BLH,sex,age) {
          const _this = this
          _this.patientname = name
          _this.patientBLH = BLH
          _this.patientsex = sex
          _this.patientage = age
          _this.patient.zhusu = ''
          _this.patient.xianbingshi = ''
          _this.patient.jiwangbingshi = ''
          _this.patient.guominshi = ''
          _this.patient.result = ''
          _this.patient.finaldiagostics = ''
          _this.isAble = false
          _this.isAble1 = true
        },
        submit(patientBLH){
          const _this = this
          axios.get('http://localhost:8181/registerinformation/findRegisterid/' + patientBLH).then(function (response) {
            _this.patient.opdoctorid = _this.opdoctorid0
            _this.patient.medicalrecordno = _this.patientBLH
            _this.patient.registerid = response.data
            axios.post('http://localhost:8181/finaldiagostic/treat', _this.patient).then(function (resp) {
              if (resp.data === 'success'){
                axios.post('http://localhost:8181/registerinformation/findPatient/' + patientBLH).then(function (re) {
                  if (re.data === 'treatsuccess'){
                    alert('诊断完成！')
                    location.reload();
                  }
                })
              }
            })
          })
        },
        clear(){
          const _this = this
          _this.patient.zhusu = ''
          _this.patient.xianbingshi = ''
          _this.patient.jiwangbingshi = ''
          _this.patient.guominshi = ''
          _this.patient.result = ''
          _this.patient.finaldiagostics = ''
        },
        checkmeidcine(medicalid, preId) {
          const _this = this
          axios.get('http://localhost:8181/medicine/getMedicine/' + medicalid).then(function (response) {
            _this.medicinedata1 = response.data
          })
          axios.get('http://localhost:8181/medicinemodel/findById/' + preId).then(function (response) {
            _this.medicinemodel = response.data
          })
        },
        usemeidcine(medicine) {
          const _this = this
          _this.medicinedata = medicine
          _this.modelname = _this.medicinemodel.prescriptionname
          axios.get('http://localhost:8181/medicine/getMoney/' + _this.medicinemodel.medicalid + '/' + _this.medicinemodel.amount).then(function (response) {
            _this.totalprice = response.data
          })
        },
        save(){
          const _this = this
          _this.medicineprescription.medicalrecordno = _this.patientBLH
          _this.medicineprescription.registerid = _this.patient.registerid
          _this.medicineprescription.medicineid = _this.medicinemodel.medicalid
          _this.medicineprescription.prescriptionid = _this.medicinemodel.prescriptionid
          _this.medicineprescription.opdoctorid = _this.patient.opdoctorid
          console.log(_this.medicineprescription)
          axios.post('http://localhost:8181/medicineprescription/save',_this.medicineprescription).then(function (response) {
            if (response.data === 'savesuccess'){
              alert('已开方！')
              _this.invoice.medicalrecordno = _this.patientBLH
              _this.invoice.fee = _this.totalprice
              _this.invoice.name = _this.modelname
              _this.invoice.registerid = _this.patient.registerid
              axios.post('http://localhost:8181/invoice/save',_this.invoice).then(function (resp) {
                console.log(_this.invoice)
              })
              _this.medicinedata1 = []
              _this.medicinedata = []
              _this.modelname = ''
              _this.totalprice = ''
              location.reload();
            }
          })

        },
        clearmedicine(){
          const _this = this
          _this.medicinedata1 = []
          _this.medicinedata = []
          _this.modelname = ''
          _this.totalprice = ''
        },
        outpatientexit(){
          this.$router.push("/")
        },
        check(name,BLH,sex,age){
          const _this = this
          _this.patientname = name
          _this.patientBLH = BLH
          _this.patientsex = sex
          _this.patientage = age
          axios.get('http://localhost:8181/finaldiagostic/getFinal/' + BLH).then(function (response) {
            _this.patient = response.data
          })
          _this.isAble = true
          _this.isAble1 = false
        },
        officecheck(name,BLH,sex,age){
          const _this = this
          _this.patientname = name
          _this.patientBLH = BLH
          _this.patientsex = sex
          _this.patientage = age
          axios.get('http://localhost:8181/finaldiagostic/getFinal/' + BLH).then(function (response) {
            _this.patient = response.data
          })
          _this.isAble = true
        }
      },

      created() {
        const _this = this
        axios.get('http://localhost:8181/client/findById/' + this.$route.query.username).then(function (resp) {
          _this.outpatientname = resp.data.name
        })
        axios.get('http://localhost:8181/outpatientdoctor/getId/' + this.$route.query.username).then(function (response) {
          _this.opdoctorid0 = response.data
          axios.get('http://localhost:8181/registerinformation/findPart/' + _this.opdoctorid0).then(function (resp) {
            _this.tableData1 = resp.data
          })
          axios.get('http://localhost:8181/registerinformation/findParted/' + _this.opdoctorid0).then(function (resp) {
            _this.tableData2 = resp.data
          })
        })
        axios.get('http://localhost:8181/client/findDepid/' + this.$route.query.username).then(function (response) {
          axios.get('http://localhost:8181/registerinformation/findOfficePart/' + response.data).then(function (resp) {
            _this.tableData3 = resp.data
          })
          axios.get('http://localhost:8181/registerinformation/findOfficeParted/' + response.data).then(function (resp) {
            _this.tableData4 = resp.data
          })
        })
        axios.get('http://localhost:8181/medicinemodel/findAll').then(function (response) {
          _this.medicinedata2 = response.data
        })
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
    font-size: 8px;
    margin: 5px 10px;
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
