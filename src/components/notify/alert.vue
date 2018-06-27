<template>
  <div class="notify-container" :class="[className]">
    <transition name="mask">
      <div class="notify-mask" v-if="showBg&&show"></div>
    </transition>
    <transition name="fadeIn">
      <div class="notify-alert" :class="[className]" v-if="show">
        <div class="notify-hd" v-if="title!==''">
          <span class="title">{{title}}</span>
        </div>
        <div class="notify-bd" v-html="content"></div>
        <div class="notify-ft" v-if="showBtn">
          <div class="cancel-btn" @click="clickFn">{{btnText[0]}}</div>
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
          return ['confirm']
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
      clickFn() {
        this.show = false
        this.callBack && this.callBack()
      }
    }
  }
</script>

<style lang="scss">
  @import "./index";
</style>
