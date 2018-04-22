<template>
  <div class="tab-navs-item" :class="{active}" @click="onClick">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'tab-navs-item',
  props: ['name'],
  data(){
    return {
      selectedTab: '',
    }
  },
  computed: {
    active(){
      return this.selectedTab === this.name
    }
  },
  mounted(){
  },
  methods: {
    setSelectedTab(tab){
      this.selectedTab = tab
    },
    onClick(){
      this.$emit('update:selectedTab',this.name)
    }
  }
}
</script>

<style>
</style>
