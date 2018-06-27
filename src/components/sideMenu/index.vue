<template>
  <aside class="aside-wrapper">
    <transition name="mask">
      <div class="mask" v-show="showBg&&show"></div>
    </transition>
    <transition>
      <div class="content">
        <slot name="side"></slot>
      </div>
    </transition>
  </aside>
</template>
<script>
  export default {
    name: 'sideMenu',
    props: {
      showBg: {
        type: Boolean,
        default: false
      },
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../modules/style/index";
  .aside-wrapper{
    @include dialog-wrapper();
    .content{
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 5rem;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      background: #fff;
      z-index: 5000;
    }
  }
</style>
