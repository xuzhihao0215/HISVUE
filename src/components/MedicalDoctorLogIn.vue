<template>
  <div style="text-align: center" id="medicaldoctorlogin">
    <div>
      <div style="display: flex;justify-content: center;margin-top: 150px;">
        <el-card style="width: 400px">
          <div slot="header" class="clearfix">
            <span>开药医生登录</span>
          </div>
          <table>
            <tr>
              <td>用户名</td>
              <td>
                <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
              </td>
            </tr>
            <tr>
              <td>密码</td>
              <td>
                <el-input type="password" v-model="user.password" placeholder="请输入密码" @keydown.enter.native="doLogin"></el-input>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <el-button style="width: 300px" type="primary" @click="doLogin">登录</el-button>
              </td>
            </tr>
          </table>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MedicalDoctorLogIn',
    data () {
      return {
        user:{
          username:'lisi',
          password:'123',
        }
      }
    },
    methods:{
      doLogin(){
        alert(JSON.stringify(this.user))
      }
    }
  }
</script>

<style scoped>
  #medicaldoctorlogin{
    background:url("../assets/timg.jpg");
    width:100%;
    height:100%;
    position:fixed;
    background-size:100% 100%;
    top: 0;
    left: 0;
  }
</style>
