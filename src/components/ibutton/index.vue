<template>
  <button class="i-button"
          :disabled="disabled"
          :class="classs"
          :className="className">
    <span class="i-button-text"><slot></slot></span>
  </button>
</template>

<script>
  export default {
    name: 'ibutton',
    props: {
      plain: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'primary'
      },
      className: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'normal'
      },
      row: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classs() {
        return [
          {
            'i-button-disabled': this.disabled,
          },
          this.plain ? `i-button-plain-${this.type}`:'default',
          !this.plain ? `i-button-${this.type}` : '',
          this.row ? `i-button-row` : '',
          `i-button-${this.size}`
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../modules/style/index";
  @import "../../modules/style/_button.scss";
</style>
