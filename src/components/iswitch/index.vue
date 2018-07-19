<template>
    <div class="i-switch" :class="{'i-switch-disabled': disabled}" @click="switchFn">
        <input type="checkbox" :disabled="disabled" :checked="opened">
        <span class="i-switch-core" :class="{'i-switch-open': opened}" acitve-bg=""></span>
    </div>
</template>
<script>
    export default {
        name: 'iswitch',
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            opened: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            switchFn() {
                !this.disabled && this.$emit('onchange')
            }
        }
    }
</script>
<style lang="scss" scoped>
    .i-switch {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        input[type=checkbox] {
            position: absolute;
            width: 0;
            height: 0;
            opacity: 0;
            margin: 0;
            border: 0;
        }
        .i-switch-core {
            display: inline-block;
            vertical-align: middle;
            width: .8rem;
            height: .4rem;
            border-radius: .4rem;
            background: #dcdfe6;
            position: relative;
            &:after {
                content: '';
                position: absolute;
                top: .04rem;
                left: .04rem;
                width: .32rem;
                height: .32rem;
                border-radius: 50%;
                background: #fff;
                transition: all .2s;
            }
            &.i-switch-open {
                background: #26a2ff;
                &:after {
                    left: .44rem;
                }
            }
        }
        /*--- disabled style ---*/
        &.i-switch-disabled {
            .i-switch-core {
                opacity: .6;
            }
        }
    }
</style>
