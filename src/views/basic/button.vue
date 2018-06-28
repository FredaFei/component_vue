<template>
  <div class="wrap">
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
  import IButton from '@/components/ibutton/index.vue'

  export default {
    components: {IButton}
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
