<template>
  <div class="row">
    <div class="col">
      <HelloWorld />
    </div>
  </div>
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
