<template>
  <div id="app">
    <div class="wrapper-flex">
      <header-bar slot="header" :title="title" @menuFn="toggleSlideMenu"></header-bar>
      <!--side-menu-->
      <side-menu :show="showSidemenu" @hideFn="toggleSlideMenu">
        <div slot="side" class="side-body">
          <div class="menu-list" v-for="route in $router.options.routes" :key="route.path" v-if="!route.meta.hidden">
            <div class="item-hd">{{route.name}}</div>
            <div class="item-bd">
              <router-link :to="{name:item.name}" :class="['item',{'active':$route.name==item.name}]"
                           v-for="item in route.children" :key="item.name">{{item.name}} {{item.meta.title}}
              </router-link>
            </div>
          </div>
        </div>
      </side-menu>
      <!--content-->
      <div class="view-content wrapper-bd">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
      <transition name="slide-up">
        <footer-bar v-if="isHost" :list-data="foot" :router-name="routerName"/>
      </transition>
    </div>
  </div>
</template>

<script>
  import ViewBox from '@/components/viewBox/index'
  import SideMenu from '@/components/sideMenu/index'
  import HeaderBar from '@/components/headerBar/index'
  import FooterBar from '@/components/footBar/index'

  export default {
    name: 'App',
    components: {
      SideMenu, HeaderBar, ViewBox, FooterBar
    },
    data() {
      return {
        showSidemenu: false,
        title: 'haha',
        isHost: true,
        routerName: '',
        foot: [
          {
            title: '首页',
            name: 'index',
            icon: 'icon-home',
            iconActive: 'icon-home-o'
          },
          {
            title: 'tab面板',
            name: 'tab',
            icon: 'icon-cart',
            iconActive: 'icon-cart-o'
          },
          {
            title: '滚动窗口',
            name: 'scrollBox',
            icon: 'icon-user',
            iconActive: 'icon-user-o'
          }
        ]
      }
    },
    watch: {
      '$route'() {
        const routerConfig = ['scrollBox', 'scrollList']
        if (routerConfig.includes(this.$route.name)) {
          this.routerName = this.$route.name
          this.isHost = false
        } else {
          this.isHost = true
        }
        this.title = this.$route.meta.title
        document.title = this.$route.meta.title
        this.showSidemenu = false
      }
    },
    created() {
      this.title = this.$route.meta.title
      document.title = this.$route.meta.title
      this.$util.setSize()
    },
    methods: {
      toggleSlideMenu(flag) {
        this.showSidemenu = flag
      }
    }
  }
</script>

<style lang="scss">
  .side-body {
    .menu-list {
      background-color: #ffffff;
      & + .menu-list {
        margin-top: .16rem;
      }
      .item-hd {
        font-size: .3rem;
        font-weight: 700;
        padding: .16rem .3rem;
        text-transform: capitalize;
      }
      .item-bd {
        padding-left: .3rem;
        .item {
          display: block;
          padding: .16rem;
          font-size: .28rem;
          text-transform: capitalize;
          text-decoration: none;
          &.active {
            color: #fff;
            background: #42b983;
          }
          & + .item {
            border-top: 1px solid #E0E0E0;
          }
        }
      }
    }
  }

  .view-content {
    margin-top: .8rem;
    background: #ffffff;
  }
</style>
