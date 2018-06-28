<template>
  <tabs :selected-tab.sync="value">
    <tab-navs>
      <tab-navs-item name="tab1"><span @click="clickFn">tab 1</span></tab-navs-item>
      <tab-navs-item name="tab2"><span @click="clickFn">tab 2</span></tab-navs-item>
    </tab-navs>
    <tab-panes>
      <tab-panes-item name="tab1">
        内容1
      </tab-panes-item>
      <tab-panes-item name="tab2">
        内容2
      </tab-panes-item>
    </tab-panes>
  </tabs>

</template>

<script>
  import Vue from 'vue'

  import tabs from '@/components/tabs/tabs.vue'
  import tabNavs from '@/components/tabs/tabNavs.vue'
  import tabNavsItem from '@/components/tabs/tabNavsItem.vue'
  import tabPanes from '@/components/tabs/tabPanes.vue'
  import tabPanesItem from '@/components/tabs/tabPanesItem.vue'

  export default {
    name: 'tab',
    components: {
      tabs,tabNavs,tabNavsItem,tabPanes,tabPanesItem
    },
    data(){
      return {
        value: 'tab1'
      }
    },
    methods: {
      clickFn(){
        console.log('opop')
      }
    }
  }
</script>

<style lang="scss">
</style>
