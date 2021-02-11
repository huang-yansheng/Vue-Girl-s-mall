<template>
  <div class="right-item" v-if="Object.keys(ItemData).length !== 0">
    <a :href="ItemData.link">
      <div class="item">
        <img :src="ItemData.image" @load="cartImageLoad">
        <span>{{ItemData.title}}</span>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "CartRightNavItem",
    props: {
      ItemData: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods:{
      cartImageLoad(){
        this.$bus.$emit('itemImageLoad')
      }
    }
  }
</script>

<style scoped lang="scss">
  .right-item{
    text-align: center;
    .item {
      width: 66px;
      padding: 5px;
      font-size: 13px;
      margin-left: 15px;
      margin-bottom: 20px;
      img {
        width: 100%;
        margin-bottom: 5px;
      }
    }
  }
</style>
