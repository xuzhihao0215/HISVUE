<template>
  <div style="text-align:center" id="main">
    <p class="txt">欢迎使用HIS医疗系统</p>
    <div>
      <el-row class="button">
        <el-button @click="login('/RegisterLogIn')">挂号员登录</el-button>
      </el-row>
      <el-row class="button">
        <el-button @click="login('/OutPatientDoctorLogIn')">门诊医生登录</el-button>
      </el-row>
      <el-row class="button">
        <el-button @click="login('/MedicalDoctorLogIn')" disabled>发药医生登录</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Main',
    data () {
      return {
      }
    },
    methods: {
      login(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped="scoped">
  #main{
    background:url("../assets/timg.jpg");
    width:100%;
    height:100%;
    position:fixed;
    background-size:100% 100%;
    top: 0;
    left: 0;
  }
  .txt{
    font-size: 52px;
    color: white;
    margin: 110px 0;
  }
  .button {
    margin: 35px 0;
  }

</style>
