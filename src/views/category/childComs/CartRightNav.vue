<template>
  <div>
    <div class="cart-right" v-if="Object.keys(NavData).length !== 0">
        <right-item v-for="(item,index) in NavData" :key="index" :ItemData="item"></right-item>
    </div>
    <div>
      <tab-contorl ref="tabContorl" :titles="['综合','新款','销量']"></tab-contorl>
      <goods-list :list = "goodsData"  v-if="Object.keys(goodsData).length !== 0"></goods-list>
    </div>
  </div>
</template>

<script>
  import RightItem from './CartRightNavItem.vue'
  import scroll from 'components/common/scroll/Scroll.vue'
  import TabContorl from 'components/content/tabContorl/TabContorl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import { debounce } from 'common/utils.js'

  export default {
    name:"CartRightNav",
    props:{
      NavData:{
        type:Array,
        default(){
          return []
        }
      },
      goodsData:{
        type:Array,
        default(){
          return []
        }
      },
      data(){
        return {
          GetTabHeight:null,
          tabHeight:0
        }
      }
    },
   mounted(){
     this.GetTabHeight =  debounce(this.GetHeight,50)
     this.$bus.$on('itemImageLoad',this.ItemImgListen)
   },
    methods:{
      ItemImgListen(){
        //防抖函数
        this.GetTabHeight();
      },
      GetHeight(){
        this.tabHeight = this.$refs.tabContorl.$el.offsetTop
      }
    },
    components:{
      RightItem,
      TabContorl,
      GoodsList,
      scroll
    }
  }
</script>

<style scoped lang="scss">
  .cart-right{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    padding: 15px 5px;
    min-height: 100vh;
  }
</style>
