<template>
  <q-footer elevated class="bg-grey-8 text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="showSidebarLeft" />
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>
        Title
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script>
import bus from '@/utils/bus'
export default {
  name: 'Footer',
  data() {
    return {
      sidebar: {
        leftVisiable: false
      }
    }
  },
  created() {
    this.showSidebarLeft()
  },
  methods: {
    showSidebarLeft() {
      this.sidebar.leftVisiable = !this.sidebar.leftVisiable
      bus.$emit('showSidebarLeft', this.sidebar.leftVisiable)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
