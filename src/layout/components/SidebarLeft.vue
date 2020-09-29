<template>
  <q-drawer
    v-model="visiable"
    side="left"
    bordered
    content-class="bg-grey-2"
    :width="260"
    @show="handleShow"
    @hide="handleHide"
  >
    <q-navmenu-item
      position="left"
      :menu-top="false"
      :show-search="true"
      :input-dense="true"
      :input-outlined="false"
      :search-callback="search"
      :routes="routes()"
    />
  </q-drawer>
</template>

<script>
import bus from '@/utils/bus'
import QNavmenuItem from 'q-navmenu-item'
import { constantRoutes } from '@/router'

export default {
  name: 'SidebarLeft',
  components: {
    QNavmenuItem
  },
  data() {
    return {
      visiable: true
    }
  },
  created() {
    bus.$on('showSidebarLeft', val => {
      this.visiable = val
    })
  },
  methods: {
    search(str) {
      console.log(str)
    },
    handleHide() {
      bus.$emit('sendLeftVisiable', this.visiable)
    },
    handleShow() {
      bus.$emit('sendLeftVisiable', this.visiable)
    },
    routes() {
      return constantRoutes
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
