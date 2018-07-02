<template>
  <div class="pt20 pl20">
    <i-button type="default" plain @btnFn="clickFn_1">confirm 默认</i-button>
    <i-button type="default" plain @btnFn="clickFn_2">confirm 回调</i-button>
    <i-button type="default" plain @btnFn="clickFn_3">confirm 自定义样式</i-button>
  </div>
</template>
<script>
  import IButton from '@/components/ibutton/index.vue'

  export default {
    name: 'confirm',
    components: {
      IButton
    },
    methods: {
      clickFn_1() {
        this.$confirm('this is a content');
      },
      clickFn_2() {
        this.$confirm({
          content: 'this is a content',
          callBack: () => {
            this.$toast({
              text: 'toast',
              shape: 'square',
              type: 'fail',
              delay: 3000,
              showBg: true,
              position: 'center'
            });
          }
        });
      },
      clickFn_3() {
        this.$confirm({
          title: 'this is a title',
          content: 'this is a content',
          className: 'custom',
          btnText: ['左侧按钮', '右侧按钮']
        });
      }
    }
  }
</script>
<style lang="scss">
  .custom {
    .notify-confirm{
      .notify-hd {
        .title{
          font-size: .36rem;
          color: red;
        }
      }
    }
  }
</style>
