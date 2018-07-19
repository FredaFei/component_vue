<template>
    <div class="marquee-wrap" :style="{height: height + 'px'}">
        <ul class="marquee-box" :style="style">
            <!--<slot></slot>-->
            <li class="marquee-item" v-if="marqueeList.length>0" v-for="item in marqueeList">哈哈哈哈--{{item}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'marquee',
        props: {
            height: {
                type: Number,
                default: 100
            },
            duration: {
                type: Number,
                default: 50
            },
            lists: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                style: {
                    top: '0',
                },
                timer: null,
                marqueeList: this.lists
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll()
            })
        },
        destroy() {
            clearTimeout(this.timer)
        },
        methods: {
            scroll(top) {
                let node = document.querySelectorAll('.marquee-item')
                if(!node || node.length<=0){return false}
                let itemH = node[0].clientHeight
                let itemTop = top || 0
                this.style.top = `-${itemTop}px`
                this.timer = setTimeout(() => {
                    let _top = itemTop + 1
                    if (_top >= itemH) {
                        _top = 0
                        let marqueeList = [...this.marqueeList]
                        let one = marqueeList.shift()
                        marqueeList.push(one)
                        this.marqueeList = marqueeList
                    }
                    this.scroll(_top)
                }, this.duration)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .marquee-wrap {
        width: 100%;
        overflow: hidden;
        position: relative;
        .marquee-box {
            position: absolute;
            left: 0;
            right: 0;
            width: 100%;
            height: auto;
            .marquee-item {
                text-align: center;
                font-size: .26rem;
                line-height: .6rem;
            }
        }
    }
</style>
