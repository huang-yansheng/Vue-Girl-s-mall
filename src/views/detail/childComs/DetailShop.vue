<template>
  <div class="detail-shop">
    <div class="logo">
      <img :src="businessData.logo" alt="">
      {{businessData.name}}
    </div>
    <div class="message">
      <div class="message-left message-item">
        <div>
          <div>{{sell}}</div>
          <p>总销量</p>
        </div>
        <div>
          <div>{{businessData.goodsCount}}</div>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="message-right message-item">
        <div class="message-mb" v-for="(item,index) in businessData.score" :key="index">
          <span>{{item.name}}</span>
          <span :class="{'good': item.isBetter}">{{item.score}}</span>
          <span class="score" :class="{'better': item.isBetter}">{{item.isBetter? '高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="shopLink">
       <a href="">进店逛逛</a>
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailShop",
    props:{
      businessData:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      sell(){
        const num = this.businessData.sells/10000
        return  num.toFixed(1)+'万'
      }
    }
  }
</script>

<style scoped lang="scss">
  .detail-shop{
    padding: 20px 8px;
    border-bottom: 3px solid #eee;
  }
  //店铺logo
  .logo{
    margin-bottom: 15px;
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
  //商品介绍和评价
  .message{
    display: flex;
    padding:0 15px;
    font-weight: 600;
    .message-item{
      flex: 1;
      font-size: 12px;
      padding:0 16px;
    }
  }
  .message-left{
    display: flex;
    justify-content: space-between;
    text-align: center;
    border-right: 2px solid #eee;
    align-self: center;
    p{
      font-size: 12px;
      margin-top: 5px;
    }
  }
  .message-right{
    span{
      margin-right: 5px;
    }
    .message-mb{
      margin-bottom: 7px;
    }
    .good{
      color: $colorTint;
    }
    .score{
      background-color: #26c246;
      color: #fff;
      float: right;
    }
    .better{
      background-color: $colorTint;
    }
  }
  //进入店铺的连接
  .shopLink{
    display: flex;
    justify-content: center;
    font-size: 12px;
    padding-top:15px;
    a{
      padding: 4px 30px;
      background-color: #e0edff;
      border-radius: 7px;
    }
  }
</style>
