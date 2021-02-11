import { debounce } from 'common/utils.js'

export const itemListenerMixin = {
  data(){
    return {
      ItemImgListen:null,
    }
  },
  mounted(){
    // this.$refs.scroll && this.$refs.scroll.scrollRefresh()
    //使用防抖函数 -> 在工具类里面
    const refresh =  debounce(this.$refs.scroll.scrollRefresh,50)
    //事件总线的事件函数
     this.ItemImgListen = ()=>{
       refresh()
      }
    //监听事件总线来触发滚动条刷新
    this.$bus.$on('itemImageLoad',this.ItemImgListen)
  },
  activated() {
    //最好再刷新一次scroll的高度，避免出现问题
    this.$refs.scroll.scrollRefresh()
    //重新监听事件总线
    this.$bus.$on('itemImageLoad',this.ItemImgListen)
  },
  deactivated() {
    //离开该缓存组件后，停止对事件总线的监听
    this.$bus.$off('itemImageLoad',this.ItemImgListen)
  },
}

import BackTop from 'components/content/backTop/BackTop.vue'

export const backTop = {
  components:{
    BackTop
  },
  data(){
    return {
      isBackTop:false
    }
  },
  methods:{
    backClick(){
      //调用scroll组件内的scrollTo方法
      this.$refs.scroll.scrollTo(0,0,2000)
    },
  }
}
