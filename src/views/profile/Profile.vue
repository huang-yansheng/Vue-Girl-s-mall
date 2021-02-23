<template>
  <div>
    <nav-bar class="Profile-navbar">
      <template #center>
        <div>我的</div>
      </template>
    </nav-bar>
    <user-login></user-login>
    <wallet></wallet>
    <profile-nav></profile-nav>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import UserLogin from './childComps/ProfileLogin.vue'
  import Wallet from './childComps/ProfileWallet.vue'
  import ProfileNav from './childComps/ProfileNav.vue'
  export default {
    name:"Profile",
    components:{
      NavBar,
      UserLogin,
      ProfileNav,
      Wallet
    }
  }
</script>

<style lang="scss" scoped>
  .Profile-navbar{
    background-color : $colorTint;
    color: white;
  }
</style>
