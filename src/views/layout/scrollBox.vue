<template>
  <scroll-box>
    <section class="pg-content">
      <h1>scrollBox content</h1>
      <div class="desc">这是内容 1</div>
      <div class="desc">这是内容 2</div>
      <div class="desc">这是内容 3</div>
      <div class="desc">这是内容 4</div>
      <div class="desc">这是内容 5</div>
      <div class="desc">这是内容 6</div>
      <div class="desc">这是内容 7</div>
      <div class="desc">这是内容 8</div>
      <div class="desc">这是内容 9</div>
      <div class="desc">这是内容 10</div>
      <div class="desc">这是内容 11</div>
      <div class="desc">这是内容 12</div>
      <div class="desc">这是内容 13</div>
      <div class="desc">这是内容 14</div>
      <div class="desc">这是内容 15</div>
      <div class="desc">这是内容 16</div>
      <div class="desc">这是内容 17</div>
      <div class="desc">这是内容 18</div>
      <div class="desc">这是内容 19</div>
      <div class="desc">这是内容 20</div>
      <div class="desc">这是内容 21</div>
      <div class="desc">这是内容 22</div>
      <div class="desc">这是内容 23</div>
      <div class="desc">这是内容 24</div>
      <div class="desc">这是内容 25</div>
      <div class="desc">这是内容 26</div>
      <div class="desc">这是内容 27</div>
      <div class="desc">这是内容 28</div>
    </section>
  </scroll-box>
</template>
<script>
  import ScrollBox from '@/components/scrollBox/index.vue'

  export default {
    name: 'scrollbox',
    components: {ScrollBox}
  }
</script>
<style lang="scss" scoped>
  .pg-content{
    padding: .2rem;
    h1{
      font-size: .34rem;
    }
    .desc{
      font-size: .26rem;
      padding: .1rem;
    }
  }

</style>
