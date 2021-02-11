<template>
  <div class="box">
    <swiper :options = "swiperOptions" v-if="list.length > 0">
      <swiper-slide v-for="(item,index) in list" :key='index'>
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
         </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
  export default {
    name: "HomeSwiper",
    props:{
      list:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      swiper,
      swiperSlide
    },
    data(){
      return {
        swiperOptions:{
          loop:true,
          autoplay:{
            delay:3000,
            stopOnLastSlide:false,
            disableOnInteraction:false
          },
          navigation:{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev'
          },
          pagination:{
            el:'.swiper-pagination',
            clickable:true
          }
        },
        isImageLoad:false,
      }
    },
    methods:{
      imageLoad(){
        if(!this.isImageLoad){
          this.$emit('swiperImageLoad')
          this.isImageLoad = true //赋值true,让其只发射一次自定义事件
        }
      }
    }
  }
</script>

<style scoped>
  .box .swiper-container{
    height: 165px;
    background-color: pink;
  }
  .box img{
    width: 100%;
  }
</style>
