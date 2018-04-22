<template>
    <div class="cell-bar"
         :class="{'cell_access': isLink || !!link}"
         @click="onClickFn">
        <div class="cell-hb">{{leftText}}</div>
        <div class="cell-bd" :style="{color: color}">{{rightText}}</div>
        <div class="cell-ft"></div>
    </div>
</template>

<script>
    export default {
        name: 'cell',
        props: {
            isLink: {
                type: Boolean,
                default: true
            },
            leftText: {
                type: String,
                default: 'leftText'
            },
            rightText: {
                type: String,
                default: 'rightText'
            },
            color: {
                type: String,
                default: '#333'
            }
        },
        methods: {
            onClickFn() {
                this.$emit('onClick')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cell-bar{
        display: flex;
        align-items: center;
        padding: .24rem .3rem;
        font-size: .32rem;
        background: #ffffff;
        .cell-hd{
            color: #888;
        }
        .cell-bd{
            flex: 1;
            text-align: right;
        }
        .cell-ft{
            text-align: right;
            position: relative;
        }
        &.cell_access{
            color: inherit;
            .cell-ft:after{
                content: '';
                display: block;
                width: 0.24rem;
                height: 0.24rem;
                border-top: 0.02rem solid #D0D0D0;
                border-right: 0.02rem solid #D0D0D0;
                transform: rotate(45deg);
            }
        }
    }

</style>
