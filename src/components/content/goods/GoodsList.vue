<template>
  <div class="goods" v-if="Object.keys(list).length !== 0">
    <goods-list-item
      v-for="(item,index) in list"
      :key='index'
      :goods-item = 'item'
      >
    </goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from 'components/content/goods/GoodsListItem.vue'
  export default {
    name:'GoodsList',
    props:{
      list:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      GoodsListItem
    },
  }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    padding-top: 2px;
    border-top: 3px solid #eee;
  }
</style>
