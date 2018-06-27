<template>
  <span class="b-badge"
  :class="['is-'+type,{'is-round':round}]"
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
      default: 'default'
    },
    color: {
      type: String,
      default: ''
    },
    round: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "../../modules/style/index";

  .b-badge{
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    color: $color-white;
    font-size: .24*$unit;
    padding: .3*$unit .4*$unit;
    height: .32*$unit;
    padding: 0 .12*$unit;
    line-height: .32*$unit;
    border-radius: .16*$unit;
  }
  .is-default{
    background-color: #26a2ff;
  }
  .is-primary{
    background-color: #f74c31;
  }
  .is-info{
    background-color: #4caf50;
  }
  .is-warning{
    background-color: #ffc107;
  }
  .is-round{
    width: .32*$unit;
    padding: .06*$unit;
    border-radius: 50%;
  }

</style>
