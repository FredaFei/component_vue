<template>
  <div class="tab-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'tabs',
  props: ['selectedTab'],
  mounted(){
    this.$children.forEach(vm=>{
      if(vm.$options.name === 'tab-navs'){ //vm father this fa-father
        vm.setSelectedTab(this.selectedTab)
        vm.$on('update:selectedTab',e=>{
          this.$emit('update:selectedTab',e)
        })
      }else if(vm.$options.name ==='tab-panes'){
        vm.setSelectedTab(this.selectedTab)
      }
    })
  },
  updated(){
    this.$children.forEach(vm=>{
      if(vm.$options.name==='tab-navs'){
        vm.setSelectedTab(this.selectedTab)
      }else if(vm.$options.name ==='tab-panes'){
        vm.setSelectedTab(this.selectedTab)
      }
    })
  }
}
</script>

<style lang="scss">
  .tab-container{
    .tab-navs {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: row;
      background: #fff;
      border-bottom: 1px solid #eee;
      position: relative;
      .tab-navs-item {
        flex: 1;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        color: #333;
        transition: all .2s ease;
        border-bottom: 2px solid transparent;
        &.active{
          color: #f44;
          border-bottom-color: #f44;
        }
      }
    }
    .tab-panes {
      .tab-panes-item{
        display: none;
        padding: 10px 20px;
        transition: all .2s ease;
        background: #fff;
        &.active{
          display: block;
        }
      }
    }
  }
</style>
