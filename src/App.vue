<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/login" label="Login" />
        <q-route-tab to="/not-found" label="404" />
        <q-route-tab to="/not-auth" label="auth" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="left" show-if-above side="left" bordered>
      <!-- drawer content -->
      <p>左侧内容</p>
      <p>左侧内容</p>
      <p>左侧内容</p>
      <p>左侧内容</p>
      <p>左侧内容</p>
    </q-drawer>

    <q-drawer v-model="right" show-if-above side="right" bordered>
      <!-- drawer content -->
      <p>右侧内容</p>
      <p>右侧内容</p>
      <p>右侧内容</p>
      <p>右侧内容</p>
      <p>右侧内容</p>
    </q-drawer>

    <q-page-container id="app">
      <img alt="Vue logo" src="@/assets/logo.png">
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-backtop color="warning" icon="keyboard_arrow_up" text="back to top" :right="20" :bottom="50" :z-index="1001" :round="true" />

  </q-layout>
</template>

<script>
import { QBacktop } from 'q-backtop'

export default {
  name: 'App',
  components: {
    QBacktop
  },
  data() {
    return {
      left: true,
      right: false
    }
  }
}
</script>
