<template>
    <div class="cart-left" v-if="Object.keys(NavList).length !== 0">
      <div v-for="(item,index) in NavList"
            :key="index"
            class = "left-item"
            :class = "{active : currentIndex == index}"
            @click="changeNav(index,item.maitKey,item.miniWallkey)"
             >
          {{item.title}}
      </div>
    </div>
</template>

<script>
  import scroll from 'components/common/scroll/Scroll.vue'
  export default {
    name:"CartLeftNav",
    props:{
      NavList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      scroll
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      changeNav(index,maitKey,miniWallkey){
        if(this.currentIndex !== index){
          this.currentIndex = index
          this.$emit("rightData",maitKey,miniWallkey,index)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .cart-left{
    line-height: 46px;
    text-align: center;
    font-size: 15px;
    border: none;
  }
  .left-item{
    background-color: #f0f0f0;
  }
  .active{
    background-color: #fff;
    color: $colorHightText;
    font-weight: 700;
    border-left: 4px solid $colorHightText;
  }
</style>
