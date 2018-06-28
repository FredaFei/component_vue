<template>
  <div>
    <i-button type="default" plain @btnFn="clickFn_1">toast 默认</i-button>
    <i-button type="default" plain @btnFn="clickFn_2">toast success</i-button>
    <i-button type="default" plain @btnFn="clickFn_3">toast error</i-button>
    <i-button type="default" plain @btnFn="clickFn_4">toast loading</i-button>
    <i-button type="default" plain @btnFn="clickFn_5">toast warning</i-button>
    <i-button type="default" plain @btnFn="clickFn_6">toast fail</i-button>
    <i-button type="default" plain @btnFn="clickFn_7">toast position</i-button>
  </div>
</template>
<script>
import IButton from '@/components/ibutton/index.vue'

export default {
  name: 'toast',
  components: {
    IButton
  },
  methods: {
    clickFn_1() {
      this.$toast('我知道了~');
    },
    clickFn_2() {
      this.$toast({
        text: 'toast',
        shape: 'square',
        type: 'success'
      });
    },
    clickFn_3() {
      this.$toast({
        text: '我知道了',
        shape: 'square',
        type: 'error'
      });
    },
    clickFn_4() {
      this.$toast({
        text: '我知道了',
        shape: 'square',
        type: 'loading'
      });
    },
    clickFn_5() {
      this.$toast({
        text: '我知道了',
        shape: 'square',
        type: 'warning'
      });
    },
    clickFn_6() {
      this.$toast({
        text: '我知道了',
        shape: 'square',
        type: 'error'
      });
    },
    clickFn_7() {
      this.$toast({
        text: '我知道了',
        position: 'top'
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.custom {
  background: red;
}
</style>
