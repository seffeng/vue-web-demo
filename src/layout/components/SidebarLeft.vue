<template>
  <q-drawer
    v-model="visiable"
    side="left"
    bordered
    content-class="bg-grey-2"
    :width="260"
    @show="handleShow"
    @hide="handleHide"
  >
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
  </q-drawer>
</template>

<script>
import bus from '@/utils/bus'
import { constantRoutes } from '@/router'
import { debug } from '@/utils'

export default {
  name: 'SidebarLeft',
  data() {
    return {
      search: '',
      visiable: true,
      menuRoutes: []
    }
  },
  created() {
    bus.$on('showSidebarLeft', val => {
      this.visiable = val
    })
    this.setMenu()
  },
  methods: {
    handleSearch() {
      debug(this.search)
    },
    handleHide() {
      bus.$emit('sendLeftVisiable', this.visiable)
    },
    handleShow() {
      bus.$emit('sendLeftVisiable', this.visiable)
    },
    setMenu() {
      const menuItems = []
      for (const i in constantRoutes) {
        const children = constantRoutes[i].children
        if (children) {
          if (children.length > 1) {
            const child = []
            for (const j in children) {
              child.push({
                name: children[j].name,
                path: children[j].path,
                meta: children[j].meta,
                hidden: children[j].hidden && children[j].hidden === true
              })
            }
            menuItems.push({
              name: constantRoutes[i].name,
              path: constantRoutes[i].path,
              meta: constantRoutes[i].meta,
              hidden: constantRoutes[i].hidden && constantRoutes[i].hidden === true,
              children: child
            })
          } else {
            for (const j in children) {
              menuItems.push({
                name: children[j].name,
                path: children[j].path,
                meta: children[j].meta,
                hidden: children[j].hidden && children[j].hidden === true
              })
            }
          }
        } else {
          menuItems.push({
            name: constantRoutes[i].name,
            path: constantRoutes[i].path,
            meta: constantRoutes[i].meta,
            hidden: constantRoutes[i].hidden
          })
        }
      }
      this.menuRoutes = menuItems
      return this.menuRoutes.length > 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
