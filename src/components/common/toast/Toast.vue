<template>
    <transition name="slide-fade">
      <div class="tips" v-show="ishow">
              {{message}}
      </div>
    </transition>
</template>

<script>
  export default {
    name:"Toast",
    data(){
      return {
        message:"",
        ishow:false
      }
    },
    methods:{
      //像这种封装，我们一般会设置默认值
      show(message,keepTime = 1000){
        this.ishow = true
        this.message = message
        setTimeout(()=>{
          this.ishow = false
        },keepTime)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tips{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: 14px;
    height: 30px;
    width: 160px;
    background-color: rgba(0,0,0,.7);
    color: white;
    z-index: 9999;
  }
  //过渡效果
  .slide-fade-enter-active {
    transition: all 1s;
  }
  .slide-fade-leave-active {
    transition: all 2s;
  }
  .slide-fade-enter, .slide-fade-leave-to{
    opacity: 0;
  }
</style>
