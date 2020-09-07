<template>
  <q-header elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="showSidebarLeft" />

      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>
        Title
      </q-toolbar-title>

      <q-btn dense flat round icon="menu" @click="showSidebarRight" />
    </q-toolbar>

    <q-tabs align="left">
      <q-route-tab to="/" label="Home" />
      <q-route-tab to="/login" label="Login" />
      <q-route-tab to="/not-found" label="404" />
      <q-route-tab to="/not-auth" label="auth" />
    </q-tabs>
  </q-header>
</template>

<script>
import bus from '@/utils/bus'
export default {
  name: 'Header',
  data() {
    return {
      sidebar: {
        leftVisiable: false,
        rightVisiable: false
      }
    }
  },
  created() {
    this.showSidebarLeft()
    this.showSidebarRight()
  },
  methods: {
    showSidebarLeft() {
      this.sidebar.leftVisiable = !this.sidebar.leftVisiable
      bus.$emit('showSidebarLeft', this.sidebar.leftVisiable)
    },
    showSidebarRight() {
      this.sidebar.rightVisiable = !this.sidebar.rightVisiable
      console.log(this.sidebar.rightVisiable)
      bus.$emit('showSidebarRight', this.sidebar.rightVisiable)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
