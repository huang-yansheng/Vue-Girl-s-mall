<template>
  <div class="goods-item"  @click = "itemClick(goodsItem.iid || goodsItem.item_id)">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="goods-content">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <img src="~assets/img/common/collect.svg" alt="">
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    computed:{
      showImage(){
        return this.goodsItem.image || this.goodsItem.img || this.goodsItem.show.img
      }
    },
    methods: {
      imageLoad() {
          this.$bus.$emit('itemImageLoad')
      },
      itemClick(iid){
        //跳转到详情页
        //this.goodsItem.iid
        this.$router.push('/detail/'+iid)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goods-item {
    width: 47%;
    font-size: 12px;
    text-align: center;
    margin: 5px 0 5px 6px;

    img {
      width: 100%;
      border-radius: 6px;
    }

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 2px;
    }

    .price {
      color: $colorHightText;
      margin-right: 5px;
    }
  }

  .goods-content {
    img {
      vertical-align: top;
      width: 13px;
      height: 13px;
    }
  }
</style>
