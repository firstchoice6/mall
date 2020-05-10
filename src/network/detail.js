import {request} from "./request"
export function getDetail(iid) {
	return request({
		url: '/detail',
		params: {
			iid
		}
	})
}
export function getRecommend() {
	return request({
		url: '/recommend'
	})
}

export class Goods {
	constructor(itemInfo, columns, services) {
		this.title = itemInfo.title
		this.desc = itemInfo.desc
		this.newPrice = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.realPrice = itemInfo.lowNowPrice
		this.discount = itemInfo.discountDesc
		this.columns = columns
		this.services = services

	}
}

export class ShopInfo {
	constructor(shopInfo) {
		this.shopName = shopInfo.name
		this.shopLogo = shopInfo.shopLogo
		this.shopLink = shopInfo.shopUrl
		this.shopAllGoods = shopInfo.allGoodsUrl
		this.sales = shopInfo.cSells
		this.goodsCount = shopInfo.cGoods
		this.score = shopInfo.score
	}
}

export class GoodsInfo {
	constructor(detailInfo) {
		this.desc = detailInfo.desc
		this.img = detailInfo.detailImage[0].list
		this.key = detailInfo.detailImage[0].key
	}
}

export class GoodsParams {
	constructor(info, rule) {
		this.image = info.images ? info.images[0] : ''
		this.info = info.set
		this.size = rule.tables
	}
}
