<template>
  <section class="header-wrapper">
    <div class="header-bar">
      <div class="left" @click="backFn"></div>
      <div class="text">{{title}}</div>
      <div class="right" @click="showMenuFn" v-show="hasRight"></div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'header-bar',
    props: {
      hasRight: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: 'title'
      }
    },
    methods: {
      backFn(){
        this.$router.go(-1)
      },
      showMenuFn(){
        this.$emit('menuFn',true)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .header-wrapper{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }
  .header-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .1rem .3rem;
    background: #42b983;
    .left{
      width: .24rem;
      height: .24rem;
      border-left: 2px solid #fff;
      border-top: 2px solid #fff;
      transform: rotate(-45deg);
    }
    .text{
      font-size: .32rem;
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .right{
      width: .4rem;
      height: .06rem;
      background-color: #fff;
      position: relative;
      &:before,
      &:after{
        content: '';
        position: absolute;
        left: 0;
        width: .4rem;
        height: .06rem;
        background-color: #fff;
      }
      &:before{
        top: -.14rem;
      }
      &:after{
        bottom: -.14rem;
      }
    }
  }
</style>
