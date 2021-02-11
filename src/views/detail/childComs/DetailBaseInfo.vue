<template>
  <div class="BaseInfo" v-if="Object.keys(goodData).length !== 0">
    <div class="Infotitle">
      <span>{{goodData.title}}</span>
    </div>
    <div class="InfoPrice">
      <span class="newPrice">{{goodData.newPrice}}</span>
      <span class="oldPrice">{{goodData.oldPrice}}</span>
      <span class="discount">{{goodData.discount}}</span>
    </div>
    <div class="InfoData">
      <div class="InfoItem">{{goodData.columns[0]}}</div>
      <div class="InfoItem">{{goodData.columns[1]}}</div>
      <div class="InfoItem">{{goodData.services[goodData.services.length-1].name}}</div>
    </div>
    <div class="express">
      <div v-for="index in goodData.services.length-1" :key="index">
        <img :src="goodData.services[index-1].icon" alt="">
        <span>{{goodData.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailBaseInfo",
    props:{
      goodData:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .BaseInfo{
    padding: 10px;
    border-bottom: 3px solid #eee;
    .Infotitle{
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 10px;
    }
  }
  .InfoPrice{
    margin-bottom: 20px;
    .newPrice{
      font-size: 24px;
      color: $colorHightText;
      margin-right: 5px;
    }
    .oldPrice{
      font-size: 12px;
      text-decoration: line-through;
      margin-right: 5px;
    }
    .discount{
      font-size: 12px;
      color: white;
      padding: 1px 3px;
      border-radius: 6px;
      background-color: $colorTint;
    }
  }
  .InfoData{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 2px solid #eee;
  }
  .express{
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    font-size: 12px;
    img{
      vertical-align: top;
      margin-right: 1px;
      width: 13px;
      height: 13px;
    }
  }
</style>
