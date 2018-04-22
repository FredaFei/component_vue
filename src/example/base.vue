<template>
   <div class="wrap">
      <h1>Badge:</h1>
      <div class="box">
        <Badge>12</Badge>
        <Badge type="error">12</Badge>
        <Badge size="small">12</Badge>
        <Badge size="large" type="warning">12</Badge>
        <Badge color="#aaddff">12</Badge>
      </div>

      <h1>notify:</h1>
      <div class="box">
        <span class="toast" @click="toastFn">toast</span>
        <span class="alert" @click="alertFn">alert</span>
        <span class="confirm" @click="confirmFn">confirm</span>
      </div>

      <h1>cell:</h1>
      <div class="box">
        <cell left-lext="left" right-text="right" @onClick="cellFn"></cell>
        <cell left-lext="left" right-text="right" color="#f44"></cell>
        <cell left-lext="left" right-text="right" is-link></cell>
      </div>

      <h1>IButton:</h1>
      <div class="box">
        <i-button :disabled="btnData[0].disabled" :type="btnData[0].type">small</i-button>
        <i-button :size="btnData[1].size" :type="btnData[1].type">normal</i-button>
        <i-button :size="btnData[2].size" :type="btnData[2].type">error large</i-button>
        <i-button :size="btnData[3].size" :type="btnData[3].type" :plain="btnData[3].plain">large</i-button>
        <i-button :size="btnData[4].size" :color="btnData[4].color">color large</i-button>
        <i-button :type="btnData[5].type" :bottom-action="btnData[5].bottomAction">disabled large</i-button>
      </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import Badge from '@/components/badge/index.vue'
  import IButton from '@/components/ibutton/index.vue'

  import Toast from '@/components/toast/';
  Vue.use(Toast)
  import notify from '@/components/notify/';
  Vue.use(notify)
  import cell from '@/components/cell/index.vue';
  Vue.use(cell)

  export default{
    components: {
      Badge,IButton,Toast,notify,cell
    },
    data(){
      return {
        value: 'tab1',
        btnData: [
          {size: 'small',type: 'primary', disabled: true},
          {size: 'normal',type: 'success'},
          {size: 'large',type: 'error'},
          {size: 'large', type:'defautl', plain:true},
          {size: 'small',color:'#feeaad'},
          {type: 'primary',bottomAction:true},
        ]
      }
    },
    methods: {
      toastFn(){
        this.$toast({
          text: 'toast',
          shape: 'rect',
          type: 'tip',
          delay: 6000,
          showBg: true,
          position: 'center'
        });
      },
      alertFn(){
        this.$alert({
          title: 'title',
          content: 'this is a content',
          callBack: ()=>{
              console.log('callBack')
          }
        })
      },
      confirmFn(){
        this.$confirm({
          content:'温馨提示-------------',
          className:'custom custom2',
          btnText:['左侧按钮','右侧按钮']
        });
      },
      cellFn(){
        this.$toast({
          text: 'toast',
          shape: 'rect',
          type: 'tip',
          delay: 6000,
          showBg: true,
          position: 'center'
        });
      }
    }
  }

</script>

<style lang="scss">
  @import "../modules/css/reset.scss";
  .wrap{
    background: #fff;
    h1{
      margin-left: 20px;
      text-align: left;
      font-size: 18px;
      font-weight: 700;
    }
    .box{
      margin: 20px;
      padding: 10px;
      border: 2px solid #fddeaa;
    }
  }
</style>
