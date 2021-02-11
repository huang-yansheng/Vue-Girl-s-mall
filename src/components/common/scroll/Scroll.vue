 <template>
  <div ref = "wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name:"Scroll",
    data(){
      return {
        scroll:null
      }
    },
    props:{
      probeType:{
        type:Number,
        default:3
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:this.probeType,
        click:true,
        //上拉加载的属性
        pullUpLoad:this.pullUpLoad
      })
      //监听滚动的坐标
      this.scroll.on('scroll',(position)=>{
          this.$emit('showBackTop',position.y)
      })
      //监听上拉事件
      this.scroll.on('pullingUp',()=>{
        this.$emit('pulling')
      })
    },
    methods:{
      scrollTo(x,y,time=1000){
        //滚动条相对整个页面的偏移
       this.scroll && this.scroll.scrollTo(x,y,time);
      },
      scrollBy(x,y,time=1000){
        //滚动条相对当前位置的偏移
        this.scroll && this.scroll.scrollBy(x,y,time);
      },
      pullingUp(){
        //继续执行下一次上拉加载
       this.scroll && this.scroll.finishPullUp()
      },
      scrollRefresh(){
        //刷新scroll高度
       this.scroll && this.scroll.refresh()
       console.log("刷新高度")
      }
    }
  }
</script>

<style>
</style>
