<template>
  <div class="Wallet">
    <div class="item">
      <div><a>{{getMoney}}</a>元</div>
       <p>我的余额</p>
     </div>
    <div class="item">
      <div><a>{{coupon}}</a>个</div>
      <p>我的优惠</p>
    </div>
    <div class="item">
      <div><a>{{integral}}</a>分</div>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
  export default {
    name:"ProfileWallet",
    data(){
      return {
        money:0,
        coupon:0,
        integral:0
      }
    },
    computed:{
      getMoney(){
        return this.money.toFixed(2)
      }
    }
  }
</script>

<style scoped lang="scss">
  .Wallet{
    display: flex;
    border-bottom: 15px solid #eee;
    .item{
      text-align: center;
      flex: 1;
      font-size: 15px;
      padding: 15px 0;
      border-right: 1px solid #EEEEEE;
      a{
        display: inline-block;
        padding: 5px;
        font-size: 26px;
        color: #ff896b;
        font-weight: 700;
      }
    }
  }
</style>
