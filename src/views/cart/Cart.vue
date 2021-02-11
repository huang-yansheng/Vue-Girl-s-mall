<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <template #center>
        <div>购物车({{cartLength}})</div>
      </template>
    </nav-bar>
    <scroll class="cart-scroll" ref = scroll>
      <cart-goods-list></cart-goods-list>
    </scroll>
    <cart-bottom></cart-bottom>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import CartGoodsList from './childComs/CartGoodsList.vue'
  import CartBottom from './childComs/CartBottom.vue'

  import {mapGetters} from 'vuex'
  export default {
    name:"cart",
    components:{
      NavBar,
      CartGoodsList,
      CartBottom,
      Scroll
    },
    computed:{
      // 两种语法
      //第一种指定getters的方法进行转换
      ...mapGetters([
        'cartLength'
      ]),
      // 第二种指定getters方法改别名后再进行转换
      // ...mapGetters({
      //   length:"cartLength"
      // })
    },
    methods:{
    },
    activated() {
      this.$refs.scroll.scrollRefresh()
    }
  }
</script>

<style scoped lang="scss">
  #cart{
    height: 100vh;
    position: relative;
  }
  .cart-nav{
    background-color: $colorTint;
    color: #ffffff;
  }

  .cart-scroll{
    height: calc(100% - 49px - 44px - 40px);
    overflow: hidden;
  }
</style>
