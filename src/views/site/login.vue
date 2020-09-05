<template>
  <div class="login">
    <div class="login-input">
      <input v-model="loginForm.username" type="text" name="username" placeholder="请输入账号">
    </div>
    <div class="login-input">
      <input v-model="loginForm.password" type="text" name="password" placeholder="请输入密码">
    </div>
    <div class="login-btn">
      <button @click="login()">登录</button>
    </div>
  </div>
</template>

<script>
import { isEmpty } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      if (isEmpty(this.loginForm.username)) {
        alert('请输入账号')
        return false
      }
      if (isEmpty(this.loginForm.password)) {
        alert('请输入密码')
        return false
      }
      this.$store.dispatch('user/login', this.loginForm).then(() => {
        this.$router.push({ path: this.redirect || '/' })
      }).catch(() => {
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  margin-top: 10px;

  .login-input {
    margin-bottom: 10px;
  }

  .login-btn {
    color: #000;
  }
}
</style>
