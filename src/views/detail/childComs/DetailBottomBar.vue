<template>
  <div class="bottom-nav">
    <div class="bottom-left">
      <div class="service">客服</div>
      <div class="shop">店铺</div>
      <div class="collection">收藏</div>
    </div>
    <div class="bottom-right">
      <div class="shop-car" @click="addCart">加入购物车</div>
      <div class="shop-shop">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailBottomBar',
    methods:{
      addCart(){
        this.$emit('addToCart')
      }
    }
  }
</script>

<style scoped lang="scss">
  .bottom-nav{
    height: 49px;
    background-color: #eee;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    font-size: 13px;
    text-align: center;
    .bottom-left{
      padding: 6px;
      display: flex;
      justify-content: space-around;
      height: 35px;
      line-height: 65px;
      flex: 1;
      .service{
        background: url(~assets/img/detail/detail_bottom.png) no-repeat 1px -53px;
        background-size: 22px;
      }
      .shop{
        background: url(~assets/img/detail/detail_bottom.png) no-repeat 1px -98px;
        background-size: 22px;
      }
      .collection{
        background: url(~assets/img/detail/detail_bottom.png) no-repeat 1px 1px;
        background-size: 22px;
      }
    }
    .bottom-right{
      display: flex;
      flex: 1;
      line-height: 49px;
      font-size: 14px;
      .shop-car{
        flex: 1;
        background-color: #fcde81;
      }
      .shop-shop{
        flex: 1;
        background-color: #ff70a9;
        color: #FFFFFF;
      }
    }
  }
</style>
