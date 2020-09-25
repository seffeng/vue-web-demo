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
    <MenuItem :menu-vertical="true" active-bg-color="blue-2" :menu-icon="true" :input-round="false" :input-outlined="false" />
  </q-drawer>
</template>

<script>
import bus from '@/utils/bus'
import MenuItem from './MenuItem'

export default {
  name: 'SidebarLeft',
  components: {
    MenuItem
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
    handleHide() {
      bus.$emit('sendLeftVisiable', this.visiable)
    },
    handleShow() {
      bus.$emit('sendLeftVisiable', this.visiable)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
