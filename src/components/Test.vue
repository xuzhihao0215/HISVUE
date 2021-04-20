<template>
    <div>
      <table>
        <tr>
          <td>姓名</td>
          <td>用户名</td>
          <td>密码</td>
        </tr>
        <tr v-for="item in clients">
          <td>{{ item.name }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.psw }}</td>
        </tr>
      </table>
    </div>
</template>

<script>

    export default {
      name: "Test",
      data() {
        return {
          clients: [
            {
              name: '',
              username: '',
              psw: '',
            }
          ],
          nowDate: ''
        }
      },
      created() {
        const _this = this
        axios.get('http://localhost:8181/client/findAll').then(function (resp) {
          _this.clients = resp.data
        })
        _this.nowDate = new Date();
        let date = {
          year: _this.nowDate.getFullYear(),
          month: _this.nowDate.getMonth() + 1,
          date: _this.nowDate.getDate(),
        }
        console.log(_this.nowDate);
        let systemDate = date.year + '-' + 0 + date.month + '-' + 0 + date.date;
        console.log(systemDate);
      }
    }
</script>

<style scoped>

</style>
