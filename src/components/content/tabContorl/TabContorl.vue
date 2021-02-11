<template>
  <div class="tab-contorl">
    <div v-for="(item,index) in titles"
         :key='index'
         class="tab-contorl-item"
         :class="{ active : index == currentIndex}"
         @click="tabChange(index)"
      >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'tabContorl',
    props:{
      titles:{
        type:Array,
        default(){
          return ['选项1','选项2','选项3']
        }
      },
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      tabChange(index){
        this.currentIndex = index
        //home里面的tab切换数据
        this.$emit('changeDate',index)
        //分类里面的tab切换数据
        this.$bus.$emit('indexChange',index)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tab-contorl{
    display: flex;
    text-align: center;
    background-color: #fff;
    .tab-contorl-item{
      flex: 1;
      height: 40px;
      line-height: 40px;
      font-size: 15px;
    }
    span{
      padding: 5px;
    }
  }
  .active{
    color: $colorTint;
    span{
      border-bottom: 2px solid $colorTint;
    }
  }

</style>
