<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view :key='$route.path'></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from "components/content/mainTabbar/MainTabbar.vue"
export default {
  name: 'App',
  components:{
    mainTabBar,
  }
}
</script>

<style lang="scss">
@import url("assets/css/base.css");



</style>
