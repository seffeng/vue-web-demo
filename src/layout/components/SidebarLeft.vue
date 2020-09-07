<template>
  <q-drawer v-model="visiable" side="left" bordered>
    <!-- drawer content -->
    <p>左侧内容</p>
    <p>左侧内容</p>
    <p>左侧内容</p>
    <p>左侧内容</p>
    <p>左侧内容</p>
  </q-drawer>
</template>

<script>
import bus from '@/utils/bus'
export default {
  name: 'SidebarLeft',
  data() {
    return {
      visiable: true
    }
  },
  created() {
    console.log('created11')
    bus.$on('showSidebarLeft', val => {
      console.log('created111')
      this.visiable = !val
    })
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>

</style>
