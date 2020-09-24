<template>
  <q-header elevated>
    <q-toolbar class="glossy">
      <q-btn flat round dense icon="menu" class="q-mr-sm" @click="showSidebarLeft" />
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
      </q-avatar>

      <q-tabs shrink>
        <q-toolbar-title>Title</q-toolbar-title>
        <q-route-tab :to="{ name: 'Home' }" label="首页" exact />
        <q-route-tab :to="{ name: 'NotAuth' }" label="无权限" exact />
        <q-route-tab :to="{ name: 'NotFound' }" label="404" exact />
        <q-route-tab :to="{ name: 'NotAuth' }" label="无权限" exact />
        <q-btn-dropdown auto-close stretch flat label="更多">
          <q-list>
            <q-item v-ripple>
              <q-item-section>
                <a href="https://github.com" target="_blank">baidu.com</a>
              </q-item-section>
            </q-item>

            <q-separator inset />
            <q-item v-ripple>
              <q-item-section>
                <a href="https://github.com" target="_blank">Github</a>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-input v-model="search" placeholder="search" bg-color="white" style="min-width: 120px" rounded outlined dense clearable>
          <template v-slot:prepend>
            <q-btn round dense flat icon="search" @click="handleSearch" />
          </template>
        </q-input>
      </q-tabs>
      <q-space />

      <q-btn flat round dense icon="menu" @click="showSidebarRight" />
    </q-toolbar>
  </q-header>
</template>

<script>
import bus from '@/utils/bus'
import { debug } from '@/utils'

export default {
  name: 'Header',
  data() {
    return {
      search: '',
      sidebar: {
        leftVisiable: true,
        rightVisiable: false
      }
    }
  },
  created() {
    bus.$on('sendLeftVisiable', val => {
      this.sidebar.leftVisiable = val
    })
    bus.$on('sendRightVisiable', val => {
      this.sidebar.rightVisiable = val
    })
  },
  methods: {
    handleSearch() {
      debug(this.search)
    },
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
