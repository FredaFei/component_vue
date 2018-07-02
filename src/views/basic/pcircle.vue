<template>
  <div class="wrap">
    <h1>p-circle:</h1>
    <div class="box">
      <div class="row-item">
        <p-circle percent="20"/>
        <p-circle percent="60"/>
        <p-circle percent="100"/>
      </div>
    </div>
  </div>
</template>

<script>
  import PCircle from '@/components/pCircle/index.vue'

  export default {
    name: 'pcircle',
    components: {
      PCircle
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
