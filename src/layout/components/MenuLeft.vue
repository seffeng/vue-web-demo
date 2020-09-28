<template>
  <q-list class="q-mt-sm">
    <div class="q-pa-sm">
      <q-input v-model="search" placeholder="search" dense clearable>
        <template v-slot:prepend>
          <q-btn round dense flat icon="search" @click="handleSearch" />
        </template>
      </q-input>
    </div>

    <div>
      <q-expansion-item>
        <template v-slot:header>
          <q-list no-wrap>
            <q-item>
              <q-item-section>
                <q-icon name="home" size="sm" />
              </q-item-section>
              <q-item-section>
                父菜单
              </q-item-section>
            </q-item>
          </q-list>
        </template>
        <template v-slot:default>
          <q-item v-ripple :to="{name: 'Home'}" clickable>
            <q-item-section avatar>
              <q-icon name="home" size="sm" left />
            </q-item-section>
            <q-item-section>
              <div>首页</div>
            </q-item-section>
          </q-item>
        </template>
      </q-expansion-item>

      <q-expansion-item
        group="group"
        icon="more"
        label="父菜单"
        caption="子标题"
      >
        <q-expansion-item
          :header-inset-level="1"
          icon="mail"
          label="无权限"
          :to="{name: 'NotAuth'}"
          exact
          default-opened
        />

        <q-expansion-item
          :header-inset-level="1"
          :content-inset-level="1"
          expand-separator
          icon="schedule"
          :to="{name: 'NotFound'}"
          exact
          label="404"
        />

      </q-expansion-item>
      <q-expansion-item
        :value="true"
        group="group"
        icon="more"
        label="父菜单"
        caption="子标题"
      >
        <q-expansion-item
          :header-inset-level="1"
          icon="mail"
          label="无权限"
          :to="{name: 'NotAuth'}"
          default-opened
        />

        <q-expansion-item
          :header-inset-level="1"
          :content-inset-level="1"
          expand-separator
          icon="schedule"
          :to="{name: 'NotFound'}"
          label="404"
        />

      </q-expansion-item>

      <q-item v-ripple :to="{name: 'Home'}" clickable>
        <q-item-section avatar>
          <q-icon name="home" size="sm" left />
        </q-item-section>
        <q-item-section>
          <div>首页</div>
        </q-item-section>
      </q-item>
    </div>
  </q-list>
</template>

<script>
import { debug, getMenuItems } from '@/utils'
import { isEmpty, isNull } from '@/utils/validate'
import { constantRoutes } from '@/router'

export default {
  name: 'MenuLeft',
  data() {
    return {
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
