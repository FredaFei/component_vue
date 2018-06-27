/**
 * pBar 进度条组件
 *
 */
<template>
    <div class="progress-bar">
        <span :style="{width: percentData, backgroundColor: color}"></span>
    </div>
</template>
<script>
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
    created(){
        this.percentData = '0%';
        setTimeout(()=>{
            this.percentData = this.percent + '%';
        },0);
    },
    watch: {
        percent(val){
            this.percentData = '0%';
            setTimeout(()=>{
                this.percentData = val + '%';
            },0);
        }
    }
}
</script>

<style lang="scss">
    .progress-bar{
        position: relative;
        padding: 5px;
        width: 100%;
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
</style>
