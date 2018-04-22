<template>
    <div class="no-data">
        <div class="no-data-bd" :style="{backgroundImage: `url(${infoList[type].img})`}">{{infoList[type].text}}</div>
    </div>
</template>

<script>
    export default {
        name: 'noData',
        props: {
            type: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                infoList: [
                    {text: '网络可能跑到外太空了...', img: require('./imgs/page_blank.png')},
                    {text: 'haha...', img: require('./imgs/page_blank.png')},
                    {text: 'jaja...', img: require('./imgs/page_blank.png')}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .no-data{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffffff;
        z-index: 100;
        .no-data-bd{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-end;
            width: 4rem;
            height: 4rem;
            color: #888888;
            font-size: .28rem;
            background-size: cover;
        }
    }
</style>
