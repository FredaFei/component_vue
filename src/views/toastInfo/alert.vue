<template>
  <div>
    <i-button type="default" @btnFn="alertFn_1">alert 默认</i-button>
    <i-button type="default" @btnFn="alertFn_2">alert 回调</i-button>
    <i-button type="default" @btnFn="alertFn_3">alert 自定义样式</i-button>
  </div>
</template>
<script>
  import IButton from '@/components/ibutton/index.vue'
  export default {
    name: 'alert',
    components: {
      IButton
    },
    methods: {
      alertFn_1(){
        this.$alert({
          title: 'title',
          content: 'this is a content'
        })
      },
      alertFn_2(){
        this.$alert({
          title: 'title',
          content: 'this is a content has callback',
          callBack: () => {
            this.$toast({
              text: '我知道了~',
              shape: 'rect',
              type: 'success',
              delay: 2000
            });
          }
        })
      },
      alertFn_3(){
        this.$alert({
          title: 'title',
          content: 'this is a content has callback',
          className: 'custom',
          btnText: ['自定义'],
          callBack: () => {
            console.log('callBack')
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .custom{
    .notify-hd{
      background: red;
    }
  }
</style>
