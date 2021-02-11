<template>
  <div id="Detail">
    <detail-nav @NavPosition = "NavPosition" ref = 'detailNav'></detail-nav>
    <scroll class="detail-scroll" ref="scroll" @showBackTop = "showBackTop">
      <detail-swiper :DataList="topImages"></detail-swiper>
      <detail-base-info :goodData = "goods"></detail-base-info>
      <detail-shop :businessData="business"></detail-shop>
      <detail-images :images="detailInfo" @imgLoad = 'imgLoad'></detail-images>
      <detail-params :params="itemParams" ref='params'></detail-params>
      <detail-rate :rate="rate" ref='rate'></detail-rate>
      <goods-list :list = 'recommendData' ref='recommend'></goods-list>
    </scroll>
    <nav-bottom  @addToCart = 'addToCart'></nav-bottom>
    <back-top @click.native = "backClick" v-show="isBackTop"></back-top>
  </div>
</template>

<script>
  import DetailNav from './childComs/DetailNavBar.vue'
  import DetailSwiper from './childComs/DetailSwiper.vue'
  import DetailBaseInfo from './childComs/DetailBaseInfo.vue'
  import DetailShop from './childComs/DetailShop.vue'
  import DetailImages from './childComs/DetailImages.vue'
  import DetailParams from './childComs/DetailParams.vue'
  import DetailRate from './childComs/DetailRate.vue'
  import NavBottom from './childComs/DetailBottomBar.vue'

  import GoodsList from 'components/content/goods/GoodsList.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'

  import { getDetail,getRecommend,Goods,Shop,GoodsParam } from 'network/detail.js'
  import { itemListenerMixin,backTop } from 'common/mixin.js'
  import { ADDGOODS } from 'store/mutations-types.js'
  export default {
    name:'Detail',
    data(){
      return {
        iid:null,
        topImages:[],
        goods:{},
        business:{},
        detailInfo:{},
        refresh:null,
        itemParams:{},
        rate:{},
        recommendData:[],
        themeTopY:[0,0,0,0],
        navIndex:0,
      }
    },
    components:{
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailShop,
      DetailImages,
      DetailParams,
      DetailRate,
      GoodsList,
      NavBottom,
      Scroll
    },
    //混入
    mixins:[itemListenerMixin,backTop],
    created() {
      //将动态路由参数保存起来
      this.iid = this.$route.params.iid
      //以iid为参数，调用封装好的网络请求
      this.getDetailDate(this.iid)
      //详情页推荐数据的请求
      this.getDetailRecommend()
    },
    //如果进行缓存则用deactivated，没缓存则用destroyed
    destroyed() {
      //离开组件销毁后，停止对事件总线的监听
      this.$bus.$off('itemImageLoad',this.ItemImgListen)
    },
    //实时监听,如果数组发生改变，则调用滚动导航函数
    watch:{
      //themeTopY是各个导航的高度数组
      themeTopY(){
        //this.navIndex保存着点击的导航对应的index值
        this.NavPosition(this.navIndex)
      }
    },
    methods:{
      //图片加载后执行
      imgLoad(){
        //每次图片加载完成触发防抖函数
        this.$refs.scroll.scrollRefresh()
        //导航对应滚动区域
        this.themeTopY = [];
        this.themeTopY.unshift(-this.$refs.recommend.$el.offsetTop)
        //当没有评论时，复制数组第1个值作为它的滚动值，因为使用的是unshift，所以前一个值离评论最近
        this.themeTopY.unshift(-this.$refs.rate.$el.offsetTop || this.themeTopY[0])
        this.themeTopY.unshift(-this.$refs.params.$el.offsetTop)
        this.themeTopY.unshift(0)
      },
      //导航滚动定位
      NavPosition(index){
        this.navIndex = index
        this.$refs.scroll.scrollTo(0,this.themeTopY[index],500)
      },
      //backTop事件
      showBackTop(y){
        //是否显示回到顶部组件
        this.isBackTop = (-y) > 3000

        //随着滚动，标题对应切换样式
        let length = this.themeTopY.length;
        for(let i in this.themeTopY){
          if(i<length-1 && y <= this.themeTopY[i*1] && y > this.themeTopY[i*1+1]){
            this.$refs.detailNav.currentIndex = i*1
          }
          else if(y <= this.themeTopY[length-1]){
            this.$refs.detailNav.currentIndex = i*1
          }
        }
      },
      //封装网络请求
      getDetailDate(iid){
         getDetail(iid).then((res)=>{
           const data = res.result
           //获取顶部轮播图图片
           this.topImages = data.itemInfo.topImages
           //获取商品详情信息
           this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
           //获取商家信息
           this.business = new Shop(data.shopInfo)
           //获取商品图片介绍
           this.detailInfo = data.detailInfo
           //获取商品参数
           this.itemParams = new GoodsParam(data.itemParams.info,data.itemParams.rule)
           //获取评论
           if(data.rate.cRate !==0){//判断有没有评论信息，有的商品没有评论
             this.rate = data.rate
           }
         })
      },
      //获取recommend推荐信息
      getDetailRecommend(){
        getRecommend().then((res)=>{
          this.recommendData = res.data.list
        })
      },
      //显示加入购物车
      addToCart(){
          //获取具体的商品信息,发送给vuex
          const message = {}
          message.image = this.topImages[0],
          message.title = this.goods.title,
          message.desc = this.goods.desc,
          message.price = this.goods.nowPrice;
          message.iid = this.iid
          this.$store.dispatch(ADDGOODS,message)
              .then((res)=>{
                this.$toast.show(res,2000)
              })
      }
    }
  }
</script>

<style scoped lang="scss">
  #Detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-scroll{
    height: calc(100% - 93px);
    overflow: hidden;
  }
</style>
