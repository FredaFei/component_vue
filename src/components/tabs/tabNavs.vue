<template>
  <div class="tab-navs">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'tab-navs',
  data(){
    return {
      selectedTab: ''
    }
  },
  mounted(){
    this.$children.forEach(vm=>{
      if(vm.$options.name==='tab-navs-item'){
        vm.$on('update:selectedTab',e=>{
          this.$emit('update:selectedTab',e)
        })
      }
    })
  },
  methods: {
    setSelectedTab(tab){
      this.selectedTab = tab
      this.$children.forEach(vm=>{
        vm.setSelectedTab(tab)
      })
    }
  }
}
</script>

<style>

</style>
