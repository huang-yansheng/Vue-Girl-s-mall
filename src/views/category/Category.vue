<template>
  <div id="category">
    <category-nav></category-nav>
      <div class="category-content">

        <div class="left">
          <scroll  class="left-scroll scroll">
            <cart-left :NavList="navList" @rightData="leftClick" class="left"></cart-left>
          </scroll>
        </div>

        <div class="right">
          <tab-contorl v-show="isTab" :titles="['综合','新款','销量']" class="tab"></tab-contorl>
          <scroll  class="right-scroll scroll"
                   ref = "scroll"
                   @showBackTop = "showBackTop"
                   @pulling = "pulling"
                   :pullUpLoad = 'true'
                   >
              <cate-right ref="right" :NavData="subList" :goodsData="tabData[currentIndex]"></cate-right>
          </scroll>
        </div>

        <back-top v-show="isBackTop" @click.native = "backClick"></back-top>
      </div>
  </div>
</template>

<script>
  import CategoryNav from './childComs/CategoryNavBar.vue'
  import CartLeft from './childComs/CartLeftNav.vue'
  import CateRight from './childComs/CartRightNav.vue'
  import TabContorl from 'components/content/tabContorl/TabContorl.vue'

  import scroll from 'components/common/scroll/Scroll.vue'

  import { getcategory,getSubCategory,getCategoryDetail } from 'network/category.js'
  import {debounce} from 'common/utils.js'
  import { itemListenerMixin,backTop } from 'common/mixin.js'

  export default {
    name:'Category',
    data(){
      return {
        navList:[],
        subList:[],
        miniWallkey:0,
        currentIndex:'pop',
        isTab:false,
        tabData:{
          'pop':[],
          'new':[],
          'sell':[]
        },
        rightTopKey:0
      }
    },
    components:{
      CategoryNav,
      CartLeft,
      CateRight,
      TabContorl,
      scroll
    },

    //混入
    mixins:[itemListenerMixin,backTop],

    created() {
      //调用获取信息函数
      this.getCategoryData();
    },
    mounted() {
      //监听事件总线
      this.$bus.$on('indexChange',this.indexChanges)
    },
    methods:{
      //事件总线indexChange事件
      indexChanges(index){
        switch(index){
          case 0 :
            this.currentIndex = 'pop'
            break
          case 1 :
            this.currentIndex = 'new'
            break
          case 2 :
            this.currentIndex = 'sell'
            break
        }
        console.log(this.currentIndex)
        this.getCategoryDetails(this.miniWallkey,this.currentIndex)
      },
      //请求左侧导航数据的函数
      getCategoryData(){
        getcategory().then(res =>{
          const data = res.data.category
          this.navList = data.list
          return data.list[0]
        }).then((data)=>{
          //第一次进入分类界面,自动载入第一个导航的内容
          this.getCategorySub(data.maitKey)
          //保存第一个导航的miniWallkey值
          this.miniWallkey = data.miniWallkey
        })
      },

      //右边子类别请求函数
      getCategorySub(maitKey){
        getSubCategory(maitKey).then(res =>{
          this.subList = res.data.list
        })
      },

      //右下推荐商品请求函数
      getCategoryDetails(miniWallkey,type){
        getCategoryDetail(miniWallkey,type).then((res)=>{
          this.tabData[type].push(...res)
        })
      },
      //点击左侧导航触发的函数
      leftClick(maitKey,miniWallkey,index){
        //获取左侧的索引当成右侧的key
        this.rightTopKey = index
        //记录左侧导航对应的miniWallkey值
        this.miniWallkey = miniWallkey
        this.getCategorySub(maitKey)
        // this.getCategoryDetails(miniWallkey,this.currentIndex)
        // 切换左侧导航，右侧回到顶部
        this.$refs.scroll.scrollTo(0,0,10)
      },
      //scroll监听坐标来控制backTop的显示
      showBackTop(y){
        this.isBackTop = -y > 3000
        //假的tab-control是否显示
        this.isTab = -y > this.$refs.right.tabHeight
      },

      //上拉加载
      pulling(){
        console.log(999)
          this.getCategoryDetails(this.miniWallkey,'pop')
          this.getCategoryDetails(this.miniWallkey,'new')
          this.getCategoryDetails(this.miniWallkey,'sell')
          this.$refs.scroll.pullingUp()
          this.$refs.scroll.scrollBy(0,-400,2000)
      }
    }
  }
</script>

<style scoped lang="scss">
  #category{
    height: 100vh;
  }
  .category-navbar{
    background-color: $colorTint;
  }
  .category-content{
    height: calc(100% - 44px);
    display: flex;
  }
  .left{
    flex: 1.2;
  }
  .right{
    flex: 3;
    overflow: hidden;
    position: relative;
  }
  .scroll{
    height: calc(100% - 49px);
    overflow: hidden;
  }
  .tab{
    position: absolute;
    left: 0;
    right: 0;
    z-index: 777;
  }
</style>
