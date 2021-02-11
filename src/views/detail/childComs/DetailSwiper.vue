<template>
  <div class="Detail-swiper">
    <swiper ref="DetailSwiper" :options = "swiperOptions" v-if=" DataList.length > 0 ">
      <swiper-slide v-for="(item,index) in DataList":key="index">
          <img :src="item" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";

  export default {
    name:'DetailSwiper',
    props:{
      DataList:{
         type:Array,
         default(){
           return []
         }
      }
    },
    data(){
      return {
        swiperOptions:{
          loop:true,
          autoplay:{
            delay: 2000,
            stopOnLastSlide:false,
            disableOnInteraction:false,
          },
          pagination:{
            el:'.swiper-pagination',
            clickable:true
          },
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
        }
      }
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped lang="scss">
  .Detail-swiper  .swiper-container{
    height: 300px;
    img{
      width: 100%;
    }
  }
</style>
