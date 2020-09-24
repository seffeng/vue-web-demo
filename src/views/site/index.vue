<template>
  <q-page class="q-pa-md">
    <q-breadcrumbs align="left">
      <q-breadcrumbs-el label="首页" />
      <q-breadcrumbs-el label="无权限" />
    </q-breadcrumbs>
    <q-separator />
    <div class="q-pa-md">
      首页
      <HelloWorld />
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
