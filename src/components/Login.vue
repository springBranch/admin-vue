<template>
  <div class="login-main">
    <div class="login-form">
      <el-row class="login-row">

        <div class="login-line login-title">管理系统</div>

        <div class="login-line">

          <el-col :span="14" :offset="5">
            <el-input name="username" placeholder="请输入登录名" v-model="username" prefix-icon="icon-user"></el-input>
          </el-col>
        </div>

        <div class="login-line">
          <el-col :span="14" :offset="5">
            <el-input type="password" name="password" v-model="password" placeholder="请输入密码"
                      prefix-icon="icon-lock"></el-input>
          </el-col>
        </div>
        <el-col :span="14" :offset="5" class="login-line login-submit">
          <el-button icon="icon-smile" type="primary" @click="login()"> 登 录</el-button>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        password: '',
        username: ''
      }
    },
    methods: {
      login: function () {
        if (this.username === 'admin' && this.password === 'admin') {
          this.$router.push({path: '/index'})
        } else {
          this.$message('账号密码错误')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-main {
    .login-form {
      width: 40%;
      height: 380px;
      border: darkgrey 1px solid;
      background-color: rgba(255, 255, 255, 0.407843);
      margin: 150px auto;
      border-radius: 10px;
      color: #5c6165;
    }
    background: url("./../assets/admin-login-bg.jpg") no-repeat;
    background-size: 100%;
    position: fixed;
    width: 100%;
    height: 100%;
  }

  .login-row {
    height: 100%;
    .login-line {
      height: 10%;
      margin-top: 25px;
    }
    .login-title {
      text-align: center;
      font-size: 55px;
      height: 25%;
    }
    .login-submit {
      text-align: right;
    }
  }
</style>
