<template>
  <q-tabs v-if="menuRoutes.length > 0" :value="menuActive" :vertical="menuVertical" inline-label shrink :active-bg-color="activeBgColor">
    <template v-for="(menu, index) in menuRoutes">
      <q-tab v-if="menu.children" :key="'c-' + index" :name="menu.name" class="q-pa-none">
        <q-btn-dropdown auto-close stretch flat>
          <template v-slot:label>
            <div class="row no-wrap">
              <q-icon v-if="menuIcon && menu.meta.icon" :name="menu.meta.icon" />
              <div v-if="menu.meta && menu.meta.title">
                {{ menu.meta.title }}
              </div>
            </div>
          </template>
          <template v-slot:default>
            <q-list v-for="(child, k) in menu.children" :key="k">
              <q-item v-if="child.external" v-ripple>
                <q-item-section>
                  <template v-slot:default>
                    <a :href="child.path" target="_blank" class="text-dark row no-wrap">
                      <q-icon :name="(menuIcon && child.meta.icon) ? child.meta.icon : ''" size="20px" class="q-mr-md" />
                      <div v-if="child.meta && child.meta.title">
                        {{ child.meta.title }}
                      </div>
                    </a>
                    <q-separator v-if="child.meta.separator" class="q-mt-md" />
                  </template>
                </q-item-section>
              </q-item>
              <q-item v-else v-ripple :to="{name: child.name}" exact>
                <q-item-section>
                  <template v-slot:default>
                    <div class="row no-wrap">
                      <q-icon :name="(menuIcon && child.meta.icon) ? child.meta.icon : ''" size="20px" class="q-mr-md" />
                      <div v-if="child.meta && child.meta.title">
                        {{ child.meta.title }}
                      </div>
                    </div>
                    <q-separator v-if="child.meta.separator" class="q-mt-md" />
                  </template>
                </q-item-section>
              </q-item>
            </q-list>
          </template>
        </q-btn-dropdown>
      </q-tab>

      <q-route-tab v-else :key="'p-' + index" :name="menu.name" :to="{ name: menu.name }" exact>
        <template slot="default">
          <q-icon v-if="menuIcon && menu.meta.icon" :name="menu.meta.icon || ''" size="24px" class="q-mr-sm" />
          <div>{{ menu.meta.title }}</div>
        </template>
      </q-route-tab>

      <q-separator v-if="menuVertical" :key="'s-' + index" />
    </template>

    <q-space v-if="menuVertical" class="q-mt-md" />
    <template>
      <q-input v-model="search" placeholder="search" :bg-color="inputBgColor" style="min-width: 120px" :rounded="inputRound" :outlined="inputOutlined" dense clearable>
        <template v-slot:prepend>
          <q-btn round dense flat icon="search" @click="handleSearch" />
        </template>
      </q-input>
    </template>
  </q-tabs>
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
