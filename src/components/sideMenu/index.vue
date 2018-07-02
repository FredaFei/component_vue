<template>
  <aside class="dialog-wrapper">
    <transition name="mask">
      <div class="mask" v-show="showBg&&show" @click="hideMask"></div>
    </transition>
    <transition name="slide-left">
      <div class="content" v-show="show">
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
        default: true
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      hideMask() {
        this.$emit('hideFn', false)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../modules/style/index";

  .dialog-wrapper {
    .mask {
      @include mask();
    }
    .content {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 5rem;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      background: #E0E0E0;
      z-index: 10000;
    }
  }
</style>
