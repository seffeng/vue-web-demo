<template>
  <q-tabs
    v-if="menuRoutes.length > 0"
    :value="menuActive"
    :vertical="menuVertical"
    :active-bg-color="menuActiveBgColor"
    :dense="menuDense"
    inline-label
    shrink
    no-caps
  >
    <div v-for="(menu, index) in menuRoutes" :key="'p-' + index">
      <div v-if="menu.children">
        <q-tab :name="menu.name" ripple>
          <template slot="default">
            <q-btn-dropdown
              align="left"
              class="ellipsis"
              auto-close
              no-caps
              no-wrap
            >
              <template slot="label">
                <q-icon v-if="menuIcon && hasIcon(menu.meta.icon)" :name="menu.meta.icon" left />
                <div>{{ menu.meta.title }}</div>
              </template>

              <template slot="default">
                <q-list v-for="(child, k) in menu.children" :key="'c-' + k" class="text-no-wrap">
                  <q-item v-if="child.external">
                    <q-item-section>
                      <template slot="default">
                        <a :href="child.path" target="_blank" class="ellipsis row text-dark">
                          <q-icon v-if="menuIcon && hasIcon(child.meta.icon)" :name="child.meta.icon" size="sm" left />
                          <div>{{ child.meta.title }}</div>
                        </a>
                      </template>
                    </q-item-section>
                  </q-item>

                  <q-item v-else :to="{ name: child.name }" clickable class="text-dark" exact>
                    <q-icon v-if="menuIcon && hasIcon(child.meta.icon)" :name="child.meta.icon" size="sm" left />
                    <div>{{ child.meta.title }}</div>
                  </q-item>

                  <q-separator v-if="child.meta.separator" spaced />
                </q-list>
              </template>
            </q-btn-dropdown>
          </template>
        </q-tab>
      </div>

      <div v-else>
        <q-tab v-if="menu.external" :name="menu.name" ripple>
          <template slot="default">
            <q-btn
              align="left"
              type="a"
              :href="menu.path"
              target="_blank"
              class="ellipsis"
              no-caps
              no-wrap
            >
              <q-icon v-if="menuIcon && hasIcon(menu.meta.icon)" :name="menu.meta.icon" left />
              <div>{{ menu.meta.title }}</div>
            </q-btn>
          </template>
        </q-tab>

        <q-route-tab v-else :name="menu.name" :to="{ name: menu.name }" exact ripple>
          <template slot="default">
            <q-icon v-if="menuIcon && hasIcon(menu.meta.icon)" :name="menu.meta.icon" size="sm" left />
            <div>{{ menu.meta.title }}</div>
          </template>
        </q-route-tab>
      </div>

      <q-separator v-if="menuVertical && menu.meta.separator" spaced />
    </div>

    <div>
      <q-separator v-if="menuVertical" spaced />
      <q-input v-model="search" placeholder="search" :bg-color="inputBgColor" style="min-width: 120px" :rounded="inputRounded" :outlined="inputOutlined" :dense="inputDense" clearable>
        <template v-slot:prepend>
          <q-btn round dense flat icon="search" @click="handleSearch" />
        </template>
      </q-input>
    </div>
  </q-tabs>
</template>

<script>
import { debug, getMenuItems } from '@/utils'
import { isEmpty, isNull } from '@/utils/validate'
import { constantRoutes } from '@/router'

export default {
  name: 'MenuTop',
  props: {
    menuVertical: {
      type: Boolean,
      default: false
    },
    menuActiveBgColor: {
      type: String,
      default: ''
    },
    menuDense: {
      type: Boolean,
      default: false
    },
    menuIcon: {
      type: Boolean,
      default: true
    },
    inputBgColor: {
      type: String,
      default: ''
    },
    inputRounded: {
      type: Boolean,
      default: true
    },
    inputOutlined: {
      type: Boolean,
      default: true
    },
    inputDense: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      search: '',
      menuActive: 'Home',
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
    },
    hasIcon(icon) {
      return !isEmpty(icon)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
