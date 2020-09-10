<template>
  <q-header elevated>
    <q-toolbar class="glossy">
      <q-btn flat round dense icon="menu" class="q-mr-sm" @click="showSidebarLeft" />
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
      </q-avatar>

      <q-toolbar-title>Quasar Framework</q-toolbar-title>

      <q-btn flat round dense icon="menu" @click="showSidebarRight" />
    </q-toolbar>
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
    bus.$on('sendLeftVisiable', val => {
      this.sidebar.leftVisiable = val
    })
  },
  methods: {
    showSidebarLeft() {
      this.sidebar.leftVisiable = !this.sidebar.leftVisiable
      bus.$emit('showSidebarLeft', this.sidebar.leftVisiable)
    },
    showSidebarRight() {
      this.sidebar.rightVisiable = !this.sidebar.rightVisiable
      bus.$emit('showSidebarRight', this.sidebar.rightVisiable)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
