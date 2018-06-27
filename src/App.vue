<template>
  <div id="app">
    <div class="navs">
      <router-link to="/">index</router-link>
      <router-link to="/tabs">tabs</router-link>
      <router-link to="/base">demo</router-link>
    </div>
    <HeaderBar title="haha"></HeaderBar>
    <SideMenu>
      <div name="side" class="side-body"></div>
    </SideMenu>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import SideMenu from '@/components/sideMenu/index'
  import HeaderBar from '@/components/headerBar/index'
  export default {
    name: 'App',
    components: {
      SideMenu,HeaderBar
    }
  }
</script>

<style lang="scss">

  @import "./modules/style/index";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .navs {
      padding: 10px;
      background: #eee;
      a {
        margin-right: 10px;
        font-size: 18px;
        color: #f46;
      }
    }
  }
</style>
