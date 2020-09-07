<template>
  <Layout />
</template>

<script>
// import { QBacktop } from 'q-backtop'
import Layout from '@/layout/main.vue'

export default {
  name: 'App',
  components: {
    // QBacktop,
    Layout
  },
  data() {
    return {
      left: true,
      right: false
    }
  }
}
</script>
