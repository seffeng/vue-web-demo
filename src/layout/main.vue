<template>
  <q-layout view="hHh lpR fFf">
    <Header />

    <SidebarLeft />

    <SidebarRight />

    <q-page-container id="app">
      <img alt="Vue logo" src="@/assets/logo.png">
      <router-view />
    </q-page-container>

    <Footer />
    <!--<q-backtop color="warning" icon="keyboard_arrow_up" text="back to top" :right="20" :bottom="50" :z-index="1001" :round="true" />-->

  </q-layout>
</template>

<script>
import Header from '@/layout/components/Header.vue'
import Footer from '@/layout/components/Footer.vue'
import SidebarLeft from '@/layout/components/SidebarLeft.vue'
import SidebarRight from '@/layout/components/SidebarRight.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
    SidebarLeft,
    SidebarRight
  }
}
</script>

<style lang="scss" scoped>

</style>
