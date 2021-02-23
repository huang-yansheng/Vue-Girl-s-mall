<template>
  <div class="Profile-nav">
    <div class="top-nav">
      <div class="top-item">
        <img src="~assets/img/profile/letter.png" alt="">
        <div class="write">我的消息</div>
      </div>
      <div class="top-item">
        <img src="~assets/img/profile/numsell.png" alt="">
        <div class="write">积分商城</div>
      </div>
      <div class="top-item top-end">
        <img src="~assets/img/profile/vip.png" alt="">
        <div class="write">会员卡</div>
      </div>
    </div>
    <div class="bottom-nav">
      <div class="top-item">
        <img src="~assets/img/profile/shopcar.png" alt="">
        <div class="write">我的购物车</div>
      </div>
      <div class="top-item">
        <img src="~assets/img/profile/shopbag.png" alt="">
        <div class="write">下载购物APP</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"ProfileNav"
  }
</script>

<style scoped lang="scss">
  .top-nav{
    border-bottom: 15px solid #eeeeee;
    .top-item{
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 700;
      line-height: 40px;
      margin-left: 15px;
      img{
        width: 20px;
        margin-right: 10px;
      }
      .write{
        flex: 1;
        margin-top: 5px;
        border-bottom: 1px solid #eeeeee;
      }
    }
  }
  .bottom-nav{
    .top-item{
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 700;
      line-height: 40px;
      margin-left: 15px;
      img{
        width: 20px;
        margin-right: 10px;
      }
      .write{
        flex: 1;
        margin-top: 5px;
        border-bottom: 1px solid #eeeeee;
      }
  }
 }
</style>
