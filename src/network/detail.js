import {request} from "network/request.js"

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
//详情页推荐数据的请求，请求的接口不同
export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
  }
}


export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(info,rule) {
      this.image = info.images ? info.images[0]:'';
      this.infos = info.set;
      this.sizes = rule.tables;
  }
}