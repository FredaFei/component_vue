<template>
    <div class="wrap">
        <h1>slide:</h1>
        <p class="pl40">基础示例：</p>
        <slide :slides="slides"></slide>
        <p class="pl40">自定义样式示例：</p>
        <slide :slides="slides" :height="height" page-style="line"></slide>
    </div>
</template>

<script>
    import Slide from '@/components/slide/index.vue';

    export default {
        name: 'm-slide',
        components: {
            Slide
        },
        data() {
            return {
                slides2: [],
                height: '3.2rem',
                slides: [
                    {
                        imgUrl: 'http://via.placeholder.com/750x260',
                        href: 'http://via.placeholder.com/350x150',
                        title: 'this is a title'
                    },
                    {
                        imgUrl: 'http://via.placeholder.com/750x260',
                        href: 'http://via.placeholder.com/350x150',
                        title: 'this is a title'
                    },
                    {
                        imgUrl: 'http://via.placeholder.com/750x260',
                        href: 'http://via.placeholder.com/350x150',
                        title: 'this is a title'
                    }
                ]
            }
        }
    }

</script>

<style lang="scss">
    .wrap {
        background: #fff;
        overflow: auto;
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
