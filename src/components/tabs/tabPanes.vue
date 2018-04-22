<template>
  <div class="tab-panes"><slot /></div>
</template>

<script>
export default {
  name: 'tab-panes',
  data(){
    return {
      selectedTab: ''
    }
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
