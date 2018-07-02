<template>
    <section class="scrollBox" ref="scrollPage">
        <div class="scroll-content">
            <div class="scroll-hd" :class="{active: upReady}" v-if="showTop"><i></i>{{scrollTopText}}</div>
            <div class="scroll-bd">
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: 'scrollBox',
        props: {
            showTop: {
                type: Boolean,
                default: true
            },
            showBottom: {
                type: Boolean,
                default: true
            },
        },
        data() {
            return {
                upReady: false,
                scrollTopText: '下拉刷新'
            }
        },
        mounted() {
            this.$nextTick(() => {
                this._initScroll()
            })
        },
        watch: {
            data: {
                handle: function () {
                    setTimeout(() => {
                        this.refresh()
                    })
                }
            }
        },
        methods: {
            _initScroll() {
                this.scroll = new BScroll(this.$refs.scrollPage, {
                    click: true,
                    probeType: 1,
                    scrollY: true
                });
                this.scroll.on('scroll', pos => {
                    if (pos.y >= 50) {
                        this.upReady = true
                        this.scrollTopText = '松开刷新'
                    } else {
                        this.upReady = false
                        this.scrollTopText = '下拉刷新'
                    }
                })
                this.scroll.on('scrollEnd', pos => {
                    if (this.upReady && this.showTop && pos.y === 0) {
                        this.upReady = false
                        this.scrollTopText = '下拉刷新'
                        this.$emit('pullDown')
                    } else if (this.showBottom && (this.scroll.y <= this.scroll.maxScrollY + 50)) {
                        this.$emit('pullUp')
                    }
                })
                this.scroll.on('touchEnd', pos => {
                    this.$emit('touchEnd', {
                        x: pos.x,
                        y: pos.y,
                        height: Math.abs(this.scroll.maxScrollX),
                    });
                })
            },
            refresh() {
                this.scroll && this.scroll.refresh()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .scrollBox {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        overflow: hidden;
        .scroll-content {
            position: relative;
            min-height: 100.1%;
            .scroll-hd {
                position: absolute;
                top: -.8rem;
                left: 0;
                right: 0;
                height: .8rem;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                i {
                    width: .3rem;
                    height: .3rem;
                    margin-right: .06rem;
                    background: transparent url("./imgs/icon-up.png") no-repeat;
                    background-size: 100%;
                    transition: all .2s;
                }
                &.active{
                    i{
                        transform: rotate(-180deg);
                    }
                }
            }
            .scroll-bd {
                overflow: hidden;
            }
        }
    }

</style>
