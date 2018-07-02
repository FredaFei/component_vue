<template>
  <div class="notify-container" :class="[className]" v-if="show">
    <transition name="mask">
      <div class="notify-mask" v-show="showBg&&show"></div>
    </transition>
    <transition name="dialog">
      <div class="notify-confirm" :class="[className]" v-show="show">
        <div class="notify-hd" v-if="title!==''">
          <span class="title">{{title}}</span>
        </div>
        <div class="notify-bd" v-html="content"></div>
        <div class="notify-ft" v-if="showBtn">
          <div class="cancel-btn" @click="cancelFn">{{btnText[0]}}</div>
          <div class="confirm-btn" @click="confirmFn">{{btnText[1]}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'notice',
    props: {
      showBg: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      showBtn: {
        type: Boolean,
        default: true
      },
      btnText: {
        type: Array,
        default: () => {
          return ['cancel', 'confirm']
        }
      },
      className: {
        type: String,
        default: ''
      },
      callBack: {
        type: Function,
        default: () => {
        }
      }
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      cancelFn() {
        this.show = false
      },
      confirmFn() {
        this.show = false
        this.callBack && this.callBack()
      }
    }
  }
</script>

<style lang="scss">
  @import "./index";
</style>
