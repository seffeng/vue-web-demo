<template>
  <q-list v-if="menuRoutes.length > 0">
    <template v-for="(menu, index) in menuRoutes">
      <div v-if="menu.children" :key="'c-' + index">
        <q-expansion-item
          v-if="!menu.hidden"
          :content-inset-level="0.5"
          :icon="menu.meta && menu.meta.icon ? menu.meta.icon : ''"
          :label="menu.meta && menu.meta.title ? menu.meta.title : ''"
          :caption="menu.meta && menu.meta.subTitle ? menu.meta.subTitle : ''"
          default-opened
        >
          <div v-for="(child, k) in menu.children" :key="k">
            <q-item v-if="!child.hidden" :to="child.path">
              <q-item-section v-if="child.meta.icon" avatar>
                <q-icon :name="child.meta.icon" />
              </q-item-section>
              <q-item-section>
                {{ child.meta.title }}
              </q-item-section>
            </q-item>
            <q-separator v-if="child.meta.separator" />
          </div>
        </q-expansion-item>
      </div>
      <div v-else :key="'p-' + index">
        <q-item v-if="!menu.hidden" :active="false" :to="menu.path">
          <q-item-section v-if="menu.meta.icon" avatar>
            <q-icon :name="menu.meta.icon" />
          </q-item-section>
          <q-item-section>
            {{ menu.meta.title }}
          </q-item-section>
        </q-item>
        <q-separator v-if="menu.meta.separator" />
      </div>
    </template>

    <q-separator />
    <q-space class="q-mt-md" />
    <template>
      <q-input v-model="search" placeholder="search" style="min-width: 120px" dense clearable>
        <template v-slot:prepend>
          <q-btn round dense flat icon="search" @click="handleSearch" />
        </template>
      </q-input>
    </template>
  </q-list>
</template>

<script>
import { debug, getMenuItems } from '@/utils'
import { isEmpty, isNull } from '@/utils/validate'
import { constantRoutes } from '@/router'

export default {
  name: 'VerticalMenu',
  props: {
    activeBgColor: {
      type: String,
      default: ''
    },
    menuIcon: {
      type: Boolean,
      default: false
    },
    menuVertical: {
      type: Boolean,
      default: false
    },
    inputRound: {
      type: Boolean,
      default: true
    },
    inputOutlined: {
      type: Boolean,
      default: true
    },
    inputBgColor: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      menuActive: '',
      search: '',
      menuRoutes: []
    }
  },
  created() {
    this.menuRoutes = getMenuItems(constantRoutes)
    this.menuActive = !isNull(this.$route.meta) && !isEmpty(this.$route.meta.tag) ? this.$route.meta.tag : this.$route.name
  },
  methods: {
    handleSearch() {
      debug(this.search)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
