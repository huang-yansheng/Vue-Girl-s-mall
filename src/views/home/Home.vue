<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-contorl @changeDate='changeDate'
                  :titles="['流行','新款','精选']"
                  class="tab-contorl"
                  ref = "tabControl2"
                  v-show="isFiexd"
                  >
    </tab-contorl>
    <scroll class="content"
            :probe-type = "3"
            :pull-up-load = "true"
             ref = "scroll"
             @pulling = "pullingUp"
             @showBackTop = "showBackTop" >
      <home-swiper :list='banners' class="mt" @swiperImageLoad = "swiperImageLoad"></home-swiper>
      <recommend-view :recommends='recommends'></recommend-view>
      <feature-view></feature-view>
      <tab-contorl @changeDate='changeDate'
                    :titles="['流行','新款','精选']"
                    class="tab-contorl"
                    ref = "tabControl"
                    >
      </tab-contorl>
      <goods-list :list='showGoods'></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isBackTop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper.vue"
  import recommendView from "./childComps/HomeRecommendView.vue"
  import FeatureView from './childComps/HomeFeature.vue'


  import NavBar from "components/common/navbar/NavBar.vue"
  import TabContorl from 'components/content/tabContorl/TabContorl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'


  import { getHomeMultidata,getHomeGoods } from "network/home.js"
  import { debounce } from 'common/utils.js'
  import { itemListenerMixin,backTop } from 'common/mixin.js'


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      recommendView,
      FeatureView,
      TabContorl,
      GoodsList,
      Scroll,
    },
    data() {
      return {
        isFiexd:false,
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currentType: 'pop',
        tabOffsetTop:0,
        keepScrollY:0
      }
    },
    created() {
      //请求轮播图数据
      this.getHomeMultidata();
      //请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    //混入，混入scroll和backTop相关
    mixins:[itemListenerMixin,backTop],
    //路由组件被激活时调用该生命周期函数
    activated() {
      //重新激活组件时，滚动到之前保存的Y轴值位置
      this.$refs.scroll.scrollTo(0,this.keepScrollY,0)
    },
    //离开路由组件时调用该生命周期函数
    deactivated() {
      //将滚动条Y轴值保存起来
      this.keepScrollY = this.$refs.scroll.scroll.y
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      //事件监听相关的方法
      changeDate(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        //两个组件都有changeDate(index)方法
        //无论哪一方点击了这个事件，都让两方把currentIndex值统一
        //currentIndex值决定了两个组件的样式和加载的商品的统一
        this.$refs.tabControl.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      showBackTop(y){
        //判断滚动条的y轴值
        //是否显示回到顶部组件
        this.isBackTop = (-y) > 3000
        //滚动条超过OffsetTop值,则isFiexd为true,tab2组件显示
        this.isFiexd = (-y) > this.tabOffsetTop
      },
      //上拉加载更多功能
      pullingUp(){
        this.getHomeGoods(this.currentType)
        // this.$refs.scroll.refresh()
        setTimeout(()=>{
          //调用scroll里面的pullingUp方法，可以再执行下一次
          this.$refs.scroll.pullingUp()
        },1000)
        //上拉加载后，往上偏移一点点，让用户知道刷新了
          this.$refs.scroll.scrollBy(0,-50,1000)
      },
      //获取tab-Control组件的offsetTop值并且保存起来
      swiperImageLoad(){
        this.tabOffsetTop =  (this.$refs.tabControl.$el.offsetTop)
       },

      //网络请求函数
      getHomeMultidata() {
        getHomeMultidata().then((res) => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then((res) => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .home-nav {
    color: #F6F6F6;
    background-color: $colorTint;
    //使用了better-scroll时，导航不需要固定了
    // position: fixed;
    // left: 0;
    // right: 0;
    // top: 0;
    // z-index: 999;
  }
  .content{
    // height: calc(100% - 93px);93px是上下两个导航的高度和
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;//上班导航的高度
    bottom: 49px;//下面导航的高度
    overflow: hidden;
    background-color: #ffffff;
  }
  .tab-contorl{
    //让TabControl组件显身的类
    // position: fixed;
    // left: 0;
    // right: 0;
    // top: 44px;
    // z-index: 999;
    position: relative;
    z-index: 999;
  }
</style>
