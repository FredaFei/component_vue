<template>
    <div class="wrap">
        <h1>switch:</h1>
        <div class="box">
            基本用法：
            <i-switch :opened="opened" @onchange="changeFn"/>
            <br/>
            禁用状态：
            <i-switch disabled/>
            <i-switch disabled :opened="true"/>
        </div>
    </div>
</template>

<script>
    import ISwitch from '@/components/iswitch/index.vue';

    export default {
        name: 'iswitch',
        components: {
            ISwitch
        },
        data() {
            return {
                opened: false
            }
        },
        methods: {
            changeFn() {
                this.opened = !this.opened
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
