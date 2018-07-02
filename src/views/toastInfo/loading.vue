<template>
  <div class="pt20 pl20">
    <i-button type="info" @btnFn="alertFn_1">loading 默认</i-button>
  </div>
</template>
<script>
  import IButton from '@/components/ibutton/index.vue'

  export default {
    name: 'loading',
    components: {
      IButton
    },
    methods: {
      alertFn_1() {
        this.$loading.start()
        setTimeout(() => {
          this.$loading.stop()
        }, 2000)

      }
    }
  }
</script>
<style lang="scss" scoped>
  .custom {
    .notify-hd {
      background: red;
    }
  }
</style>
