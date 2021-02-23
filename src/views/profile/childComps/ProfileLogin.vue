<template>
  <div class="user">
    <div class="user-image">
      <img src="~assets/img/common/user.png" alt="">
    </div>
    <div class="user-message">
      <div class="login">登录/注册</div>
      <div class="phone"><img src="~assets/img/profile/phone.png" alt=""><span>暂未绑定手机号</span></div>
    </div>
    <div class="go">
      <img src="~assets/img/profile/right.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name:"ProfileLogin"
  }
</script>

<style scoped lang="scss">
  .user{
    padding: 15px;
    display: flex;
    align-items: center;
    background-color: $colorTint;
    .user-image{
      width: 70px;
      img{
        width: 100%;
      }
    }
    .user-message{
      margin: 0 0 6px 10px;
      font-size: 13px;
      color: #eeeeee;
      .login{
        font-size: 17px;
        margin-bottom: 7px;
      }
      .phone{
        display: flex;
        align-items: flex-start;
        img{
          width: 18px;
          height: 18px;
        }
      }
    }
    .go{
      width: 22px;
      margin-left: auto;
      img{
        width: 100%;
      }
    }
  }
</style>
