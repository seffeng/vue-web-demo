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
    console.log('created')
    bus.$on('showSidebarRight', val => {
      console.log('created33')
      this.visiable = !val
    })
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>

</style>
