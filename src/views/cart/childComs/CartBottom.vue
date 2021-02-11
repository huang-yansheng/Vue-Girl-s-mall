<template>
  <div class="cart-bottom">
    <div class="all-in">
      <check-button class="btn" @click.native = 'allBuy' :ischecked = "ischecked"></check-button>
      <div>全选</div>
      <div class="intal">合计:{{allPrice}}</div>
    </div>
    <div class="cart-count">
      去计算({{checkedGoods}})
    </div>
  </div>
</template>

<script>
  import checkButton from 'components/content/checkButton/checkButton.vue'
  import {
  ADDGOODS,
  CHANGETOCHECKED,
  ADDCOUNTER,
  ADDCART,
  CHANGECHECKED,
  ALLSELECT,
  JSDGE
} from 'store/mutations-types.js'
  import {mapGetters} from 'vuex'
  export default {
    name:'CartBottom',
    components:{
      checkButton
    },
    methods:{
      allBuy(){
        this.$store.dispatch(JSDGE)
      }
    },
    //计算，当所有商品checked属性为true时，返回true
    //在vuex写和这里写一样
    computed:{
      ...mapGetters([
        'ischecked',
        'allPrice',
        'checkedGoods'
      ])
    }
  }
</script>

<style scoped lang="scss">
  .cart-bottom{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 45px;
    background-color: #ebebeb;
    display: flex;
    justify-content:space-between;
    align-items: center;
    height:50px;
  }
  .all-in{
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 14px;
    padding: 0 15px;
    .btn{
      margin-right: 5px;
    }
    .intal{
      margin-left: 20px;
    }
  }
  .cart-count{
			height: 100%;
      width: 90px;
      line-height: 50px;
      text-align: center;
      color: white;
      background-color: $colorTint;
  }
</style>
