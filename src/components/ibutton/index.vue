<template>
  <button class="i-button"
  :disabled="disabled"
  :class="[
  'i-button-'+type,'i-button-'+size,
  {
    'is-plain': plain,
    'i-button-disabled': disabled,
    'i-button-bottom-action': bottomAction
  }
  ]"
  :style="{'background-color': color}">
    <span class="i-button-text"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'ibutton',
  props: {
    plain:{
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    bottomAction: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'normal'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../modules/css/var.scss";

  .i-button{
    display: inline-block;
    padding: 0 10px;
    font-size: 14px;
    line-height: 36px;
    text-align: center;
    color: inherit;
    border-radius: 4px;
    box-sizing: border-box;
    position: relative;
  }
  .i-button-normal{
    padding: 0 16px;
    line-height: 36px;
    font-size: 14px;
  }
  .i-button-small{
    padding: 0 6px;
    line-height: 28px;
    font-size: 12px;
  }
  .i-button-large{
    padding: 0 20px;
    line-height: 48px;
    font-size: 16px;
  }
  .i-button-bottom-action{
    display: block;
    width: 100%;
    line-height: 48px;
  }
  .i-button-default{
    color: $button-default-color;
    background-color: $button-default-background-color;
    border: 1px solid #e5e5e5;
    &.is-plain{
      color: $button-default-color;
      border: 1px solid $button-default-color;
      background-color: transparent;
    }
  }
  .i-button-primary{
    color: $button-primary-color;
    background-color: $button-primary-background-color;
    &.is-plain{
      color: $button-primary-background-color;
      border: 1px solid $button-primary-background-color;
      background-color: transparent;
    }
  }
  .i-button-error{
    color: $button-error-color;
    background-color: $button-error-background-color;
    &.is-plain{
      color: $button-error-background-color;
      border: 1px solid $button-error-background-color;
      background-color: transparent;
    }
  }
  .i-button-success{
    color: $button-success-color;
    background-color: $button-success-background-color;
    &.is-plain{
      color: $button-success-background-color;
      border: 1px solid $button-success-background-color;
      background-color: transparent;
    }
  }
  .i-button-disabled{
    color: #999;
    background-color: #e5e5e5;
    border: 1px solid #ccc;
  }
</style>
