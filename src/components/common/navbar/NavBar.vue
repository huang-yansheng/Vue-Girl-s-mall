<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
     </div>
    <div class="center">
      <slot name="center"></slot>
     </div>
    <div class="right">
      <slot name="right"></slot>
     </div>
  </div>
</template>

<script>
  export default {
    name:"NavBar"
  }
</script>

<style lang="scss" scoped>
  .nav-bar{
    display: flex;
    text-align: center;
    line-height: 44px;
    box-shadow: 0 1px 1px 0 rgba(100,100,100,0.1);
    position: relative;
    z-index: 888;
    .center{
      flex: 1;
    }
    .left,.right{
      width: 60px;
    }
  }
</style>
