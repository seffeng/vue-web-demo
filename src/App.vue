<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png">
    <header>
      <router-link to="/">index</router-link> |
      <router-link to="/login">login</router-link> |
      <router-link to="/not-found">found</router-link> |
      <router-link to="/not-auth">auth</router-link>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
