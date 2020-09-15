<template>
  <q-layout view="hHh lpR fFf">
    <Header />

    <SidebarLeft />

    <SidebarRight />

    <q-page-container>
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>

    <Footer />
    <q-backtop />

  </q-layout>
</template>

<script>
import { QBacktop } from 'q-backtop'
import Header from '@/layout/components/Header.vue'
import Footer from '@/layout/components/Footer.vue'
import SidebarLeft from '@/layout/components/SidebarLeft.vue'
import SidebarRight from '@/layout/components/SidebarRight.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
    QBacktop,
    SidebarLeft,
    SidebarRight
  }
}
</script>

<style lang="scss" scoped>

</style>
