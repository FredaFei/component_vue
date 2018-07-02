<template>
  <article class="footer" id="footer">
    <router-link class="item-menu" v-for="item in listData" :key="item.icon" :to="{name:item.name}"
                 :class="{'active':routerName == item.name}">
      <div class="icon" :class="[(routerName == item.name) ? item.iconActive : item.icon]"></div>
      <div class="title">{{item.title}}</div>
    </router-link>
  </article>
</template>

<script>
  export default {
    name: "footer-bar",
    props: {
      routerName: {
        type: String,
        default: ''
      },
      listData: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang="scss">
  .footer {
    position:absolute;
    z-index:5;
    left:0;right:0;bottom:0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 100%;
    height: 0.98rem;
    border-top: 1px solid #e5e5e5;
    .item-menu {
      height: 0.98rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #212121;
      .icon {
        font-size: 0.48rem;
        line-height: 1;
      }
      .title {
        padding-top: 0.08rem;
        line-height: 1;
        font-size: 0.2rem;
      }
      &.router-link-active {
        color: #ff6366;
      }
    }
  }
</style>
