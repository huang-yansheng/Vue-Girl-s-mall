<template>
  <div class="cart-goods-List">
    <div v-for="(item,index) in $store.state.haveGoods"
         :key="index"
         class="goods"
         >
         <div class="confirm">
           <check-button :ischecked = "item.ischecked" @click.native = 'changeChecked(item)'></check-button>
         </div>
        <img :src="item.image">
        <div class="goods-mess">
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <div class="price">
              <span class="unitprice">￥{{totalPrice(item)}}</span>
              <span class="const">x{{item.count}}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import checkButton from 'components/content/checkButton/checkButton.vue'
  import { CHANGETOCHECKED } from 'store/mutations-types.js'
  import {mapGetters} from 'vuex'

  export default {
    name:"CartGoodsList",
    components:{
      checkButton
    },
    methods:{
      //点击按钮改变商品的选中状态
      changeChecked(item){
        this.$store.dispatch(CHANGETOCHECKED,item)
      }
    },
    computed:{
      ...mapGetters([
        'totalPrice'
      ])
    }
  }
</script>

<style scoped lang="scss">
  .goods{
    display: flex;
    padding: 8px;
    border-bottom: 1px solid #d5d5d5;
    img{
      width: 80px;
      height: 102px;
      border-radius: 5px;
    }
  }
  .confirm{
    margin-right: 8px;
    align-self: center;
  }
  .goods-mess{
    position: relative;
    overflow: hidden;
    margin-left: 10px;
    font-size: 13px;
    .title,.desc{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .title{
      margin-bottom: 15px;
      font-size: 15px;
      font-weight: 600;
    }
    .price{
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      bottom: -33px;
    }
    .unitprice{
      font-size: 18px;
      color: $colorHightText;
    }
  }
</style>
