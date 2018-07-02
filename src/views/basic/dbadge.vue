<template>
  <div class="wrap">
    <h1>badge:</h1>
    <div class="box">
      <div class="row-item">
        <badge>12</badge>
        <badge type="primary">12</badge>
        <badge type="info">12</badge>
        <badge type="warning">12</badge>
        <badge color="#aaddff" round>12</badge>
      </div>
    </div>
  </div>
</template>

<script>
  import Badge from '@/components/badge/index.vue'

  export default {
    name: 'dbadge',
    components: {
      Badge
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
