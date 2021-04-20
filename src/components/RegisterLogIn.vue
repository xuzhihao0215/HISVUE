<template>
    <div style="text-align: center" id="registerlogin">
        <div>
            <div style="display: flex;justify-content: center;margin-top: 150px;">
                <el-card style="width: 400px">
                    <div slot="header" class="clearfix">
                        <span>挂号员登录</span>
                    </div>
                    <table>
                        <tr>
                            <td>用户名</td>
                            <td>
                                <el-input v-model="username" placeholder="请输入用户名"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>密码</td>
                            <td>
                                <el-input type="password" v-model="password" placeholder="请输入密码" @keydown.enter.native="doLogin" show-password></el-input>
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
    name: 'RegisterLogIn',
    data () {
      return {
        result: '',
        username:'',
        password:''
      }
    },
    watch: {
      password: function () {
        const _this = this
        if(_this.password !== ''){
          axios.get('http://localhost:8181/client/login/'+ _this.username  + '/'+ _this.password).then(function (resp) {
            _this.result = resp.data
          })
        }
      }
    },
      methods:{
          doLogin(){
            const _this = this
            axios.get('http://localhost:8181/client/login/'+ _this.username  + '/'+ _this.password).then(function (resp) {
              _this.result = resp.data
            })
            if (_this.result === 'registersuccess'){
              this.$router.push({
                path: '/Register',
                query: {
                  username : _this.username
                }
              })
            }else{
              alert('用户名或密码输入错误请重新登陆')
              _this.username = ''
              _this.password = ''
            }
          }
      },
  }
</script>

<style scoped>
  #registerlogin{
    background:url("../assets/timg.jpg");
    width:100%;
    height:100%;
    position:fixed;
    background-size:100% 100%;
    top: 0;
    left: 0;
  }
</style>
