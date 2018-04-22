<template>
  <div class="tab-panes-item" :class="{active}"><slot></slot></div>
</template>

<script>
export default {
  name: 'tab-panes-item',
  props: ['name'],
  data(){
    return {
      selectedTab: ''
    }
  },
  computed: {
    active(){
      return this.selectedTab === this.name
    }
  },
  methods: {
    setSelectedTab(tab){
      this.selectedTab = tab
    }
  }
}
</script>

<style>
</style>
