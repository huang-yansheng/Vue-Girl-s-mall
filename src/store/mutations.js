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
  [ADDCOUNTER](state, payload) {
    payload.count++;
  },
  [ADDCART](state, payload) {
    //添加一个新商品，创建一个count属性赋值为1，用以记录
    payload.count = 1
    //设置其按钮默认为不选中
    payload.ischecked = true
    //商品的总价格
    state.haveGoods.push(payload)
  },
  [CHANGECHECKED](state, payload){
     payload.ischecked = !payload.ischecked
  },

  //全选按钮功能
  [ALLSELECT](state){
    //全选
    state.haveGoods.forEach(item => item.ischecked = true)
  },
  [TOTALSELECT](state){
    //反选
    state.haveGoods.forEach(item => item.ischecked = false)
  }
}
