<template>
  <div class="wrap">
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
  </div>
</template>

<script>
  import Cell from '@/components/cell/index.vue';

  export default {
    name: 'input-cell',
    components: {
      Cell
    },
    methods: {
      toastFn() {
        this.$toast({
          text: 'toast',
          shape: 'square',
          type: 'fail',
          delay: 100000,
          showBg: true,
          position: 'center'
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
