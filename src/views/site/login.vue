<template>
  <q-layout>
    <q-page-container>
      <q-page class="bg-blue-grey-9">
        <div class="text-h5 text-center">
          <div class="pt100 q-mb-lg">Login Form</div>
          <div class="flex flex-center">
            <q-card>
              <q-card-section>
                <q-form
                  ref="loginForm"
                  class="q-gutter-md"
                >
                  <q-input
                    v-model="loginForm.username"
                    lazy-rules
                    outlined
                    dense
                    :rules="loginRules.username"
                    :no-error-icon="true"
                    placeholder="请输入账号"
                  >
                    <template v-slot:prepend>
                      <q-icon name="person" />
                    </template>
                  </q-input>

                  <q-input
                    v-model="loginForm.password"
                    outlined
                    dense
                    :type="showPassword()"
                    lazy-rules
                    :rules="loginRules.password"
                    :no-error-icon="true"
                    placeholder="请输入密码"
                    @keypress.native.enter="login"
                  >
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        :name="loginOptions.isShow ? 'visibility' : 'visibility_off'"
                        class="cursor-pointer"
                        @click="loginOptions.isShow = !loginOptions.isShow"
                      />
                    </template>
                  </q-input>
                </q-form>
                <q-btn color="primary" class="full-width q-mt-md" label="登录" :loading="loading" @click="login" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
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
          val => val && val.length >= 5 || '用户名 5~16 位！',
          val => val && val.length <= 20 || '用户名 5~20 位！'
        ],
        password: [
          val => val && val.length > 0 || '请输入密码！',
          val => val && val.length >= 8 || '用户名 8~24 位！',
          val => val && val.length <= 24 || '用户名 8~24 位！'
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
.pt100 {
  padding-top: 150px;
}
</style>
