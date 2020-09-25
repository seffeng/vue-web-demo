<template>
  <q-tabs :vertical="menuVertical" inline-label shrink :active-bg-color="activeBgColor">
    <q-route-tab :to="{ name: 'Home' }" exact>
      <template slot="default">
        <q-icon v-if="menuIcon" name="home" size="24px" class="q-mr-sm" />
        <div>首页</div>
      </template>
    </q-route-tab>
    <q-route-tab :to="{ name: 'NotAuth' }" exact>
      <template slot="default">
        <q-icon v-if="menuIcon" name="home" size="24px" class="q-mr-sm" />
        <span>无权限</span>
      </template>
    </q-route-tab>
    <q-route-tab :to="{ name: 'NotFound' }" label="404" exact />
    <q-route-tab :to="{ name: 'NotAuth' }" label="无权限" exact />
    <q-tab>
      <q-btn-dropdown auto-close stretch flat label="更多">
        <q-list>
          <q-item v-ripple>
            <q-item-section>
              <a href="https://github.com" target="_blank">baidu.com</a>
            </q-item-section>
          </q-item>

          <q-separator inset />
          <q-item v-ripple>
            <q-item-section>
              <a href="https://github.com" target="_blank">Github</a>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-tab>
    <q-space />
    <template>
      <q-input v-model="search" placeholder="search" :bg-color="inputBgColor" style="min-width: 120px" :rounded="inputRound" :outlined="inputOutlined" dense clearable>
        <template v-slot:prepend>
          <q-btn round dense flat icon="search" @click="handleSearch" />
        </template>
      </q-input>
    </template>
  </q-tabs>
  <!--
    <q-scroll-area class="fit">
    <q-list v-if="menuRoutes.length > 0">
      <template v-for="(menu, index) in menuRoutes">
        <div v-if="menu.children" :key="index">
          <q-expansion-item
            v-if="!menu.hidden"
            :content-inset-level="0.5"
            :icon="menu.meta && menu.meta.icon ? menu.meta.icon : ''"
            :label="menu.meta && menu.meta.title ? menu.meta.title : ''"
            :caption="menu.meta && menu.meta.subTitle ? menu.meta.subTitle : '子标题'"
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
              <q-separator v-if="child.meta.separator" :key="'child_' + k" />
            </div>
          </q-expansion-item>
        </div>
        <div v-else :key="index">
          <q-item v-if="!menu.hidden" :active="false" :to="menu.path">
            <q-item-section v-if="menu.meta.icon" avatar>
              <q-icon :name="menu.meta.icon" />
            </q-item-section>
            <q-item-section>
              {{ menu.meta.title }}
            </q-item-section>
          </q-item>
          <q-separator v-if="menu.meta.separator" :key="'parent_' + index" />
        </div>
      </template>
    </q-list>
    <template>
      <q-input v-model="search" placeholder="search" clearable>
        <template v-slot:prepend>
          <q-btn round dense flat icon="search" @click="handleSearch" />
        </template>
      </q-input>
    </template>
  </q-scroll-area>
    -->
</template>

<script>
import { debug, getMenuItems } from '@/utils'
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
      showing: false,
      search: '',
      menuRoutes: []
    }
  },
  created() {
    this.menuRoutes = getMenuItems(constantRoutes)
  },
  methods: {
    handleSearch() {
      debug(this.search)
    },
    showDropdown() {
      debug(333)
      this.showing = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
