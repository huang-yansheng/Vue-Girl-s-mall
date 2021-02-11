<template>
  <div class="checkButton" :class="{active:ischecked}">
    <img src="~assets/img/cart/tick.svg">
  </div>
</template>

<script>
  export default {
    name:"checkButton",
    props:{
      ischecked:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped lang="scss">
  .checkButton{
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid #a2a2a2;
  }
  .active{
    background-color: $colorHightText;
    border-color: $colorHightText;
  }
</style>
