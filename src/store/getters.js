import {
  ADDGOODS,
  ADDCOUNTER,
  ADDCART
} from './mutations-types.js'

export default {
  //商品列表总数
  cartLength(state){
    return state.haveGoods.length
  },
  //计算单个商品总价格
  totalPrice(state){
    return function(item){
      //toFixed会返回字符串,*100/100,是为了让数值保持精密度
      return (item.price*100 * item.count)/100;
    }
  },
  //全选按钮，判断是否全部选中
  ischecked(state){
    if(state.haveGoods.length == 0) return false
    return state.haveGoods.every((item)=>{return item.ischecked == true})
    // return !(state.haveGoods.filter(item => !item.ischecked).length)
  },
  //商品列表总价格
  allPrice(state,getters){
    return '￥'+state.haveGoods.filter(item => {
      return item.ischecked //返回一个数组，里面是ischecked为true的商品
    }).reduce((preValue,value)=>{
      //调用计算单个商品总价格的方法,然后利用reduce叠加数组每一项的总价
      // *100 /100 => 解决精密度问题
      return (preValue*100 + getters.totalPrice(value)*100)/100
    },0)
  },
  //计算选中的商品个数
  checkedGoods(state){
    return state.haveGoods.filter(item => {
      return item.ischecked
    }).length
    }
  }
