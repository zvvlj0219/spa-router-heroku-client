<template>
  <div id="app">
    <h1>this is app.vue</h1>
    <router-link to="/dashboard" tag="button">dashboard</router-link>
    <router-link to="/weekly" tag="button">weekly</router-link>
    <router-link to="/monthly" tag="button">monthly</router-link>
    <p>↓↓router-view↓↓</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  h1{
    color:red;
  }

  router-link{
    margin-left:15px;
    background-color:lightgray
  }
</style>
