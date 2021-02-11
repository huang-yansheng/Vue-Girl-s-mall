<template>
  <div class="recommend-view">
    <div v-for="(item,index) in recommends" :key='index' class="recommend-item">
      <div>
        <a :href="item.link">
          <img :src="item.image" alt="">
          <span>{{item.title}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'recommendView',
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .recommend-view{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 10px 0 20px 0;
    font-size: 13px;
    font-weight: 700;
    border-bottom: 8px solid #eee;
    .recommend-item{
      width: 66px;
    }
    img{
      width: 100%;
      margin-bottom: 8px;
    }
  }

</style>
