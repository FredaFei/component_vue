<template>
  <div class="wrap">
    <h1>PBar:</h1>
    <div class="box">
      <div class="row-item">
        <p-bar percent="40"/>
      </div>
      <div class="row-item">
        <p-bar percent="60" color="#afd325"/>
      </div>
    </div>
  </div>
</template>

<script>
  import PBar from '@/components/pBar/index.vue'

  export default {
    name: 'pbar',
    components: {
      PBar
    }
  }

</script>

<style lang="scss">
  .wrap {
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
