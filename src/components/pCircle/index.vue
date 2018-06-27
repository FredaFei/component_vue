/**
* pCircle 圆环进度条组件
*
*/
<template>
  <div class="p-circle">
    <div class="p-circle-process" v-if="showProcess">
      <div class="circle" :class="{'clip-auto': clipAuto}">
        <div class="percent left" v-bind:style="{transform: 'rotate(' + (360 - (360/100)*number) + 'deg)'}"></div>
        <div class="percent right" :class="{wth0: wth0}"></div>
      </div>
      <div class="num"><span>{{number}}</span>%</div>
    </div>
    <div class="p-circle-status" v-if="!showProcess">
      <div class="circle"></div>
      <div class="num">{{text}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pCircle",
    data() {
      return {
        clipAuto: false,
        wth0: true,
        number: 0,
        showProcess: true
      };
    },
    props: {
      percent: {
        type: String,
        default: '0'
      }
    },
    created() {
      const percentdata = this.percent - 0;
      let percent = 0;

      if (percentdata >= 100) {
        this.showProcess = false;
        this.text = '结束';
      } else {
        var loading = setInterval(() => {
          if (percent >= percentdata) {
            clearInterval(loading);
            this.number = percentdata;
          } else if (percent > 50) {
            this.clipAuto = true;
            this.wth0 = false;
          }
          this.number = percent;
          percent++;
        }, 50);
      }
    }
  };
</script>

<style lang="scss">
  .p-circle, .circle, .percent {
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
  }

  .p-circle {
    position: relative;
    background-color: #CCC;
    .circle {
      box-sizing: border-box;
      border: 0.08rem solid #CCC;
      clip: rect(0, 0.8rem, 0.8rem, 0.4rem);
      transform: rotate(180deg);
    }
    .clip-auto {
      clip: rect(auto, auto, auto, auto);
    }
    .percent {
      box-sizing: border-box;
      top: -0.08rem;
      left: -0.08rem;
      border: 0.08rem solid #448FF2;
    }
    .left {
      transition: transform ease;
      clip: rect(0, 0.4rem, 0.8rem, 0);
    }
    .right {
      clip: rect(0, 0.8rem, 0.8rem, 0.4rem);
    }
    .wth0 {
      width: 0;
    }
    .num {
      font-size: 0.25rem;
      position: absolute;
      box-sizing: border-box;
      width: 0.72rem;
      height: 0.72rem;
      line-height: 0.72rem;
      text-align: center;
      left: 0.04rem;
      top: 0.04rem;
      border-radius: 50%;
      background-color: #FFF;
      z-index: 1;
      color: #D0D0D0;
    }
    .p-circle-process {
      .num {
        color: #448FF2;
      }
    }
  }

</style>
