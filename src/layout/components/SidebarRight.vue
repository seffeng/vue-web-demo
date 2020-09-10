<template>
  <q-drawer v-model="visiable" side="right" bordered>
    <!-- drawer content -->
    <p>右侧内容</p>
    <p>右侧内容</p>
    <p>右侧内容</p>
    <p>右侧内容</p>
    <p>右侧内容</p>
  </q-drawer>
</template>

<script>
import bus from '@/utils/bus'
export default {
  name: 'SidebarRight',
  data() {
    return {
      visiable: false
    }
  },
  created() {
    bus.$on('showSidebarRight', val => {
      this.visiable = val
    })
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>

</style>
