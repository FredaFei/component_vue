<template>
  <transition :name="fadeIn">
    <div class="toast-container" :class="position" v-show="show">
      <div class="mask" v-show="showBg"></div>
      <transition :name="translate">
        <div class="toast-box" :class="[`toast-shape-${shape}`]" v-show="show">
          <i class="toast-type" :class="[`toast-type-${type}`]" v-if="shape == 'square' && type != 'tip'"></i>
          <div class="text"><p>{{text}}</p></div>
        </div>
      </transition>
    </div>
  </transition>

</template>
<script>
  export default {
    name: 'toastContainer',
    props: {
      text: {
        type: String,
        default: 'loading'
      },
      type: {
        type: String,
        default: 'tip'
      },
      shape: {
        type: String,
        default: 'square'
      },
      showBg: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'center'
      },
      delay: {
        type: Number,
        default: 1500
      }
    },
    data() {
      return {
        show: false
      }
    },
    computed: {
      translate() {
        if (!this.transition) {
          return ''
        } else {
          if (this.position === 'top') {
            return 'translate-top'
          } else if (this.position === 'middle') {
            return 'translate-middle'
          }
          if (this.position === 'bottom') {
            return 'translate-bottom'
          }
        }
      },
      fadeIn() {
        if (this.transition) {
          return ''
        } else {
          return 'fadeIn'
        }
      }
    },
    watch: {
      show(newVal){
        if(!newVal){
          // 监听动画结束事件，销毁实例（指令及事件监听）
          this.$el.addEventListener('transitionend',this.destroyElement);
        }
      }
    },
    methods:{
      destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../modules/style/index";
  .toast-container {
    @include dialog-wrapper();
    &.top {
      align-items: flex-start;
      margin-top: 1rem;
    }
    &.bottom {
      align-items: flex-end;
      margin-bottom: 1rem;
    }
    .toast-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2.2rem;
      color: #ffffff;
      font-size: .24rem;
      z-index: 10001;
      border-radius: .06rem;
      background: rgba(0, 0, 0, .5);
      .toast-type {
        width: .8rem;
        height: .8rem;
        margin-bottom: .2rem;
      }
      .text {
        p {
          padding: 0 .15rem;
          display: inline-block;
          text-align: left;
        }
      }
      // 长条形
      &.toast-shape-rect {
        width: 5.2rem;
        height: 0.8rem;
        text-align: center;
      }
      .toast-type-success {
        background: url(./imgs/toast_success.png) no-repeat center;
        background-size: cover;
      }
      .toast-type-error {
        background: url(./imgs/toast_error.png) no-repeat center;
        background-size: cover;
      }
      .toast-type-loading {
        animation: loading 0.4s ease-in infinite;
        background: url(./imgs/toast_loading.png) no-repeat center;
        background-size: cover;
      }
      .toast-type-fail {
        background: url(./imgs/toast_fail.png) no-repeat center;
        background-size: cover;
      }
      .toast-type-warning {
        background: url(./imgs/toast_warning.png) no-repeat center;
        background-size: cover;
      }
    }
    @keyframes loading {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .fadeIn-enter-active,
  .fadeIn-leave-active {
    transition: opacity 0.3s;
  }

  .fadeIn-enter,
  .fadeIn-leave-active {
    opacity: 0;
  }

  .translate-top-enter-active,
  .translate-top-leave-active {
    transition: all 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);
  }

  .translate-top-enter,
  .translate-top-leave-active {
    transform: translateY(-50%);
    opacity: 0;
  }

  .translate-middle-enter-active,
  .translate-middle-leave-active {
    transition: all 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);
  }

  .translate-middle-enter,
  .translate-middle-leave-active {
    transform: translateY(80%);
    opacity: 0;
  }

  .translate-bottom-enter-active,
  .translate-bottom-leave-active {
    transition: all 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);
  }

  .translate-bottom-enter,
  .translate-bottom-leave-active {
    transform: translateY(100%);
    opacity: 0;
  }
</style>
