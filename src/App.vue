<template>
  <div id="app">
    <div class="navs">
      <router-link to="/">index</router-link>
      <router-link to="/tabs">tabs</router-link>
      <router-link to="/base">demo</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .navs{
    padding: 10px;
    background: #eee;
    a{
      margin-right: 10px;
      font-size: 18px;
      color: #f46;
    }
  }
}
</style>
