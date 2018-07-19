<template>
    <div class="swiper-section">
        <div v-if="slides.length>1">
            <swiper class="swiper-list" :style="{height: height}" :options="swiperOption">
                <swiper-slide class="swiper-item" v-for="item in slides" :key="item.text">
                    <a :href="item.href"><img :src="item.imgUrl" :alt="item.text"></a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"
                     :class="[`swiper-page-style-${pageStyle}`, `swiper-page-position-${pagePos}`]"></div>
            </swiper>
        </div>
        <div v-if="slides.length==1" :style="{height: height}">
            <div class="swiper-item" v-for="item in slides" :key="item.text">
                <a :href="item.href"><img :src="item.imgUrl" :alt="item.text"></a>
            </div>
        </div>
        <div v-if="!slides || !slides.length" class="swiper-loading" :style="{height: height}">loading ...</div>
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: 'slide',
        components: {swiper, swiperSlide},
        props: {
            slides: {
                type: Array,
                default: () => {
                    return [
                        {
                            href: '',
                            imgUrl: '',
                            title: ''
                        }
                    ]
                }
            },
            height: {
                type: String,
                default: '3.8rem'
            },
            pageStyle: {
                type: String,
                default: 'dot'
            },
            pagePos: {
                type: String,
                default: 'center'
            }
        },
        data() {
            return {
                swiperOption: {
                    notNextTick: true,
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    direction: 'horizontal',
                    slidesPerView: 'auto',
                    paginationClickable: true,
                    mousewheelControl: true,
                    autoplay: true,
                    loop: true,
                    passiveListeners: false,
                    preventClicks: false
                }
            }
        }
    }
</script>
<style lang="scss">
    .swiper-section {
        .swiper-list {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            width: 100%;
            margin: auto;
            height: 3.8rem;
        }
        .swiper-item {
            a {
                display: block;
                height: 100%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .swiper-loading {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            height: 3.8rem;
            font-size: .3rem;
            text-align: center;
            color: #333333;
            background: #E0E0E0;
        }
    }

    .swiper-container-horizontal > .swiper-pagination-bullets {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: auto;
        left: inherit;
        bottom: 0.1rem;
    }

    // 分页样式
    .swiper-container-horizontal {
        .swiper-page-style-dot {
            .swiper-pagination-bullet {
                width: .12rem;
                height: .12rem;
            }
        }

        .swiper-page-style-line {
            .swiper-pagination-bullet {
                width: .5rem;
                height: .1rem;
                border-radius: 0;
            }
        }
        .swiper-page-style-bg {
            width: auto;
            padding: .03rem .05rem;
            border-radius: .06rem;
            background: rgba(255, 255, 255, .6);
            .swiper-pagination-bullet {
                width: .18rem;
                height: .18rem;
            }
        }
    }

    // 分页位置
    .swiper-container-horizontal {
        .swiper-page-position-left {
            left: 0;
            right: inherit;
            bottom: .1rem;
        }
        .swiper-page-position-center {
            left: 0;
            right: 0;
            bottom: .2rem;
            width: auto;
        }
        .swiper-page-position-right {
            left: inherit;
            right: 0;
            bottom: .1rem;
        }
        .swiper-pagination-bullet-active {
            background: #FFF;
        }
    }

</style>
