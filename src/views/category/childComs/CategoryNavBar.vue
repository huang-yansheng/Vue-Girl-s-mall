<template>
  <nav-bar class="cateTop">
    <template #center>
      商品分类
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  export default {
    name:"CategoryNavBar",
    components:{
      NavBar
    }
  }
</script>

<style scoped lang="scss">
  .cateTop{
    background-color: $colorTint;
    color: white;
  }
</style>
