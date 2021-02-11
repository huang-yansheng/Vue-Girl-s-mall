<template>
  <nav-bar class="detaul-nav">
    <template #left>
      <div class="left" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
    </template>
    <template #center>
      <div class="center">
        <div v-for="(item,index) in titles"
             :key = "index"
             :class="{active:index == currentIndex}"
             @click="titleClick(index)"
        >
          {{item}}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue"

  export default {
    name:'DetailNavBar',
    components:{
      NavBar
    },
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      back(){
        this.$router.back()
      },
      titleClick(index){
        this.currentIndex = index
        this.$emit('NavPosition',index)
      }
    }
  }
</script>

<style scoped lang="scss">
  .center{
    display: flex;
    font-size: 13px;
    div{
      flex: 1;
    }
    .active{
      color: $colorTint;
    }
  }
  .left{
    font-size: 30px;
  }
</style>
