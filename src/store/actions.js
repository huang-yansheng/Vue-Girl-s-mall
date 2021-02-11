import {
  ADDGOODS,
  CHANGETOCHECKED,
  ADDCOUNTER,
  ADDCART,
  CHANGECHECKED,
  ALLSELECT,
  TOTALSELECT,
  JSDGE
} from './mutations-types.js'

export default {
  [ADDGOODS](context, payload) {
    //find方法查找数组中是否有该商品
    return new Promise((reslove,reject)=>{
      let oldgoods = context.state.haveGoods.find(item => item.iid === payload.iid)
      if (oldgoods) {
        context.commit(ADDCOUNTER, oldgoods)
        reslove("当前商品数量+1");
      } else {
        context.commit(ADDCART, payload)
        reslove("添加一个新的商品");
      }
    })
  },
  [CHANGETOCHECKED](context, payload){
    for(let item of context.state.haveGoods){
      if(item.iid == payload.iid){
        context.commit(CHANGECHECKED,item)
      }
    }
  },
  [JSDGE](context,payload){
    //当全部选中时，点击全选按钮，反选
    if(context.getters.ischecked){
       context.commit(TOTALSELECT)
    }else{
      context.commit(ALLSELECT)
    }
  }
}
