<template>
  <div class="login">
    登录
    <el-form ref="loginForm" :model="loginForm" status-icon :rules="loginRules" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="确认密码" prop="password">
        <el-input v-model="loginForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="login()">登录</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { isEmpty } from '@/utils/validate'
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (isEmpty(value)) {
        callback(new Error('请输入用户名！'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入大于6位的密码！'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        }
      })
    },
    resetForm() {
      this.loginForm.username = ''
      this.loginForm.password = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  margin: 10px;
  background-color: #fbfbfb;
}
</style>
