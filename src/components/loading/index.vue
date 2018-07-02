<template>
  <transition name="fade-in">
    <article class="page-loading" v-if="status">
      <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>
    </article>
  </transition>
</template>
<script>
  export default {
    name: 'loading',
    props: {
      text: {
        type: String,
        default: '加载中...'
      }
    },
    data(){
      return{
        status: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .page-loading {
    position: absolute;
    z-index: 101;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: '';
    background-color: rgba(255, 255, 255, 0.8);
    .circular {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -0.42rem;
      margin-top: -0.42rem;
      width: 0.84rem;
      height: 0.84rem;
      animation: loading-rotate 2s linear infinite;
    }
    .path {
      animation: loading-dash 1.5s ease-in-out infinite;
      stroke-dasharray: 90, 150;
      stroke-dashoffset: 0;
      stroke-width: 2;
      stroke: #448FF2;
      stroke-linecap: round;
    }
  }

  @keyframes loading-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loading-dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -40px
    }
    to {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -120px
    }
  }

</style>
