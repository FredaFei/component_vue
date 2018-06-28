<template>
  <div class="view-wrapper">
    <slot name="header" class="view-head"></slot>
    <div class="view-body" ref="viewBoxBody" :style="computedStyle"><slot></slot></div>
    <slot name="footer" class="view-foot"></slot>
  </div>
</template>
<script>
  export default {
    name: 'viewBox',
    props: {
      bodyPaddingTop: {
        type: String,
        default: 1
      },
      bodyPaddingBottom: {
        type: String,
        default: 1
      }
    },
    computed: {
      computedStyle(){
        return {
          paddingTop: `${this.bodyPaddingTop}rem`,
          paddingBottom: `${this.bodyPaddingBottom}rem`
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .view-wrapper{
    position: relative;
    height: 100%;
    .view-head{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
    }
    .view-body{
      height: 100%;
      overflow: auto;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
    }
    .view-foot{
      display: flex;
      position: absolute;
      bottom: 0;
      width: 100%;
      background: #ffffff;
      z-index: 1000;
    }
  }
</style>
