<template>
  <span class="b-badge"
  :class="['is-'+type,'is-size-'+size]"
  :style="{'background-color': color}">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'badge',
  props: {
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
  @import "../../modules/css/var";

  .b-badge{
    display: inline-block;
    text-align: center;
    color: $color-white;
  }
  .is-primary{
    background-color: $color-blur;
  }
  .is-success{
    background-color: $success-color;
  }
  .is-warning{
    background-color: $warning-color;
  }
  .is-error{
    background-color: $error-color;
  }
  .is-size-normal{
    font-size: 14px;
    padding: 2px 8px;
    border-radius: 12px;
  }
  .is-size-small{
    font-size: 12px;
    padding: 2px 6px;
    border-radius: 8px;
  }
  .is-size-large{
    font-size: 16px;
    padding: 2px 10px;
    border-radius: 14px;
  }

</style>
