<template>
  <scroll-list ref="scrollList" :dataList="listData" :bottom-status="bottomStatus" :empty="listEmpty" @pullUp="pullUpFn" @pullDown="pullDownFn">
    <section class="pg-content">
      <h1>scrollBox content</h1>
      <div class="desc" v-for="(item,index) in listData" :key="index">{{item.text}}--{{index}}</div>
    </section>
  </scroll-list>
</template>
<script>
  import ScrollList from '@/components/scrollList/index.vue'

  export default {
    name: 'scrolllist',
    components: {ScrollList},
    data() {
      return {
        isAll: false,
        listEmpty: 1,
        listData: [],
        bottomStatus: 'more',
        listOptions: {
          api: "getList",
          params: {
            limit: 10,
            page: 1
          }
        }
      }
    },
    created(){
      this.$loading.start()
      this.loadListData()
    },
    methods: {
      makeData(options){
        const list = []
        let len = 10
        let total = Math.floor(Math.random()*100)
        if(this.listData.length>total){
          len = 3
        }
        for (let i = 0; i<len; i++){
          list.push({text: '这是测试内容'})
        }
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            let data = {list}
            resolve(data)
          },2000)
        })
      },
      pullDownFn() {
        // 下拉刷新
        this.loadListData()
      },
      pullUpFn() {
        // 上拉加载更多
        if (this.isAll) return false
        this.listOptions.params.page += 1
        this.loadListData(true)
      },
      loadListData(flag) {
        if (!flag) {
          this.listData = []
          this.listOptions.params.page = 1
        }
        this.bottomStatus = 'in'
        this.$loading.start()
        const options = this.listOptions
        let {api, params} = options
        params.limit = params.limit || 10
        params.page = params.page || 1
        this.makeData({
          api,
          params
        }).then(res=>{
          this.$loading.stop()
          const lists = res.list
          if (lists.length < options['params']['limit']) { //全部加载完
            this.isAll = true
            this.bottomStatus = 'over'
          } else {
            this.isAll = false
            this.bottomStatus = 'more'
          }
          this.listData = this.listData.concat(lists)
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .pg-content {
    padding: .2rem;
    h1 {
      font-size: .34rem;
    }
    .desc {
      font-size: .3rem;
      padding: .1rem;
    }
  }

</style>
