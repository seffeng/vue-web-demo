<template>
  <div class="login">
    <q-form
      ref="loginForm"
      class="q-gutter-md"
    >
      <q-input
        v-model="loginForm.username"
        label="用户名 *"
        lazy-rules
        :rules="loginRules.username"
      />

      <q-input
        v-model="loginForm.password"
        filled
        :dense="true"
        :type="showPassword()"
        lazy-rules
        :rules="loginRules.password"
        @keypress.native.enter="login"
      >
        <template v-slot:before>
          <div>密码<span class="text-red-5">*</span></div>
        </template>
        <template v-slot:append>
          <q-icon
            :name="loginOptions.isShow ? 'visibility' : 'visibility_off'"
            class="cursor-pointer"
            @click="loginOptions.isShow = !loginOptions.isShow"
          />
        </template>
      </q-input>
      <q-btn color="primary" label="登录" :loading="loading" @click="login" />
    </q-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      loginForm: {
        username: '',
        password: ''
      },
      loginOptions: {
        isShow: false
      },
      loginRules: {
        username: [
          val => val && val.length > 0 || '请输入用户名！',
          val => val && val.length < 16 || '请输入小于16位'
        ],
        password: [
          val => val && val.length > 0 || '请输入密码！'
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate().then(success => {
        if (success) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        }
      })
    },
    showPassword() {
      return this.loginOptions.isShow ? 'text' : 'password'
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  margin-top: 10px;

}
</style>
