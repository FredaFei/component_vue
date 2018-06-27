<template>
  <div class="wrap">
    <h1>Badge:</h1>
    <div class="box">
      <div class="row-item">
        <Badge>12</Badge>
        <Badge type="primary">12</Badge>
        <Badge type="info">12</Badge>
        <Badge type="warning">12</Badge>
        <Badge color="#aaddff" round>12</Badge>
      </div>
    </div>
    <h1>PBar:</h1>
    <div class="box">
      <div class="row-item">
        <p-bar percent="40"/>
      </div>
      <div class="row-item">
        <p-bar percent="60" color="#afd325"/>
      </div>
    </div>
    <h1>PCircle:</h1>
    <div class="box">
      <div class="row-item">
        <PCircle percent="20"/>
        <PCircle percent="60"/>
        <PCircle percent="100"/>
      </div>
    </div>
    <h1>notify:</h1>
    <div class="box">
      <div class="row-item">
        <span class="toast" @click="toastFn">toast</span>
        <span class="alert" @click="alertFn">alert</span>
        <span class="confirm" @click="confirmFn">confirm</span>
      </div>
    </div>
    <h1>cell:</h1>
    <div class="box">
      <div class="row-item">
        <cell left-lext="left" right-text="right" @onClick="cellFn"></cell>
      </div>
      <div class="row-item">
        <cell left-lext="left" right-text="right" color="#f44"></cell>
      </div>
      <div class="row-item">
        <cell left-lext="left" right-text="right" is-link></cell>
      </div>
    </div>
    <h1>IButton:</h1>
    <div class="box">
      <div class="row-item">
        <i-button type="default" plain>default</i-button>
        <i-button type="primary" plain>primary</i-button>
        <i-button type="danger" plain>danger</i-button>
      </div>
      <div class="row-item">
        <i-button type="default">default</i-button>
        <i-button type="primary">primary</i-button>
        <i-button type="danger">danger</i-button>
      </div>
      <div class="row-item">
        <i-button type="default" size="small">default</i-button>
        <i-button type="primary" size="middle">primary</i-button>
        <i-button type="danger" size="large">danger</i-button>
      </div>
      <div class="row-item">
        <i-button type="default" size="middle" plain row>default</i-button>
      </div>
      <div class="row-item">
        <i-button type="primary" size="middle" row>primary</i-button>
      </div>
      <div class="row-item">
        <i-button type="danger" size="middle" row>danger</i-button>
      </div>
      <div class="row-item">
        <i-button type="default" size="middle" row disabled>default</i-button>
      </div>
      <div class="row-item">
        <i-button type="primary" size="middle" row disabled>primary</i-button>
      </div>
      <div class="row-item">
        <i-button type="danger" size="middle" row disabled>danger</i-button>
      </div>
    </div>

  </div>
</template>

<script>
  import Badge from '@/components/badge/index.vue'
  import IButton from '@/components/ibutton/index.vue'
  import cell from '@/components/cell/index.vue';
  import PBar from '@/components/pBar/index.vue';
  import PCircle from '@/components/pCircle/index.vue';

  export default {
    components: {
      Badge, IButton, cell, PBar, PCircle
    },
    data() {
      return {
        value: 'tab1',
      }
    },
    methods: {
      toastFn() {
        this.$toast({
          text: 'toast',
          shape: 'square',
          type: 'fail',
          delay: 3000,
          showBg: true,
          position: 'center'
        });
      },
      alertFn() {
        this.$alert({
          title: 'title',
          content: 'this is a content',
          callBack: () => {
            console.log('callBack')
          }
        })
      },
      confirmFn() {
        this.$confirm({
          content: '温馨提示-------------',
          className: 'custom custom2',
          btnText: ['左侧按钮', '右侧按钮']
        });
      },
      cellFn() {
        this.toastFn()
      }
    }
  }

</script>

<style lang="scss">
  .wrap {
    background: #fff;
    h1 {
      margin-left: 20px;
      text-align: left;
      font-size: 18px;
      font-weight: 700;
    }
    .box {
      margin: 20px;
      padding: 10px;
      border: 2px solid #fddeaa;
      .row-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        & + .row-item {
          margin-top: 10px;
        }
      }
    }
  }
</style>
