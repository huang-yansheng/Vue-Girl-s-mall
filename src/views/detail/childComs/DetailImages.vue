<template>
  <div class="detail-images" v-if="Object.keys(images).length !==0">
    <div class="desc">
      <div>{{images.desc}}</div>
      <div class="effect">{{images.detailImage[0].key}}</div>
    </div>
    <div class="images" v-for="(item,index) in images.detailImage[0].list" :key="index">
        <img :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailImages",
    props:{
      images:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        counter:0,
        imagesLength:0
      }
    },
    methods:{
      imgLoad(){
        //图片加载完成后会调用这个方法
        //每次调用counter会+1
        //直到counter和数组长度相等时，调用$emit方法
        if(++this.counter == this.imagesLength){
          this.$emit('imgLoad');
        }
      }
    },
    watch:{
      //监听一个数据属性，必须与该属性名字相同
      images(){
        //用一个属性实时获取图片数组长度值
        this.imagesLength = this.images.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped lang="scss">
  .detail-images{
    padding: 20px 0;
    font-size: 12px;
    border-bottom: 5px solid #f3f3f3;
  }
  .desc{
    padding: 0 12px;
  }
  .effect{
    font-weight: 700;
    margin-top: 15px;
    margin-bottom: 5px;
  }
  .images{
    img{
      width: 100%;
    }
  }
</style>
