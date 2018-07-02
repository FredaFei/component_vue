/**
* pBar 进度条组件
*
*/
<template>
  <div class="progress-wrap">
    <div class="progress-bar">
      <span :style="{width: percentData, backgroundColor: color}"></span>
    </div>
    <span class="number">{{percentData}}</span>
  </div>

</template>
<script>
  import loading from "../loading";

  export default {
    name: 'pBar',
    props: {
      percent: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: '#FF6E4E'
      }
    },
    data() {
      return {
        percentData: ''
      };
    },
    created() {
      this.percentData = '0%';
      setTimeout(() => {
        this.percentData = this.percent + '%';
      }, 0);

    },
    watch: {
      percent(val) {
        this.percentData = '0%';
        setTimeout(() => {
          this.percentData = val + '%';
        }, 0);
      }
    }
  }
</script>

<style lang="scss">
  .progress-wrap {
    position: relative;
    line-height: .4rem;
    width: 100%;
    .progress-bar {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      padding: 5px;
      width: 88%;
      height: 0.2rem;
      background-color: #dedede;
      border-radius: 0.06rem;
      box-sizing: border-box;
      span {
        display: inline-block;
        height: 0.2rem;
        width: 0;
        border-radius: 0.06rem;
        transition: all 1s ease;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
    }
    .number {
      display: inline-block;
      vertical-align: middle;
      margin-left: .06rem;
    }
  }

</style>
